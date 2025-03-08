'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Download, Search, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ContentHistoryItem {
  id: string;
  title: string;
  content: string;
  platform: string;
  createdAt: string;
}

export default function ContentHistory() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [history, setHistory] = useState<ContentHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      // TODO: Integrate with API
      const response = await fetch('/api/content-history');
      if (!response.ok) throw new Error('Lỗi khi tải lịch sử');
      
      const data = await response.json();
      setHistory(data);
    } catch (error) {
      toast({
        title: 'Có lỗi xảy ra',
        description: 'Không thể tải lịch sử nội dung',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const deleteItem = async (id: string) => {
    try {
      // TODO: Integrate with API
      await fetch(`/api/content-history/${id}`, {
        method: 'DELETE',
      });
      
      setHistory(history.filter(item => item.id !== id));
      toast({
        title: 'Đã xóa',
        description: 'Nội dung đã được xóa thành công',
      });
    } catch (error) {
      toast({
        title: 'Có lỗi xảy ra',
        description: 'Không thể xóa nội dung',
        variant: 'destructive',
      });
    }
  };

  const exportContent = (item: ContentHistoryItem) => {
    const blob = new Blob([item.content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${item.title.toLowerCase().replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const filteredHistory = history.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Tìm kiếm nội dung..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="space-y-4">
        {isLoading ? (
          <div className="text-center p-4">Đang tải...</div>
        ) : filteredHistory.length === 0 ? (
          <div className="text-center p-4 text-muted-foreground">
            {searchTerm ? 'Không tìm thấy kết quả' : 'Chưa có nội dung nào'}
          </div>
        ) : (
          filteredHistory.map((item) => (
            <Card key={item.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.platform} • {new Date(item.createdAt).toLocaleDateString('vi-VN')}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => exportContent(item)}
                      title="Xuất nội dung"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteItem(item.id)}
                      title="Xóa"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-sm line-clamp-3">{item.content}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
} 