import { useEffect, useMemo } from "react";
import { useFormStore } from "@/store";
import { useRouter } from "next/navigation";
import { PlanType } from "@/types";
import { addOns, typeOfPlan } from "@/constans";
import Link from "next/link";

const StepFour = () => {
  const router = useRouter();
  const { plan, planType, customizableProfile, largerStorage, onlineService } = useFormStore();

  useEffect(() => {
    if (!plan || !planType) {
      router.push("/Form/step-2");
    }
  }, [plan, planType, router]);

  const planData = useMemo(() => typeOfPlan.find((p) => p.name === plan), [plan]);

  const planPrice = planData
    ? planType === PlanType.YEARLY
      ? planData.yearlyPrice
      : planData.monthlyPrice
    : 0;

  const selectedAddOns = useMemo(() => {
    return addOns
      .filter((addon) => {
        if (addon.name === "online service") return onlineService;
        if (addon.name === "larger storage") return largerStorage;
        if (addon.name === "customizable profile") return customizableProfile;
        return false;
      })
      .map((addon) => ({
        label: addon.name,
        price: planType === PlanType.YEARLY ? addon.yearlyPrice : addon.monthlyPrice,
      }));
  }, [onlineService, largerStorage, customizableProfile, planType]);

  const totalPrice = useMemo(() => {
    const addonsTotal = selectedAddOns.reduce((sum, addon) => sum + addon.price, 0);
    return planPrice + addonsTotal;
  }, [planPrice, selectedAddOns]);

  const SummaryItem = ({ label, price }: { label: string; price: number }) => (
    <div className="flex justify-between items-center">
      <h3 className="text-neutral-coolGray capitalize">{label}</h3>
      <span className="text-primary-navyBlue font-medium">
        +${price}/{planType === PlanType.YEARLY ? "yr" : "mo"}
      </span>
    </div>
  );
  return (
    <>
      <div className="bg-neutral-magnoliaWhite px-6 py-4 rounded-lg mt-8">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-primary-navyBlue text-[1.035rem] font-bold capitalize">
              {plan} ({planType})
            </h2>
            <Link className="text-neutral-coolGray underline font-medium text-[0.9rem]" href="/Form/step-2">
              Change
            </Link>
          </div>
          <span className="text-primary-navyBlue font-bold">
            ${planPrice}/{planType === PlanType.YEARLY ? "yr" : "mo"}
          </span>
        </header>
        <hr />
        <div className="flex flex-col gap-4 my-4">
          {selectedAddOns.map((addon) => (
            <SummaryItem key={addon.label} label={addon.label} price={addon.price} />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center p-6">
        <span className="text-neutral-coolGray">
          Total (per {planType === PlanType.YEARLY ? "year" : "month"})
        </span>
        <span className="text-primary-purpleBlue font-bold text-xl">
          ${totalPrice}/{planType === PlanType.YEARLY ? "yr" : "mo"}
        </span>
      </div>
    </>
  );
};

export default StepFour;
