import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border-border",
        primary: "border-primary/50 text-primary dark:text-primary-foreground bg-primary/10 [&>svg]:text-primary",
        secondary: "border-secondary/50 text-secondary dark:text-secondary-foreground bg-secondary/10 [&>svg]:text-secondary",
        success: "border-success/50 text-success dark:text-success-foreground bg-success/10 [&>svg]:text-success",
        warning: "border-warning/50 text-warning dark:text-warning-foreground bg-warning/10 [&>svg]:text-warning",
        error: "border-destructive/50 text-destructive dark:text-destructive-foreground bg-destructive/10 [&>svg]:text-destructive",
        info: "border-info/50 text-info dark:text-info-foreground bg-info/10 [&>svg]:text-info",
      },
      size: {
        default: "p-4",
        sm: "p-3 text-sm",
        lg: "p-6",
      },
      rounded: {
        default: "rounded-lg",
        full: "rounded-full",
        none: "rounded-none",
      },
      shadow: {
        default: "shadow-none",
        sm: "shadow-sm",
        md: "shadow-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
      shadow: "default",
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, size, rounded, shadow, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant, size, rounded, shadow }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed opacity-90", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription }; 