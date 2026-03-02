import Link from "next/link"
import { ArrowRight, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import MacOSCodeBlock from "@/components/home/MacOSCodeBlock"

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

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100svh-3.5rem)] flex-col items-center justify-center px-4 pt-14 pb-16 overflow-hidden">
      {/* Subtle radial gradient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.540_0.210_259/0.10),transparent)]
          dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.600_0.210_259/0.12),transparent)]"
      />

      <div className="flex flex-col items-center gap-8 text-center max-w-3xl w-full">
        {/* Eyebrow chip */}
        <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-xs">
          <Code2 className="size-3.5 text-primary" />
          Computer Science · Made Simple
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
          Learn to{" "}
          <span className="text-primary">code</span>
          {", "}
          think,{" "}
          <span className="text-primary">build</span>.
        </h1>

        {/* Sub-headline */}
        <p className="max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
          CodeStar is a hands-on computer-science e-learning platform.
          From your first variable to distributed systems — learn at your own
          pace, track your progress, and ship real projects.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/signup">
            <Button size="lg" className="gap-2 rounded-xl text-sm font-semibold">
              Start learning for free
              <ArrowRight className="size-4" />
            </Button>
          </Link>
          <Link href="/courses">
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl text-sm font-semibold"
            >
              Browse courses
            </Button>
          </Link>
        </div>

        {/* Code block preview */}
        <div className="w-full mt-4">
          <MacOSCodeBlock
            code={HERO_CODE}
            language="python"
            filename="codestar.py"
            allowCopy={true}
          />
        </div>
      </div>
    </section>
  )
}
