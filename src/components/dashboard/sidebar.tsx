"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Calendar,
  Share2,
  Bot,
  BarChart2,
  Store,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

const navigationItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Content Calendar",
    href: "/dashboard/calendar",
    icon: Calendar,
  },
  {
    title: "Social Accounts",
    href: "/dashboard/accounts",
    icon: Share2,
  },
  {
    title: "AI Assistant",
    href: "/dashboard/ai",
    icon: Bot,
  },
  {
    title: "Marketplace",
    href: "/dashboard/marketplace",
    icon: Store,
    isPremium: true,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart2,
    isPremium: true,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname()
  const { isPremium } = useAuth()

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-card shadow-sm transition-transform duration-300 ease-in-out lg:z-0",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-20"
        )}
      >
        {/* Logo */}
        <div className="border-b">
          <div className="flex h-16 items-center px-6">
            <Link
              href="/dashboard"
              className={cn(
                "flex items-center gap-2 font-bold transition-all",
                isOpen ? "text-2xl" : "text-xl lg:hidden"
              )}
            >
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {isOpen ? "Schedulify" : "S"}
              </span>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="grid gap-1 px-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href
              const isDisabled = item.isPremium && !isPremium

              return (
                <Link
                  key={item.href}
                  href={isDisabled ? "/upgrade" : item.href}
                  className={cn(
                    "group relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent/10 hover:text-accent",
                    isDisabled && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span
                    className={cn(
                      "transition-all",
                      !isOpen && "lg:hidden"
                    )}
                  >
                    {item.title}
                  </span>
                  {item.isPremium && (
                    <Badge
                      variant="secondary"
                      className={cn(
                        "ml-auto",
                        !isOpen && "lg:hidden"
                      )}
                    >
                      Premium
                    </Badge>
                  )}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Toggle button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-4 top-20 hidden rounded-full border shadow-sm lg:flex"
          onClick={onToggle}
        >
          {isOpen ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      </div>
    </>
  )
} 