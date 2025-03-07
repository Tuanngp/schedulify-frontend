import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

export function useAuth() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const isAuthenticated = status === "authenticated"
  const isLoading = status === "loading"
  const user = session?.user

  const requireAuth = useCallback(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/auth/login")
    }
  }, [isLoading, isAuthenticated, router])

  const requirePremium = useCallback(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.push("/auth/login")
      } else if (user?.role !== "PREMIUM") {
        router.push("/upgrade")
      }
    }
  }, [isLoading, isAuthenticated, user?.role, router])

  return {
    user,
    isAuthenticated,
    isLoading,
    requireAuth,
    requirePremium,
    isPremium: user?.role === "PREMIUM",
  }
} 