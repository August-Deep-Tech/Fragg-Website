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

        {/* sustainability related disclosures section */}
        <div className="py-48">
          <h3 className="font-semibold mb-5 text-4xl md:text-5xl">
            Sustainability-related Disclosures
          </h3>
          <p>
            FRAGG-Invest is dedicated to leveraging capital for the betterment
            of both people and the environment. This declaration offers
            investors and stakeholders insight into the impact and
            sustainability-related aspects of FRAGG-Invest and its funds, as
            mandated by the regulation on sustainability-related disclosures in
            the financial services sector (EU/2019/2088) (hereinafter referred
            to as "SFDR"). The FRAGG-Invest Green and Impact Fund aligns with
            SFDR requirements, specifically under Article 9. As proponents of
            impact investing, FRAGG-Invest pursues sustainable investments and
            adheres transparently to SFDR disclosure obligations. Our focus lies
            in investing in financially sustainable enterprises that address
            socio-economic challenges while mitigating adverse effects on people
            and the environment.
          </p>
          {/* Sustainability Risks Integration (Article 3 SFDR) */}
          <div className="pt-6 ">
            {" "}
            <h4 className="text-redish-20 font-semibold">
              Sustainability Risks Integration (Article 3 SFDR)
            </h4>
            <p>
              Sustainability risks are integrated into investment decisions and
              risk monitoring if they represent a potential or actual material
              risk or provide an opportunity to implement mitigating measures to
              minimise these risks. The impact of the materialisation of a
              sustainability risk can be diverse and varies depending on the
              risk, region, and asset class. If a sustainability risk occurs in
              relation to an asset, this usually has a negative impact on its
              value or leads to a complete loss. For a more comprehensive
              understanding of how sustainability factors and risks are
              integrated into the due diligence process, investment
              decision-making, and post-investment monitoring, please refer to
              the FRAGG-Invest ESG Policy.
            </p>
          </div>
          {/* Integration of ESG risks in the remuneration policy (Article 5 SFDR) */}
          <div className="pt-6 ">
            {" "}
            <h4 className="text-redish-20 font-semibold">
              Integration of ESG risks in the remuneration policy (Article 5
              SFDR)
            </h4>
            <p>
              In accordance with Article 5 of SFDR, FRAGG-Invest is required to
              outline how its remuneration policy supports the integration of
              sustainability risks. We achieve this by evaluating employee
              performance not solely on financial metric but considers several
              other principles such as effective risk management, interest of
              our clients, investors and for each other in the organization,
              following the code of conduct that promotes long-term
              sustainability and impact objectives.  
            </p>
          </div>
          {/* Article 9 disclosures */}
          <div className="pt-6 ">
            {" "}
            <h4 className="text-redish-20 font-semibold">
              Article 9 disclosures
            </h4>
            <p>
              Our FRAGG-Invest Green and Impact fund classify under Article 9 of
              SFDR.
            </p>
          </div>
        </div>

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
