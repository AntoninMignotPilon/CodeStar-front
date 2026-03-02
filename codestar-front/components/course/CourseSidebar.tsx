"use client"

import Link from "next/link"
import { CheckCircle2, Circle, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Lesson } from "@/types/course"

interface CourseSidebarProps {
  courseId: string
  lessons: Lesson[]
  activeLessonId: string
  /** Lesson IDs the user has completed (for future progress tracking) */
  completedIds?: string[]
}

export default function CourseSidebar({
  courseId,
  lessons,
  activeLessonId,
  completedIds = [],
}: CourseSidebarProps) {
  return (
    <aside className="flex flex-col gap-1 w-64 shrink-0">
      <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
        Lessons
      </p>
      {lessons.map((lesson, idx) => {
        const isActive = lesson.id === activeLessonId
        const isDone = completedIds.includes(lesson.id)

        return (
          <Link
            key={lesson.id}
            href={`/courses/${courseId}/${lesson.id}`}
            className={cn(
              "group flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
              isActive
                ? "bg-primary/10 text-primary"
                : "text-foreground hover:bg-muted",
            )}
          >
            {/* Status icon */}
            <span className="mt-0.5 shrink-0">
              {isDone ? (
                <CheckCircle2 className="size-4 text-emerald-500" strokeWidth={1.8} />
              ) : (
                <Circle
                  className={cn(
                    "size-4",
                    isActive ? "text-primary" : "text-muted-foreground",
                  )}
                  strokeWidth={1.8}
                />
              )}
            </span>

            <span className="flex flex-col gap-0.5 min-w-0">
              {/* Lesson number + title */}
              <span className="flex items-center gap-1.5">
                <span
                  className={cn(
                    "text-[10px] font-semibold tabular-nums",
                    isActive ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "font-medium leading-snug truncate",
                    isActive ? "text-primary" : "text-foreground",
                  )}
                >
                  {lesson.title}
                </span>
              </span>

              {/* Duration */}
              <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                <Clock className="size-3" strokeWidth={1.6} />
                {lesson.duration} min
              </span>
            </span>
          </Link>
        )
      })}
    </aside>
  )
}
