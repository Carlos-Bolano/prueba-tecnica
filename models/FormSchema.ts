import z from "zod";

export const FormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
  planType: z.enum(["monthly", "yearly"], {
    required_error: "Please select a plan type",
  }),
  plan: z.enum(["arcade", "advanced", "pro"], {
    required_error: "Please select a plan",
  }),
  onlineService: z.boolean().default(false),
  largerStorage: z.boolean().default(false),
  customizableProfile: z.boolean().default(false),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
