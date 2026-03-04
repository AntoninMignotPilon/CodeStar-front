"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  type ReactNode,
} from "react"

import en from "@/locales/en.json"
import fr from "@/locales/fr.json"

export type Language = "en" | "fr"

// ─── Types ────────────────────────────────────────────────────────────────────

// Recursive type that maps the JSON structure to nested string values
type TranslationValue = string | TranslationDict
interface TranslationDict { [key: string]: TranslationValue }

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  /**
   * Resolve a dot-notation key against the current locale.
   * Supports interpolation via `{placeholder}` syntax.
   *
   * @example
   * t("nav.login")                          // "Log in"
   * t("common.lessons", { count: 14 })      // "14 lessons"
   * t("footer.copyright", { year: "2025" }) // "© 2025 CodeStar. All rights reserved."
   */
  t: (key: string, vars?: Record<string, string | number>) => string
}

// ─── Translation dictionaries (loaded from JSON files) ────────────────────────
const dictionaries: Record<Language, TranslationDict> = { en, fr }

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Walk a nested object via dot-notation path and return the leaf string. */
function resolve(dict: TranslationDict, key: string): string | undefined {
  const parts = key.split(".")
  let node: TranslationValue = dict

  for (const part of parts) {
    if (typeof node !== "object" || node === null) return undefined
    node = (node as TranslationDict)[part]
  }

  return typeof node === "string" ? node : undefined
}

/** Replace `{placeholder}` tokens in a string. */
function interpolate(str: string, vars: Record<string, string | number>): string {
  return str.replace(/\{(\w+)\}/g, (_, name) =>
    name in vars ? String(vars[name]) : `{${name}}`
  )
}

// ─── Context ──────────────────────────────────────────────────────────────────
const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
})

// ─── Provider ─────────────────────────────────────────────────────────────────
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  // Hydrate from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("codestar_lang") as Language | null
    if (stored === "en" || stored === "fr") setLanguageState(stored)
  }, [])

  function setLanguage(lang: Language) {
    setLanguageState(lang)
    localStorage.setItem("codestar_lang", lang)
    document.documentElement.lang = lang
  }

  const t = useMemo(
    () =>
      (key: string, vars?: Record<string, string | number>): string => {
        const raw =
          resolve(dictionaries[language], key) ??
          resolve(dictionaries["en"], key) ??  // fallback to English
          key                                   // last resort: return the key itself
        return vars ? interpolate(raw, vars) : raw
      },
    [language]
  )

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useLanguage() {
  return useContext(LanguageContext)
}
