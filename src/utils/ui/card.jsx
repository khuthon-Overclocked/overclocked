import { forwardRef } from "react"
import { cn } from "../cn"

const Card = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("rounded-lg border border-green-200 bg-white text-gray-950 shadow-sm", className)}
      {...props}
    />
  )
})
Card.displayName = "Card"

const CardContent = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("p-6 pt-0", className)}
      {...props}
    />
  )
})
CardContent.displayName = "CardContent"

export { Card, CardContent } 