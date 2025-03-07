import { AuthLayout } from "@/components/layouts/auth-layout"
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form"

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Quên mật khẩu</h1>
          <p className="text-muted-foreground">
            Nhập email của bạn và chúng tôi sẽ gửi link đặt lại mật khẩu
          </p>
        </div>
        <ForgotPasswordForm />
      </div>
    </AuthLayout>
  )
} 