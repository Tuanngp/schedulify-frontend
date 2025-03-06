import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AuthLayoutProps {
  children: React.ReactNode;
  showSignUp?: boolean;
}

export function AuthLayout({ children, showSignUp = true }: AuthLayoutProps) {
  return (
    <div className="grid min-h-screen grid-cols-1 overflow-hidden md:grid-cols-3 lg:grid-cols-2">
      <div className="col-span-1 flex flex-col justify-center p-8 md:col-span-2 lg:col-span-1">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Chào mừng bạn đến với Schedulify
            </h1>
            <p className="text-sm text-muted-foreground">
              Nền tảng quản lý đăng bài đa kênh xã hội
            </p>
          </div>
          {children}
          {showSignUp && (
            <p className="px-8 text-center text-sm text-muted-foreground">
              Chưa có tài khoản?{" "}
              <Link
                href="/auth/signup"
                className="underline underline-offset-4 hover:text-primary"
              >
                Đăng ký ngay
              </Link>
            </p>
          )}
        </div>
      </div>
      <div className="hidden bg-accent/10 md:block">
        <div className="flex h-full items-center justify-center p-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            {/* Add your hero image or illustration here */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5" />
          </div>
        </div>
      </div>
    </div>
  );
} 