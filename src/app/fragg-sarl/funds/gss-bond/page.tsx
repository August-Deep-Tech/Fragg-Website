import React from "react";
import Image from "next/image";
import {SubpageHero} from "@/components/SubpageHero";
import {BeginYourInvestment} from "@/pageSections/BeginYourInvestment";

interface GssBondsOfferCardsProps {
  icon: string;
  title: string;
  description: string;
}

const cardProps: GssBondsOfferCardsProps[] = [
  {
    icon: "/assets/svg/funds/green.svg",
    title: "Green Bond",
    description:
      "Green bonds serve as a source of funding for initiatives aiming to have a good impact on the environment. Renewable energy, energy efficiency, clean transportation, green buildings, wastewater management, and climate change adaptation are among project types that are eligible for the issue of green bonds.",
  },
  {
    icon: "/assets/svg/funds/social.svg",
    title: "Social Bond",
    description:
      "Green bonds serve as a source of funding for initiatives aiming to have a good impact on the environment. Renewable energy, energy efficiency, clean transportation, green buildings, wastewater management, and climate change adaptation are among project types that are eligible for the issue of green bonds.",
  },
  {
    icon: "/assets/svg/funds/sustainable.svg",
    title: "Sustainable Bond",
    description:
      "Green bonds serve as a source of funding for initiatives aiming to have a good impact on the environment. Renewable energy, energy efficiency, clean transportation, green buildings, wastewater management, and climate change adaptation are among project types that are eligible for the issue of green bonds.",
  },
];

const GssBondsOfferCards: React.FC<GssBondsOfferCardsProps> = ({
  icon,
  title,
  description,
}) => (
  <div>
    <div className="mb-6">
      <Image src={icon} width={40} height={40} alt="icon" />
    </div>
    <h3 className="font-bold text-xl mb-6">{title}</h3>
    <p className="text-greyish-10">{description}</p>
  </div>
);

const GssBond = () => {
  return (
    <div>
      <SubpageHero
        backgroundImageUrl={`bg-[url('../../public/assets/png/gssBondHeroImg.png')]`}
        breadcrumb="GSS BOND"
        pageTitle="Promoting sustainable <br /> and impact finance"
      />

      <div className="container mx-auto px-4 md:px-0 py-20">
        <h2 className="text-5xl text-greyish-30 font-semibold mb-5">
          FRAGG-Invest Green
        </h2>
        <p className="text-greyish-10 mb-5">
          This fund prioritizes investments in ventures owned and led by women
          and youth, recognizing their potential as drivers of sustainable
          economic growth, social progress, and environmental well-being. By
          aligning with the United Nations Sustainable Development Goals (SDGs)
          and focusing on empowering women and youth, the fund seeks to catalyze
          positive social impact and contribute to the achievement of global
          development objectives.
        </p>
        <p className="text-greyish-10">
          Incorporated in Luxembourg as a special limited partnership fund and
          managed by FRAGG-INVEST GP as a registered Alternative Investment Fund
          Manager with the Commission de Surveillance du Secteur Financier
          (CSSF), the FRAGG-INVEST GREEN and IMPACT FUND SCSp is committed to
          driving positive change, fostering innovation, and creating lasting
          value for society and the environment.
        </p>
      </div>
      {/* green social sustainable image */}
      <div className="flex justify-center">
        <Image
          src="/assets/png/greenSocialSustainable.png"
          width={1440}
          height={493}
          alt="Green Social Sustainable Image"
        />
      </div>
      {/* gss bonds give investors ....  */}
      <div className="bg-[url('/assets/png/gssImage.png')] bg-cover">
        <div className="container mx-auto px-4 md:px-0 py-28">
          <h3 className="text-4xl md:text-5xl font-semibold text-greyish-10">
            <span className="text-white">GSS bonds</span> give investors the{" "}
            <br />
            opportunity to <span className="text-white">
              fund projects
            </span>{" "}
            that <br /> have a{" "}
            <span className="text-white"> positive impact on</span> the <br />
            environment and <span className="text-white">
              {" "}
              society
            </span> while <br />
            maintaining a risk/return profile <br /> that is comparable to that
            of <br /> conventional bonds.
          </h3>
        </div>
      </div>

      {/* investing in your future  */}
      <div className="container mx-auto px-4 md:px-0 py-20">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-6">
          Investing in our future
        </h2>
        <p className="text-center text-greyish-10 mb-20">
          In addition to supporting environmentally and socially impactful
          projects, GSS bonds also offer investors the potential for competitive
          returns,
          <br className="hidden md:block" /> aligning financial goals with
          sustainable values.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 md:w-[66.938rem] mx-auto gap-x-6 gap-y-10 md:gap-y-0">
          {cardProps.map((card, index) => (
            <GssBondsOfferCards
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      <BeginYourInvestment />
    </div>
  );
};

export default GssBond;
