import SiderBar from "@/components/SiderBar";
import React from "react";

const FormLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <section className="grid place-items-center min-h-screen py-10 px-10 gap-16 font-ubuntu bg-neutral-magnoliaWhite">
      <section className="grid grid-cols-1 md:grid-cols-[274px_1fr] bg-white rounded-2xl w-full max-w-[1000px] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] p-4 shadow-blur-shadow">
        <SiderBar />
        <article className="w-full h-full px-6 sm:px-10 flex justify-center">
          <div className="w-full h-full max-h-[600px] overflow-y-auto">{children}</div>
        </article>
      </section>
    </section>
  );
};

export default FormLayout;
