"use client";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import FormStepTwo from "@/components/FormStepTwo";
import FormLayout from "../FormLayout";
import HeadingsPage from "@/components/HeadingsPage";
import ButtonsPage from "@/components/ButtonsPage";
import { useFormStore } from "@/store";
import { PlanName, PlanType } from "@/types";

export default function FormStepTwoPage() {
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
    if (!name || !email || !phoneNumber) {
      router.replace("/");
    }
  }, [name, email, phoneNumber, router]);

  const handleNextStep = useCallback(() => {
    if (!selectedPlan) {
      setError("Please select a plan");
      return;
    }
    setData({ planType: isChecked ? PlanType.YEARLY : PlanType.MONTHLY, plan: selectedPlan });
    router.push("/Form/step-3");
  }, [selectedPlan, isChecked, setData, router]);

  return (
    <FormLayout buttons={<ButtonsPage backUrl="/" handleNextStep={handleNextStep} text="Next Step" goBack />}>
      <div className="mb-4 md:mb-0">
        <HeadingsPage
          title="Select your plan"
          description="You have the option of monthly or yearly billing."
        />
        <FormStepTwo
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          error={error}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
      </div>
      <div className="hidden md:block">
        <ButtonsPage backUrl="/" handleNextStep={handleNextStep} text="Next Step" goBack />
      </div>
    </FormLayout>
  );
}
