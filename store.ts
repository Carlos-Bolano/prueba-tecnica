import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { FormSchemaType } from "./models/FormSchema";

type FormStepState = Partial<FormSchemaType> & {
  setData: (data: Partial<FormSchemaType>) => void;
};

export const useFormStore = create<FormStepState>()(
  persist(
    (set) => ({
      setData: (data) => set(data),
    }),
    {
      name: "form-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
