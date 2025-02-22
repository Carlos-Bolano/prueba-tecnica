import { PlanType } from "@/types";

interface SummaryItemProps {
  key: string;
  label: string;
  price: number;
  planType: PlanType;
}

export const SummaryItem = ({ label, price, planType }: SummaryItemProps) => (
  <div className="flex justify-between items-center">
    <h3 className="text-neutral-coolGray capitalize">{label}</h3>
    <span className="text-primary-navyBlue font-medium">
      +${price}/{planType === PlanType.YEARLY ? "yr" : "mo"}
    </span>
  </div>
);

export default SummaryItem;
