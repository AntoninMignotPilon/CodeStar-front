"use client"

import { Info, Lightbulb, TriangleAlert, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ContentBlock, Lesson } from "@/types/course"
import MacOSCodeBlock from "@/components/home/MacOSCodeBlock"
import { useLanguage } from "@/context/LanguageContext"

// ---------------------------------------------------------------------------
// Sub-renderers for each block type
// ---------------------------------------------------------------------------

function ParagraphBlock({ text }: { text: string }) {
  return (
    <p className="text-sm leading-7 text-foreground/85 font-medium">{text}</p>
  )
}

function HeadingBlock({ level, text }: { level: 2 | 3; text: string }) {
  if (level === 2) {
    return (
      <h2 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
        {text}
      </h2>
    )
  }
  return (
    <h3 className="mt-3 text-base font-semibold text-foreground">{text}</h3>
  )
}

function CodeBlock({
  language,
  code,
  filename,
}: {
  language: string
  code: string
  filename?: string
}) {
  return (
    <MacOSCodeBlock
      code={code}
      language={language}
      filename={filename}
      allowCopy
    />
  )
}

const CALLOUT_STYLES = {
  info: {
    wrapper: "bg-blue-50 border-blue-200/60 dark:bg-blue-950/30 dark:border-blue-800/50",
    icon: <Info className="size-4 text-blue-500 shrink-0 mt-0.5" strokeWidth={1.5} />,
    label: "text-blue-700 dark:text-blue-300",
  },
  tip: {
    wrapper: "bg-emerald-50 border-emerald-200/60 dark:bg-emerald-950/30 dark:border-emerald-800/50",
    icon: <Lightbulb className="size-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={1.5} />,
    label: "text-emerald-700 dark:text-emerald-300",
  },
  warning: {
    wrapper: "bg-amber-50 border-amber-200/60 dark:bg-amber-950/30 dark:border-amber-800/50",
    icon: <TriangleAlert className="size-4 text-amber-500 shrink-0 mt-0.5" strokeWidth={1.5} />,
    label: "text-amber-700 dark:text-amber-300",
  },
}

function CalloutBlock({
  variant,
  text,
}: {
  variant: "info" | "warning" | "tip"
  text: string
}) {
  const s = CALLOUT_STYLES[variant]
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-2xl border px-4 py-3.5",
        s.wrapper,
      )}
    >
      {s.icon}
      <p className={cn("text-sm leading-relaxed font-medium", s.label)}>{text}</p>
    </div>
  )
}

function ListBlock({
  ordered,
  items,
}: {
  ordered: boolean
  items: string[]
}) {
  const Tag = ordered ? "ol" : "ul"
  return (
    <Tag
      className={cn(
        "flex flex-col gap-1.5 pl-5 text-sm leading-7 text-foreground/85 font-medium",
        ordered ? "list-decimal" : "list-disc",
      )}
    >
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </Tag>
  )
}

// ---------------------------------------------------------------------------
// Dispatcher
// ---------------------------------------------------------------------------

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return <ParagraphBlock text={block.text} />
    case "heading":
      return <HeadingBlock level={block.level} text={block.text} />
    case "code":
      return (
        <CodeBlock
          language={block.language}
          code={block.code}
          filename={block.filename}
        />
      )
    case "callout":
      return <CalloutBlock variant={block.variant} text={block.text} />
    case "list":
      return <ListBlock ordered={block.ordered} items={block.items} />
  }
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

interface LessonContentProps {
  lesson: Lesson
}

export default function LessonContent({ lesson }: LessonContentProps) {
  const { t } = useLanguage()
  return (
    <article className="flex flex-col gap-5 max-w-2xl">
      {/* Lesson header */}
      <header className="flex flex-col gap-2 pb-6 border-b border-border/60">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          {lesson.title}
        </h1>
        <p className="text-sm text-muted-foreground font-medium leading-relaxed">
          {lesson.summary}
        </p>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
          <Clock className="size-3.5" strokeWidth={1.5} />
          <span>{t("common.durationRead", { duration: lesson.duration })}</span>
        </div>
      </header>

      {/* Content blocks */}
      <div className="flex flex-col gap-4">
        {lesson.content.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>
    </article>
  )
}
