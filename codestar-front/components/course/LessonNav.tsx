import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Lesson } from "@/types/course"

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

  return (
    <nav className="flex items-center justify-between gap-4 pt-8 mt-8 border-t border-border">
      {/* Previous */}
      {prev ? (
        <Link
          href={`/courses/${courseId}/${prev.id}`}
          className={cn(
            "group flex items-center gap-2 rounded-xl border border-border px-4 py-3",
            "text-sm text-foreground hover:bg-muted transition-colors",
            "max-w-[45%]",
          )}
        >
          <ArrowLeft className="size-4 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" strokeWidth={1.8} />
          <span className="flex flex-col min-w-0">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Previous</span>
            <span className="font-medium truncate">{prev.title}</span>
          </span>
        </Link>
      ) : (
        <div />
      )}

      {/* Next */}
      {next ? (
        <Link
          href={`/courses/${courseId}/${next.id}`}
          className={cn(
            "group flex items-center gap-2 rounded-xl border border-border px-4 py-3",
            "text-sm text-foreground hover:bg-muted transition-colors",
            "max-w-[45%] ml-auto",
          )}
        >
          <span className="flex flex-col min-w-0 text-right">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Next</span>
            <span className="font-medium truncate">{next.title}</span>
          </span>
          <ArrowRight className="size-4 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" strokeWidth={1.8} />
        </Link>
      ) : (
        <div />
      )}
    </nav>
  )
}
