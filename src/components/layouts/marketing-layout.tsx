"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Schedulify</span>
          </Link>

          <nav className="hidden gap-6 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Tính năng
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Bảng giá
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="ghost">Đăng nhập</Button>
            </Link>
            <Link href="/auth/signup">
              <Button>Dùng thử miễn phí</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t bg-muted/40">
        <div className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-lg font-bold">Schedulify</span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Nền tảng quản lý đăng bài đa kênh xã hội thông minh, giúp bạn tiết kiệm thời gian và tối ưu hiệu quả.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Sản phẩm</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#features">Tính năng</Link>
                </li>
                <li>
                  <Link href="#pricing">Bảng giá</Link>
                </li>
                <li>
                  <Link href="#faq">FAQ</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Công ty</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about">Về chúng tôi</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/careers">Tuyển dụng</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Liên hệ</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>Email: contact@schedulify.com</li>
                <li>Hotline: 1900 1234</li>
                <li>
                  Địa chỉ: Tầng 15, Tòa nhà ABC, 123 Đường XYZ, Quận 1, TP.HCM
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Schedulify. Đã đăng ký bản quyền.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 