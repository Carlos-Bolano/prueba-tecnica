"use client";
import React, { useEffect, useCallback, useMemo } from "react";
import FormLayout from "../FormLayout";
import { useFormStore } from "@/store";
import { useRouter } from "next/navigation";
import ButtonsPage from "@/components/ButtonsPage";
import FormStepThree from "@/components/FormStepThree";
import HeadingsPage from "@/components/HeadingsPage";

const FormStepThreePage = () => {
  const { plan, planType, onlineService, largerStorage, customizableProfile, setData } = useFormStore();
  const router = useRouter();

  const selectedAddOns = useMemo(() => {
    const addOns = [];
    if (onlineService) addOns.push(1);
    if (largerStorage) addOns.push(2);
    if (customizableProfile) addOns.push(3);
    return addOns;
  }, [onlineService, largerStorage, customizableProfile]);

  useEffect(() => {
    if (!plan || !planType) {
      router.push("/Form/step-2");
    }
  }, [plan, planType, router]);

  const toggleAddOn = useCallback(
    (id: number) => {
      setData({
        onlineService: id === 1 ? !onlineService : onlineService,
        largerStorage: id === 2 ? !largerStorage : largerStorage,
        customizableProfile: id === 3 ? !customizableProfile : customizableProfile,
      });
    },
    [setData, onlineService, largerStorage, customizableProfile]
  );

  const handleNextStep = useCallback(() => {
    setData({
      onlineService: selectedAddOns.includes(1),
      largerStorage: selectedAddOns.includes(2),
      customizableProfile: selectedAddOns.includes(3),
    });
    router.push("/Form/step-4");
  }, [setData, selectedAddOns, router]);

  return (
    <FormLayout
      buttons={
        <ButtonsPage backUrl="/Form/step-2" handleNextStep={handleNextStep} text="Next Step" goBack={true} />
      }
    >
      <section className="w-full h-full flex flex-col mb-4 md:mb-0">
        <HeadingsPage title="Pick add-ons" description="Add-ons help enhance your gaming experience." />
        <FormStepThree selectedAddOns={selectedAddOns} toggleAddOn={toggleAddOn} />
      </section>
      <div className="hidden md:block">
        <ButtonsPage backUrl="/Form/step-2" handleNextStep={handleNextStep} text="Next Step" goBack={true} />
      </div>
    </FormLayout>
  );
};

export default FormStepThreePage;
