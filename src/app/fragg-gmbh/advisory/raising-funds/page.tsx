import {SubpageHero} from "@/components/SubpageHero";
import {BeginYourInvestment} from "@/pageSections/BeginYourInvestment";
import CapitalAcquisitionStrategies from "@/pageSections/CapitalAcquisitionStrategies";
import React from "react";

const RaisingFunds = () => {
  return (
    <div>
      <SubpageHero
        backgroundImageUrl={`bg-[url('/assets/png/raisingFundsHeroBg.png')]`}
        breadcrumb="RAISING FUNDS"
        pageTitle="FRAGG helps you boost <br /> your capital faster"
      />

      <div className="container mx-auto px-4 2xl:px-0 py-28">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Looking to Raise Capital?
        </h2>
        <p className="text-greyish-10 mb-6">
          We tap into our strong network and expertise in investment management
          to link investors to projects in West Africa. We act as an
          intermediary <br /> bridging the gap between SMEs in the region in
          need of funds to finance their projects and scale, and investors
          looking to finance such high-growth/ <br /> high-impact projects.{" "}
        </p>
        <p className="text-greyish-10">
          Acting on the fund sourcing mandates of these SMEs, source, identify,
          negotiate, and package required funds from Development Financial{" "}
          <br />
          Institutions, Impact Investors, Private Equity/Debt Funds, and other
          institutional investors around the world in other to meet the
          portfolio needs of <br /> investee companies.
        </p>
      </div>

      <div className="bg-[url('/assets/png/raisingFundsImg.png')] bg-cover">
        <div className="container mx-auto px-4 2xl:px-0 py-28">
          <h3 className="text-4xl md:text-5xl text-white">
            FRAGG provides Fund Mobilization/ <br /> Capital Raising services to
            SMEs and <br /> projects in the impact and climate <br /> sectors.
          </h3>
        </div>
      </div>

      <div className="container mx-auto px-4 2xl:px-0 py-28">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          FRAGG works on a success-fee basis and will <br /> not charge any
          upfront payments.
        </h2>
        <p className="text-greyish-10 mb-6">
          We have a track record of working with institutional and private
          investors in executing debt and equity investments, technical
          assistance facilities, and <br /> guarantee in Financial Institutions
          as well as SME projects, while providing support for the investee
          companies in negotiating good deals and <br /> conditions for their
          expected funding.
        </p>
        <p className="text-greyish-10">
          We take a small percentage of funds raised as remuneration. This fee
          is negotiated on a case-by-case basis, depending on the size of the
          project, <br /> volume of work involved, and type of funding
          instrument required. All other fees (where applicable) are only
          incurred with the pre-approval of the <br /> organisation, and
          invoiced at the point of disbursement from the investor.
        </p>
      </div>

      <CapitalAcquisitionStrategies />
      <BeginYourInvestment />
    </div>
  );
};

export default RaisingFunds;
