"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import MacOSCodeBlock from "@/components/home/MacOSCodeBlock"
import { useLanguage } from "@/context/LanguageContext"

const HERO_CODE = `# Welcome to CodeStar
def learn(topic: str) -> str:
    """
    The fastest path from zero to engineer.
    Pick a topic. Follow the lessons. Build real things.
    """
    roadmap = ["Theory", "Practice", "Projects", "Mastery"]
    for step in roadmap:
        print(f"[{topic}] → {step} ✓")
    return "You're ready."

learn("Computer Science")`

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

export default function HeroSection() {
  const { t } = useLanguage()
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-4 pt-28 pb-16 overflow-hidden">

      {/* Ambient glow — primary blue */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4
                        w-[800px] h-[600px] rounded-full
                        bg-blue-500/15 blur-[120px] dark:bg-blue-400/10" />
        <div className="absolute bottom-0 right-1/4
                        w-[400px] h-[400px] rounded-full
                        bg-violet-500/10 blur-[100px] dark:bg-violet-400/8" />
      </div>

      {/* Subtle grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10
          bg-[linear-gradient(to_right,oklch(0_0_0/0.03)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0_0_0/0.03)_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,oklch(1_0_0/0.03)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.03)_1px,transparent_1px)]
          bg-[size:48px_48px]
          [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center gap-7 text-center max-w-3xl w-full"
      >
        {/* Eyebrow chip */}
        <motion.div variants={item}>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400 shadow-xs">
            <Sparkles className="size-3.5" strokeWidth={1.5} />
            {t("home.hero.eyebrow")}
            <span className="ml-1 inline-block size-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-5xl font-bold sm:text-6xl md:text-7xl"
          style={{ letterSpacing: "-0.055em" }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            {t("home.hero.headline1")}
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
            {t("home.hero.headline2")}
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            {t("home.hero.headline3")}
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
            {t("home.hero.headline4")}
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            {t("home.hero.headline5")}
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={item}
          className="max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground font-normal"
        >
          {t("home.hero.subheadline")}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-3">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href="/signup">
              <Button
                size="lg"
                className="gap-2 rounded-xl text-sm font-semibold px-6 shadow-md shadow-primary/25 bg-primary hover:bg-primary/90"
              >
                {t("home.hero.cta1")}
                <ArrowRight className="size-4" strokeWidth={1.5} />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href="/courses">
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl text-sm font-semibold px-6 backdrop-blur-sm bg-background/60 border-border/60"
              >
                {t("home.hero.cta2")}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust indicators — badge pills */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-2.5"
        >
          {[
            { dot: "bg-emerald-400", key: "home.hero.badge1" },
            { dot: "bg-blue-400",    key: "home.hero.badge2" },
            { dot: "bg-orange-400",  key: "home.hero.badge3" },
          ].map(({ dot, key }) => (
            <motion.span
              key={key}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm"
            >
              <span className={`inline-block size-1.5 rounded-full ${dot}`} />
              {t(key)}
            </motion.span>
          ))}
        </motion.div>

        {/* Code block preview */}
        <motion.div variants={item} className="w-full mt-2">
          <MacOSCodeBlock
            code={HERO_CODE}
            language="python"
            filename="codestar.py"
            allowCopy={true}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
