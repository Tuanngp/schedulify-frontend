'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import SuggestionPanel from './SuggestionPanel';

interface ContentForm {
  prompt: string;
  tone: string;
  length: string;
  purpose: string;
  platform: string;
}

export default function ContentCreator() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [form, setForm] = useState<ContentForm>({
    prompt: '',
    tone: 'professional',
    length: 'medium',
    purpose: 'engagement',
    platform: 'facebook',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Integrate with OpenAI API
      const response = await fetch('/api/generate-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error('Lỗi khi tạo nội dung');

      const data = await response.json();
      setGeneratedContent(data.content);
    } catch (error) {
      toast({
        title: 'Có lỗi xảy ra',
        description: 'Không thể tạo nội dung. Vui lòng thử lại.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="prompt">Yêu cầu nội dung</Label>
            <Textarea
              id="prompt"
              placeholder="Mô tả nội dung bạn muốn tạo..."
              value={form.prompt}
              onChange={(e) => setForm({ ...form, prompt: e.target.value })}
              className="min-h-[100px]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Giọng điệu</Label>
              <Select value={form.tone} onValueChange={(value) => setForm({ ...form, tone: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn giọng điệu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="professional">Chuyên nghiệp</SelectItem>
                  <SelectItem value="casual">Thân thiện</SelectItem>
                  <SelectItem value="humorous">Hài hước</SelectItem>
                  <SelectItem value="formal">Trang trọng</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Độ dài</Label>
              <Select value={form.length} onValueChange={(value) => setForm({ ...form, length: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn độ dài" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="short">Ngắn</SelectItem>
                  <SelectItem value="medium">Trung bình</SelectItem>
                  <SelectItem value="long">Dài</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Mục đích</Label>
              <Select value={form.purpose} onValueChange={(value) => setForm({ ...form, purpose: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn mục đích" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engagement">Tương tác</SelectItem>
                  <SelectItem value="sales">Bán hàng</SelectItem>
                  <SelectItem value="awareness">Nhận diện thương hiệu</SelectItem>
                  <SelectItem value="education">Giáo dục</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Nền tảng</Label>
              <Select value={form.platform} onValueChange={(value) => setForm({ ...form, platform: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn nền tảng" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="twitter">Twitter</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Đang tạo...
              </>
            ) : (
              'Tạo nội dung'
            )}
          </Button>
        </form>
      </div>

      <div className="space-y-6">
        {generatedContent && (
          <Card className="p-4">
            <Label>Nội dung đã tạo</Label>
            <Textarea
              value={generatedContent}
              onChange={(e) => setGeneratedContent(e.target.value)}
              className="min-h-[200px] mt-2"
            />
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => navigator.clipboard.writeText(generatedContent)}>
                Sao chép
              </Button>
              <Button onClick={() => {
                // TODO: Implement save functionality
                toast({
                  title: 'Đã lưu',
                  description: 'Nội dung đã được lưu thành công',
                });
              }}>
                Lưu
              </Button>
            </div>
          </Card>
        )}

        <SuggestionPanel content={generatedContent} />
      </div>
    </div>
  );
} 