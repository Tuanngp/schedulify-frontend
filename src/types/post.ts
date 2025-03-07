export enum Platform {
  Facebook = 'Facebook',
  Instagram = 'Instagram',
  Twitter = 'Twitter',
  LinkedIn = 'LinkedIn'
}

export enum PostStatus {
  Draft = 'Draft',
  Scheduled = 'Scheduled',
  Published = 'Published'
}

export interface Post {
  id: string;
  title: string;
  content: string;
  platform: Platform;
  status: PostStatus;
  scheduledDate: Date;
  createdAt: Date;
  updatedAt: Date;
  images?: string[];
  tags?: string[];
} 