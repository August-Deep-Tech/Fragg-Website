"use client";
import React from "react";
import Image from "next/image";

interface strategyItemProps {
  icon: string;
  title: string;
  description: string;
}

const strategyItemsArr: strategyItemProps[] = [
  {
    icon: "/assets/svg/raising-funds/buildings-2.svg",
    title: "Syndicated Finance",
    description:
      "For big projects where multiple investors are <br/> needed, we arrange a cocktail of commercial <br/> banks, institutional investors and DFIs to <br/> syndicate facilities to finance such identified <br/> projects.",
  },
  {
    icon: "/assets/svg/raising-funds/donate-coin.svg",
    title: "Bond",
    description:
      "We also assist financial institutions interested in <br/> improving and diversifying her access to long <br/> term funding in domestic capital markets for <br/> the benefit of her SME portfolio by issuing <br/> both local currency and foreign bond <br/> investments",
  },
  {
    icon: "/assets/svg/raising-funds/money bag-coin.svg",
    title: "Debt Funding",
    description:
      "We source financing in the form of debt/credit <br/> lines from institutional investors for impact <br/> projects in the region. We source for and <br/> negotiate the best deals and interest rate for <br/> our clients, and assist in the preparation and <br/> packaging of documentation presented to the <br/> investor.",
  },
  {
    icon: "/assets/svg/raising-funds/money bag-coin-1.svg",
    title: "Equity Funding",
    description:
      "We source financing in the form of equity from <br/> private equity funds and other institutional <br/> investors for SMEs seeking equity <br/> participation.",
  },
  {
    icon: "/assets/svg/raising-funds/headphones.svg",
    title: "Technical Assistance Facility",
    description:
      "In addition to financing in the form of debt or <br/> equity, we source for investors who provide <br/> additional technical assistance facility as <br/> additional non-financial support to investee <br/> companies in areas where there is need for <br/> capacity improvement",
  },
  {
    icon: "/assets/svg/raising-funds/safe box 01.svg",
    title: "Guarantee",
    description:
      "As an additional comfort to investors, we <br/> leverage our partnership with the African <br/> Guarantee Fund to provide guarantee <br/> covering up to 50% of investments for <br/> qualified businesses",
  },
];

const StrategyItem: React.FC<strategyItemProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex flex-col items-center">
    {/* icon  */}
    <div className={`relative h-10 w-10 mb-3`}>
      <Image
        // "/assets/services-svg/chart-arrow-up.svg"
        src={icon}
        fill
        alt={"Banner preview"}
      />
    </div>
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <p
      className="text-greyish-10"
      dangerouslySetInnerHTML={{__html: description}}
    />
  </div>
);

const CapitalAcquisitionStrategies = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 text-center py-20">
      <h2 className="text-4xl md:text-5xl font-semibold mb-7">
        Capital Acquisition Strategies
      </h2>
      <p className="text-greyish-10 mb-20">
        FRAGG&apos;s capital strategies drive growth. From debt to partnerships,
        we secure funds for innovation and expansion, ensuring sustained <br />{" "}
        success. We also offer non financial services to accelerate your growth.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {strategyItemsArr.map((item, index) => (
          <StrategyItem
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <table>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CapitalAcquisitionStrategies;
