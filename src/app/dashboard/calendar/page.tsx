'use client';

import React, { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import CalendarView from '@/components/CalendarView';
import { Post, Platform, PostStatus } from '@/types/post';
import { Bell, Calendar, Filter } from 'lucide-react';
import { format } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CalendarPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    scheduled: 0,
    published: 0,
    draft: 0,
  });
  const { toast } = useToast();

  useEffect(() => {
    // TODO: Fetch posts from API
    const mockPosts: Post[] = [
      {
        id: '1',
        title: 'Giới thiệu sản phẩm mới',
        content: 'Chúng tôi rất vui mừng được giới thiệu...',
        platform: Platform.Facebook,
        status: PostStatus.Scheduled,
        scheduledDate: new Date(2024, 2, 15, 10, 0),
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['product', 'launch'],
      },
      // Thêm mock data khác nếu cần
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
  }, [posts]);

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

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Calendar className="h-6 w-6" />
          Lịch Đăng Bài
        </h1>
        <div className="flex items-center gap-4">
          <Bell className="h-6 w-6 text-gray-500" />
          <Filter className="h-6 w-6 text-gray-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Tổng số bài viết
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Đã lên lịch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.scheduled}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Đã đăng
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.published}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Bản nháp
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-600">{stats.draft}</div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white rounded-lg shadow">
        <CalendarView
          posts={posts}
          onPostUpdate={handlePostUpdate}
          onPostCreate={handlePostCreate}
        />
      </div>
    </div>
  );
} 