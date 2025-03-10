import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Platform, PostFormData } from "@/types/post";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import {
  Facebook,
  Hash,
  Instagram,
  MapPin,
  MessageCircle,
  Music,
} from "lucide-react";
import React from "react";
import { useFormContext } from "react-hook-form";

const platformIcons = {
  facebook: Facebook,
  instagram: Instagram,
  tiktok: Music,
  zalo: MessageCircle,
} as const;

type FacebookOptions = {
  privacy: "public" | "friends" | "private";
  location?: string;
};

type InstagramOptions = {
  hashtags: string[];
  firstComment?: string;
};

type TiktokOptions = {
  hashtags: string[];
  sound?: string;
};

type ZaloOptions = {
  // Add Zalo specific options here
};

export default function PostPreview() {
  const { watch } = useFormContext<PostFormData>();
  const {
    content,
    media,
    platforms,
    platformOptions,
    scheduledAt,
    timezone,
  } = watch();

  const isFacebookOptions = (platform: Platform, options: any): options is FacebookOptions => {
    return platform === 'facebook';
  };

  const isInstagramOptions = (platform: Platform, options: any): options is InstagramOptions => {
    return platform === 'instagram';
  };

  const isTiktokOptions = (platform: Platform, options: any): options is TiktokOptions => {
    return platform === 'tiktok';
  };

  const renderPlatformPreview = (platform: Platform) => {
    const Icon = platformIcons[platform];
    const options = platformOptions[platform];

    return (
      <Card className="p-4 space-y-4">
        <div className="flex items-center space-x-3">
          <Icon className="h-6 w-6" />
          <div>
            <h3 className="font-medium">
              Preview trên {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </h3>
            {scheduledAt && (
              <p className="text-sm text-muted-foreground">
                Sẽ đăng vào {format(scheduledAt, "HH:mm 'ngày' dd/MM/yyyy", { locale: vi })}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-4">
          {/* Media Preview */}
          {media.length > 0 && (
            <div className="grid grid-cols-2 gap-2">
              {media.map((item, index) => (
                <div key={index} className="relative aspect-square">
                  {item.type === "image" ? (
                    <img
                      src={item.url}
                      alt="Preview"
                      className="object-cover w-full h-full rounded-md"
                    />
                  ) : (
                    <video
                      src={item.url}
                      className="object-cover w-full h-full rounded-md"
                      controls
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Content Preview */}
          <div
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Platform-specific Options */}
          {platform === "facebook" && isFacebookOptions(platform, options) && (
            <div className="text-sm text-muted-foreground space-y-1">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{options.location || "Không có vị trí"}</span>
              </div>
              <div>
                Quyền riêng tư:{" "}
                {options.privacy === "public"
                  ? "Công khai"
                  : options.privacy === "friends"
                  ? "Bạn bè"
                  : "Chỉ mình tôi"}
              </div>
            </div>
          )}

          {(platform === "instagram" || platform === "tiktok") &&
            ((isInstagramOptions(platform, options) || isTiktokOptions(platform, options)) && options.hashtags) && (
              <div className="flex flex-wrap gap-2">
                {options.hashtags.map((tag: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center space-x-1 text-sm text-blue-500"
                  >
                    <Hash className="h-4 w-4" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            )}

          {platform === "instagram" && isInstagramOptions(platform, options) && options.firstComment && (
            <div className="text-sm text-muted-foreground">
              Bình luận đầu tiên: {options.firstComment}
            </div>
          )}

          {platform === "tiktok" && isTiktokOptions(platform, options) && options.sound && (
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Music className="h-4 w-4" />
              <span>{options.sound}</span>
            </div>
          )}
        </div>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Xem trước bài đăng</h2>

      <Tabs defaultValue={platforms[0]} className="w-full">
        <TabsList className="w-full justify-start">
          {platforms.map((platform) => (
            <TabsTrigger key={platform} value={platform} className="space-x-2">
              {platformIcons[platform] && React.createElement(platformIcons[platform], {
                className: "h-4 w-4"
              })}
              <span>
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {platforms.map((platform) => (
          <TabsContent key={platform} value={platform}>
            {renderPlatformPreview(platform)}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
} 