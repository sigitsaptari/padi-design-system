import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { AlertCircle, CheckCircle2 } from "lucide-react"

const textFieldVariants = cva(
  "flex w-full rounded-2 border bg-white text-sm transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-background-inactive disabled:text-font-inactive disabled:border-[#dee3ed] placeholder:text-gray-200",
  {
    variants: {
      size: {
        md: "h-11 px-4",
        sm: "h-9 px-4 text-xs",
        lg: "h-[52px] px-5 text-base",
      },
      state: {
        default: "border-[#dee3ed] hover:border-tosca-500 focus-within:border-tosca-500 focus-within:ring-2 focus-within:ring-tosca-50",
        error: "border-red-500 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-50 text-red-500",
        success: "border-green-500 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-50 text-green-500",
        filled: "border-[#dee3ed] text-gray-500",
      },
    },
    defaultVariants: {
      size: "md",
      state: "default",
    },
  }
)

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof textFieldVariants> {
  label?: string
  hint?: string
  iconL?: React.ReactNode
  iconR?: React.ReactNode
  prefixText?: string
  suffixText?: string
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { className, type, size, state, label, hint, iconL, iconR, prefixText, suffixText, disabled, ...props },
    ref
  ) => {
    // Determine active state
    const activeState = disabled ? "default" : state

    return (
      <div className={cn("flex flex-col gap-2 w-full max-w-[300px]", className)}>
        {label && (
          <label
            className={cn(
              "font-medium text-sm text-gray-500",
              disabled && "text-gray-300"
            )}
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center w-full">
          {prefixText && (
            <div className="absolute left-4 flex items-center gap-3">
              <span className="text-gray-500 text-sm font-medium">{prefixText}</span>
              <div className="h-4 w-px bg-[#dee3ed]" />
            </div>
          )}
          {iconL && (
            <div className={cn("absolute left-4 flex items-center justify-center text-gray-400", prefixText && "left-16")}>
              {iconL}
            </div>
          )}
          <input
            type={type}
            className={cn(
              textFieldVariants({ size, state: activeState }),
              iconL && "pl-11",
              prefixText && "pl-[72px]",
              iconR && "pr-11",
              suffixText && "pr-[72px]"
            )}
            disabled={disabled}
            ref={ref}
            {...props}
          />
          {iconR && (
            <div className={cn("absolute right-4 flex items-center justify-center text-gray-400", suffixText && "right-[72px]")}>
              {iconR}
            </div>
          )}
          {suffixText && (
            <div className="absolute right-4 flex items-center gap-3">
              <div className="h-4 w-px bg-[#dee3ed]" />
              <span className="text-gray-500 text-sm font-medium">{suffixText}</span>
            </div>
          )}
        </div>
        {hint && (
          <div className={cn("flex items-center gap-1.5 text-sm", 
            state === "error" ? "text-red-500" : state === "success" ? "text-green-500" : "text-gray-500",
            disabled && "text-gray-300"
          )}>
            {state === "error" && <AlertCircle className="w-4 h-4" />}
            {state === "success" && <CheckCircle2 className="w-4 h-4" />}
            <span>{hint}</span>
          </div>
        )}
      </div>
    )
  }
)
TextField.displayName = "TextField"

export { TextField }
