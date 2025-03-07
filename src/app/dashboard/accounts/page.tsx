"use client";

import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Plus,
  MoreVertical,
  RefreshCw,
  Settings,
  ChevronRight,
  CheckCircle,
  Lock,
  Shield,
  Key,
  Gauge,
  Users,
  Loader2,
  Info,
  PieChart,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  History,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const platforms = [
  {
    id: "facebook",
    name: "Facebook",
    color: "#1877F2",
    icon: "https://th.bing.com/th/id/R.83e3cc297106767114f2c060f7f5fcbb?rik=FkFOcs3CThcCJQ&pid=ImgRaw&r=0",
  },
  {
    id: "instagram",
    name: "Instagram",
    color: "#E4405F",
    icon: "https://th.bing.com/th/id/R.4f0149647a160a47217615866f5469c4?rik=GSu%2bSQNCXuNHjA&pid=ImgRaw&r=0",
  },
  {
    id: "tiktok",
    name: "TikTok",
    color: "#000000",
    icon: "https://th.bing.com/th/id/OIP.L6W9EFgEaYOKv_Y9tecVxwHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: "zalo",
    name: "Zalo",
    color: "#0068FF",
    icon: "https://giaiphapzalo.com/wp-content/uploads/2021/10/logo-white-1024x972.png",
  },
];

// Thêm interface cho Account
interface Account {
  id: number;
  platform: string;
  name: string;
  avatar: string;
  status: 'active' | 'warning' | 'expired';
  followers: number;
  engagement: number;
  tokenExpires: string;
  healthScore: number;
  lastSync: string;
  recentGrowth: number;
  weeklyStats: {
    followers: number[];
    engagement: number[];
  };
}

const accounts: Account[] = [
  {
    id: 1,
    platform: "facebook",
    name: "Fanpage Chính Thức",
    avatar: "/avatars/facebook.png",
    status: "active" as const,
    followers: 125000,
    engagement: 4.5,
    tokenExpires: "2024-05-01",
    healthScore: 95,
    lastSync: "2024-03-06T15:30:00",
    recentGrowth: 2.3,
    weeklyStats: {
      followers: [119000, 120500, 122000, 123100, 124000, 124800, 125000],
      engagement: [4.1, 4.2, 4.3, 4.5, 4.4, 4.6, 4.5]
    }
  },
  {
    id: 2,
    platform: "instagram",
    name: "Official Instagram",
    avatar: "/avatars/instagram.png",
    status: "warning" as const,
    followers: 45000,
    engagement: 6.2,
    tokenExpires: "2024-04-15",
    healthScore: 75,
    lastSync: "2024-03-06T14:45:00",
    recentGrowth: 1.8,
    weeklyStats: {
      followers: [42000, 42800, 43500, 44100, 44600, 44900, 45000],
      engagement: [5.8, 5.9, 6.0, 6.1, 6.3, 6.2, 6.2]
    }
  },
  {
    id: 3,
    platform: "tiktok",
    name: "TikTok Channel",
    avatar: "/avatars/tiktok.png",
    status: "active" as const,
    followers: 80000,
    engagement: 8.7,
    tokenExpires: "2024-06-01",
    healthScore: 90,
    lastSync: "2024-03-06T16:20:00",
    recentGrowth: 5.2,
    weeklyStats: {
      followers: [74000, 75500, 76800, 77500, 78200, 79600, 80000],
      engagement: [8.2, 8.3, 8.5, 8.6, 8.8, 8.7, 8.7]
    }
  },
  {
    id: 4,
    platform: "zalo",
    name: "Zalo Official Account",
    avatar: "/avatars/zalo.png",
    status: "expired" as const,
    followers: 35000,
    engagement: 3.8,
    tokenExpires: "2024-03-20",
    healthScore: 45,
    lastSync: "2024-03-01T10:15:00",
    recentGrowth: -0.5,
    weeklyStats: {
      followers: [36200, 36000, 35800, 35600, 35400, 35200, 35000],
      engagement: [4.2, 4.0, 3.9, 3.8, 3.8, 3.7, 3.8]
    }
  },
];

const permissions = [
  {
    group: "Đọc dữ liệu",
    items: [
      { id: "read_posts", name: "Đọc bài viết", description: "Xem tất cả bài viết đã đăng" },
      { id: "read_insights", name: "Xem thống kê", description: "Truy cập dữ liệu phân tích" },
      { id: "read_audience", name: "Thông tin người theo dõi", description: "Xem demographics của followers" },
    ],
  },
  {
    group: "Quản lý nội dung",
    items: [
      { id: "create_posts", name: "Tạo bài viết", description: "Đăng bài viết mới" },
      { id: "edit_posts", name: "Chỉnh sửa bài viết", description: "Sửa bài viết đã đăng" },
      { id: "delete_posts", name: "Xóa bài viết", description: "Xóa bài viết đã đăng" },
    ],
  },
  {
    group: "Tương tác",
    items: [
      { id: "manage_comments", name: "Quản lý bình luận", description: "Trả lời và xóa bình luận" },
      { id: "send_messages", name: "Nhắn tin", description: "Gửi tin nhắn tới followers" },
    ],
  },
];

// Tính toán sức khỏe tổng thể của hệ thống
const calculateSystemHealth = () => {
  const activeAccounts = accounts.filter(acc => acc.status === "active").length;
  const totalFollowers = accounts.reduce((sum, acc) => sum + acc.followers, 0);
  const avgEngagement = accounts.reduce((sum, acc) => sum + acc.engagement, 0) / accounts.length;
  const avgHealthScore = accounts.reduce((sum, acc) => sum + acc.healthScore, 0) / accounts.length;
  
  return {
    activeAccounts,
    totalAccounts: accounts.length,
    totalFollowers,
    avgEngagement,
    avgHealthScore,
    followerGrowth: 12.5,
    engagementGrowth: 2.1,
    healthScoreChange: -5
  };
};

// Sửa formatNumber function
const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toLocaleString();
};

// Component hiển thị Card cho tài khoản
const AccountCard = ({ account }: { account: Account }) => {
  const platform = platforms.find(p => p.id === account.platform);
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  if (!platform) return null;

  // Xác định trạng thái token
  const tokenDate = new Date(account.tokenExpires);
  const today = new Date();
  const daysUntilExpiry = Math.ceil((tokenDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
  // Format thời gian cập nhật cuối cùng
  const lastSyncDate = new Date(account.lastSync);
  const timeAgo = Math.floor((today.getTime() - lastSyncDate.getTime()) / (1000 * 60 * 60));
  const syncTimeString = timeAgo < 24 
    ? `${timeAgo} giờ trước` 
    : `${Math.floor(timeAgo / 24)} ngày trước`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      layout
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className={cn(
        "group relative overflow-hidden transition-all duration-300",
        isHovered && "shadow-lg",
        account.status === "expired" && "opacity-80"
      )}>
        {/* Status Indicator */}
        <div className="absolute right-4 top-4 flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div
                  className={cn(
                    "relative h-2.5 w-2.5 rounded-full",
                    account.status === "active" && "bg-green-500",
                    account.status === "warning" && "bg-yellow-500",
                    account.status === "expired" && "bg-red-500"
                  )}
                >
                  {account.status === "active" && (
                    <div className="absolute -inset-1 animate-ping rounded-full bg-green-500/20" />
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent side="left">
                {account.status === "active" && "Kết nối hoạt động tốt"}
                {account.status === "warning" && "Token sắp hết hạn"}
                {account.status === "expired" && "Kết nối đã hết hạn"}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className={cn(
          "absolute bottom-0 left-0 right-0 h-1",
          account.status === "active" && "bg-green-500",
          account.status === "warning" && "bg-yellow-500",
          account.status === "expired" && "bg-red-500"
        )} />

        <CardHeader className="pb-2">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="h-12 w-12 border-2" style={{ borderColor: platform.color }}>
                <AvatarImage src={account.avatar} />
                <AvatarFallback style={{ backgroundColor: `${platform.color}20` }}>
                  {account.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 rounded-full border-2 border-background bg-white p-0.5">
                <img
                  src={platform.icon}
                  alt={platform.name}
                  className="h-4 w-4"
                />
              </div>
            </div>
            <div className="flex-1 space-y-1">
              <CardTitle className="line-clamp-1 text-base">
                {account.name}
              </CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="capitalize">{platform.name}</span>
                {account.status === "active" && (
                  <Badge variant="outline" className="bg-green-50 text-green-700 font-normal text-xs">
                    Active
                  </Badge>
                )}
                {account.status === "warning" && (
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 font-normal text-xs">
                    Warning
                  </Badge>
                )}
                {account.status === "expired" && (
                  <Badge variant="outline" className="bg-red-50 text-red-700 font-normal text-xs">
                    Expired
                  </Badge>
                )}
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100"
                >
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Quản lý tài khoản</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Eye className="mr-2 h-4 w-4" />
                  Xem chi tiết
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Đồng bộ dữ liệu
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <PieChart className="mr-2 h-4 w-4" />
                  Phân tích chi tiết
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Key className="mr-2 h-4 w-4" />
                  Gia hạn token
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Cài đặt kết nối
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  <Lock className="mr-2 h-4 w-4" />
                  Ngắt kết nối
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>

        <CardContent className="space-y-4 pb-3 pt-2">
          {/* Last sync info */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <History className="h-3 w-3" />
              <span>Cập nhật {syncTimeString}</span>
            </div>
            <Button variant="ghost" size="sm" className="h-6 px-2 text-xs" onClick={() => setShowDetails(!showDetails)}>
              {showDetails ? "Thu gọn" : "Chi tiết"} 
              <ChevronRight className={cn(
                "ml-1 h-3 w-3 transition-transform",
                showDetails && "rotate-90"
              )} />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Users className="h-3.5 w-3.5" />
                  <span>Followers</span>
                </div>
                <Badge 
                  variant="outline" 
                  className={cn(
                    "text-xs font-normal",
                    account.recentGrowth > 0 ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                  )}
                >
                  {account.recentGrowth > 0 ? (
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="mr-1 h-3 w-3" />
                  )}
                  {Math.abs(account.recentGrowth)}%
                </Badge>
              </div>
              <div className="text-xl font-bold">
                {formatNumber(account.followers)}
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <BarChart3 className="h-3.5 w-3.5" />
                <span>Tỷ lệ tương tác</span>
              </div>
              <div className="text-xl font-bold">
                {account.engagement}%
              </div>
            </div>
          </div>

          {/* Expanded Info */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="space-y-4 border-t pt-3">
                  {/* Weekly Mini Chart */}
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Thống kê 7 ngày qua</div>
                    <div className="h-16 w-full bg-accent/50 rounded-md p-2">
                      {/* Placeholder for mini chart */}
                      <div className="flex h-full items-end gap-1">
                        {account.weeklyStats.followers.map((value, i) => {
                          const max = Math.max(...account.weeklyStats.followers);
                          const height = (value / max) * 100;
                          return (
                            <div
                              key={i}
                              className="flex-1 rounded-t bg-primary/60 transition-all hover:bg-primary"
                              style={{ height: `${height}%` }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Health Score */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Gauge className="h-3.5 w-3.5" />
                        Sức khỏe kết nối
                      </span>
                      <span className="font-medium">{account.healthScore}%</span>
                    </div>
                    <Progress
                      value={account.healthScore}
                      className={cn(
                        "h-2",
                        account.healthScore >= 80 ? "bg-green-500" :
                        account.healthScore >= 50 ? "bg-yellow-500" : 
                        "bg-red-500"
                      )}
                    />
                  </div>

                  {/* Token Expiration */}
                  <div className="rounded-lg border p-3 bg-gray-50/50">
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Shield className="h-3.5 w-3.5" />
                        Token hết hạn
                      </span>
                      <Badge
                        variant="outline"
                        className={cn(
                          "text-xs",
                          daysUntilExpiry > 14 ? "bg-green-50 text-green-700" :
                          daysUntilExpiry > 0 ? "bg-yellow-50 text-yellow-700" :
                          "bg-red-50 text-red-700"
                        )}
                      >
                        {account.status === "expired" ? (
                          "Đã hết hạn"
                        ) : (
                          daysUntilExpiry > 0 ? `Còn ${daysUntilExpiry} ngày` : "Hết hạn"
                        )}
                      </Badge>
                    </div>
                    <Button 
                      variant={account.status === "expired" ? "default" : "outline"} 
                      size="sm" 
                      className="w-full gap-1.5 text-xs"
                    >
                      <Key className="h-3.5 w-3.5" />
                      {account.status === "expired" ? "Kết nối lại" : "Gia hạn token"}
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Health Score Indicator */}
          <div className="space-y-1.5 pt-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Sức khỏe kết nối</span>
              <span className={cn(
                "font-medium",
                account.healthScore >= 80 ? "text-green-600" :
                account.healthScore >= 50 ? "text-yellow-600" :
                "text-red-600"
              )}>
                {account.healthScore}%
              </span>
            </div>
            <Progress
              value={account.healthScore}
              className={cn(
                "h-2",
                account.healthScore >= 80 ? "bg-green-500" :
                account.healthScore >= 50 ? "bg-yellow-500" : 
                "bg-red-500"
              )}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function AccountsPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [systemHealth, setSystemHealth] = useState(calculateSystemHealth());
  
  // Cập nhật thống kê khi tab thay đổi
  useEffect(() => {
    setSystemHealth(calculateSystemHealth());
  }, [activeTab]);

  // Lọc tài khoản dựa trên tab hiện tại
  const filteredAccounts = activeTab === "all" 
    ? accounts 
    : accounts.filter(account => account.platform === activeTab);

  return (
    <MainLayout>
      {/* Header */}
      <div className="mb-8 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Quản lý tài khoản</h2>
            <p className="text-muted-foreground">
              Quản lý và theo dõi tất cả tài khoản mạng xã hội của bạn
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2" size="lg">
              <RefreshCw className="h-4 w-4" />
              Đồng bộ tất cả
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-2">
                  <Plus className="h-5 w-5" />
                  Kết nối tài khoản mới
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Kết nối tài khoản mới</DialogTitle>
                  <DialogDescription>
                    Chọn nền tảng bạn muốn kết nối và làm theo hướng dẫn
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 py-6">
                  {platforms.map((platform) => (
                    <motion.div
                      key={platform.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group cursor-pointer"
                      onClick={() => setSelectedPlatform(platform.id)}
                    >
                      <div
                        className={cn(
                          "relative overflow-hidden rounded-lg border-2 p-4 transition-all",
                          selectedPlatform === platform.id
                            ? "border-primary bg-primary/5"
                            : "border-transparent hover:border-primary/20 hover:bg-accent"
                        )}
                        style={{
                          background: `linear-gradient(45deg, ${platform.color}10, transparent)`,
                        }}
                      >
                        <div className="mb-4 flex items-center gap-3">
                          <div
                            className="flex h-10 w-10 items-center justify-center rounded-full"
                            style={{ backgroundColor: `${platform.color}20` }}
                          >
                            <img
                              src={platform.icon}
                              alt={platform.name}
                              className="h-6 w-6"
                            />
                          </div>
                          <div className="font-semibold">{platform.name}</div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Kết nối tài khoản {platform.name} của bạn để quản lý và theo dõi
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setSelectedPlatform(null)}>
                    Hủy
                  </Button>
                  <Button
                    disabled={!selectedPlatform || isConnecting}
                    onClick={() => {
                      setIsConnecting(true);
                      // Implement OAuth flow
                      setTimeout(() => setIsConnecting(false), 2000);
                    }}
                  >
                    {isConnecting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Đang kết nối...
                      </>
                    ) : (
                      "Tiếp tục kết nối"
                    )}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <Separator />
      </div>

      {/* Platform Tabs */}
      <Tabs 
        defaultValue="all" 
        className="space-y-6"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <div className="flex items-center justify-between">
          <TabsList className="inline-flex h-10">
            <TabsTrigger value="all" className="min-w-[100px] px-6">
              Tất cả
            </TabsTrigger>
            {platforms.map((platform) => (
              <TabsTrigger
                key={platform.id}
                value={platform.id}
                className="min-w-[100px] px-6"
              >
                <div className="flex items-center gap-2">
                  <img src={platform.icon} alt={platform.name} className="h-4 w-4" />
                  {platform.name}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Hiển thị {filteredAccounts.length} tài khoản</span>
          </div>
        </div>

        <TabsContent value="all" className="space-y-6">
          {/* Health Overview */}
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle>Tổng quan sức khỏe kết nối</CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Info className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      Tổng hợp tình trạng sức khỏe của tất cả kết nối
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-4">
                <Card className="border-none shadow-none">
                  <CardContent className="space-y-2 p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-muted-foreground">
                        Tài khoản đang hoạt động
                      </div>
                      <div className="rounded-full bg-green-100 p-1.5">
                        <CheckCircle className="h-4 w-4 text-green-700" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-2xl font-bold">
                        {systemHealth.activeAccounts}/{systemHealth.totalAccounts}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-none">
                  <CardContent className="space-y-2 p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-muted-foreground">
                        Tổng số tài khoản
                      </div>
                      <div className="rounded-full bg-primary p-1.5">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-2xl font-bold">
                        {systemHealth.totalAccounts}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-none">
                  <CardContent className="space-y-2 p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-muted-foreground">
                        Tổng số followers
                      </div>
                      <div className="rounded-full bg-primary p-1.5">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-2xl font-bold">
                        {formatNumber(systemHealth.totalFollowers)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-none">
                  <CardContent className="space-y-2 p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-muted-foreground">
                        Tỷ lệ tương tác trung bình
                      </div>
                      <div className="rounded-full bg-primary p-1.5">
                        <BarChart3 className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-2xl font-bold">
                        {systemHealth.avgEngagement.toFixed(2)}%
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Accounts List */}
          <div className="space-y-4">
            {filteredAccounts.map((account) => (
              <AccountCard key={account.id} account={account} />
            ))}
          </div>
        </TabsContent>

        {platforms.map((platform) => (
          <TabsContent key={platform.id} value={platform.id} className="space-y-6">
            <Card>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle>Tổng quan {platform.name}</CardTitle>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Info className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="left">
                        Thống kê tổng quan cho tài khoản {platform.name}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-4">
                  {/* Similar stats cards as in "all" tab */}
                </div>
              </CardContent>
            </Card>

            {/* Platform specific accounts */}
            <div className="space-y-4">
              {accounts
                .filter(account => account.platform === platform.id)
                .map((account) => (
                  <AccountCard key={account.id} account={account} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </MainLayout>
  );
}