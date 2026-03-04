"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function BackLink() {
  const { t } = useLanguage()
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8"
    >
      <ArrowLeft className="size-3.5" strokeWidth={1.8} />
      {t("common.allCourses")}
    </Link>
  )
}
