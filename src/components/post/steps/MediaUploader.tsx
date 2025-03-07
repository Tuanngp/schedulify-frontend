import { useCallback } from "react";
import { useFormContext } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { PostFormData, PostMedia } from "@/types/post";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2, Upload } from "lucide-react";
import Image from "next/image";

export default function MediaUploader() {
  const { setValue, watch } = useFormContext<PostFormData>();
  const media = watch("media");

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const newMedia: PostMedia[] = await Promise.all(
      acceptedFiles.map(async (file) => {
        const url = URL.createObjectURL(file);
        return {
          type: file.type.startsWith("image/") ? "image" : "video",
          url,
          file,
          optimized: false,
        };
      })
    );

    setValue("media", [...media, ...newMedia]);
  }, [media, setValue]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
      "video/*": [".mp4", ".mov", ".avi"],
    },
    multiple: true,
  });

  const removeMedia = (index: number) => {
    const newMedia = [...media];
    if (newMedia[index]?.url) {
      URL.revokeObjectURL(newMedia[index].url);
    }
    newMedia.splice(index, 1);
    setValue("media", newMedia);
  };

  const optimizeMedia = async (index: number) => {
    const mediaItem = media[index];
    if (!mediaItem.file) return;

    try {
      // Thực hiện tối ưu hóa media ở đây
      // Ví dụ: sử dụng browser-image-compression cho ảnh
      const optimizedMedia = { ...mediaItem, optimized: true };
      const newMedia = [...media];
      newMedia[index] = optimizedMedia;
      setValue("media", newMedia);
    } catch (error) {
      console.error("Error optimizing media:", error);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Tải lên Media</h2>
      
      <div
        {...getRootProps()}
        className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
        <p className="mt-2 text-sm text-muted-foreground">
          {isDragActive
            ? "Thả file để tải lên"
            : "Kéo thả file hoặc click để chọn"}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Hỗ trợ: PNG, JPG, GIF, MP4, MOV (tối đa 100MB)
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {media.map((item, index) => (
          <Card key={item.url} className="relative group">
            {item.type === "image" ? (
              <div className="aspect-square relative">
                <Image
                  src={item.url}
                  alt="Uploaded media"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            ) : (
              <video
                src={item.url}
                className="w-full aspect-square object-cover rounded-t-lg"
                controls
              />
            )}
            
            <div className="p-2 flex justify-between items-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => optimizeMedia(index)}
                disabled={item.optimized}
              >
                {item.optimized ? "Đã tối ưu" : "Tối ưu"}
              </Button>
              
              <Button
                variant="destructive"
                size="icon"
                onClick={() => removeMedia(index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 