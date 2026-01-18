import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

// Button variant styles using cva (class-variance-authority)
const buttonVariants = cva(
  "inline-flex items-center cursor-pointer disabled:cursor-not-allowed transition-all justify-center font-normal transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-linear-to-b from-primary-button-bg1 to-primary-button-bg2 hover:bg-linear-to-b hover:from-primary-button-bg2 hover:to-primary-button-bg1 active:bg-linear-to-b active:from-primary-button-bg2 active:to-primary-button-bg1 text-white rounded-full border-primary-button-border",
        secondary:
          "bg-linear-to-b from-secondary-button-bg1 to-secondary-button-bg2 hover:bg-linear-to-b hover:from-secondary-button-bg2 hover:to-secondary-button-bg1 active:bg-linear-to-b active:from-secondary-button-bg2 active:to-secondary-button-bg1 text-white rounded-full border-secondary-button-border",
        accent: "bg-pink-500 hover:bg-pink-600 text-white rounded-lg",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-900 rounded-lg",
        link: "bg-transparent hover:bg-transparent text-primary underline rounded-lg",
        outline:
          "bg-transparent border-2 border-dark text-dark hover:border-dark/80 hover:text-dark/80 rounded-lg",
        border:
          "border border-primary text-primary hover:bg-primary hover:text-white rounded-lg",
        "border-secondary":
          "border border-secondary text-secondary hover:bg-secondary hover:text-white rounded-lg",
      },
      size: {
        default: "px-6 py-3 text-[11px]",
        sm: "px-4 py-3 text-[11px]",
        md: "px-6 py-2 text-[11px]",
        lg: "px-12 py-3 text-[11px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

// No Slot, just regular button rendering
const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
};

export { Button, buttonVariants };
