import { FormSchema } from "@/models/FormSchema";
import { z } from "zod";

export type Plan = {
  id: number;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  image: string;
};

export enum PlanType {
  MONTHLY = "monthly",
  YEARLY = "yearly",
}

export enum PlanName {
  ARCADE = "arcade",
  ADVANCED = "advanced",
  PRO = "pro",
}

export type AddOn = {
  id: number;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
};

export const formStepOneSchema = FormSchema.pick({
  name: true,
  email: true,
  phoneNumber: true,
});

export type FormStepOneSchema = z.infer<typeof formStepOneSchema>;
