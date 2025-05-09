import { forwardRef } from "react"
import { cn } from "../cn"

const Button = forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-green-600 text-white hover:bg-green-700": variant === "default",
          "border border-green-200 bg-white text-green-700 hover:bg-green-50": variant === "outline",
          "bg-transparent text-green-700 hover:bg-green-50": variant === "link",
        },
        {
          "h-10 px-4 py-2": size === "default",
          "h-9 rounded-md px-3": size === "sm",
          "h-11 rounded-md px-8": size === "lg",
        },
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button } 