import { redirect, notFound } from "next/navigation"
import { getLessons } from "@/data/lessonRegistry"
import { COURSES } from "@/data/courses"

interface Props {
  params: Promise<{ courseId: string }>
}

export default async function CourseIndexPage({ params }: Props) {
  const { courseId } = await params

  const course = COURSES.find((c) => c.id === courseId)
  if (!course) notFound()

  const lessons = getLessons(courseId)
  if (!lessons || lessons.length === 0) notFound()

  redirect(`/courses/${courseId}/${lessons[0].id}`)
}
