import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostFormData, postFormSchema } from "@/types/post";
import { Steps } from "@/components/ui/steps";
import { Button } from "@/components/ui/button";
import ContentEditor from "./steps/ContentEditor";
import MediaUploader from "./steps/MediaUploader";
import PlatformSelector from "./steps/PlatformSelector";
import ScheduleOptions from "./steps/ScheduleOptions";
import PostPreview from "./steps/PostPreview";

const steps = [
  { id: "content", title: "Nội dung", component: ContentEditor },
  { id: "media", title: "Media", component: MediaUploader },
  { id: "platforms", title: "Nền tảng", component: PlatformSelector },
  { id: "schedule", title: "Lịch đăng", component: ScheduleOptions },
  { id: "preview", title: "Xem trước", component: PostPreview },
];

interface CreatePostFormProps {
  initialData?: PostFormData;
  initialDate?: Date;
  onSubmit: (data: PostFormData) => Promise<void>;
  onCancel: () => void;
}

export default function CreatePostForm({
  initialData,
  initialDate,
  onSubmit,
  onCancel
}: CreatePostFormProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const methods = useForm<PostFormData>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      content: initialData?.content || "",
      media: initialData?.media || [],
      platforms: initialData?.platforms || [],
      timezone: initialData?.timezone || "Asia/Ho_Chi_Minh",
      platformOptions: initialData?.platformOptions || {},
      isDraft: initialData?.isDraft || false,
      scheduledAt: initialData?.scheduledAt || initialDate,
    },
  });

  const { handleSubmit, formState: { isSubmitting } } = methods;

  const CurrentStepComponent = steps[currentStep].component;

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <Steps
          steps={steps.map(step => ({ title: step.title }))}
          currentStep={currentStep}
          onStepClick={setCurrentStep}
        />

        <div className="mt-8">
          <CurrentStepComponent />
        </div>

        <div className="flex justify-between mt-8">
          {currentStep === 0 ? (
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
            >
              Hủy
            </Button>
          ) : (
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
            >
              Quay lại
            </Button>
          )}

          <div className="space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                methods.setValue("isDraft", true);
                methods.handleSubmit(onSubmit)();
              }}
              disabled={isSubmitting}
            >
              Lưu nháp
            </Button>

            {currentStep === steps.length - 1 ? (
              <Button type="submit" disabled={isSubmitting}>
                {initialData ? 'Cập nhật' : 'Đăng bài'}
              </Button>
            ) : (
              <Button type="button" onClick={nextStep}>
                Tiếp theo
              </Button>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
} 