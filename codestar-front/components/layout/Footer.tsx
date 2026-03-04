"use client"

import Link from "next/link"
import { Star, Github, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

// Column headings and links reference i18n keys
const FOOTER_COLUMNS = [
  {
    headingKey: "footer.platform",
    links: [
      { labelKey: "footer.courses",    href: "/courses"    },
      { labelKey: "footer.algorithms", href: "/algorithms" },
      { labelKey: "footer.about",      href: "/about"      },
    ],
  },
  {
    headingKey: "footer.account",
    links: [
      { labelKey: "footer.login",  href: "/login"  },
      { labelKey: "footer.signup", href: "/signup" },
    ],
  },
  {
    headingKey: "footer.legal",
    links: [
      { labelKey: "footer.privacy", href: "#" },
      { labelKey: "footer.terms",   href: "#" },
    ],
  },
]

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/50 bg-card/50 backdrop-blur-sm px-4 py-16 overflow-hidden">
      {/* Subtle background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-[300px] h-[200px] rounded-full bg-blue-500/5 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 mb-12">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="col-span-2 sm:col-span-1 flex flex-col gap-4"
          >
            <Link
              href="/"
              className="flex items-center gap-2.5 font-semibold text-sm text-foreground group w-fit"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm shadow-primary/30"
              >
                <Star className="size-4" strokeWidth={2} fill="currentColor" />
              </motion.div>
              CodeStar
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-44 font-medium">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center gap-3 mt-1">
              <motion.a
                href="https://github.com"
                aria-label={t("footer.github")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="flex size-8 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                <Github className="size-4" strokeWidth={1.5} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                aria-label={t("footer.twitter")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="flex size-8 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                <Twitter className="size-4" strokeWidth={1.5} />
              </motion.a>
            </div>
          </motion.div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map(({ headingKey, links }, colIdx) => (
            <motion.div
              key={headingKey}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 * (colIdx + 1) }}
              className="flex flex-col gap-3"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                {t(headingKey)}
              </span>
              <ul className="flex flex-col gap-2">
                {links.map(({ labelKey, href }) => (
                  <li key={labelKey}>
                    <Link
                      href={href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors font-medium"
                    >
                      {t(labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>{t("footer.copyright", { year })}</span>
          <span className="flex items-center gap-1">
            {t("footer.builtWith")}
            <span className="text-primary font-medium"> Next.js</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
