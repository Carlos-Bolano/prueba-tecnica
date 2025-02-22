"use client";
import { steps } from "@/constans";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const FormSelectStepMobile = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 left-0 w-full h-[200px] z-0 step-selector-mobile md:hidden">
      <ul className="flex gap-6 absolute top-11 ">
        {steps.map((step, index) => {
          const stepPath = step.route === "/" ? "/" : `/Form${step.route}`;
          const isActive = pathname === stepPath || pathname.startsWith(`${stepPath}/`);
          return (
            <li key={step.route}>
              <Link href={step.route === "/" ? "/" : `/Form/${step.route}`}>
                <span
                  className={cn(
                    "rounded-full size-9 flex items-center justify-center border border-neutral-alabasterWhite text-neutral-alabasterWhite font-bold",
                    {
                      "bg-primary-lightBlue text-black ": isActive,
                    }
                  )}
                >
                  {index + 1}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default FormSelectStepMobile;
