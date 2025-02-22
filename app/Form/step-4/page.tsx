"use client";
import FormLayout from "../FormLayout";
import { useFormStore } from "@/store";

import FoemStepFour from "@/components/StepFour";
import ButtonsPage from "@/components/ButtonsPage";
import HeadingsPage from "@/components/HeadingsPage";

const FormStepFourPage = () => {
  const handleNextStep = () => {
    useFormStore.getState().reset();
    window.location.href = "/Form/step-5";
  };
  return (
    <FormLayout>
      <section>
        <HeadingsPage
          title="Finishing up"
          description="Double-check everything looks OK before confirming."
        />
        <FoemStepFour />
      </section>
      <ButtonsPage
        backUrl="/Form/step-3"
        handleNextStep={handleNextStep}
        text="Confirm"
        variant="secondary"
        goBack={true}
      />
    </FormLayout>
  );
};

export default FormStepFourPage;
