import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full font-ubuntu rounded-md border border-neutral-lightGray bg-transparent px-3 py-4 text-sm font-[700] first-line: shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-coolGray focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-purpleBlue disabled:cursor-not-allowed disabled:opacity-50 md:text-base text-primary-navyBlue input-autofill",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
