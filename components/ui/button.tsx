import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-background-inactive disabled:text-font-inactive",
  {
    variants: {
      variant: {
        primary: "bg-tosca-500 text-white hover:bg-tosca-600 active:bg-tosca-700",
        tertiary: "bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700",
        destructive: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700",
        "primary-outline": "border border-tosca-500 text-tosca-500 bg-transparent hover:border-tosca-600 hover:text-tosca-600 active:border-tosca-700 active:text-tosca-700 disabled:border-background-inactive disabled:bg-transparent",
        "tertiary-outline": "border border-gray-500 text-gray-500 bg-transparent hover:border-gray-600 hover:text-gray-600 active:border-gray-700 active:text-gray-700 disabled:border-background-inactive disabled:bg-transparent",
        "destructive-outline": "border border-red-500 text-red-500 bg-transparent hover:border-red-600 hover:text-red-600 active:border-red-700 active:text-red-700 disabled:border-background-inactive disabled:bg-transparent",
        ghost: "hover:bg-gray-100 hover:text-gray-900",
        link: "text-tosca-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-[52px] px-6 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
