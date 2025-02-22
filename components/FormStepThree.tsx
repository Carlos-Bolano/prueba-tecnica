import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { addOns } from "@/constans";
import { useFormStore } from "@/store";

interface FormStepThreeProps {
  selectedAddOns: number[];
  toggleAddOn: (id: number) => void;
}
const FormStepThree = ({ selectedAddOns, toggleAddOn }: FormStepThreeProps) => {
  const planType = useFormStore((state) => state.planType);
  return (
    <main className="flex flex-col gap-5 md:mb-8">
      {addOns.map(({ id, name, description, monthlyPrice, yearlyPrice }) => {
        const isChecked = selectedAddOns.includes(id);
        const price = planType === "monthly" ? monthlyPrice : yearlyPrice;
        return (
          <div
            key={id}
            onClick={() => toggleAddOn(id)}
            className={cn(
              "flex items-center justify-center px-5 py-4 rounded-lg border border-neutral-lightGray cursor-pointer transition-colors duration-500 hover:border-primary-purpleBlue",
              isChecked && "bg-neutral-magnoliaWhite border-primary-purpleBlue"
            )}
          >
            <Checkbox checked={isChecked} />
            <div className="ml-4">
              <h2 className="text-primary-navyBlue/90 font-bold capitalize text-sm md:text-base">{name}</h2>
              <p className="text-neutral-coolGray text-sm md:text-base">{description}</p>
            </div>
            <span className="ml-auto text-primary-purpleBlue/90 font-bold text-sm md:text-base">
              +${price}/{planType === "monthly" ? "mo" : "yr"}
            </span>
          </div>
        );
      })}
    </main>
  );
};

export default FormStepThree;
