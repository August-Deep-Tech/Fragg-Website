import BecomeanInvestor from '@/pageSections/BecomeanInvestor'
import { BeginYourInvestment } from '@/pageSections/BeginYourInvestment'
import ConnectionSection from '@/pageSections/ConnectionSection'
import FraggInvestmentManagement from '@/pageSections/FraggInvestment'
import Group from '@/pageSections/Group'
import GroupContact from '@/pageSections/GroupContact'
import GrowWithFragg from '@/pageSections/GrowWithFragg'
import HeroSectionTwo from '@/pageSections/HeroSectionTwo'
import PriorityStrategy from '@/pageSections/PriorityStrategy'
import WhatWeOffer from '@/pageSections/WhatWeOffer'

import Image from "next/image";

const Landing = () => {
  return (
    <div>
      <HeroSectionTwo bg="home-germany"/>
      <ConnectionSection image={'/assets/svg/home/connection-fragg-gmbh.svg'} />
      <FraggInvestmentManagement
        Data={[
          {
            title: "FRAGG-INVEST GmbH",
            subText: "FRAGG-INVEST GmbH is an impact investment manager and advisor committed to mobilizing and managing funds with a strong focus on sustainable investments aligned with the United Nations Sustainable Development Goals (SDGs).",
          },
          {
            title: "Our Target",
            subText: "With headquarters in Germany, FRAGG-INVEST GmbH specializes in impact investment advisory services, fund mobilization, project development, and fund management. With its commitment to sustainable finance, expertise in impact investing, and extensive network and partnerships, FRAGG-INVEST GmbH is dedicated to driving positive social, environmental, and financial impact across its target regions.",
          },
          {
            title: 'Our Services',
            subText: "FRAGG-INVEST GmbH provides a range of services to support startups, SMEs, and impact projects in achieving their growth and impact objectives. With expertise in investment readiness, accelerator programs, capital raising, and business development, the firm is dedicated to fostering sustainable entrepreneurship and driving positive social, environmental, and financial outcomes.",
          },
        ]
        } />
      <WhatWeOffer />
      
      <div className='px-[20px] py-[60px] sm:py-[112px] xl:px-[64px]'>
        <div className="pb-[40px]">
          <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] pb-[10px] sm:pb-[24px]">
          Our Approach
          </h1>
          <p className="text-greyish-10 w-[100%] text-base">
          FRAGG-Invest has a strong network and partnerships in fundraising, implementation, and management of numerous impact investment initiatives that address market needs within the Africa and LAC region. As a fund manager, FRAGG-Invest has a proven track record of designing, structuring, launching, implementing, and divesting innovative funds. FRAGG{"'"}s mission is to enable the flow of sustainable financial instruments to emerging and frontier economies by closing the financial needs of financial intermediaries, and SMEs through the facilitation of access to funds from diversified sources. Our vision is to improve people’s skills and capacities through impact investments to achieve more equality, social and financial inclusion, and climate resilience.
          </p>
        </div>
        <div className='flex flex-col lg:flex-row gap-[0px] mt-[20px]'>
          {[
            {
              bg: "approachOne",
              bgImage: "/assets/svg/about/people.svg",
              text: "People",
              subText: "Realisation of social impact (fighting/reducing inequality, promoting inclusion and gender equity).",
            },
            {
              bg: "approachTwo",
              bgImage: "/assets/svg/home/global-search.svg",
              text: "Planet",
              subText: "Realizing tangible and quantifiable environmental benefits through targeted initiatives and measurable actions.",
            },
            {
              bg: "approachThree",
              bgImage: "/assets/svg/about/line-chart-two.svg",
              text: "Profit",
              subText: "Ensuring consistent and reliable returns through meticulous strategies and robust performance metrics, guaranteeing profit.",
            },
          ].map((e, id) => {
            return (
              <div className={`w-[100%] `} key={id}>
                <div className={`${e.bg} h-[300px] sm:h-[600px] w-[100%] flex flex-col justify-end it px-[18px] pb-[40px]`}>
                  <div className='flex gap-[10px]'>
                    <div
                      className={`relative w-[30px] h-[30px]`}
                    >
                      <Image
                        src={e.bgImage}
                        fill
                        alt={"Image preview"}
                      />
                    </div>
                    <h1 className='text-white text-[20px] xl:text-2xl font-[600]'>{e.text}</h1>
                  </div>
                  <p className='text-white text-sm xl:text-2xl pt-[16px]'>{e.subText}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <PriorityStrategy />
      <GrowWithFragg />
      <Group text="Join the network of FRAGG Group, which includes FRAGG Investment Management in Nigeria, FRAGG Invest-GmbH in Germany, and FRAGG-Invest SÀRL in Luxembourg, providing customized investment solutions across borders." />
      <GroupContact/>
      <BecomeanInvestor />
      <BeginYourInvestment />
    </div>
  )
}

export default Landing