import FormStep1 from "@/components/FormStep1";
import FormLayout from "./Form/FormLayout";

export default function Home() {
  return (
    <FormLayout>
      <header className="mt-12 tracking-wide mb-8">
        <h1 className="text-4xl font-bold text-primary-navyBlue mb-2">Personal info</h1>
        <p className="text-neutral-coolGray font-ubuntu">
          Please provide your name, email address, and phone number.
        </p>
      </header>
      <FormStep1 />
    </FormLayout>
  );
}
