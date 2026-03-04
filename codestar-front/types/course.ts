export type Difficulty = "Beginner" | "Intermediate" | "Advanced"

export interface Course {
  id: string
  title: string
  description: string
  difficulty: Difficulty
  topic: string
  accentColor: string
  lessonCount: number
  progress: number
  href: string
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "code"; language: string; code: string; filename?: string }
  | { type: "callout"; variant: "info" | "warning" | "tip"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }

export interface Lesson {
  /** Slug used in the URL: /courses/[courseId]/[id] */
  id: string
  title: string
  summary: string
  /** Estimated reading/study time in minutes */
  duration: number
  /** Ordered array of content blocks that make up the lesson body */
  content: ContentBlock[]
}
