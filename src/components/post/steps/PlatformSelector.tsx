import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Platform, PostFormData } from "@/types/post";
import {
  Facebook,
  Hash,
  Instagram,
  MapPin,
  MessageCircle,
  Music,
} from "lucide-react";
import { useFormContext } from "react-hook-form";

const platforms = [
  {
    id: "facebook",
    name: "Facebook",
    icon: Facebook,
    options: {
      privacy: [
        { value: "public", label: "Công khai" },
        { value: "friends", label: "Bạn bè" },
        { value: "private", label: "Chỉ mình tôi" },
      ],
    },
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: Instagram,
    options: {
      firstComment: true,
      hashtags: true,
    },
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: Music,
    options: {
      hashtags: true,
      sound: true,
    },
  },
  {
    id: "zalo",
    name: "Zalo",
    icon: MessageCircle,
    options: {
      customOptions: true,
    },
  },
] as const;

export default function PlatformSelector() {
  const { register, setValue, watch } = useFormContext<PostFormData>();
  const selectedPlatforms = watch("platforms");
  const platformOptions = watch("platformOptions");

  const togglePlatform = (platform: Platform) => {
    const current = new Set(selectedPlatforms);
    if (current.has(platform)) {
      current.delete(platform);
      const { [platform]: _, ...rest } = platformOptions;
      setValue("platformOptions", rest);
    } else {
      current.add(platform);
      setValue(`platformOptions.${platform}`, { privacy: "friends" });
    }
    setValue("platforms", Array.from(current));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Chọn nền tảng đăng bài</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          const isSelected = selectedPlatforms.includes(platform.id as Platform);

          return (
            <Card
              key={platform.id}
              className={`p-4 cursor-pointer transition-colors ${
                isSelected ? "border-primary" : ""
              }`}
              onClick={() => togglePlatform(platform.id as Platform)}
            >
              <div className="flex items-center space-x-4">
                <Checkbox
                  checked={isSelected}
                  onCheckedChange={() =>
                    togglePlatform(platform.id as Platform)
                  }
                />
                <Icon className="h-6 w-6" />
                <span className="font-medium">{platform.name}</span>
              </div>

              {isSelected && (
                <div className="mt-4 space-y-4">
                  {platform.id === "facebook" && (
                    <div className="space-y-2">
                      <Label>Quyền riêng tư</Label>
                      <RadioGroup
                        defaultValue={platformOptions.facebook?.privacy}
                        onValueChange={(value) =>
                          setValue("platformOptions.facebook.privacy", "public")
                        }
                      >
                        {platform.options.privacy.map((option) => (
                          <div
                            key={option.value}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem value={option.value} />
                            <Label>{option.label}</Label>
                          </div>
                        ))}
                      </RadioGroup>

                      <div className="space-y-2">
                        <Label>Vị trí</Label>
                        <div className="flex space-x-2">
                          <MapPin className="h-5 w-5" />
                          <Input
                            placeholder="Thêm vị trí"
                            {...register("platformOptions.facebook.location")}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {(platform.id === "instagram" ||
                    platform.id === "tiktok") && (
                    <div className="space-y-4">
                      {platform.options.hashtags && (
                        <div className="space-y-2">
                          <Label>Hashtags</Label>
                          <div className="flex space-x-2">
                            <Hash className="h-5 w-5" />
                            <Input
                              placeholder="Nhập hashtags (phân cách bằng dấu phẩy)"
                              onChange={(e) => {
                                const hashtags = e.target.value
                                  .split(",")
                                  .map((tag) => tag.trim())
                                  .filter(Boolean);
                                setValue(
                                  `platformOptions.${platform.id}.hashtags`,
                                  hashtags
                                );
                              }}
                            />
                          </div>
                        </div>
                      )}

                      {platform.id === "instagram" && (
                        <div className="space-y-2">
                          <Label>Bình luận đầu tiên</Label>
                          <Input
                            placeholder="Thêm bình luận đầu tiên"
                            {...register(
                              "platformOptions.instagram.firstComment"
                            )}
                          />
                        </div>
                      )}

                      {platform.id === "tiktok" && (
                        <div className="space-y-2">
                          <Label>Âm thanh</Label>
                          <div className="flex space-x-2">
                            <Music className="h-5 w-5" />
                            <Input
                              placeholder="Thêm âm thanh"
                              {...register("platformOptions.tiktok.sound")}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {platform.id === "zalo" && (
                    <div className="space-y-2">
                      <Label>Tùy chọn khác</Label>
                      <Input
                        placeholder="Thêm tùy chọn"
                        onChange={(e) =>
                          setValue("platformOptions.zalo.customOptions", {
                            custom: e.target.value,
                          })
                        }
                      />
                    </div>
                  )}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
} 