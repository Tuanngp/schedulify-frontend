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

export default function CreatePostForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const methods = useForm<PostFormData>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      content: "",
      media: [],
      platforms: [],
      timezone: "Asia/Ho_Chi_Minh",
      platformOptions: {},
      isDraft: false,
    },
  });

  const { handleSubmit, formState: { isSubmitting } } = methods;

  const onSubmit = async (data: PostFormData) => {
    try {
      if (data.isDraft) {
        // Lưu bản nháp
        console.log("Saving draft:", data);
      } else {
        // Đăng bài
        console.log("Publishing post:", data);
      }
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

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
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
          >
            Quay lại
          </Button>

          <div className="space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => methods.setValue("isDraft", true)}
              disabled={isSubmitting}
            >
              Lưu nháp
            </Button>

            {currentStep === steps.length - 1 ? (
              <Button type="submit" disabled={isSubmitting}>
                Đăng bài
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