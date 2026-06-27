import React from "react";
import { cn } from "@/utils/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

export function Card({ className, glass = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/5 bg-card/40 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-white/10 hover:bg-card/60",
        glass ? "bg-white/5 border-white/10" : "",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
