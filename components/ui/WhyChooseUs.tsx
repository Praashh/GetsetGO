
"use client"
import React from "react";

interface whyChooseUsCardProps {
  title: string;
  description: string;
  svg: any;
  reverse?: boolean;
}

const WhyChooseUsCard: React.FC<whyChooseUsCardProps> = ({
  title,
  description,
  svg,
  reverse,
}) => {
  return (
    <div
      className={`flex  item-center flex-wrap ${
        reverse
          ? "flex-row-reverse gradient-border-left"
          : "gradient-border-right"
      } gap-3 md:gap-0 justify-center md:justify-between  p-5 w-full mt-5 md:mt-0`}
    >
      <div className="flex flex-col gap-2 items-start justify-between">
        <h2 className="font-bold text-pink-400 text-2xl">{title}</h2>
        <p className="md:w-[40rem] ">{description}</p>
      </div>
      <div className="hidden md:block">{svg}</div>
    </div>
  );
};

export default WhyChooseUsCard;
