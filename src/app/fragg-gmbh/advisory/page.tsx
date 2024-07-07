import AdvisoryLinks from "@/pageSections/AdvisoryLinks";
import {BeginYourInvestment} from "@/pageSections/BeginYourInvestment";
import React from "react";
import Image from "next/image";
import LinkCard from "@/components/LinkCard";

interface LinkCardProps {
  backgroundUrl: string;
  title: string;
  linkHref: string;
}

const linkCards: LinkCardProps[] = [
  {
    backgroundUrl: 'bg-[url("/assets/png/advisory/raisingFunds.png")]',
    title: "Raising Funds",
    linkHref: "/fragg-gmbh/advisory/raising-funds",
  },
  {
    backgroundUrl: 'bg-[url("/assets/png/advisory/technicalAssistance.png")]',
    title: "Technical Assistance",
    linkHref: "/fragg-gmbh/advisory/technical-assistance",
  },
  {
    backgroundUrl: 'bg-[url("/assets/png/advisory/acceleratorPrograms.png")]',
    title: "Aceelerator Programs",
    linkHref: "/",
  },
];

const listItems = [
  "Financial Analysis: Conducting in-depth financial analysis to assess the financial health and viability of the business.",
  "Business Planning: Assisting with the development of business plans, financial projections, and investment pitches.",
  "Market Research: Conducting market research and analysis to identify target markets, competitors, and growth opportunities.",
  "Investor Matchmaking: Connecting startups and SMEs with potential investors, including venture capital firms, angel investors, and impact investors.",
  "Due Diligence Support: Providing support throughout the due diligence process to ensure compliance with investor requirements and standards.",
];

const Advisory = () => {
  return (
    <div>
      {/* advisory link */}
      <div className="h-[53.125rem] flex flex-col md:flex-row justify-between">
        {linkCards.map((linkCard, index) => (
          <LinkCard
            key={index}
            backgroundUrl={linkCard.backgroundUrl}
            title={linkCard.title}
            linkHref={linkCard.linkHref}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-0 py-20">
        {/* icon  */}
        <div className={`relative h-10 w-10 mb-3`}>
          <Image
            // "/assets/services-svg/chart-arrow-up.svg"
            src={"/assets/svg/advisory/like.svg"}
            fill
            alt={"Banner preview"}
          />
        </div>
        {/* title */}
        <h3 className="font-semibold mb-5 text-4xl md:text-5xl">Advisory</h3>
        {/* description  */}
        <p className="text-greyish-10 mb-5">
          FRAGG Investment Management provides advisory services to investors,
          financial intermediaries, and SMEs in sectors such as Health, Energy &
          Climate, Agriculture, Education, and Affordable Housing. The firm
          offers expertise in impact investment strategy, project development,
          and financial structuring.
        </p>
        <p className="text-greyish-10 mb-5">
          FRAGG Investment Management offers comprehensive investment readiness
          services to startups and SMEs seeking to attract funding for their
          ventures. This includes:
        </p>
        {/* list */}
        <ul className=" list list-inside text-greyish-10 space-y-4 mb-5">
          {listItems.map((listItem, index) => (
            <li key={index} className="relative pl-8">
              <span
                className="absolute left-0 top-0 w-5 h-7"
                style={{
                  backgroundImage: `url(/assets/svg/advisory/listStyle.svg)`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></span>
              {listItem}
            </li>
          ))}
        </ul>
        <p className="text-redish-20 font-semibold md:text-xl">
          Check out what kind of solution fits your needs.
        </p>
      </div>
      <BeginYourInvestment />
    </div>
  );
};

export default Advisory;

// list-image-[url(/assets/svg/advisory/listStyle.svg)]
