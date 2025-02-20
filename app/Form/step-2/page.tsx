import React from "react";
import FormLayout from "../FormLayout";
import Image from "next/image";

const FormStep2 = () => {
  const typeOfPlan = [
    {
      id: 1,
      name: "Arcade",
      monthlyPrice: 9,
      yearlyPrice: 90,
      image: "/images/icon-arcade.svg",
    },
    {
      id: 2,
      name: "Advanced",
      monthlyPrice: 12,
      yearlyPrice: 120,
      image: "/images/icon-advanced.svg",
    },
    {
      id: 3,
      name: "Pro",
      monthlyPrice: 15,
      yearlyPrice: 150,
      image: "/images/icon-pro.svg",
    },
  ];
  return (
    <FormLayout>
      <header className="mt-12 tracking-wide mb-8">
        <h1 className="text-4xl font-bold text-primary-navyBlue mb-2">Select your plan</h1>
        <p className="text-neutral-coolGray font-ubuntu">You have the option of monthly or yearly billing.</p>
      </header>
      <main className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-4 mb-8">
        {typeOfPlan.map((plan) => (
          <div key={plan.id} className="p-4 border border-neutral-lightGray rounded-lg w-full">
            <Image
              className="mb-10 size-10"
              src={plan.image}
              alt={`Icono de ${plan.name}`}
              width={30}
              height={30}
            />
            <h2 className="text-primary-navyBlue font-bold">{plan.name}</h2>
            <p className="text-neutral-coolGray font-ubuntu">${plan.monthlyPrice}/mo</p>
          </div>
        ))}
      </main>
      <div className="flex items-center  justify-center w-full bg-red-600">
        <p className="text-neutral-coolGray font-ubuntu">Monthly</p>
        <input type="checkbox" className="toggle toggle-primary" />
        <p className="text-neutral-coolGray font-ubuntu">Yearly</p>
      </div>
    </FormLayout>
  );
};

export default FormStep2;
