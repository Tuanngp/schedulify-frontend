import { AuthLayout } from "@/components/layouts/auth-layout"
import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Đăng nhập</h1>
          <p className="text-muted-foreground">
            Đăng nhập vào tài khoản của bạn để tiếp tục
          </p>
        </div>
        <LoginForm />
      </div>
    </AuthLayout>
  )
} 