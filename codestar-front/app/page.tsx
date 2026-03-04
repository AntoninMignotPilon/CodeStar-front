import Navbar from "@/components/layout/Navbar"
import HeroSection from "@/components/home/HeroSection"
import StatsSection from "@/components/home/StatsSection"
import Footer from "@/components/layout/Footer"
import FeaturedCoursesSection from "@/components/home/FeaturedCoursesSection"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        <HeroSection />

        <StatsSection />

        <FeaturedCoursesSection />
      </main>

      <Footer />
    </div>
  )
}
