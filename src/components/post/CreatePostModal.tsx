'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Post, PostFormData, PostStatus } from '@/types/post';
import CreatePostForm from './CreatePostForm';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: Post) => void;
  initialDate?: Date;
  post?: Post;
}

const convertFormDataToPost = (formData: PostFormData, existingPost?: Post): Post => {
  return {
    id: existingPost?.id || String(Date.now()),
    title: formData.content.slice(0, 100), // Lấy 100 ký tự đầu làm title
    content: formData.content,
    platform: formData.platforms[0], // Chọn platform đầu tiên
    status: formData.isDraft ? PostStatus.Draft : (formData.scheduledAt ? PostStatus.Scheduled : PostStatus.Published),
    scheduledDate: formData.scheduledAt || new Date(),
    createdAt: existingPost?.createdAt || new Date(),
    updatedAt: new Date(),
    tags: [], // TODO: Extract tags from content or add tags field
    images: formData.media
      .filter(m => m.type === "image")
      .map(m => m.url)
  };
};

const convertPostToFormData = (post: Post): PostFormData => {
  return {
    content: post.content,
    media: (post.images || []).map(url => ({
      type: "image" as const,
      url,
      optimized: true
    })),
    platforms: [post.platform],
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    platformOptions: {},
    isDraft: post.status === PostStatus.Draft,
    scheduledAt: post.status === PostStatus.Scheduled ? post.scheduledDate : undefined
  };
};

interface CreatePostFormProps {
  initialData?: PostFormData;
  initialDate?: Date;
  onSubmit: (data: PostFormData) => Promise<void>;
  onCancel: () => void;
}

export default function CreatePostModal({
  isOpen,
  onClose,
  onSubmit,
  initialDate,
  post,
}: CreatePostModalProps) {
  const handleSubmit = async (formData: PostFormData) => {
    const postData = convertFormDataToPost(formData, post);
    await onSubmit(postData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[90vw]">
        <DialogHeader>
          <DialogTitle>
            {post ? 'Chỉnh sửa bài đăng' : 'Tạo bài đăng mới'}
          </DialogTitle>
        </DialogHeader>
        
        <CreatePostForm
          initialData={post ? convertPostToFormData(post) : undefined}
          initialDate={initialDate}
          onSubmit={handleSubmit}
          onCancel={onClose}
        />
      </DialogContent>
    </Dialog>
  );
} 