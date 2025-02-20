"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { FormSchema } from "@/models/FormSchema";
import { useFormStore } from "@/store";

const formStep1Schema = FormSchema.pick({
  name: true,
  email: true,
  phoneNumber: true,
});

type FormStep1Schema = z.infer<typeof formStep1Schema>;

export default function FormStep1() {
  const router = useRouter();

  const setData = useFormStore((state) => state.setData);

  const form = useForm<FormStep1Schema>({
    resolver: zodResolver(formStep1Schema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
  });

  const onSubmit = (data: FormStep1Schema) => {
    setData(data);
    console.log(data);
    form.reset();
    router.push("/Form/step-2");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8 flex flex-col justify-between">
        <>
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
        </>
        <div className="pt-12 flex justify-end">
          <Button type="submit" size={"lg"}>
            Next Step
          </Button>
        </div>
      </form>
    </Form>
  );
}
