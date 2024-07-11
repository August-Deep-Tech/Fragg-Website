"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import useResponsiveDescription from "@/hooks/useResponsiveDescription";

interface strategyItemProps {
  icon: string;
  title: string;
  description: string;
}

const strategyItemsArr: strategyItemProps[] = [
  {
    icon: "/assets/svg/funds/line chart.svg",
    title: "Financial Services",
    description:
      "Investing in fintech solutions that increase <br/> access to financial services, promote financial <br/> inclusion, and empower marginalized <br/> communities, including women and youth.",
  },
  {
    icon: "/assets/svg/funds/wave.svg",
    title: "Agriculture and Agribusiness",
    description:
      "Investing in agritech solutions that promote <br/> sustainable agriculture practices, enhance <br/> productivity, and increase market access for <br/> smallholder farmers, with an emphasis on <br/> empowering women and youth in rural areas.",
  },
  {
    icon: "/assets/svg/funds/stethoscope.svg",
    title: "Healthcare",
    description:
      "Supporting ventures that improve access to <br/> healthcare services, medical diagnostics, <br/> telemedicine, and health information systems, <br/> with a focus on addressing healthcare <br/> disparities and improving health outcomes.",
  },
  {
    icon: "/assets/svg/funds/house.svg",
    title: "Affordable Housing",
    description:
      "Investing in solutions that enhance access to <br/> affordable housing, clean water, sanitation, and <br/> other essential services, particularly in low- <br/>income and informal settlements.",
  },
  {
    icon: "/assets/svg/funds/graduation cap.svg",
    title: "Education",
    description:
      "Supporting innovative educational <br/> technologies and platforms that improve <br/> access to quality education, skills <br/> development, and lifelong learning <br/> opportunities for underserved populations.",
  },
  {
    icon: "/assets/svg/funds/cloud-sun-flash-rain.svg",
    title: "Clean and Renewable Energy",
    description:
      "Promoting access to clean and renewable <br/> energy solutions under innovative models that <br/> contribute to climate change mitigation, <br/> decarbonization of production chains, and <br/> promotion of climate regenerative practices, <br/> particularly in rural areas.",
  },
  {
    icon: "/assets/svg/funds/delivery.svg",
    title: "Mobility and Logistics",
    description:
      "Supporting innovative transportation and <br/> logistics solutions that improve mobility, <br/> connectivity, and access to markets, goods, <br/> and services, particularly in underserved and <br/> remote areas.",
  },
  {
    icon: "/assets/svg/funds/buildings-2.svg",
    title: "SME Solutions",
    description:
      "Investing in technologies and services that <br/> support the growth and resilience of small and <br/> medium-sized enterprises (SMEs), including <br/> access to finance, digitalization, and market <br/> linkages.",
  },
];

const StrategyItem: React.FC<strategyItemProps> = ({
  icon,
  title,
  description,
}) => {
  const modifiedDescription = useResponsiveDescription(description);

  return (
    <div className="flex flex-col items-center">
      {/* icon  */}

      <Image
        // "/assets/services-svg/chart-arrow-up.svg"
        src={icon}
        height={40}
        width={40}
        alt={"Banner preview"}
      />

      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p
        className="text-greyish-10"
        dangerouslySetInnerHTML={{__html: modifiedDescription}}
      />
    </div>
  );
};

const FraggGreenImpactFund = () => {
  return (
    <div className="container mx-auto px-4 2xl:px-0 text-center py-32">
      <h2 className="text-4xl md:text-5xl font-semibold mb-7">
        FRAGG-INVEST GREEN <br /> and IMPACT FUND SCSp
      </h2>
      <p className="text-greyish-10 mb-20">
        The primary objective of the FRAGG-INVEST GREEN and IMPACT FUND SCSp is
        to invest in and strengthen the capacities of dynamic and highly
        scalable early-stage ventures that address key social and environmental
        challenges in Africa. The fund focuses on ventures that aim to tackle
        exclusion, poverty, and gender inequality through innovative technology{" "}
        solutions, with a particular emphasis on the following areas:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 w-10/12 mx-auto">
        {strategyItemsArr.map((item, index) => (
          <StrategyItem
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FraggGreenImpactFund;
