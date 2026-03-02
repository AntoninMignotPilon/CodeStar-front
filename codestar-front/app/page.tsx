import Navbar from "@/components/layout/Navbar"
import HeroSection from "@/components/home/HeroSection"
import StatsSection from "@/components/home/StatsSection"
import CourseCard from "@/components/home/CourseCard"
import Footer from "@/components/layout/Footer"
import { COURSES } from "@/data/courses"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <HeroSection />

        {/* Stats */}
        <StatsSection />

        {/* Featured courses */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-5xl flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Featured Courses
              </h2>
              <p className="text-sm text-muted-foreground">
                Structured paths to go from complete beginner to confident engineer.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {COURSES.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
