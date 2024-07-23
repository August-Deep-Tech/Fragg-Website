import Button from "@/components/Button";
import BecomeanInvestor from "@/pageSections/BecomeanInvestor";
import {BeginYourInvestment} from "@/pageSections/BeginYourInvestment";
import Group from "@/pageSections/Group";
import GroupContact from "@/pageSections/GroupContact";
import HeroSectionTwo from "@/pageSections/HeroSectionTwo";
import WhatWeOffer from "@/pageSections/WhatWeOffer";

import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <div>
      <HeroSectionTwo bg="home-sarl" />
      <div className="px-[20px] py-[60px] sm:py-[112px] xl:px-[64px]">
        <div className="pb-[40px]">
          <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] pb-[10px] sm:pb-[24px]">
            FRAGG-Invest GP Sàrl
          </h1>
          <p className="text-greyish-10 w-[100%] text-base">
            FRAGG-Invest GP Sàrl is incorporated in Luxembourg as a General
            Partner for managing FRAGG-Invest’s funds and is also registered
            with the CSSF in Luxembourg as an Alternative Investment Fund
            Manager (AIFM). The company targeting investments in the impact and
            green domains. FRAGG-Invest GP Sàrl performs the following
            responsibilities: the identification of investment opportunities,
            due diligence (financial, non-financial, and legal), Monitoring of
            investment, and management of the relationship with the investors
            and investee companies. 
          </p>
          <p className="text-greyish-10 w-[100%] text-base py-[24px]">
            With over 100 years of combined team experience concerning Fund
            Management, Private Equity, Fund Mobilization, SME debt & equity
            investments, deal origination, portfolio management and exit, and
            implementation of Business Development Services for SME projects, 
            FRAGG-Invest  GP  Sàrl has an experienced local and international
            team with deep knowledge of the market, culture, language,
            socio-political, regulatory environment, and the entire impact
            eco-system in the focal regions while maintaining a strong external
            affiliation with the international stakeholders in the impact
            ecosystem.
          </p>
          <p className="text-greyish-10 w-[100%] text-base">
            FRAGG-Invest GP Sàrl currently manages the FRAGG Green and Impact
            Fund.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-[0px] mt-[20px]">
          {[
            {
              bg: "homesarlOne",
              bgImage: "/assets/svg/home/combo-shape.svg",
              text: "Our Operations",
              subText:
                "FRAGG-INVEST GP Sàrl is a Luxembourg-based entity incorporated to serve as the General Partner and Fund Manager for managing various funds, including the FRAGG-INVEST GREEN and IMPACT FUND SCSp. Registered with the Commission de Surveillance du Secteur Financier (CSSF), FRAGG-INVEST GP Sàrl operates as an Alternative Investment Fund Manager (AIFM), specializing in impact investing and sustainable finance",
            },
            {
              bg: "homesarlTwo",
              bgImage: "/assets/svg/home/deal.svg",
              text: "Our Services",
              subText:
                "FRAGG-INVEST GP Sàrl possesses extensive expertise in fund management, with a focus on impact investing, sustainable development, and social entrepreneurship. The firm's team of seasoned professionals brings a wealth of experience in investment analysis, portfolio management, and impact assessment, enabling them to identify and execute investment opportunities that generate positive social and environmental outcomes.",
            },
          ].map((e, id) => {
            return (
              <div className={`w-[100%] `} key={id}>
                <div
                  className={`${e.bg} h-[400px] w-[100%] flex flex-col justify-end it px-[18px] pb-[40px]`}
                >
                  <div className="flex gap-[10px]">
                    <div className={`relative w-[30px] h-[30px]`}>
                      <Image src={e.bgImage} fill alt={"Image preview"} />
                    </div>
                  </div>
                  <h1 className="text-white text-[20px] xl:text-2xl font-[600] pt-[28px]">
                    {e.text}
                  </h1>
                  <p className="text-white text-sm xl:text-base pt-[16px]">
                    {e.subText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <WhatWeOffer />

      <div className="relative learnMore flex justify-start items-center pl-[20px] sm:pl-[80px]">
        <div>
          <h1 className="text-[24px] sm:text-[36px] lg:text-[48px] leading-[40px] sm:leading-[64px] lg:leading-[80px] font-[700] text-white">
            <span className="text-[#999999A3]"> The </span> FRAGG Invest Green
            and Impact Fund{" "}
            <span className="text-[#999999A3]">
              {" "}
              <br />
              is driven{" "}
            </span>
            <span className="text-[#999999A3]">
              {" "}
              by the need to{" "}
            </span> promote <br />
            sustainable and impact finance <br />
            <span className="text-[#999999A3]">
              {" "}
              and to provide financial resources <br />
              and technical assistance to viable{" "}
            </span>
            <br />
            multi-sector SMEs in West Africa. <br />
          </h1>
          <Link href="/fragg-sarl/funds/impact-fund">
            <Button
              label={"Learn More"}
              className="bg-white py-[16px] text-[18px] px-[55px] rounded-[28px] text-black font-semibold w-fit mt-[40px]"
            />
          </Link>
        </div>
      </div>

      <Group text="Join the network of FRAGG Group, which includes FRAGG Investment Management in Nigeria, FRAGG Invest-GmbH in Germany, and FRAGG-Invest GP SÀRL in Luxembourg, providing customized investment solutions across borders." />
      <GroupContact />
      <BecomeanInvestor />
      <BeginYourInvestment />
    </div>
  );
};

export default Landing;
