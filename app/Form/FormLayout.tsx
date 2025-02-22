import FormSelectStep from "@/components/FormSelectStep";
import FormSelectStepMobile from "@/components/FormSelectStepMobile";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  buttons?: React.ReactNode;
}
const FormLayout = ({ children, className, buttons }: Props) => {
  return (
    <section className="relative flex flex-col justify-between items-center min-h-screen px-4 md:py-10 md:px-10 font-ubuntu bg-neutral-magnoliaWhite">
      <div className="absolute top-0 w-full">
        <FormSelectStepMobile />
      </div>
      <section className="z-10 grid grid-cols-1 md:grid-cols-[274px_1fr] bg-white rounded-2xl w-full max-w-[980px] min-h-min md:h-[630px] p-4 shadow-blur-shadow mt-28 md:m-auto">
        <FormSelectStep />
        <article className="w-full h-full px-4 md:px-10 lg:px-24">
          <div className={cn("w-full h-full flex flex-col flex-1 justify-between md:pb-4", className)}>
            {children}
          </div>
        </article>
      </section>
      {buttons ? <div className="w-screen md:hidden bg-white p-5 mt-4">{buttons}</div> : null}
    </section>
  );
};

export default FormLayout;
