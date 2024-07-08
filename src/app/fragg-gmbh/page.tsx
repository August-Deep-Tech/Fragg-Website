import BecomeanInvestor from '@/pageSections/BecomeanInvestor'
import ConnectionSection from '@/pageSections/ConnectionSection'
import FraggInvestmentManagement from '@/pageSections/FraggInvestment'
import Group from '@/pageSections/Group'
import GroupContact from '@/pageSections/GroupContact'
import GrowWithFragg from '@/pageSections/GrowWithFragg'
import HeroSectionGmbh from '@/pageSections/HeroSectionGmbh'
import PriorityStrategy from '@/pageSections/PriorityStrategy'
import WhatWeOffer from '@/pageSections/WhatWeOffer'
import React from 'react'

const Landing = () => {
  return (
    <div>
      <HeroSectionGmbh />
      <ConnectionSection />
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
      <PriorityStrategy />
      <GrowWithFragg />
      <Group text="Join the network of FRAGG Group, which includes FRAGG Investment Management in Nigeria, FRAGG Invest-GmbH in Germany, and FRAGG-Invest SÀRL in Luxembourg, providing customized investment solutions across borders." />
      <GroupContact image="map-germany" />
      <BecomeanInvestor />
    </div>
  )
}

export default Landing