import Link from "next/link"
import { Star, Github, Twitter } from "lucide-react"

const FOOTER_LINKS = [
  {
    heading: "Platform",
    links: [
      { label: "Courses", href: "/courses" },
      { label: "Algorithms", href: "/algorithms" },
      { label: "About", href: "/about" },
    ],
  },
  {
    heading: "Account",
    links: [
      { label: "Log in", href: "/login" },
      { label: "Sign up", href: "/signup" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 mb-10">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-1 flex flex-col gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-sm text-foreground"
            >
              <div className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Star className="size-4" strokeWidth={2} />
              </div>
              CodeStar
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-48">
              Computer science education, made simple and hands-on.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <a
                href="https://github.com"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="size-4" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="size-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map(({ heading, links }) => (
            <div key={heading} className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                {heading}
              </span>
              <ul className="flex flex-col gap-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} CodeStar. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
