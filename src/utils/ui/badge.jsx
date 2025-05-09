import { forwardRef } from "react"
import { cn } from "../cn"

const Badge = forwardRef(({ className, variant = "default", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2",
        {
          "border-transparent bg-green-600 text-white hover:bg-green-700": variant === "default",
          "border-transparent bg-green-100 text-green-700 hover:bg-green-200": variant === "secondary",
          "border-transparent bg-green-50 text-green-700 hover:bg-green-100": variant === "outline",
        },
        className
      )}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

export { Badge } 