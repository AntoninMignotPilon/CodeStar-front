"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Star, Sun, Moon, Monitor, BookOpen, Code2, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Courses", href: "/courses", icon: BookOpen },
  { label: "Algorithms", href: "/algorithms", icon: Code2 },
  { label: "About", href: "/about", icon: GraduationCap },
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="size-9" />

  const next =
    theme === "system" ? "light" : theme === "light" ? "dark" : "system"

  const Icon =
    theme === "dark" ? Moon : theme === "light" ? Sun : Monitor

  return (
    <button
      onClick={() => setTheme(next)}
      aria-label="Toggle theme"
      className={cn(
        "flex size-9 items-center justify-center rounded-lg",
        "text-muted-foreground hover:text-foreground hover:bg-accent",
        "transition-colors duration-150"
      )}
    >
      <Icon className="size-4.5" strokeWidth={1.6} />
    </button>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex h-14 items-center px-4 md:px-6",
        "transition-all duration-300",
        scrolled
          ? [
              "bg-background/70 dark:bg-background/60",
              "backdrop-blur-xl backdrop-saturate-150",
              "border-b border-border/60",
              "shadow-sm shadow-black/5",
            ]
          : "bg-transparent"
      )}
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 font-semibold tracking-tight text-foreground mr-8 shrink-0"
      >
        <div className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Star className="size-4" strokeWidth={2} />
        </div>
        <span className="text-sm">CodeStar</span>
      </Link>

      {/* Center nav links */}
      <nav className="hidden md:flex items-center gap-1 flex-1">
        {NAV_LINKS.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm",
              "text-muted-foreground hover:text-foreground hover:bg-accent",
              "transition-colors duration-150"
            )}
          >
            <Icon className="size-3.5" strokeWidth={1.8} />
            {label}
          </Link>
        ))}
      </nav>

      {/* Right side */}
      <div className="flex items-center gap-2 ml-auto">
        <ThemeToggle />

        <Link href="/login">
          <Button
            variant="ghost"
            size="sm"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Log in
          </Button>
        </Link>

        <Link href="/signup">
          <Button
            size="sm"
            className="text-sm rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Get started
          </Button>
        </Link>
      </div>
    </header>
  )
}
