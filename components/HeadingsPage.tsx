import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";
interface Props {
  title: string;
  description: string;
}

const HeadingsPage = ({ title, description }: Props) => {
  const pathname = usePathname();
  return (
    <header className="mt-4 md:mt-12 mb-8">
      <h1 className="text-2xl md:text-4xl font-bold text-primary-navyBlue mb-1 md:mb-2">{title}</h1>
      <p className={cn("text-neutral-coolGray text-lg", pathname === "/" && "text-[17.4px]")}>
        {description}
      </p>
    </header>
  );
};

export default HeadingsPage;
