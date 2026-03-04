"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon, Monitor } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/context/LanguageContext"

// ─── Nav links ────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { key: "nav.courses",    href: "/courses"    },
  { key: "nav.algorithms", href: "/algorithms" },
  { key: "nav.about",      href: "/about"      },
] as const

// ─── Theme toggle ─────────────────────────────────────────────────────────────
function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="size-8" />

  const next = theme === "system" ? "light" : theme === "light" ? "dark" : "system"
  const Icon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor

  return (
    <motion.button
      onClick={() => setTheme(next)}
      aria-label={t("nav.toggleTheme")}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.93 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="flex size-8 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-150"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
          transition={{ duration: 0.2, ease: "easeOut" as const }}
        >
          <Icon className="size-[15px]" strokeWidth={1.6} />
        </motion.span>
      </AnimatePresence>
    </motion.button>
  )
}

// ─── Language toggle — discret, texte seul ────────────────────────────────────
function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="size-8" />

  const next = language === "en" ? "fr" : "en"

  return (
    <motion.button
      onClick={() => setLanguage(next)}
      aria-label={t("nav.switchLanguage", { lang: next.toUpperCase() })}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.93 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="flex size-8 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-150"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={language}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.15, ease: "easeOut" as const }}
          className="text-[11px] font-semibold tracking-wide"
        >
          {language.toUpperCase()}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
export default function Navbar() {
  const pathname = usePathname()
  const { t } = useLanguage()

  return (
    <motion.div
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50",
        "h-14",
        "bg-white/80 dark:bg-black/70",
        "backdrop-blur-xl backdrop-saturate-180",
        "border-b border-border/40 dark:border-white/8",
        "shadow-sm shadow-black/4 dark:shadow-black/20"
      )}
    >
      {/* Inner layout — max width container, tout aligné sur la même ligne */}
      <div className="mx-auto flex h-full max-w-6xl items-center gap-4 px-6">

        {/* ── Logo ── */}
        <Link href="/" className="shrink-0">
          <motion.span
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="text-[15px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#007AFF] to-[#5AC8FA] select-none"
          >
            CodeStar
          </motion.span>
        </Link>

        {/* ── Séparateur vertical ── */}
        <Separator orientation="vertical" className="h-4 opacity-50" />

        {/* ── Navigation centrale — Shadcn NavigationMenu ── */}
        <NavigationMenu viewport={false} className="flex-1">
          <NavigationMenuList className="justify-start gap-0">
            {NAV_LINKS.map(({ key, href }) => {
              const isActive = pathname === href
              return (
                <NavigationMenuItem key={href}>
                  <NavigationMenuLink asChild active={isActive}>
                    <Link
                      href={href}
                      className={cn(
                        "relative inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-150",
                        "hover:bg-accent hover:text-foreground",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground",
                        // override NavigationMenuLink default bg on active
                        "data-[active=true]:bg-transparent data-[active=true]:hover:bg-accent"
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0.5 left-3 right-3 h-px rounded-full bg-primary"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      {t(key)}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* ── Côté droit : langue · thème · séparateur · login · CTA ── */}
        <div className="flex items-center gap-1 ml-auto">

          {/* Langue + Thème */}
          <LanguageToggle />
          <ThemeToggle />

          {/* Séparateur */}
          <div className="mx-2 h-4 w-px bg-border/60" />

          {/* Log in */}
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="h-8 rounded-md px-3 text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            <Link href="/login">{t("nav.login")}</Link>
          </Button>

          {/* Get started */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="sm"
              asChild
              className="h-8 rounded-md px-4 text-xs font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm shadow-primary/20"
            >
              <Link href="/signup">{t("nav.getStarted")}</Link>
            </Button>
          </motion.div>
        </div>

      </div>
    </motion.div>
  )
}
