"use client"

import Link from "next/link"
import {
  Code2,
  Database,
  Globe,
  Network,
  Server,
  Terminal,
  BookOpen,
  ArrowRight,
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { Course, Difficulty } from "@/types/course"
import { useLanguage } from "@/context/LanguageContext"

/* ── Topic icon map ───────────────────────────────────────────────────────── */
const TOPIC_ICONS: Record<string, React.ElementType> = {
  Python:          Terminal,
  Algorithms:      Code2,
  Web:             Globe,
  Database:        Database,
  Networking:      Network,
  "System Design": Server,
}

/* ── Difficulty badge styles ─────────────────────────────────────────────── */
const DIFFICULTY_STYLES: Record<Difficulty, string> = {
  Beginner:     "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  Intermediate: "bg-amber-100  text-amber-700  dark:bg-amber-900/40  dark:text-amber-400",
  Advanced:     "bg-rose-100   text-rose-700   dark:bg-rose-900/40   dark:text-rose-400",
}

/* ── Component ───────────────────────────────────────────────────────────── */
interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
  const Icon = TOPIC_ICONS[course.topic] ?? BookOpen
  const { t } = useLanguage()

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="h-full"
    >
      <Link
        href={course.href}
        className={cn(
          "group flex flex-col h-full rounded-2xl overflow-hidden",
          "bg-card border border-border/60",
          "shadow-sm hover:shadow-xl hover:shadow-black/8 dark:hover:shadow-black/30",
          "transition-shadow duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        )}
      >
        {/* Color accent bar + icon */}
        <div className={cn("relative flex items-center gap-3 px-5 py-5 overflow-hidden", course.accentColor)}>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" />

          <div className="relative flex size-10 items-center justify-center rounded-xl bg-white/25 backdrop-blur-sm">
            <Icon className="size-5 text-white" strokeWidth={1.5} />
          </div>
          <div className="relative flex flex-col gap-0.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
              {course.topic}
            </span>
            <span
              className={cn(
                "w-fit rounded-full px-2 py-0.5 text-[10px] font-medium",
                "bg-white/20 text-white/90"
              )}
            >
              {course.difficulty}
            </span>
          </div>

          {/* Arrow hint on hover */}
          <motion.div
            className="absolute right-4 text-white/60"
            initial={{ x: -4, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
          >
            <ArrowRight className="size-4" strokeWidth={1.5} />
          </motion.div>
        </div>

        {/* Card body */}
        <div className="flex flex-col flex-1 gap-3 px-5 py-4">
          <h3 className="text-sm font-semibold leading-snug text-foreground group-hover:text-primary transition-colors duration-200">
            {course.title}
          </h3>

          <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3 flex-1">
            {course.description}
          </p>

          {/* Footer row */}
          <div className="mt-auto flex flex-col gap-2 pt-2 border-t border-border/50">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <BookOpen className="size-3.5" strokeWidth={1.5} />
                {t("common.lessons", { count: course.lessonCount })}
              </span>
              <span className="text-[10px] font-medium text-muted-foreground">
                {t("common.percentComplete", { progress: course.progress })}
              </span>
            </div>

            {/* Progress bar */}
            <div className="h-1 w-full rounded-full bg-muted overflow-hidden">
              <motion.div
                className={cn("h-full rounded-full", course.accentColor)}
                initial={{ width: 0 }}
                whileInView={{ width: `${course.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
