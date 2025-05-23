import { cn } from "@/lib/utils/uitils";
import React from "react";
import { CgPlayButton } from "react-icons/cg";

const PlayButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "w-14 h-14 cursor-pointer rounded-full bg-white text-black flex items-center justify-center shadow-lg transition hover:scale-105",
        className
      )}
      {...props}
    >
      <CgPlayButton size={90} />
    </button>
  );
});

PlayButton.displayName = "PlayButton";

export default PlayButton;
