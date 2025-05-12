"use client";
import { cn } from "@/lib/utils/uitils";
import * as React from "react";
import { BiSearch } from "react-icons/bi";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, onSearch, ...props }, ref) => {
    return (
      <div className="flex w-full max-w-md border border-gray-300 rounded-full overflow-hidden  shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition-all">
        {/* Input field */}
        <input
          ref={ref}
          className={cn(
            "flex-1 px-4 py-2 text-sm bg-transparent placeholder-gray-500 focus:outline-none",
            className
          )}
          {...props}
        />

        {/* Search button */}
        <div
          onClick={onSearch}
          className="px-6 flex cursor-pointer items-center bg-gray-100 hover:bg-gray-200  hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-300 hover:shadow-md
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-[#0a1b3bcc]"
        >
          <BiSearch scale={105} className=" w-5 h-5 text-gray-600" />
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
