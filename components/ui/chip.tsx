import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const chipVariants = cva(
  "inline-flex items-center justify-center rounded-2 px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        soft: "",
        solid: "",
      },
      color: {
        tosca: "",
        green: "",
        "dark-blue": "",
        gray: "",
        blue: "",
        orange: "",
        red: "",
      },
    },
    compoundVariants: [
      // Solid Variants
      { variant: "solid", color: "tosca", className: "bg-tosca-500 text-white" },
      { variant: "solid", color: "green", className: "bg-green-500 text-white" },
      { variant: "solid", color: "dark-blue", className: "bg-dark-blue-500 text-white" },
      { variant: "solid", color: "gray", className: "bg-gray-500 text-white" },
      { variant: "solid", color: "blue", className: "bg-blue-500 text-white" },
      { variant: "solid", color: "orange", className: "bg-orange-500 text-white" },
      { variant: "solid", color: "red", className: "bg-red-500 text-white" },
      
      // Soft Variants
      { variant: "soft", color: "tosca", className: "bg-[#E6F4F7] text-tosca-500" },
      { variant: "soft", color: "green", className: "bg-green-50 text-green-500" },
      { variant: "soft", color: "dark-blue", className: "bg-dark-blue-50 text-dark-blue-500" },
      { variant: "soft", color: "gray", className: "bg-gray-50 text-gray-500" },
      { variant: "soft", color: "blue", className: "bg-blue-50 text-blue-500" },
      { variant: "soft", color: "orange", className: "bg-orange-50 text-orange-500" },
      { variant: "soft", color: "red", className: "bg-red-50 text-red-500" },
    ],
    defaultVariants: {
      variant: "soft",
      color: "gray",
    },
  }
)

export interface ChipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof chipVariants> {}

function Chip({ className, variant, color, ...props }: ChipProps) {
  return (
    <div className={cn(chipVariants({ variant, color }), className)} {...props} />
  )
}

export { Chip, chipVariants }
