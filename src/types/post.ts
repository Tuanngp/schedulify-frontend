import { z } from "zod";

export const platformSchema = z.enum(["facebook", "instagram", "tiktok", "zalo"]);
export type Platform = z.infer<typeof platformSchema>;

export const mediaTypeSchema = z.enum(["image", "video"]);
export type MediaType = z.infer<typeof mediaTypeSchema>;

export const postMediaSchema = z.object({
  type: mediaTypeSchema,
  url: z.string().url(),
  file: z.instanceof(File).optional(),
  optimized: z.boolean().default(false),
});
export type PostMedia = z.infer<typeof postMediaSchema>;

export const platformOptionsSchema = z.object({
  facebook: z.object({
    privacy: z.enum(["public", "friends", "private"]),
    location: z.string().optional(),
  }).optional(),
  instagram: z.object({
    firstComment: z.string().optional(),
    hashtags: z.array(z.string()),
  }).optional(),
  tiktok: z.object({
    hashtags: z.array(z.string()),
    sound: z.string().optional(),
  }).optional(),
  zalo: z.object({
    customOptions: z.record(z.any()),
  }).optional(),
});
export type PlatformOptions = z.infer<typeof platformOptionsSchema>;

export const postFormSchema = z.object({
  content: z.string().min(1, "Nội dung không được để trống"),
  media: z.array(postMediaSchema),
  platforms: z.array(platformSchema).min(1, "Chọn ít nhất một nền tảng"),
  scheduledAt: z.date().optional(),
  timezone: z.string().default("Asia/Ho_Chi_Minh"),
  platformOptions: platformOptionsSchema,
  isDraft: z.boolean().default(false),
});

export type PostFormData = z.infer<typeof postFormSchema>;

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