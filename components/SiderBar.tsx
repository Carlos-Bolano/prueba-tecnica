"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SiderBar = () => {
  const pathname = usePathname();
  const steps = [
    {
      name: "Step 1",
      text: "Your info",
      route: "/",
    },
    {
      name: "Step 2",
      text: "Select plan",
      route: "/step-2",
    },
    {
      name: "Step 3",
      text: "Add-ons",
      route: "/step-3",
    },
    {
      name: "Step 4",
      text: "Summary",
      route: "/step-4",
    },
  ];

  return (
    <nav className="siderbar max-w-[274px] rounded-xl">
      <ul className="flex flex-col gap-3 py-8 p-6">
        {steps.map((step, index) => {
          const stepPath = step.route === "/" ? "/" : `/Form${step.route}`;
          const isActive = pathname === stepPath || pathname.startsWith(`${stepPath}/`);
          return (
            <li key={step.route}>
              <Link
                href={step.route === "/" ? "/" : `/Form/${step.route}`}
                className="flex items-center gap-4 hover:bg-primary-navyBlue transition-colors duration-500 py-2 px-4 rounded-xl"
              >
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
                <aside className="flex flex-col uppercase">
                  <span className="-mb-1 text-neutral-coolGray text-sm font-medium">{step.name}</span>
                  <p className="font-bold text-neutral-lightGray">{step.text}</p>
                </aside>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SiderBar;
