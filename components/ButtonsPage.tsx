import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ButtonsProps {
  handleNextStep: () => void;
  backUrl?: string;
  variant?: "default" | "secondary" | "link";
  text: string;
  goBack?: boolean;
}

const ButtonsPage = ({ handleNextStep, backUrl, variant = "default", text, goBack }: ButtonsProps) => {
  const router = useRouter();
  return (
    <div className="hidden md:flex items-center mb-4">
      {goBack &&
        (backUrl ? (
          <Link href={backUrl} title="Back" className={buttonVariants({ variant: "link" })}>
            Go Back
          </Link>
        ) : (
          <Button onClick={() => router.back()} title="Back" variant="link">
            Go Back
          </Button>
        ))}
      <Button variant={variant} size="lg" className="ml-auto" onClick={handleNextStep}>
        {text}
      </Button>
    </div>
  );
};

export default ButtonsPage;
