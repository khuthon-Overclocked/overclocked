import { forwardRef } from "react"
import { cn } from "../cn"

const Progress = forwardRef(({ className, value, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative h-2 w-full overflow-hidden rounded-full bg-gray-100", className)}
      {...props}
    >
      <div
        className="h-full w-full flex-1 bg-green-600 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  )
})
Progress.displayName = "Progress"

export { Progress } 