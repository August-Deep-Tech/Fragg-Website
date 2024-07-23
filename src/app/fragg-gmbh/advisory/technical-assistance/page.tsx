import {SubpageHero} from "@/components/SubpageHero";
import {BeginYourInvestment} from "@/pageSections/BeginYourInvestment";
import {ServiceDescriptionCard} from "@/components/ServiceDescriptionCard";
import React from "react";

interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: "/assets/svg/services/chart-arrow-up.svg",
    title: "Business Development",
    description:
      "We offer a range of non-financial services and products to SMEs/Green Projects at various stages of their business needs.",
  },
  {
    icon: "/assets/svg/advisory/headphones.svg",
    title: "Technical Assistance",
    description:
      "We provide specifically tailored technical assistance to support partner institutions and potential investees, in order to solve operational challenges through targeted capacity building.",
  },
  {
    icon: "/assets/svg/advisory/bar-chart.svg",
    title: "FX Risk Advisory",
    description:
      "At FRAGG-INVEST GmbH, in view of the volatile economies in which we operate, we consider it imperative for our clients to take actions that will limit future risks on their FX transactions, hence, we assist clients in managing their foreign exchange risk by sourcing for suitable hedging companies to hedge their currencies in the course of transactions, and financial institutions that can provide swapping/back-to-back currency arrangements for FX related transactions. Thus, projects can be financed in local currency.",
  },
];

const TechnicalAssistance = () => {
  return (
    <div>
      {" "}
      <SubpageHero
        backgroundImageUrl={`bg-[url('/assets/png/technicalAssistanceHeroImage.png')]`}
        breadcrumb="VALUE ADDED AERVICES"
        pageTitle="We offer added value to <br />ensure your success"
      />
      <div className="container mx-auto px-4 2xl:px-0 py-28">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Comprehensive Client Support
        </h2>
        <p className="text-greyish-10 mb-6">
          Our commitment to client success goes beyond traditional financial
          services. We provide value-added strategic advice through Business{" "}
          <br />
          Development Services, Technical Assistance, and FX Risk advisory
          services. With our holistic approach, we empower clients to navigate
          challenges, <br /> seize opportunities, and achieve their business
          goals with confidence.
        </p>
      </div>
      <div className="bg-[url('/assets/png/technicalAssistanceImg.png')] bg-cover">
        <div className="container mx-auto px-4 2xl:px-0 py-28">
          <h3 className="text-4xl md:text-5xl text-white">
            We offer value added strategic advice <br /> to our clients by
            providing Business <br /> Development Services, Technical <br />{" "}
            Assistance as well as FX Risk advisory <br /> services.
          </h3>
        </div>
      </div>
      <div className="container mx-auto px-4 2xl:px-0 py-20">
        <h3 className="text-4xl md:text-5xl mb-16 font-semibold">
          Our Strategic and Technical Advisory <br /> services include
        </h3>
        <div className="space-y-10">
          {services.map((service, index) => (
            <ServiceDescriptionCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
      <BeginYourInvestment />
    </div>
  );
};

export default TechnicalAssistance;
