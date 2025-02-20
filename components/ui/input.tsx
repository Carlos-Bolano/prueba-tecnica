import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-md border border-neutral-lightGray bg-transparent px-3 py-4 text-lg  font-medium first-line: shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium  placeholder:text-neutral-coolGray focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-purpleBlue disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
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
