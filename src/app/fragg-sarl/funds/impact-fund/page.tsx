import React from "react";
import Image from "next/image";
import {SubpageHero} from "@/components/SubpageHero";
import ImpactFundDarkBgSection from "@/pageSections/ImpactFundDarkBgSection";
import OurGeographicFocus from "@/pageSections/OurGeographicFocus";
import {BeginYourInvestment} from "@/pageSections/BeginYourInvestment";

const ImpactFund = () => {
  return (
    <div>
      <SubpageHero
        backgroundImageUrl={`bg-[url('../../public/assets/png/ImpactFundHeroSarl.png')]`}
        breadcrumb="IMPACT FUND"
        pageTitle="Promoting sustainable <br /> and impact finance"
      />

      {/* impacting lives ... */}
      <div className="container mx-auto px-4 md:px-0 py-20">
        <h2 className="text-5xl text-greyish-30 font-semibold mb-5">
          Impacting lives...
        </h2>
        <p className="text-greyish-10 mb-5">
          The FRAGG Invest Green and Impact Fund is a special limited
          partnership (SCSp/SLP) based in Luxembourg. It is managed by
          FRAGG-Invest GP <br className="hidden md:block" /> Sarl Luxembourg,
          advised by FRAGG-Invest GmbH Germany, and administered by CREATRUST
          Sarl Luxembourg. The fund aims to achieve{" "}
          <br className="hidden md:block" /> balanced long-term social,
          environmental, and financial returns, aligning its investments with
          the Sustainable Development Goals (SDGs) in areas like{" "}
          <br className="hidden md:block" /> climate preservation, gender
          equality, and reducing social and economic exclusion.
        </p>
        <p className="text-greyish-10 mb-5">
          The investment strategy focuses on sectors such as inclusive
          finance/fintech, healthcare/health-tech, agriculture/agtech, climate
          finance/circular <br className="hidden md:block" /> economy,
          education/edtech, and affordable housing/prop-tech. It targets
          emerging and frontier markets, particularly in Sub-Saharan Africa,
          Europe, <br className="hidden md:block" /> and Latin America.
        </p>
        <p className="text-greyish-10 mb-5">
          The fund offers various investment instruments, including debt
          (subordinated debt, venture debt) and equity, aimed at early-stage,
          high-growth, and <br className="hidden md:block" /> expansion-stage
          companies. Key features include investment sizes ranging from $250,000
          to $5,000,000, a closed-ended structure with a lifespan{" "}
          <br className="hidden md:block" /> of 10 years plus an additional 2
          years, and USD as the base currency. The fund aims to achieve a final
          closing of 100 million USD.
        </p>
        <p className="text-greyish-10">
          The fund prioritizes support for women and youth-owned or managed
          businesses, adhering to ESG policies, promoting organic growth with
          strong <br className="hidden md:block" /> performance, and ensuring
          investment diversification to mitigate risks. It emphasizes
          inclusiveness by targeting services for the bottom of the{" "}
          <br className="hidden md:block" /> pyramid, impact through businesses
          with a track record of impactful investments and robust financial
          sustainability models, and compliance with all{" "}
          <br className="hidden md:block" /> statutory and regulatory
          requirements.
        </p>
      </div>

      {/* the fragg mpact fund is driven...  */}
      <div className="bg-[url('/assets/png/impactFundImage.png')] bg-cover">
        <div className="container mx-auto px-4 md:px-0 py-28">
          <h3 className="text-4xl md:text-5xl font-semibold text-greyish-10">
            The <span className="text-white">FRAGG Impact Fund</span> is driven{" "}
            <br /> by the need to{" "}
            <span className="text-white">
              {" "}
              promote <br /> sustainable and impact finance <br />{" "}
            </span>{" "}
            and to provide financial resources <br /> and technical assistance
            to viable <br />
            <span className="text-white">
              multi-sector SMEs in West Africa.
            </span>
          </h3>
        </div>
      </div>

      <ImpactFundDarkBgSection
        title="Inclusive Financial Institution <br/> Pipeline Criteria: The Standard"
        writeup="At FRAGG Investment, we hold our Inclusive Financial Institutions
            pipeline to the highest standards, making sure that each potential
            target aligns with our working criteria. Our targets must embody
            characteristics of accessibility, sustainability, and positive
            societal impact. With a steadfast dedication to excellence, we aim
            to cultivate a portfolio of institutions that not only thrive
            financially but also promote economic empowerment and social
            well-being."
        listItems={[
          "Institutions must have a verifiable history of measurable, scalable positive social impact, a vision for continued positive impacts, and strong financial sustainability models.",
          "Comply with all statutory regulatory provisions in the area of operation and have at least 3 years audited financial statements.",
          "They must possess an Impact portfolio asset size of at least 2 Million USD.",
          "A strong governance structure and management team.",
        ]}
      />

      <ImpactFundDarkBgSection
        title="Our SME Pipeline Criteria: Striving <br/> for Excellence"
        writeup="At FRAGG Investment, we hold our SME pipeline to exacting standards, ensuring each potential investment aligns with our proven criteria. Our targets must embody qualities of innovation, sustainability, and growth potential. We meticulously assess each opportunity, seeking ventures poised to make a significant impact in their respective industries. The following criteria must be met to be a target:"
        listItems={[
          "Need significant investment with a high capital cap.",
          "Have operating outreaches covering both rural and urban areas.",
          "A financially viable business model.",
          "Focused on an organic growth approach.",
          "Have a diverse staff with reasonable number of women and youths, with projects that support women and youths in ownership and outreaches.",
          "Clear and transparent ownership structure and a strong management team in place.",
        ]}
      />

      {/* our geographical focus */}
      <OurGeographicFocus />

      {/* our growth lifecycle */}
      <div className="container mx-auto px-4 md:px-0 py-28 text-center flex flex-col items-center">
        <h3 className="text-4xl md:text-5xl font-semibold mb-6">
          Our Growth Lifecycle
        </h3>
        <p className="mb-20 text-greyish-10">
          Our investments focus primarily on{" "}
          <span className="text-orangish-20">expansion-stage companies. </span>{" "}
          However, we are able to consider investment opportunities in all
          growth <br /> phases of the impact focal companies.
        </p>
        <Image
          src="/assets/png/lifecycleImg.png"
          width={591.03}
          height={320}
          alt="icon"
        />
      </div>

      {/* our growth lifecycle */}
      <div className="container mx-auto px-4 md:px-0 py-28 text-center flex flex-col items-center">
        <h3 className="text-4xl md:text-5xl font-semibold mb-6">
          Our Return Expectations
        </h3>
        <p className="mb-20 text-greyish-10">
          We offer <span className="text-orangish-20"> patient capital </span>{" "}
          to high-impact/high-growth companies. However, we also value the
          commercial returns to investors, as this is key to <br /> ensure the
          long-term sustainability of our initiative. Hence, we balance the
          interests of the investors with the price to pipeline beneficiaries.
        </p>
        <Image
          src="/assets/png/expectationsImg.png"
          width={591.03}
          height={320}
          alt="icon"
        />
      </div>

      {/* begin your investment journey */}
      <BeginYourInvestment />
    </div>
  );
};

export default ImpactFund;
