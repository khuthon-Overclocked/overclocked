import { forwardRef } from "react"
import { cn } from "../cn"

const Tabs = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("w-full", className)}
      {...props}
    />
  )
})
Tabs.displayName = "Tabs"

const TabsList = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("inline-flex h-10 items-center justify-center rounded-lg bg-green-50 p-1", className)}
      {...props}
    />
  )
})
TabsList.displayName = "TabsList"

const TabsTrigger = forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-green-700 data-[state=active]:shadow-sm",
        className
      )}
      {...props}
    />
  )
})
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  )
})
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent } 