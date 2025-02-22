import z from "zod";
import { PlanType, PlanName } from "@/types"; // Importamos los enums

export const FormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
  planType: z.nativeEnum(PlanType, {
    required_error: "Please select a plan type",
  }),
  plan: z.nativeEnum(PlanName, {
    required_error: "Please select a plan",
  }),
  onlineService: z.boolean().default(false),
  largerStorage: z.boolean().default(false),
  customizableProfile: z.boolean().default(false),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
