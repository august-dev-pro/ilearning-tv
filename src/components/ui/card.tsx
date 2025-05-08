import { cn } from "@/lib/utils/uitils";
import * as React from "react";
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl border bg-white text-black shadow-sm", className)}
    {...props}
  />
));
Card.displayName = "Card";

export { Card };
