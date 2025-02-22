"use client";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { typeOfPlan } from "@/constans";
import { PlanName } from "@/types";

interface FormStepTwoProps {
  selectedPlan: PlanName | undefined;
  setSelectedPlan: React.Dispatch<React.SetStateAction<PlanName | undefined>>;
  error: string | null;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormStepTwo = ({ selectedPlan, setSelectedPlan, error, isChecked, setIsChecked }: FormStepTwoProps) => {
  return (
    <>
      {error && !selectedPlan && (
        <p className="text-sm text-primary-strawberryRed font-ubuntu mb-4">
          <span className="font-bold">Error:</span> {error}
        </p>
      )}

      <main className="grid lg:grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3 lg:gap-5 my-6 lg:my-8">
        {typeOfPlan.map(({ id, name, image, monthlyPrice, yearlyPrice }) => (
          <div
            key={id}
            onClick={() => setSelectedPlan(name as PlanName)}
            className={cn(
              " flex lg:flex-col gap-4 lg:gap-0 p-4 border rounded-lg cursor-pointer transition-all duration-500 hover:scale-105 hover:border-primary-purpleBlue",
              selectedPlan === name
                ? "border-primary-purpleBlue bg-neutral-magnoliaWhite"
                : "border-neutral-lightGray"
            )}
          >
            <Image className="lg:mb-14 size-10" src={image} alt={`Icono de ${name}`} width={30} height={30} />
            <div>
              <h2 className="text-primary-navyBlue font-bold capitalize">{name}</h2>
              <p className="text-neutral-coolGray font-ubuntu font-medium text-sm">
                ${isChecked ? yearlyPrice : monthlyPrice}/{isChecked ? "yr" : "mo"}
              </p>
              {isChecked && (
                <p className="text-primary-navyBlue font-medium text-xs mt-[2px]">2 months free</p>
              )}
            </div>
          </div>
        ))}
      </main>

      <div className="flex items-center justify-center gap-6 w-full bg-neutral-magnoliaWhite rounded-lg p-4 font-bold">
        <p
          className={cn(
            "transition-colors duration-500",
            !isChecked ? "text-primary-navyBlue" : "text-neutral-coolGray"
          )}
        >
          Monthly
        </p>
        <Switch checked={isChecked} onCheckedChange={setIsChecked} />
        <p
          className={cn(
            "transition-colors duration-500",
            isChecked ? "text-primary-navyBlue" : "text-neutral-coolGray"
          )}
        >
          Yearly
        </p>
      </div>
    </>
  );
};

export default FormStepTwo;
