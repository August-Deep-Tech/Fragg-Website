import React from "react";
import Image from "next/image";
import {ServiceDescriptionCard} from "@/components/ServiceDescriptionCard";
import {SubpageHero} from "@/components/SubpageHero";
import {BeginYourInvestment} from "@/pageSections/BeginYourInvestment";

interface Service {
  icon: string;
  title: string;
  description: string;
  list?: {title: string; description: string}[];
}

const services: Service[] = [
  {
    icon: "/assets/svg/services/chart-arrow-up.svg",
    title: "Impact Investment Advisory",
    description:
      " FRAGG Investment provides advisory services to investors,financial intermediaries, and SMEs in sectors such as Health, Energy & Climate, Agriculture, Education, and Affordable Housing. The firm offers expertise in impact investment strategy, project development, and financial structuring.",
  },
  // {
  //   icon: "/assets/svg/services/money-bag.svg",
  //   title: "Fund Mobilization",
  //   description:
  //     "FRAGG Investment facilitates fund mobilization and finance linkage services for commercial banks, microfinance banks, impact-related projects, and SMEs. The firm assists in raising capital from diversified sources to support sustainable development initiatives.",
  // },
  {
    icon: "/assets/svg/services/setting.svg",
    title: "Project Management",
    description:
      "FRAGG Investment specializes in the development, implementation, and management of impact investment projects in infrastructural climate-related areas, renewable energy, health, affordable housing, and financial services. The firm provides end-to-end project management support, from design to execution.",
  },
  {
    icon: "/assets/svg/services/calculator.svg",
    title: "Fund Management",
    description:
      "As a fund manager, FRAGG Investment has a proven track record of designing, structuring, launching, implementing, and divesting innovative funds. The firm manages funds focused on sustainable investments, ensuring adherence to ESG standards and controls.",
  },
  {
    icon: "/assets/svg/services/money-bag-coin.svg",
    title: "Investment Readiness for Startups and SME",
    description:
      "FRAGG Investment offers comprehensive investment readiness services to startups and SMEs seeking to attract funding for their ventures. This includes:",
    list: [
      {
        title: "Financial Analysis",
        description:
          "Conducting in-depth financial analysis to assess the financial health and viability of the business.",
      },
      {
        title: "Business Planning",
        description:
          "Assisting with the development of business plans, financial projections, and investment pitches.",
      },
      {
        title: "Market Research",
        description:
          "Conducting market research and analysis to identify target markets, competitors, and growth opportunities.",
      },
      {
        title: "Investor Matchmaking",
        description:
          "Connecting startups and SMEs with potential investors, including venture capital firms, angel investors, and impact investors.",
      },
      {
        title: "Due Diligence Support",
        description:
          "Providing support throughout the due diligence process to ensure compliance with investor requirements and standards.",
      },
    ],
  },
  {
    icon: "/assets/svg/services/idea.svg",
    title: "Growth and Impact Accelerator Programmes",
    description:
      "FRAGG Investment organizes growth and impact accelerator programs designed to help startups and SMEs scale their businesses and maximize their social and environmental impact. Key components of these programs include:",
    list: [
      {
        title: "Capacity Building",
        description:
          "Offering workshops, training sessions, and seminars on topics such as business strategy, marketing, finance, and impact measurement.",
      },
      {
        title: "Mentorship and Coaching",
        description:
          "Pairing entrepreneurs with experienced mentors and coaches who provide guidance and support.",
      },
      {
        title: "Access to Finance",
        description:
          "Providing access to resources such as funding, office space, legal advice, and technical expertise to support business growth.",
      },
      {
        title: "Network Linkage / Opportunities",
        description:
          "Facilitating networking events, pitch competitions, and industry partnerships to foster collaboration and growth.",
      },
    ],
  },
  {
    icon: "/assets/svg/services/donate-coin.svg",
    title: "Capital Raising and Business Development Services",
    description:
      "FRAGG Investment facilitates fund mobilization and finance linkage services for commercial banks, microfinance banks, impact-related projects, and SMEs. The firm assists in raising capital from diversified sources to support sustainable development initiatives.",
    list: [
      {
        title: "Fundraising Strategy",
        description:
          "Developing tailored fundraising strategies aligned with the company's growth objectives and investment needs.",
      },
      {
        title: "Investor Relations",
        description:
          "Managing relationships with investors and stakeholders, including communication, reporting, and investor updates.",
      },
      {
        title: "Deal Structuring",
        description:
          "Advising on deal structuring, negotiation, and documentation to secure favorable terms for equity investment, debt financing, or other funding instruments.",
      },
      {
        title: "Market Expansion",
        description:
          "Supporting businesses in expanding into new markets, developing distribution channels, and establishing strategic partnerships.",
      },
      {
        title: "Impact Measurement and Reporting",
        description:
          "Designing impact measurement frameworks and reporting systems to track and communicate the social and environmental impact of the business.",
      },
    ],
  },
];

const Services = () => {
  return (
    <div>
      <SubpageHero
        backgroundImageUrl={`bg-[url('/assets/png/1.png')]`}
        breadcrumb="Our Services"
        pageTitle="Solutions Crafted for <br /> Your Success"
      />
      <div className="container mx-auto px-4 2xl:px-0 py-20">
        <h2 className="text-5xl text-greyish-30 font-semibold mb-5">
          Empowering Financial Success
        </h2>
        <p className="text-greyish-10 mb-20">
          FRAGG Investment provides a range of services to support startups,
          SMEs, and impact projects in achieving their growth and impact
          objectives.With expertise in investment readiness, accelerator
          programs, capital raising, and business development, the firm is
          dedicated to fostering sustainable entrepreneurship and driving
          positive social, environmental, and financial outcomes.
        </p>
        {/* service list */}
        <div className="space-y-10">
          {services.map((service, index) => (
            <ServiceDescriptionCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              list={service.list}
            />
          ))}
        </div>
      </div>
      <BeginYourInvestment />
    </div>
  );
};

export default Services;
