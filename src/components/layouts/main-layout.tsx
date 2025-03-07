import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Calendar, BarChart3, Settings, Menu } from "lucide-react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutGrid,
  },
  {
    name: "Lịch đăng bài",
    href: "/schedule",
    icon: Calendar,
  },
  {
    name: "Phân tích",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Cài đặt",
    href: "/settings",
    icon: Settings,
  },
];

export function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  return (
    <div className="min-h-screen bg-background">
      {/* Main content */}
      <div
        className={cn("flex flex-col transition-all duration-300 ease-in-out")}
      >
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-card px-6 shadow-sm"></header>

        {/* Page content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
