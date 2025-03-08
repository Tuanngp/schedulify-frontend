"use client";

import { MainLayout } from "@/components/layouts/main-layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowUpRight,
  BarChart,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Filter,
  Heart,
  Instagram,
  Link as LinkIcon,
  MessageCircle,
  MoreVertical,
  Plus,
  Search,
  TrendingUp,
  Twitter,
  XCircle
} from "lucide-react";

export default function DashboardPage() {
  return (
    <MainLayout>
      {/* Header với gradient và trang trí */}
      <div className="mb-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-6 shadow-lg">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white md:text-3xl">Xin chào, Người dùng!</h1>
            <p className="text-blue-100">Chào mừng quay trở lại với bảng điều khiển của bạn</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                <Plus className="mr-2 h-4 w-4" />
                Tạo bài viết mới
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Tạo bài viết mới</DialogTitle>
                <DialogDescription>
                  Tạo bài viết mới để đăng lên các kênh xã hội của bạn.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Input placeholder="Tiêu đề bài viết" />
                </div>
                <div className="grid gap-2">
                  <Textarea
                    placeholder="Nội dung bài viết..."
                    className="min-h-32"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">Facebook</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">Instagram</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">Twitter</Badge>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Hủy</Button>
                <Button className="bg-blue-600 hover:bg-blue-700">Tạo bài viết</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Navigation Tabs với nội dung chi tiết */}
      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="inline-flex w-full max-w-2xl rounded-lg bg-gray-100/50 p-1 space-x-1">
          <TabsTrigger
            value="overview"
            className="flex-1 rounded-md px-6 py-2.5 transition-all data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <span className="flex items-center justify-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Tổng quan
            </span>
          </TabsTrigger>

          <TabsTrigger
            value="analytics"
            className="flex-1 rounded-md px-6 py-2.5 transition-all data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <span className="flex items-center justify-center gap-2">
              <BarChart className="h-4 w-4" />
              Phân tích
            </span>
          </TabsTrigger>

          <TabsTrigger
            value="posts"
            className="flex-1 rounded-md px-6 py-2.5 transition-all data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <span className="flex items-center justify-center gap-2">
              <Calendar className="h-4 w-4" />
              Bài viết
            </span>
          </TabsTrigger>

          <TabsTrigger
            value="channels"
            className="flex-1 rounded-md px-6 py-2.5 transition-all data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <span className="flex items-center justify-center gap-2">
              <LinkIcon className="h-4 w-4" />
              Kênh
            </span>
          </TabsTrigger>
        </TabsList>

        {/* Tab Tổng quan */}
        <TabsContent value="overview" className="mt-6 space-y-8">
          {/* Stat Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute right-0 top-0 h-16 w-16 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-blue-100/50"></div>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-blue-500" />
                  Bài viết đã lên lịch
                </CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted/50">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Hành động</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Xem chi tiết</DropdownMenuItem>
                    <DropdownMenuItem>Chỉnh sửa</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      Xóa
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="text-3xl font-bold tracking-tight">12</div>
                  <span className="flex items-center rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <ArrowUpRight className="mr-1 h-3 w-3" />+2
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  so với tuần trước
                </p>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-blue-100">
                  <div className="h-full w-3/4 rounded-full bg-blue-500"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute right-0 top-0 h-16 w-16 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-pink-100/50"></div>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold flex items-center">
                  <Heart className="mr-2 h-4 w-4 text-pink-500" />
                  Tổng tương tác
                </CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted/50">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Thời gian</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>7 ngày qua</DropdownMenuItem>
                    <DropdownMenuItem>30 ngày qua</DropdownMenuItem>
                    <DropdownMenuItem>90 ngày qua</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="text-3xl font-bold tracking-tight">1,234</div>
                  <span className="flex items-center rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <TrendingUp className="mr-1 h-3 w-3" />+20.1%
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  so với tháng trước
                </p>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-pink-100">
                  <div className="h-full w-4/5 rounded-full bg-pink-500"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute right-0 top-0 h-16 w-16 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-purple-100/50"></div>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold flex items-center">
                  <LinkIcon className="mr-2 h-4 w-4 text-purple-500" />
                  Kênh đã kết nối
                </CardTitle>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted/50">
                  <Plus className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="text-3xl font-bold tracking-tight">3</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Facebook, Instagram, Twitter
                </p>
                <div className="mt-4 flex -space-x-2">
                  <Avatar className="h-8 w-8 border-2 border-white">
                    <AvatarImage src="/api/placeholder/30/30" alt="Facebook" />
                    <AvatarFallback className="bg-blue-500 text-white">F</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 border-2 border-white">
                    <AvatarImage src="/api/placeholder/30/30" alt="Instagram" />
                    <AvatarFallback className="bg-pink-500 text-white">I</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 border-2 border-white">
                    <AvatarImage src="/api/placeholder/30/30" alt="Twitter" />
                    <AvatarFallback className="bg-blue-400 text-white">T</AvatarFallback>
                  </Avatar>
                  <Avatar className="flex h-8 w-8 items-center justify-center border-2 border-white bg-gray-100 text-xs">
                    <Plus className="h-4 w-4" />
                  </Avatar>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Biểu đồ hiệu suất */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Hiệu suất tổng thể</CardTitle>
              <Select defaultValue="7days">
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Chọn thời gian" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">7 ngày qua</SelectItem>
                  <SelectItem value="30days">30 ngày qua</SelectItem>
                  <SelectItem value="90days">90 ngày qua</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-4">
                {/* Placeholder cho biểu đồ */}
                <div className="flex h-full items-center justify-center text-sm text-gray-500">
                  Biểu đồ hiệu suất sẽ được hiển thị tại đây
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bài viết gần đây */}
          <h2 className="mb-4 mt-10 text-xl font-semibold">Bài viết gần đây</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2].map((i) => (
              <Card key={i} className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-full flex-col">
                  <div className="bg-gray-100 p-2">
                    <div className="h-40 w-full rounded bg-gray-200"></div>
                  </div>
                  <CardContent className="flex-1 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">Facebook</Badge>
                      <span className="text-xs text-gray-500">2 giờ trước</span>
                    </div>
                    <h3 className="mb-2 text-lg font-medium">Tiêu đề bài viết {i}</h3>
                    <p className="text-sm text-gray-600">
                      Đây là nội dung mô tả ngắn của bài viết, giúp người dùng hiểu nhanh về nội dung...
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4 text-pink-500" />
                        <span className="text-sm text-gray-500">24</span>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 text-white hover:bg-blue-50">
                        Xem chi tiết
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Tab Phân tích */}
        <TabsContent value="analytics" className="mt-6 space-y-6">
          {/* Bộ lọc thời gian */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Phân tích chi tiết</h3>
            <Select defaultValue="7days">
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Chọn thời gian" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">7 ngày qua</SelectItem>
                <SelectItem value="30days">30 ngày qua</SelectItem>
                <SelectItem value="90days">90 ngày qua</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Biểu đồ tương tác */}
          <Card>
            <CardHeader>
              <CardTitle>Tương tác theo thời gian</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-4">
                <div className="flex h-full items-center justify-center text-sm text-gray-500">
                  Biểu đồ tương tác sẽ được hiển thị tại đây
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phân tích người dùng */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Phân bố độ tuổi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] rounded-lg bg-gradient-to-r from-pink-50 to-purple-50 p-4">
                  <div className="flex h-full items-center justify-center text-sm text-gray-500">
                    Biểu đồ độ tuổi
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Phân bố giới tính</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] rounded-lg bg-gradient-to-r from-blue-50 to-green-50 p-4">
                  <div className="flex h-full items-center justify-center text-sm text-gray-500">
                    Biểu đồ giới tính
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Nội dung tương tác cao */}
          <Card>
            <CardHeader>
              <CardTitle>Nội dung tương tác cao nhất</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="h-16 w-16 rounded-lg bg-gray-100"></div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Tiêu đề bài viết tương tác cao #{i}</h4>
                      <p className="text-sm text-gray-500">Đăng 2 ngày trước</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Heart className="h-5 w-5 text-pink-500" />
                        <span className="font-semibold">{1234 * i}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-5 w-5 text-blue-500" />
                        <span className="font-semibold">{234 * i}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab Bài viết */}
        <TabsContent value="posts" className="mt-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input className="pl-10" placeholder="Tìm kiếm bài viết..." />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Bộ lọc
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Lọc theo</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Mới nhất</DropdownMenuItem>
                  <DropdownMenuItem>Cũ nhất</DropdownMenuItem>
                  <DropdownMenuItem>Tương tác cao</DropdownMenuItem>
                  <DropdownMenuItem>Tương tác thấp</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Tạo bài viết
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Tạo bài viết mới</DialogTitle>
                  <DialogDescription>
                    Tạo bài viết mới để đăng lên các kênh xã hội của bạn.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Input placeholder="Tiêu đề bài viết" />
                  </div>
                  <div className="grid gap-2">
                    <Textarea
                      placeholder="Nội dung bài viết..."
                      className="min-h-32"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">Facebook</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">Instagram</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">Twitter</Badge>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Hủy</Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">Tạo bài viết</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tiêu đề</TableHead>
                    <TableHead>Ngày đăng</TableHead>
                    <TableHead>Kênh</TableHead>
                    <TableHead className="text-right">Tương tác</TableHead>
                    <TableHead className="w-16"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded bg-gray-100"></div>
                          <div>
                            <div className="font-medium">Tiêu đề bài viết #{i + 1}</div>
                            <div className="text-sm text-gray-500">Mô tả ngắn về bài viết...</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">24/03/2024</div>
                        <div className="text-xs text-gray-500">14:30</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">
                          Facebook
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-4">
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4 text-pink-500" />
                            <span>{1234 * (i + 1)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4 text-blue-500" />
                            <span>{234 * (i + 1)}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Xem chi tiết</DropdownMenuItem>
                            <DropdownMenuItem>Chỉnh sửa</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Xóa</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Hiển thị 1-5 của 12 bài viết
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Tab Kênh */}
        <TabsContent value="channels" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Facebook */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold">
                  <div className="flex items-center gap-2">
                    <Facebook className="h-5 w-5 text-blue-600" />
                    Facebook
                  </div>
                </CardTitle>
                <Badge className="bg-emerald-100 text-emerald-700">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Đã kết nối
                  </div>
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="text-sm text-gray-500">Người theo dõi</div>
                      <div className="text-xl font-semibold">12.5K</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-500">Tương tác</div>
                      <div className="text-xl font-semibold">5.2K</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500">Hiệu suất 7 ngày qua</div>
                    <div className="h-2 rounded-full bg-gray-100">
                      <div className="h-full w-3/4 rounded-full bg-blue-600"></div>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">Quản lý kết nối</Button>
                </div>
              </CardContent>
            </Card>

            {/* Instagram */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold">
                  <div className="flex items-center gap-2">
                    <Instagram className="h-5 w-5 text-pink-600" />
                    Instagram
                  </div>
                </CardTitle>
                <Badge className="bg-emerald-100 text-emerald-700">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Đã kết nối
                  </div>
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="text-sm text-gray-500">Người theo dõi</div>
                      <div className="text-xl font-semibold">8.3K</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-500">Tương tác</div>
                      <div className="text-xl font-semibold">3.1K</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500">Hiệu suất 7 ngày qua</div>
                    <div className="h-2 rounded-full bg-gray-100">
                      <div className="h-full w-1/2 rounded-full bg-pink-600"></div>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">Quản lý kết nối</Button>
                </div>
              </CardContent>
            </Card>

            {/* Twitter */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold">
                  <div className="flex items-center gap-2">
                    <Twitter className="h-5 w-5 text-blue-400" />
                    Twitter
                  </div>
                </CardTitle>
                <Badge variant="outline" className="bg-red-50 text-red-700">
                  <div className="flex items-center gap-1">
                    <XCircle className="h-3 w-3" />
                    Chưa kết nối
                  </div>
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="text-sm text-gray-500">Người theo dõi</div>
                      <div className="text-xl font-semibold">-</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-500">Tương tác</div>
                      <div className="text-xl font-semibold">-</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500">Hiệu suất 7 ngày qua</div>
                    <div className="h-2 rounded-full bg-gray-100"></div>
                  </div>
                  <Button className="w-full">Kết nối ngay</Button>
                </div>
              </CardContent>
            </Card>

            {/* Thêm kênh mới */}
            <Card className="flex items-center justify-center border-2 border-dashed p-6">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <Plus className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="mb-1 font-semibold">Thêm kênh mới</h3>
                <p className="mb-4 text-sm text-gray-500">Kết nối với các nền tảng xã hội khác</p>
                <Button>Kết nối kênh</Button>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
}