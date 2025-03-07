import { AuthLayout } from "@/components/layouts/auth-layout"
import { RegisterForm } from "@/components/auth/register-form"

export default function RegisterPage() {
  return (
    <AuthLayout>
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Đăng ký tài khoản</h1>
          <p className="text-muted-foreground">
            Tạo tài khoản mới để bắt đầu sử dụng Schedulify
          </p>
        </div>
        <RegisterForm />
      </div>
    </AuthLayout>
  )
} 