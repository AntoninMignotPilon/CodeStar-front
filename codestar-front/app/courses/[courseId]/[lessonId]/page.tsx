import { notFound } from "next/navigation"
import { COURSES } from "@/data/courses"
import { getLessons, getLesson } from "@/data/lessonRegistry"
import Navbar from "@/components/layout/Navbar"
import CourseSidebar from "@/components/course/CourseSidebar"
import LessonContent from "@/components/course/LessonContent"
import LessonNav from "@/components/course/LessonNav"
import BackLink from "@/components/course/BackLink"

interface Props {
  params: Promise<{ courseId: string; lessonId: string }>
}

export async function generateStaticParams() {
  const params: { courseId: string; lessonId: string }[] = []
  for (const course of COURSES) {
    const lessons = getLessons(course.id)
    if (!lessons) continue
    for (const lesson of lessons) {
      params.push({ courseId: course.id, lessonId: lesson.id })
    }
  }
  return params
}

export default async function LessonPage({ params }: Props) {
  const { courseId, lessonId } = await params

  const course = COURSES.find((c) => c.id === courseId)
  if (!course) notFound()

  const lessons = getLessons(courseId)
  if (!lessons) notFound()

  const lesson = getLesson(courseId, lessonId)
  if (!lesson) notFound()

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      {/* Page body */}
      <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-10">
        {/* Back to all courses */}
        <BackLink />

        {/* Course title */}
        <h1 className="text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-widest">
          {course.title}
        </h1>

        {/* Two-column layout: sidebar + content */}
        <div className="flex gap-10">
          {/* Sidebar — hidden on mobile, visible on md+ */}
          <div className="hidden md:block">
            <div className="sticky top-20">
              <CourseSidebar
                courseId={courseId}
                lessons={lessons}
                activeLessonId={lessonId}
              />
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            <LessonContent lesson={lesson} />
            <LessonNav
              courseId={courseId}
              lessons={lessons}
              currentLessonId={lessonId}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
