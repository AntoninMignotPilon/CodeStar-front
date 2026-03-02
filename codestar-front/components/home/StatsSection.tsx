import { Users, BookOpen, Trophy, Zap } from "lucide-react"

const STATS = [
  {
    icon: Users,
    value: "12 000+",
    label: "Active students",
    color: "text-blue-500",
    bg: "bg-blue-500/10 dark:bg-blue-500/15",
  },
  {
    icon: BookOpen,
    value: "50+",
    label: "Courses available",
    color: "text-violet-500",
    bg: "bg-violet-500/10 dark:bg-violet-500/15",
  },
  {
    icon: Trophy,
    value: "8 500+",
    label: "Certificates issued",
    color: "text-amber-500",
    bg: "bg-amber-500/10 dark:bg-amber-500/15",
  },
  {
    icon: Zap,
    value: "95%",
    label: "Completion rate",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 dark:bg-emerald-500/15",
  },
]

export default function StatsSection() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map(({ icon: Icon, value, label, color, bg }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-xs text-center"
            >
              <div className={`flex size-10 items-center justify-center rounded-xl ${bg}`}>
                <Icon className={`size-5 ${color}`} strokeWidth={1.8} />
              </div>
              <span className="text-2xl font-black tracking-tight text-foreground">
                {value}
              </span>
              <span className="text-xs text-muted-foreground leading-snug">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
