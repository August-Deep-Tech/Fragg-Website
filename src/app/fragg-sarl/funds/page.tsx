import {BeginYourInvestment} from "@/pageSections/BeginYourInvestment";
import React from "react";
import Image from "next/image";
import FraggGreenImpactFund from "@/pageSections/FraggGreenImpactFund";
import LinkCardFunds from "@/components/LinkCardFunds";

interface LinkCardProps {
  backgroundUrl: string;
  title: string;
  linkHref: string;
}

const linkCards: LinkCardProps[] = [
  {
    backgroundUrl: 'bg-[url("/assets/png/funds/Component10.png")]',
    title: "Impact Fund",
    linkHref: "/fragg-sarl/funds/impact-fund",
  },
  {
    backgroundUrl: 'bg-[url("/assets/png/funds/Component11.png")]',
    title: "GSS Bond",
    linkHref: "/fragg-sarl/funds/gss-bond",
  },
  {
    backgroundUrl: 'bg-[url("/assets/png/funds/Component12.png")]',
    title: "Investment Banking Solutions",
    linkHref: "/fragg-sarl/funds/investment-banking-solutions",
  },
];

const Funds = () => {
  return (
    <div>
      {/* advisory link */}
      <div className="h-[53.125rem] flex flex-col lg:flex-row justify-between">
        {linkCards.map((linkCard, index) => (
          <LinkCardFunds
            key={index}
            backgroundUrl={linkCard.backgroundUrl}
            title={linkCard.title}
            linkHref={linkCard.linkHref}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 2xl:px-0 py-[7.5rem]">
        {/* icon  */}

        <Image
          // "/assets/services-svg/chart-arrow-up.svg"
          src={"/assets/svg/services/money-bag.svg"}
          width={40}
          height={40}
          alt={"Banner preview"}
          className="mb-3"
        />

        {/* title */}
        <h3 className="font-semibold mb-5 text-4xl md:text-5xl">Funds</h3>
        {/* description  */}
        <p className="text-greyish-10 mb-5">
          At FRAGG Investment, we understand the critical role that funding
          plays in driving innovation and fueling growth. Our diverse portfolio
          of investment funds is meticulously curated to support a wide range of
          enterprises, from budding startups to established corporations.
        </p>
        <p className="text-greyish-10 mb-5">
          With a keen eye on market trends and a dedication to sustainable
          practices, we tailor our funding solutions to match the unique needs
          and ambitions of each business. Whether you&apos;re seeking seed
          capital to kickstart your venture or expansion funding to propel your
          enterprise to new heights, FRAGG Investment is your trusted partner in
          realizing your financial goals.
        </p>

        <p className="text-redish-20 font-semibold md:text-xl">
          Check out what kind of solution fits your needs.
        </p>

        <FraggGreenImpactFund />

        <div className="*:text-greyish-10 flex flex-col gap-6">
          <p>
            The fund prioritizes investments in ventures owned and led by women
            and youth, recognizing their potential as drivers of sustainable
            economic growth, social progress, and{" "}
            <br className="hidden md:block" /> environmental well-being. By
            aligning with the United Nations Sustainable Development Goals
            (SDGs) and focusing on empowering women and youth, the fund seeks to
            catalyze <br className="hidden md:block" /> positive social impact
            and contribute to the achievement of global development objectives.
          </p>
          <p>
            Incorporated in Luxembourg as a special limited partnership fund and
            managed by FRAGG-INVEST GP as a registered Alternative Investment
            Fund Manager with the Commission de{" "}
            <br className="hidden md:block" /> Surveillance du Secteur Financier
            (CSSF), the FRAGG-INVEST GREEN and IMPACT FUND SCSp is committed to
            driving positive change, fostering innovation, and creating lasting{" "}
            <br className="hidden md:block" /> value for society and the
            environment.
          </p>
        </div>
      </div>
      <BeginYourInvestment />
    </div>
  );
};

export default Funds;
