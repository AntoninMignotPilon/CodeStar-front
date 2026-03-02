import { Info, Lightbulb, TriangleAlert } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ContentBlock, Lesson } from "@/types/course"
import MacOSCodeBlock from "@/components/home/MacOSCodeBlock"

// ---------------------------------------------------------------------------
// Sub-renderers for each block type
// ---------------------------------------------------------------------------

function ParagraphBlock({ text }: { text: string }) {
  return (
    <p className="text-sm leading-7 text-foreground/90">{text}</p>
  )
}

function HeadingBlock({ level, text }: { level: 2 | 3; text: string }) {
  if (level === 2) {
    return (
      <h2 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
        {text}
      </h2>
    )
  }
  return (
    <h3 className="mt-1 text-base font-semibold text-foreground">{text}</h3>
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
    wrapper: "bg-blue-50 border-blue-200 dark:bg-blue-950/40 dark:border-blue-800",
    icon: <Info className="size-4 text-blue-500 shrink-0 mt-0.5" strokeWidth={1.8} />,
    label: "text-blue-700 dark:text-blue-400",
  },
  tip: {
    wrapper: "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800",
    icon: <Lightbulb className="size-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={1.8} />,
    label: "text-emerald-700 dark:text-emerald-400",
  },
  warning: {
    wrapper: "bg-amber-50 border-amber-200 dark:bg-amber-950/40 dark:border-amber-800",
    icon: <TriangleAlert className="size-4 text-amber-500 shrink-0 mt-0.5" strokeWidth={1.8} />,
    label: "text-amber-700 dark:text-amber-400",
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
        "flex items-start gap-3 rounded-xl border px-4 py-3",
        s.wrapper,
      )}
    >
      {s.icon}
      <p className={cn("text-sm leading-relaxed", s.label)}>{text}</p>
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
        "flex flex-col gap-1.5 pl-5 text-sm leading-7 text-foreground/90",
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
  return (
    <article className="flex flex-col gap-5 max-w-2xl">
      {/* Lesson header */}
      <header className="flex flex-col gap-1 pb-4 border-b border-border">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          {lesson.title}
        </h1>
        <p className="text-sm text-muted-foreground">{lesson.summary}</p>
      </header>

      {/* Content blocks */}
      {lesson.content.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </article>
  )
}
