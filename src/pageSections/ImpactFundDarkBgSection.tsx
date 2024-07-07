"use client";
import React from "react";
import Image from "next/image";
import useResponsiveDescription from "@/hooks/useResponsiveDescription";

interface ImpactFundDarkBgSectionProps {
  title: string;
  writeup: string;
  listItems: string[];
}

const ImpactFundDarkBgSection: React.FC<ImpactFundDarkBgSectionProps> = ({
  title,
  writeup,
  listItems,
}) => {
  const modifiedTitle = useResponsiveDescription(title);

  return (
    <div className="bg-[#0A0A0A] text-white">
      <div className="container mx-auto px-4 md:px-0 py-20 grid grid-cols-1 md:grid-cols-2 gap-y-20">
        {/* title  */}
        <div>
          <h2
            className="text-4xl md:text-[2.5rem] font-semibold"
            dangerouslySetInnerHTML={{__html: modifiedTitle}}
          />
        </div>
        {/* writeup */}
        <div>
          <p>{writeup}</p>
        </div>
        {/* list col 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2  md:col-span-2 gap-y-8 text-xl md:text-2xl">
          {listItems.map((item, index) => (
            <div key={index} className="flex items-start gap-x-6">
              <Image
                src="/assets/svg/tick-circle.svg"
                width={40}
                height={40}
                alt="icon"
              />

              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactFundDarkBgSection;
