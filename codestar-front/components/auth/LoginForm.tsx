"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Star, ArrowRight, Eye, EyeOff } from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { authService } from "@/services/auth"
import { AccountCredentials } from "@/types/auth"
import { useLanguage } from "@/context/LanguageContext"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
}

export function LoginForm({ className }: { className?: string }) {
  const router = useRouter()
  const { t } = useLanguage()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const credentials: AccountCredentials = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    }

    try {
      const response = await authService.login(credentials)
      localStorage.setItem("token", response.token)
      document.cookie = `token=${response.token}; path=/; SameSite=Strict`
      router.push("/")
    } catch (err) {
      setError(err instanceof Error ? err.message : t("auth.login.errorFallback"))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-6"
      >
        {/* Card */}
        <div className="rounded-3xl border border-border/60 bg-card/80 backdrop-blur-xl shadow-2xl shadow-black/8 dark:shadow-black/30 p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Logo + heading */}
            <motion.div variants={itemVariant} className="flex flex-col items-center gap-4 text-center mb-2">
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                >
                  <Star className="size-6" strokeWidth={2} fill="currentColor" />
                </motion.div>
              </Link>
              <div className="flex flex-col gap-1">
                <h1 className="text-xl font-semibold text-foreground">{t("auth.login.title")}</h1>
                <p className="text-sm text-muted-foreground">
                  {t("auth.login.noAccount")}{" "}
                  <Link href="/signup" className="text-primary font-medium hover:underline underline-offset-4">
                    {t("auth.login.signupLink")}
                  </Link>
                </p>
              </div>
            </motion.div>

            {/* Social buttons */}
            <motion.div variants={itemVariant} className="grid grid-cols-2 gap-3">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Button
                  variant="outline"
                  type="button"
                  disabled={isLoading}
                  className="w-full rounded-xl h-10 text-xs font-medium border-border/60 bg-background/60 hover:bg-accent"
                >
                  <svg className="size-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" fill="currentColor" />
                  </svg>
                   {t("auth.login.apple")}
                 </Button>
               </motion.div>
               <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                 <Button
                   variant="outline"
                   type="button"
                   disabled={isLoading}
                   className="w-full rounded-xl h-10 text-xs font-medium border-border/60 bg-background/60 hover:bg-accent"
                 >
                   <svg className="size-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                     <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor" />
                   </svg>
                   {t("auth.login.google")}
                </Button>
              </motion.div>
            </motion.div>

            {/* Divider */}
            <motion.div variants={itemVariant} className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border/50" />
              <span className="text-xs text-muted-foreground font-medium">{t("auth.login.divider")}</span>
              <div className="h-px flex-1 bg-border/50" />
            </motion.div>

            {/* Error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive text-center"
              >
                {error}
              </motion.div>
            )}

            {/* Fields */}
            <motion.div variants={itemVariant} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="username" className="text-sm font-medium text-foreground">
                  {t("auth.login.username")}
                </label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder={t("auth.login.usernamePlaceholder")}
                  required
                  disabled={isLoading}
                  className="h-11 rounded-xl border-border/60 bg-background/60 focus:bg-background transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="password" className="text-sm font-medium text-foreground">
                  {t("auth.login.password")}
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={t("auth.login.passwordPlaceholder")}
                    required
                    disabled={isLoading}
                    className="h-11 rounded-xl border-border/60 bg-background/60 focus:bg-background transition-colors pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    tabIndex={-1}
                  >
                    {showPassword
                      ? <EyeOff className="size-4" strokeWidth={1.5} />
                      : <Eye className="size-4" strokeWidth={1.5} />
                    }
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Submit */}
            <motion.div variants={itemVariant}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-11 rounded-xl font-semibold text-sm gap-2 shadow-md shadow-primary/25"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="size-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      {t("auth.login.submitting")}
                    </span>
                  ) : (
                    <>
                      {t("auth.login.submit")}
                      <ArrowRight className="size-4" strokeWidth={1.5} />
                    </>
                  )}
                </Button>
              </motion.div>
            </motion.div>
          </form>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-muted-foreground px-4">
          {t("common.agreeLegal")}{" "}
          <a href="#" className="underline underline-offset-4 hover:text-foreground transition-colors">{t("common.terms")}</a>{" "}
          {t("common.and")}{" "}
          <a href="#" className="underline underline-offset-4 hover:text-foreground transition-colors">{t("common.privacyPolicy")}</a>.
        </p>
      </motion.div>
    </div>
  )
}
