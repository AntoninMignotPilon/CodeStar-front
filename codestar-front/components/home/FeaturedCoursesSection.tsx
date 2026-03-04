"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import CourseCard from "@/components/home/CourseCard"
import { COURSES } from "@/data/courses"
import { useLanguage } from "@/context/LanguageContext"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

// Bento: alternating wide/narrow — [2,1, 1,2, 2,1]
const BENTO_SPANS = [2, 1, 1, 2, 2, 1]

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
}

export default function FeaturedCoursesSection() {
  const { t } = useLanguage()
  return (
    <section className="px-4 py-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
                        w-[600px] h-[400px] rounded-full
                        bg-violet-500/8 blur-[100px] dark:bg-violet-400/6" />
      </div>

      <div className="mx-auto max-w-6xl flex flex-col gap-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div className="flex flex-col gap-3">
            {/* Bare blue uppercase section tag */}
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              {t("home.featured.eyebrow")}
            </span>
            <h2 className="text-3xl font-bold" style={{ letterSpacing: "-0.03em" }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                {t("home.featured.title")}
              </span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-md font-normal">
              {t("home.featured.subtitle")}
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="/courses"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
            >
              {t("home.featured.viewAll")}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Asymmetric bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {COURSES.map((course, i) => (
            <motion.div
              key={course.id}
              variants={itemVariant}
              className={
                BENTO_SPANS[i] === 2
                  ? "lg:col-span-2"
                  : "lg:col-span-1"
              }
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
