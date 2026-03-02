import type { Lesson } from "@/types/course"
import { PYTHON_FUNDAMENTALS_LESSONS } from "@/data/lessons/python-fundamentals"

/**
 * Central registry: maps a course ID (matching data/courses.ts) to its
 * array of Lesson objects. Add a new entry here when you create a new course.
 */
export const LESSON_REGISTRY: Record<string, Lesson[]> = {
  "python-fundamentals": PYTHON_FUNDAMENTALS_LESSONS,
}

/** Returns the lessons for a course, or null if the course has no content yet. */
export function getLessons(courseId: string): Lesson[] | null {
  return LESSON_REGISTRY[courseId] ?? null
}

/** Returns a single lesson by courseId + lessonId, or null if not found. */
export function getLesson(courseId: string, lessonId: string): Lesson | null {
  const lessons = getLessons(courseId)
  return lessons?.find((l) => l.id === lessonId) ?? null
}
