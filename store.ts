import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { FormSchemaType } from "./models/FormSchema";

type FormStepState = Partial<FormSchemaType> & {
  setData: (data: Partial<FormSchemaType>) => void;
  reset: () => void;
};

export const useFormStore = create<FormStepState>()(
  persist(
    (set, get, store) => ({
      setData: (data) => set(data),
      reset: () => {
        set(() => ({}));
        store.persist.clearStorage();
      },
    }),
    {
      name: "form-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
