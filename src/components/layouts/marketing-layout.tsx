"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export function MarketingLayout({ children }: MarketingLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigation = [
    { name: "Tính năng", href: "#features" },
    { name: "Bảng giá", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Blog", href: "/blog" },
    { name: "Về chúng tôi", href: "/about" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-accent">
              <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">S</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Schedulify</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="ghost" className="font-medium">Đăng nhập</Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-medium">
                Dùng thử miễn phí
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t"
            >
              <div className="container py-4 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-base font-medium text-muted-foreground hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t space-y-4">
                  <Link href="/auth/login" className="block">
                    <Button variant="ghost" className="w-full justify-center font-medium">
                      Đăng nhập
                    </Button>
                  </Link>
                  <Link href="/auth/register" className="block">
                    <Button className="w-full justify-center bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-medium">
                      Dùng thử miễn phí
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t bg-muted/40">
        <div className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-accent">
                  <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">S</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Schedulify</span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground max-w-md">
                Nền tảng quản lý đăng bài đa kênh xã hội thông minh, giúp bạn tiết kiệm thời gian và tối ưu hiệu quả.
              </p>
              <div className="mt-6 flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Sản phẩm</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#features" className="hover:text-primary transition-colors">Tính năng</Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-primary transition-colors">Bảng giá</Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link>
                </li>
                <li>
                  <Link href="/changelog" className="hover:text-primary transition-colors">Changelog</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Công ty</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors">Về chúng tôi</Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-primary transition-colors">Tuyển dụng</Link>
                </li>
                <li>
                  <Link href="/press" className="hover:text-primary transition-colors">Báo chí</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Liên hệ</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <span className="font-medium">Email:</span>
                  <a href="mailto:contact@schedulify.com" className="ml-2 hover:text-primary transition-colors">
                    contact@schedulify.com
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="font-medium">Hotline:</span>
                  <a href="tel:19001234" className="ml-2 hover:text-primary transition-colors">
                    1900 1234
                  </a>
                </li>
                <li>
                  <span className="font-medium">Địa chỉ:</span>
                  <p className="mt-1">
                    FPT University Da Nang
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-muted-foreground">
                © 2024 Schedulify. Đã đăng ký bản quyền.
              </p>
              <div className="flex space-x-6 text-sm text-muted-foreground">
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Chính sách bảo mật
                </Link>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Điều khoản sử dụng
                </Link>
                <Link href="/cookies" className="hover:text-primary transition-colors">
                  Chính sách cookie
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 