"use client";
import FormStepOne from "@/components/FormStepOne";
import FormLayout from "./Form/FormLayout";
import HeadingsPage from "@/components/HeadingsPage";
import { useRef } from "react";
import ButtonsPage from "@/components/ButtonsPage";

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };
  return (
    <FormLayout>
      <main>
        <HeadingsPage
          title="Personal info"
          description="Please provide your name, email address, and phone number."
        />
        <FormStepOne formRef={formRef} />
      </main>
      <ButtonsPage handleNextStep={handleSubmit} text="Next Step" />
    </FormLayout>
  );
}
