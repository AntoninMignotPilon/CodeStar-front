import { LoginForm } from "@/components/auth/LoginForm"

export default function LoginPage() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center bg-background overflow-hidden px-4 py-10">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3
                        w-[600px] h-[500px] rounded-full
                        bg-blue-500/12 blur-[100px] dark:bg-blue-400/8" />
      </div>
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
