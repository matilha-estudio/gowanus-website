"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-[2px] w-full grow overflow-hidden rounded-full bg-navy dark:bg-gray-800">
      <SliderPrimitive.Range className="absolute h-full bg-gray-900 dark:navy" />
    </SliderPrimitive.Track>


    <SliderPrimitive.Thumb className="block h-2 w-2 border-2 border-marigold bg-navy ring-offset-marigold transition-colors focus-visible:outline-none cursor-pointer disabled:pointer-events-none disabled:opacity-50 dark:border-gray-50 dark:bg-gray-950 dark:ring-offset-marigold dark:focus-visible:ring-gray-300" />

    <SliderPrimitive.Thumb className="block h-2 w-2 border-2 border-marigold bg-navy ring-offset-marigold transition-colors focus-visible:outline-none cursor-pointer disabled:pointer-events-none disabled:opacity-50 dark:border-gray-50 dark:bg-gray-950 dark:ring-offset-marigold dark:focus-visible:ring-gray-300" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
