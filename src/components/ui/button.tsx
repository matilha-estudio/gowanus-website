import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-between uppercase whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        navy: "bg-navy text-white hover:bg-marigold hover:text-navy",
        marigold: "bg-marigold text-navy",
        navyOutline:
          "bg-transparent border-navy border-2 text-navy hover:bg-navy hover:text-white",
        white:
          "bg-transparent border-white border-2 text-white hover:bg-white hover:text-navy",
        icon: "bg-background hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "subheader2",
        lg: "subheader2",
        icon: "h-10 w-10",
        mobile: "h-6 w-fit accent4",
        md: "subheader5"
      },
    },
    defaultVariants: {
      variant: "navy",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  label?: string;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, label, icon, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const isIcon = variant === "icon";

    const pyLabel = size === "default" ? "px-6 py-0" : size === "mobile" ? "p-2" : "px-8 py-4";
    const pyIcon = size === "default" ? "p-3" : size === "mobile" ? "py-2" : "p-4";

    // Adicionando a lógica para aplicar o hover no ícone também quando a variant for "marigold"
    const bgIcon =
      variant === 'navy'
        ? 'bg-marigold text-navy'
        : variant === 'marigold'
          ? 'bg-navy text-white'
          : variant === 'navyOutline'
            ? 'bg-navy text-white'
            : variant === 'white'
            && 'bg-white text-navy'

    const iconHoverEffect = variant === "marigold" && "group-hover:bg-marigold group-hover:text-navy";

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ variant, size }),
          className,
          isIcon && "w-fit",
          "group" // Adiciona uma classe de grupo para permitir o hover em componentes filhos
        )}
        {...props}
      >
        {!isIcon && label && <span className={pyLabel}>{label}</span>}
        {icon && (
          <span
            className={cn("flex items-center h-full", pyIcon, bgIcon, iconHoverEffect)}
          >
            {icon}
          </span>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };