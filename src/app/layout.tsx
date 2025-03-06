import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Schedulify - Nền tảng quản lý đăng bài đa kênh xã hội",
    template: "%s | Schedulify",
  },
  description:
    "Schedulify giúp bạn tự động hóa và tối ưu việc đăng bài trên nhiều nền tảng xã hội. Tiết kiệm thời gian và tăng hiệu quả với công nghệ AI.",
  keywords: [
    "social media management",
    "social media scheduler",
    "social media automation",
    "facebook scheduler",
    "instagram scheduler",
    "twitter scheduler",
    "linkedin scheduler",
    "youtube scheduler",
    "social media analytics",
    "social media marketing",
  ],
  authors: [{ name: "Schedulify" }],
  creator: "Schedulify",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://schedulify.com",
    title: "Schedulify - Nền tảng quản lý đăng bài đa kênh xã hội",
    description:
      "Schedulify giúp bạn tự động hóa và tối ưu việc đăng bài trên nhiều nền tảng xã hội. Tiết kiệm thời gian và tăng hiệu quả với công nghệ AI.",
    siteName: "Schedulify",
  },
  twitter: {
    card: "summary_large_image",
    title: "Schedulify - Nền tảng quản lý đăng bài đa kênh xã hội",
    description:
      "Schedulify giúp bạn tự động hóa và tối ưu việc đăng bài trên nhiều nền tảng xã hội. Tiết kiệm thời gian và tăng hiệu quả với công nghệ AI.",
    creator: "@schedulify",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        {children}
      </body>
    </html>
  );
}
