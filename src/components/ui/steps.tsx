import { cn } from "@/lib/utils";

interface Step {
  title: string;
}

interface StepsProps {
  steps: Step[];
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export function Steps({ steps, currentStep, onStepClick }: StepsProps) {
  return (
    <div className="flex items-center w-full">
      {steps.map((step, index) => (
        <div key={step.title} className="flex items-center w-full">
          <button
            type="button"
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-colors",
              currentStep === index
                ? "bg-primary text-primary-foreground"
                : index < currentStep
                ? "bg-primary/20 text-primary"
                : "bg-muted text-muted-foreground",
              onStepClick && "cursor-pointer hover:bg-primary/90"
            )}
            onClick={() => onStepClick?.(index)}
            disabled={!onStepClick}
          >
            {index + 1}
          </button>
          
          <div className="flex items-center w-full">
            <div
              className={cn(
                "h-1 w-full",
                index < currentStep
                  ? "bg-primary"
                  : index === currentStep
                  ? "bg-primary/50"
                  : "bg-muted"
              )}
            />
            <span
              className={cn(
                "ml-2 text-sm font-medium",
                currentStep === index
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {step.title}
            </span>
          </div>
          
          {index < steps.length - 1 && (
            <div
              className={cn(
                "h-1 w-full",
                index < currentStep - 1
                  ? "bg-primary"
                  : index === currentStep - 1
                  ? "bg-primary/50"
                  : "bg-muted"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
} 