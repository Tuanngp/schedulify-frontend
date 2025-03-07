export interface DateRange {
  startDate: Date;
  endDate: Date;
  key: string;
}

export interface PerformanceData {
  name: string;
  posts: number;
  engagement: number;
  followers: number;
}

export interface PlatformData {
  name: string;
  value: number;
}

export interface TopContent {
  id: string;
  title: string;
  platform: string;
  engagement: number;
  reach: number;
  type: 'image' | 'video' | 'text';
  publishedAt: Date;
}

export type Platform = 'all' | 'facebook' | 'instagram' | 'twitter' | 'linkedin';
export type PostType = 'all' | 'image' | 'video' | 'text'; 