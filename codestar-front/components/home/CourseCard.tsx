import Link from "next/link"
import {
  Code2,
  Database,
  Globe,
  Network,
  Server,
  Terminal,
  BookOpen,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { Course, Difficulty } from "@/types/course"

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

  return (
    <Link
      href={course.href}
      className={cn(
        "group flex flex-col rounded-2xl overflow-hidden",
        "bg-card border border-border",
        "shadow-xs hover:shadow-md",
        "transition-all duration-200 hover:-translate-y-0.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      )}
    >
      {/* Color accent bar + icon */}
      <div className={cn("flex items-center gap-3 px-5 py-4", course.accentColor)}>
        <div className="flex size-9 items-center justify-center rounded-xl bg-white/20">
          <Icon className="size-4.5 text-white" strokeWidth={1.8} />
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
          {course.topic}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 gap-3 px-5 py-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <span
            className={cn(
              "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium",
              DIFFICULTY_STYLES[course.difficulty]
            )}
          >
            {course.difficulty}
          </span>
        </div>

        <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">
          {course.description}
        </p>

        {/* Footer row */}
        <div className="mt-auto flex items-center justify-between pt-1">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <BookOpen className="size-3.5" strokeWidth={1.6} />
            {course.lessonCount} lessons
          </span>
        </div>

        {/* Progress bar */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-[10px] text-muted-foreground">
            <span>Progress</span>
            <span>{course.progress}%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
            <div
              className={cn("h-full rounded-full transition-all duration-500", course.accentColor)}
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
