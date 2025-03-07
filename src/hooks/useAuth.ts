import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useAuth = (options?: { 
  required?: boolean;
  role?: "FREE" | "PREMIUM";
  redirectTo?: string;
}) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (options?.required && status === "unauthenticated") {
      router.push(options.redirectTo || "/login");
    }

    if (options?.role && session?.user?.role !== options.role) {
      if (options.role === "PREMIUM") {
        router.push("/upgrade");
      } else {
        router.push("/dashboard");
      }
    }
  }, [session, status, router, options]);

  return {
    session,
    status,
    isAuthenticated: status === "authenticated",
    isLoading: status === "loading",
    user: session?.user,
    isPremium: session?.user?.role === "PREMIUM",
  };
}; 