"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { Lesson } from "@/types/course"
import { useLanguage } from "@/context/LanguageContext"

interface LessonNavProps {
  courseId: string
  lessons: Lesson[]
  currentLessonId: string
}

export default function LessonNav({
  courseId,
  lessons,
  currentLessonId,
}: LessonNavProps) {
  const currentIdx = lessons.findIndex((l) => l.id === currentLessonId)
  const prev = currentIdx > 0 ? lessons[currentIdx - 1] : null
  const next = currentIdx < lessons.length - 1 ? lessons[currentIdx + 1] : null
  const { t } = useLanguage()

  return (
    <nav className="flex items-center justify-between gap-4 pt-8 mt-8 border-t border-border/60">
      {/* Previous */}
      {prev ? (
        <motion.div whileHover={{ x: -2 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <Link
            href={`/courses/${courseId}/${prev.id}`}
            className={cn(
              "group flex items-center gap-3 rounded-2xl border border-border/60 px-4 py-3.5",
              "bg-card/60 hover:bg-card backdrop-blur-sm",
              "text-sm text-foreground transition-all duration-200 hover:shadow-sm",
              "max-w-[45%]",
            )}
          >
            <div className="flex size-8 items-center justify-center rounded-xl bg-muted group-hover:bg-accent transition-colors shrink-0">
              <ArrowLeft className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" strokeWidth={1.5} />
            </div>
            <span className="flex flex-col min-w-0">
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">{t("course.previous")}</span>
              <span className="font-medium truncate text-foreground">{prev.title}</span>
            </span>
          </Link>
        </motion.div>
      ) : (
        <div />
      )}

      {/* Next */}
      {next ? (
        <motion.div whileHover={{ x: 2 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <Link
            href={`/courses/${courseId}/${next.id}`}
            className={cn(
              "group flex items-center gap-3 rounded-2xl border border-border/60 px-4 py-3.5",
              "bg-card/60 hover:bg-card backdrop-blur-sm",
              "text-sm text-foreground transition-all duration-200 hover:shadow-sm",
              "max-w-[45%] ml-auto",
            )}
          >
            <span className="flex flex-col min-w-0 text-right">
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">{t("course.next")}</span>
              <span className="font-medium truncate text-foreground">{next.title}</span>
            </span>
            <div className="flex size-8 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors shrink-0">
              <ArrowRight className="size-4 text-primary" strokeWidth={1.5} />
            </div>
          </Link>
        </motion.div>
      ) : (
        <div />
      )}
    </nav>
  )
}
