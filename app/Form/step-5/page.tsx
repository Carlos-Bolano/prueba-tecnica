import FormLayout from "../FormLayout";
import Image from "next/image";

const FormStepFivePage = () => {
  return (
    <FormLayout className="justify-center items-center py-14 md:py-0">
      <Image
        className="size-[80px] mx-auto mb-6"
        src="/images/icon-thank-you.svg"
        alt="thank you"
        width={100}
        height={100}
      />
      <h1 className="text-4xl font-bold text-primary-navyBlue mb-4 text-center">Thank you!</h1>
      <p className="text-neutral-coolGray text-lg text-center">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need
        support, please feel free to email us at support@loremgaming.com.
      </p>
    </FormLayout>
  );
};

export default FormStepFivePage;
