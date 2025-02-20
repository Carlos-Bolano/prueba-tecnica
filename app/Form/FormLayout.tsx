import SiderBar from "@/components/SiderBar";
import React from "react";

const FormLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <section className="grid place-items-center min-h-screen py-10 px-10 gap-16 font-ubuntu bg-neutral-magnoliaWhite">
      <section className="grid grid-cols-[274px_1fr]  bg-white rounded-2xl w-[1000px] h-[580px]  p-4 shadow-blur-shadow">
        <SiderBar />
        <article className="mx-16 px-10 w-full">{children}</article>
      </section>
    </section>
  );
};

export default FormLayout;
