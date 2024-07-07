import BecomeanInvestor from '@/pageSections/BecomeanInvestor'
import ConnectionSection from '@/pageSections/ConnectionSection'
import FraggInvestmentManagement from '@/pageSections/FraggInvestment'
import Group from '@/pageSections/Group'
import GroupContact from '@/pageSections/GroupContact'
import GrowWithFragg from '@/pageSections/GrowWithFragg'
import HeroSection from '@/pageSections/HeroSection'
import OurStats from '@/pageSections/OurStats'
import PriorityStrategy from '@/pageSections/PriorityStrategy'
import WhatWeOffer from '@/pageSections/WhatWeOffer'
import React from 'react'

const Landing = () => {
  return (
    <div>
      <HeroSection bgImage={'home-nigeria'} />
      <ConnectionSection />
      <FraggInvestmentManagement />
      <WhatWeOffer />
      <PriorityStrategy />
      <OurStats />
      <GrowWithFragg />
      <Group />
      <GroupContact image="map-nigeria" />
      <BecomeanInvestor />
    </div>
  )
}

export default Landing