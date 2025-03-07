'use client';

import React, { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import CalendarView from '@/components/CalendarView';
import { Post, Platform, PostStatus } from '@/types/post';
import { Bell, Calendar, Filter, PlusCircle, Search, Settings, TrendingUp } from 'lucide-react';
import { format } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function CalendarPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    scheduled: 0,
    published: 0,
    draft: 0,
  });
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('calendar');

  useEffect(() => {
    // TODO: Fetch posts from API
    const mockPosts: Post[] = [
      {
        id: '1',
        title: 'Giới thiệu sản phẩm mới',
        content: 'Chúng tôi rất vui mừng được giới thiệu...',
        platform: 'facebook',
        status: PostStatus.Scheduled,
        scheduledDate: new Date(2024, 2, 15, 10, 0),
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['product', 'launch'],
      },
      {
        id: '2',
        title: 'Chiến dịch khuyến mãi mùa hè',
        content: 'Không thể bỏ lỡ ưu đãi lớn nhất năm...',
        platform: 'instagram',
        status: PostStatus.Draft,
        scheduledDate: new Date(2024, 2, 20, 14, 30),
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['promotion', 'summer'],
      },
      {
        id: '3',
        title: 'Câu chuyện thành công của khách hàng',
        content: 'Hãy xem cách khách hàng của chúng tôi đã đạt được...',
        platform: 'tiktok',
        status: PostStatus.Published,
        scheduledDate: new Date(2024, 2, 10, 9, 0),
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['testimonial', 'success'],
      },
    ];
    setPosts(mockPosts);
  }, []);

  useEffect(() => {
    // Cập nhật thống kê
    setStats({
      total: posts.length,
      scheduled: posts.filter(post => post.status === PostStatus.Scheduled).length,
      published: posts.filter(post => post.status === PostStatus.Published).length,
      draft: posts.filter(post => post.status === PostStatus.Draft).length,
    });

    // Thiết lập thông báo cho các bài đăng đã lên lịch
    posts
      .filter(post => post.status === PostStatus.Scheduled)
      .forEach(post => {
        const timeUntilPost = new Date(post.scheduledDate).getTime() - new Date().getTime();
        if (timeUntilPost > 0) {
          setTimeout(() => {
            toast({
              title: 'Đến giờ đăng bài!',
              description: `Bài viết "${post.title}" cần được đăng trên ${post.platform}`,
              duration: 5000,
            });
          }, timeUntilPost);
        }
      });
  }, [posts, toast]);

  const handlePostUpdate = async (updatedPost: Post) => {
    // TODO: Gọi API để cập nhật bài đăng
    setPosts(currentPosts =>
      currentPosts.map(post =>
        post.id === updatedPost.id ? updatedPost : post
      )
    );
    
    toast({
      title: 'Cập nhật thành công',
      description: 'Bài viết đã được cập nhật',
      duration: 3000,
    });
  };

  const handlePostCreate = async (newPost: Post) => {
    // TODO: Gọi API để tạo bài đăng mới
    const post = {
      ...newPost,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    setPosts(currentPosts => [...currentPosts, post]);
    
    toast({
      title: 'Tạo bài viết thành công',
      description: 'Bài viết mới đã được tạo',
      duration: 3000,
    });
  };

  const getPlatformColor = (platform: Platform) => {
    switch (platform) {
      case 'facebook':
        return 'bg-blue-100 text-blue-600';
      case 'instagram':
        return 'bg-pink-100 text-pink-600';
      case 'tiktok':
        return 'bg-sky-100 text-sky-600';
      case 'zalo':
        return 'bg-indigo-100 text-indigo-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusColor = (status: PostStatus) => {
    switch (status) {
      case PostStatus.Published:
        return 'bg-green-100 text-green-600';
      case PostStatus.Scheduled:
        return 'bg-blue-100 text-blue-600';
      case PostStatus.Draft:
        return 'bg-gray-100 text-gray-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
            <Calendar className="h-8 w-8 text-indigo-500" />
            Lịch Đăng Bài
          </h1>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-initial">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Tìm kiếm bài viết..."
                className="pl-10 pr-3 py-2 w-full sm:w-64 rounded-full bg-white border-gray-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center gap-1 shadow-sm">
              <PlusCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Tạo bài viết</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Tổng số bài viết
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-gray-900">{stats.total}</div>
                <div className="p-2 bg-indigo-100 rounded-full">
                  <TrendingUp className="h-5 w-5 text-indigo-600" />
                </div>
              </div>
              <CardDescription className="text-xs text-gray-500 mt-2">
                Tăng 12% so với tuần trước
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Đã lên lịch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-blue-600">{stats.scheduled}</div>
                <div className="p-2 bg-blue-100 rounded-full">
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <CardDescription className="text-xs text-gray-500 mt-2">
                {stats.scheduled > 0 ? 'Sẽ đăng trong 3 ngày tới' : 'Không có bài viết đã lên lịch'}
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Đã đăng
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-green-600">{stats.published}</div>
                <div className="p-2 bg-green-100 rounded-full">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <CardDescription className="text-xs text-gray-500 mt-2">
                {stats.published > 0 ? 'Lượt tương tác: 243' : 'Chưa có bài viết nào được đăng'}
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Bản nháp
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-gray-600">{stats.draft}</div>
                <div className="p-2 bg-gray-100 rounded-full">
                  <Settings className="h-5 w-5 text-gray-600" />
                </div>
              </div>
              <CardDescription className="text-xs text-gray-500 mt-2">
                {stats.draft > 0 ? 'Cần hoàn thiện' : 'Không có bản nháp nào'}
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <Tabs 
              defaultValue="calendar" 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="w-full"
            >
              <div className="flex justify-between items-center">
                <TabsList className="bg-gray-100">
                  <TabsTrigger value="calendar" className="data-[state=active]:bg-white">
                    <Calendar className="h-4 w-4 mr-2" />
                    Lịch
                  </TabsTrigger>
                  <TabsTrigger value="list" className="data-[state=active]:bg-white">
                    <Filter className="h-4 w-4 mr-2" />
                    Danh sách
                  </TabsTrigger>
                </TabsList>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1 border-gray-200 hover:bg-gray-50 text-gray-700">
                      <Filter className="h-4 w-4" />
                      <span>Lọc</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white border border-gray-100 shadow-lg">
                    <DropdownMenuItem className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 cursor-pointer focus:bg-gray-50 focus:text-gray-900">
                      Tất cả nền tảng
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-gray-700 hover:bg-blue-50 hover:text-blue-700 cursor-pointer focus:bg-blue-50 focus:text-blue-700">
                      Facebook
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-gray-700 hover:bg-pink-50 hover:text-pink-700 cursor-pointer focus:bg-pink-50 focus:text-pink-700">
                      Instagram
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-gray-700 hover:bg-sky-50 hover:text-sky-700 cursor-pointer focus:bg-sky-50 focus:text-sky-700">
                      TikTok
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 cursor-pointer focus:bg-indigo-50 focus:text-indigo-700">
                      Zalo
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              <TabsContent value="calendar" className="p-0 mt-4">
                <CalendarView
                  posts={posts}
                  onPostUpdate={handlePostUpdate}
                  onPostCreate={handlePostCreate}
                />
              </TabsContent>
              
              <TabsContent value="list" className="p-0 mt-4">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tiêu đề</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nền tảng</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày lên lịch</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hành động</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {posts.map((post) => (
                        <tr key={post.id} className="hover:bg-gray-50">
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{post.title}</div>
                            <div className="flex mt-1 gap-1">
                              {post.tags?.map((tag) => (
                                <span
                                  key={tag}
                                  className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPlatformColor(post.platform)}`}>
                              {post.platform}
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                              {post.status}
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            {format(post.scheduledDate, 'dd/MM/yyyy HH:mm')}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-gray-200 hover:bg-gray-50 text-gray-700"
                                onClick={() => handlePostUpdate(post)}
                              >
                                <Settings className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-gray-200 hover:bg-gray-50 text-gray-700"
                                onClick={() => {
                                  toast({
                                    title: 'Thông báo',
                                    description: `Đã thêm thông báo cho bài "${post.title}"`,
                                  });
                                }}
                              >
                                <Bell className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}