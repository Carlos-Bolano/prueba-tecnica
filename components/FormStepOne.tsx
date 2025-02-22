"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "./ui/input";
import { useFormStore } from "@/store";
import { useRouter } from "next/navigation";
import { RefObject } from "react";
import { formStepOneSchema, FormStepOneSchema } from "@/types";

export default function FormStepOne({ formRef }: { formRef: RefObject<HTMLFormElement | null> }) {
  const router = useRouter();
  const { name, email, phoneNumber, setData } = useFormStore();

  const form = useForm<FormStepOneSchema>({
    resolver: zodResolver(formStepOneSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
  });

  useEffect(() => {
    form.reset({ name, email, phoneNumber });
  }, [name, email, phoneNumber, form]);

  const onSubmit = (data: FormStepOneSchema) => {
    setData(data);
    router.push("/Form/step-2");
  };

  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-8 flex flex-col justify-between"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel>Name</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder="e.g. Stephen King" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel>Email Address</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder="e.g. stephenking@lorem.com" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel>Phone Number</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder="e.g. +1 234 567 890" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
