import React from "react";
interface Props {
  title: string;
  description: string;
}
const HeadingsPage = ({ title, description }: Props) => {
  return (
    <header className="mt-4 md:mt-12 mb-8">
      <h1 className="text-2xl md:text-4xl font-bold text-primary-navyBlue mb-1 md:mb-2">{title}</h1>
      <p className="text-neutral-coolGray text-lg">{description}</p>
    </header>
  );
};

export default HeadingsPage;
