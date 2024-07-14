import React from "react";

import {ServiceDescriptionCard} from "@/components/ServiceDescriptionCard";
import {SubpageHero} from "@/components/SubpageHero";
import {BeginYourInvestment} from "@/pageSections/BeginYourInvestment";

interface Service {
  icon: string;
  title: string;
  description: string;
  list?: {title: string; description: string}[];
}

const services: Service[] = [
  {
    icon: "/assets/svg/shield.svg",
    title: "Regulatory Compliance",
    description:
      "As an AIFM registered with the CSSF, FRAGG-INVEST GP Sàrl complies with regulatory requirements and standards governing the management and operation of alternative investment funds in Luxembourg. The firm adheres to best practices in fund management, risk management, and corporate governance to ensure transparency, accountability, and investor protection.",
  },
  {
    icon: "/assets/svg/services/chart-arrow-up.svg",
    title: "Impact Investing Focus",
    description:
      "FRAGG-INVEST GP Sàrl is committed to impact investing, seeking to generate both financial returns and positive social and environmental impact through its investment activities. The firm evaluates investment opportunities based on their potential to address pressing societal issues such as poverty, gender inequality, climate change, and access to essential services, while also delivering competitive financial performance for investors.",
  },
  {
    icon: "/assets/svg/services/calculator.svg",
    title: "Fund Management Expertise",
    description:
      "FRAGG-INVEST GP Sàrl possesses extensive expertise in fund management, with a focus on impact investing, sustainable development, and social entrepreneurship. The firm's team of seasoned professionals brings a wealth of experience in investment analysis, portfolio management, and impact assessment, enabling them to identify and execute investment opportunities that generate positive social and environmental outcomes.",
  },
  {
    icon: "/assets/svg/services/money-bag.svg",
    title: "Fund Portfolio",
    description:
      "FRAGG Investment facilitates fund mobilization and finance linkage services for commercial banks, microfinance banks, impact-related projects, and SMEs. The firm assists in raising capital from diversified sources to support sustainable development initiatives.",
  },

  {
    icon: "/assets/svg/deal2.svg",
    title: "Collaboration and Partnerships",
    description:
      "FRAGG-INVEST GP Sàrl collaborates with a network of strategic partners, including institutional investors, development finance institutions, multilateral agencies, and non-profit organizations, to leverage resources, expertise, and networks for maximum impact. The firm actively engages with stakeholders across the investment ecosystem to promote sustainable development, foster innovation, and drive positive change.",
  },
  {
    icon: "/assets/svg/services/money-bag-coin.svg",
    title: "Commitment to Sustainable Finance",
    description:
      "As part of its commitment to sustainable finance, FRAGG-INVEST GP Sàrl integrates environmental, social, and governance (ESG) considerations into its investment decision-making process. The firm seeks to align its investment strategies with the United Nations Sustainable Development Goals (SDGs) and other global frameworks for sustainable development, thereby contributing to the achievement of shared environmental and social objectives.",
  },
];

const Services = () => {
  return (
    <div>
      <SubpageHero
        backgroundImageUrl={`bg-[url('/assets/webp/servicesHeroSarl.webp')]`}
        breadcrumb="Our Services"
        pageTitle="Elevating Financial <br /> Futures"
      />
      <div className="container mx-auto px-4 2xl:px-0 py-20">
        <h2 className="text-5xl text-greyish-30 font-semibold mb-5">
          Propelling financial advancement through{" "}
          <br className="hidden md:block" /> expert fund mangement
        </h2>
        <p className="text-greyish-10 mb-20">
          With a focus on managing funds that generate positive social and
          environmental impact, FRAGG-INVEST GP Sàrl plays a crucial role in
          mobilizing capital, fostering innovation, and advancing sustainable
          development goals in emerging markets.
        </p>
        {/* service list */}
        <div className="space-y-10">
          {services.map((service, index) => (
            <ServiceDescriptionCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              list={service.list}
            />
          ))}
        </div>
      </div>
      <BeginYourInvestment />
    </div>
  );
};

export default Services;
