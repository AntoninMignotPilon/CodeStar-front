"use client"

import { Users, BookOpen, Trophy, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

const STATS = [
  {
    icon: Users,
    value: "12,000+",
    labelKey: "home.stats.students",
    color: "text-blue-500",
    bg: "bg-blue-500/10 dark:bg-blue-500/15",
    glow: "shadow-blue-500/20",
  },
  {
    icon: BookOpen,
    value: "50+",
    labelKey: "home.stats.courses",
    color: "text-violet-500",
    bg: "bg-violet-500/10 dark:bg-violet-500/15",
    glow: "shadow-violet-500/20",
  },
  {
    icon: Trophy,
    value: "8,500+",
    labelKey: "home.stats.certificates",
    color: "text-amber-500",
    bg: "bg-amber-500/10 dark:bg-amber-500/15",
    glow: "shadow-amber-500/20",
  },
  {
    icon: Zap,
    value: "95%",
    labelKey: "home.stats.completion",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 dark:bg-emerald-500/15",
    glow: "shadow-emerald-500/20",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
}

export default function StatsSection() {
  const { t } = useLanguage()
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-5xl flex flex-col gap-8">
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            {t("home.stats.eyebrow")}
          </span>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {STATS.map(({ icon: Icon, value, labelKey, color, bg, glow }) => (
            <motion.div
              key={labelKey}
              variants={itemVariant}
              whileHover={{ scale: 1.03, y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={`flex flex-col items-center gap-3 rounded-2xl border border-black/[0.08] dark:border-white/10 bg-muted/50 p-6 shadow-sm ${glow} text-center cursor-default`}
            >
              <div className={`flex size-10 items-center justify-center rounded-xl ${bg}`}>
                <Icon className={`size-5 ${color}`} strokeWidth={1.5} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-foreground">
                {value}
              </span>
              <span className="text-xs text-muted-foreground leading-snug font-medium">
                {t(labelKey)}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
