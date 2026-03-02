export type Difficulty = "Beginner" | "Intermediate" | "Advanced"

export interface Course {
  id: string
  title: string
  description: string
  difficulty: Difficulty
  /** Lucide icon name — rendered by the CourseCard */
  topic: string
  /** Color accent class applied to the card top-bar and icon */
  accentColor: string
  lessonCount: number
  /** 0–100, used for the progress bar. 0 = not started */
  progress: number
  href: string
}

// ---------------------------------------------------------------------------
// Lesson types
// ---------------------------------------------------------------------------

/** A single block of content inside a lesson */
export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "code"; language: string; code: string; filename?: string }
  | { type: "callout"; variant: "info" | "warning" | "tip"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }

export interface Lesson {
  /** Slug used in the URL: /courses/[courseId]/[id] */
  id: string
  /** Display title shown in the sidebar and at the top of the lesson */
  title: string
  /** Short one-line summary shown under the title in the sidebar */
  summary: string
  /** Estimated reading/study time in minutes */
  duration: number
  /** Ordered array of content blocks that make up the lesson body */
  content: ContentBlock[]
}
