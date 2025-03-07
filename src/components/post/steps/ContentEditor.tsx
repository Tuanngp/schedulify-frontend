import { useFormContext } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import { PostFormData } from "@/types/post";

export default function ContentEditor() {
  const { register, setValue, watch } = useFormContext<PostFormData>();
  const content = watch("content");

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Nội dung bài đăng</h2>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
        value={content}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist", "autolink", "lists", "link", "image", "charmap", "preview",
            "anchor", "searchreplace", "visualblocks", "code", "fullscreen",
            "insertdatetime", "media", "table", "code", "help", "wordcount"
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style: "body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-size: 16px }",
        }}
        onEditorChange={(content) => {
          setValue("content", content);
        }}
      />
      <input type="hidden" {...register("content")} />
    </div>
  );
} 