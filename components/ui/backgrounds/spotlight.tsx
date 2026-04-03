"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export const Spotlight = ({
  className,
  fill = "white",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { fill?: string }) => (
  <div
    className={cn(
      "pointer-events-none absolute z-0 h-[600px] w-[800px] rounded-full opacity-70 blur-3xl",
      className
    )}
    {...props}
    style={{
      background:
        "radial-gradient(ellipse 60% 95% at 50% 40%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.08) 100%)",
      ...(props.style || {}),
    }}
  />
);
