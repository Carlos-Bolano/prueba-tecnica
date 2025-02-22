"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Switch } from "@/components/ui/switch";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { typeOfPlan } from "@/constans";
import { PlanName, PlanType } from "@/types";
import { useFormStore } from "@/store";
import ButtonsPage from "./ButtonsPage";
import HeadingsPage from "./HeadingsPage";

const FormStepTwo = () => {
  const { plan, planType, setData, name, email, phoneNumber } = useFormStore();
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(planType === PlanType.YEARLY);
  const [selectedPlan, setSelectedPlan] = useState<PlanName | undefined>(plan);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsChecked(planType === PlanType.YEARLY);
    setSelectedPlan(plan);
  }, [plan, planType]);

  useEffect(() => {
    if (!useFormStore.persist.hasHydrated) return;
    if (!name || !email || !phoneNumber) router.push("/");
  }, [name, email, phoneNumber, router]);

  const handleNextStep = () => {
    if (!selectedPlan) return setError("Please select a plan");
    setData({ planType: isChecked ? PlanType.YEARLY : PlanType.MONTHLY, plan: selectedPlan });
    router.push("/Form/step-3");
  };

  return (
    <>
      <div>
        <HeadingsPage
          title="Select your plan"
          description="You have the option of monthly or yearly billing."
        />
        {error && !selectedPlan && (
          <p className="text-sm text-primary-strawberryRed font-ubuntu mb-4">
            <span className="font-bold">Error:</span> {error}
          </p>
        )}

        <main className="grid lg:grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-5 my-8">
          {typeOfPlan.map(({ id, name, image, monthlyPrice, yearlyPrice }) => (
            <div
              key={id}
              onClick={() => setSelectedPlan(name as PlanName)}
              className={cn(
                " flex lg:flex-col gap-4 lg:gap-0 p-4 border rounded-lg cursor-pointer transition-all duration-500 hover:scale-105",
                selectedPlan === name
                  ? "border-primary-purpleBlue bg-neutral-magnoliaWhite"
                  : "border-neutral-lightGray"
              )}
            >
              <Image
                className="lg:mb-14 size-10"
                src={image}
                alt={`Icono de ${name}`}
                width={30}
                height={30}
              />
              <div>
                <h2 className="text-primary-navyBlue font-bold capitalize">{name}</h2>
                <p className="text-neutral-coolGray font-ubuntu font-medium text-sm">
                  ${isChecked ? yearlyPrice : monthlyPrice}/{isChecked ? "yr" : "mo"}
                </p>
              </div>
              {isChecked && <p className="text-primary-navyBlue font-medium text-xs">2 months free</p>}
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
      </div>
      <ButtonsPage backUrl="/" handleNextStep={handleNextStep} text="Next Step" goBack={true} />
    </>
  );
};

export default FormStepTwo;
