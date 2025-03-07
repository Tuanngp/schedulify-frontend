import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20",
        secondary:
          "bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20",
        accent:
          "bg-accent/10 text-accent border-accent/20 hover:bg-accent/20",
        success:
          "bg-success/10 text-success border-success/20 hover:bg-success/20",
        warning:
          "bg-warning/10 text-warning border-warning/20 hover:bg-warning/20",
        error:
          "bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20",
        info:
          "bg-info/10 text-info border-info/20 hover:bg-info/20",
        outline:
          "text-foreground border-input hover:bg-accent/10 hover:text-accent hover:border-accent",
        solid: {
          default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/90",
          secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90",
          accent: "border-transparent bg-accent text-accent-foreground hover:bg-accent/90",
          success: "border-transparent bg-success text-success-foreground hover:bg-success/90",
          warning: "border-transparent bg-warning text-warning-foreground hover:bg-warning/90",
          error: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/90",
          info: "border-transparent bg-info text-info-foreground hover:bg-info/90",
        },
      },
      size: {
        default: "text-xs",
        sm: "text-[10px] px-2 py-0.25",
        lg: "text-sm px-3 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

export { Badge, badgeVariants }; 