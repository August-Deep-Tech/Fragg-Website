import BecomeanInvestor from "@/pageSections/BecomeanInvestor";
import ConnectionSection from "@/pageSections/ConnectionSection";
import FraggInvestmentManagement from "@/pageSections/FraggInvestment";
import Group from "@/pageSections/Group";
import GroupContact from "@/pageSections/GroupContact";
import GrowWithFragg from "@/pageSections/GrowWithFragg";
import HeroSection from "@/pageSections/HeroSection";
import OurStats from "@/pageSections/OurStats";
import PriorityStrategy from "@/pageSections/PriorityStrategy";
import WhatWeOffer from "@/pageSections/WhatWeOffer";
import React from "react";

const Landing = () => {
  return (
    <div>
      <HeroSection bgImage={"home-nigeria"} />
      <ConnectionSection
        image={"/assets/svg/home/connection-fragg-nigeria.svg"}
      />
      <FraggInvestmentManagement
        Data={[
          {
            title: "FRAGG Investment Management, Nigeria",
            subText:
              "FRAGG Investment is a leading impact investment manager and advisor specialized in domestic mobilization and management of funds with a strong focus on impact investment, green economy, and sustainable climate-smart technologies for the Sustainable Development Goals of the United Nations. We support our investments with a triple bottom-line approach – Profit, People, and Planet.",
          },
          {
            title: "Our Target",
            subText:
              "FRAGG Investment is keen on investing in high impact companies in Africa, Latin America, and the Caribbean, with a special focus on sectors such as renewable energy, sustainable agriculture, and financial inclusion. We aim to support projects that have a positive social and environmental impact on their local communities and the wider world.",
          },
          {
            title: "Our Team",
            subText:
              "With our international team of investment professionals and advisors, we provide extensive networks that span across Africa, Latin America, and the Caribbean. Our team includes recognized leaders in green economy and development finance with a strong commitment to achieving impact-driven results. We work closely with clients to tailor strategies that meet their specific investment goals and objectives.",
          },
        ]}
      />
      <div className="pt-[350px] sm:pt-[50px] lg:pt-0">
        <WhatWeOffer />
      </div>
      <PriorityStrategy />
      <OurStats />
      <GrowWithFragg />
      <Group text="Join the network of FRAGG Group, which includes FRAGG Investment Management in Nigeria, FRAGG Invest-GmbH in Germany, and FRAGG-Invest SÀRL in Luxembourg, providing customized investment solutions across borders." />
      <GroupContact />
      <BecomeanInvestor />
    </div>
  );
};

export default Landing;
