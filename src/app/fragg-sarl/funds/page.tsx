import {BeginYourInvestment} from "@/pageSections/BeginYourInvestment";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import FraggGreenImpactFund from "@/pageSections/FraggGreenImpactFund";
import LinkCardFunds from "@/components/LinkCardFunds";

interface LinkCardProps {
  backgroundUrl: string;
  title: string;
  linkHref: string;
}

const linkCards: LinkCardProps[] = [
  {
    backgroundUrl: 'bg-[url("/assets/png/funds/Component10.png")]',
    title: "Impact Fund",
    linkHref: "/fragg-sarl/funds/impact-fund",
  },
  {
    backgroundUrl: 'bg-[url("/assets/png/funds/Component11.png")]',
    title: "GSS Bond",
    linkHref: "/fragg-sarl/funds/gss-bond",
  },
  {
    backgroundUrl: 'bg-[url("/assets/png/funds/Component12.png")]',
    title: "Investment Banking Solutions",
    linkHref: "/fragg-sarl/funds/investment-banking-solutions",
  },
];

const Funds = () => {
  return (
    <div>
      {/* advisory link */}
      <div className="h-[53.125rem] flex flex-col lg:flex-row justify-between">
        {linkCards.map((linkCard, index) => (
          <LinkCardFunds
            key={index}
            backgroundUrl={linkCard.backgroundUrl}
            title={linkCard.title}
            linkHref={linkCard.linkHref}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 2xl:px-0 py-[7.5rem]">
        {/* icon  */}

        <Image
          // "/assets/services-svg/chart-arrow-up.svg"
          src={"/assets/svg/services/money-bag.svg"}
          width={40}
          height={40}
          alt={"Banner preview"}
          className="mb-3"
        />

        {/* title */}
        <h3 className="font-semibold mb-5 text-4xl md:text-5xl">Funds</h3>
        {/* description  */}
        <p className="text-greyish-10 mb-5">
          At FRAGG-INVEST GP Sàrl, we understand the critical role that funding
          plays in driving innovation and fueling growth. Our diverse portfolio
          of investment funds is meticulously curated to support a wide range of
          enterprises, from budding startups to established corporations.
        </p>
        <p className="text-greyish-10 mb-5">
          With a keen eye on market trends and a dedication to sustainable
          practices, we tailor our funding solutions to match the unique needs
          and ambitions of each business. Whether you&apos;re seeking seed
          capital to kickstart your venture or expansion funding to propel your
          enterprise to new heights, FRAGG-INVEST GP Sàrl is your trusted
          partner in realizing your financial goals.
        </p>

        <p className="text-redish-20 font-semibold md:text-xl">
          Check out what kind of solution fits your needs.
        </p>

        {/* sustainability related disclosures section */}
        <div className=" py-[60px] sm:py-[112px] ">
          <div className="pb-[40px]">
            <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] pb-[10px] sm:pb-[24px]">
              Sustainability-related Disclosures
            </h1>
            <p className="text-greyish-10 w-[100%] text-base">
              FRAGG-Invest is dedicated to leveraging capital for the betterment
              of both people and the environment. This declaration offers
              investors and stakeholders insight into the impact and
              sustainability-related aspects of FRAGG-Invest and its funds, as
              mandated by the regulation on sustainability-related disclosures
              in the financial services sector (EU/2019/2088) (hereinafter
              referred to as {'"'}SFDR{'"'}).
            </p>
            <div className="pt-[24px]">
              <h1 className="text-base text-redish-20 font-[600]">
                Commitment to Article 9 of SFDR
              </h1>
              <p className="text-greyish-10 w-[100%] text-base pt-[8px]">
                The FRAGG-Invest Green and Impact Fund aligns with SFDR
                requirements, specifically under Article 9. As proponents of
                impact investing, FRAGG-Invest pursues sustainable investments
                and adheres transparently to SFDR disclosure obligations. Our
                focus lies in investing in financially sustainable enterprises
                that address socio-economic challenges while mitigating adverse
                effects on people and the environment.
              </p>
            </div>
            <div className="pt-[24px]">
              <h1 className="text-base text-redish-20 font-[600]">
                Sustainability Risks Integration (Article 3 SFDR)
              </h1>
              <p className="text-greyish-10 w-[100%] text-base pt-[8px]">
                With over 100 years of combined team experience concerning Fund
                Management, Private Equity, Fund Mobilization, SME debt & equity
                investments, deal origination, portfolio management and exit,
                and implementation of Business Development Services for SME
                projects, FRAGG-Invest GP Sàrl has an experienced local and
                international team with deep knowledge of the market, culture,
                language, socio-political, regulatory environment, and the
                entire impact eco-system in the focal regions while maintaining
                a strong external affiliation with the international
                stakeholders in the impact ecosystem.
              </p>
            </div>
            <div className="pt-[24px]">
              <h1 className="text-base text-redish-20 font-[600]">
                Integration of ESG risks in the remuneration policy (Article 5
                SFDR)
              </h1>
              <p className="text-greyish-10 w-[100%] text-base pt-[8px]">
                In accordance with Article 5 of SFDR, FRAGG-Invest is required
                to outline how its remuneration policy supports the integration
                of sustainability risks. We achieve this by evaluating employee
                performance not solely on financial metric but considers several
                other principles such as effective risk management, interest of
                our clients, investors and for each other in the organization,
                following the code of conduct that promotes long-term
                sustainability and impact objectives.
              </p>
            </div>
            <div className="pt-[24px]">
              <h1 className="text-base text-redish-20 font-[600]">
                Article 9 disclosures
              </h1>
              <p className="text-greyish-10 w-[100%] text-base pt-[8px]">
                Our FRAGG-Invest Green and Impact fund classify under Article 9
                of SFDR, which is dedicated to products that have sustainable
                investment as their objective. Here are the key aspects of our
                sustainability-related disclosures under Article 9:
              </p>
            </div>
            <div className="pt-[24px]">
              <h1 className="text-base text-redish-20 font-[600]">
                Sustainable Investment Objective
              </h1>
              <p className="text-greyish-10 w-[100%] text-base pt-[8px]">
                The primary objective of the FRAGG-Invest Green and Impact Fund
                is to achieve measurable positive social and environmental
                impacts alongside financial returns. We invest in projects and
                enterprises that contribute significantly to sustainability
                goals, such as climate change mitigation, social equity, and
                economic development in emerging markets.
              </p>
            </div>
            <div className="pt-[24px]">
              <h1 className="text-base text-redish-20 font-[600]">
                ESG Criteria
              </h1>
              <p className="text-greyish-10 w-[100%] text-base pt-[8px]">
                We use rigorous environmental, social, and governance (ESG)
                criteria to evaluate potential investments. This includes
                assessing the environmental impact, social benefits, and
                governance practices of the enterprises we invest in to ensure
                they align with our sustainability objectives.
              </p>
            </div>
            <div className="pt-[24px]">
              <h1 className="text-base text-redish-20 font-[600]">
                Impact Measurement and Management
              </h1>
              <p className="text-greyish-10 w-[100%] text-base pt-[8px]">
                FRAGG-Invest employs robust impact measurement and management
                frameworks to track the social and environmental performance of
                our investments. We use internationally recognized standards and
                methodologies to report on the impact of our investments
                transparently and consistently.
              </p>
            </div>
            <div className="pt-[24px]">
              <h1 className="text-base text-redish-20 font-[600]">
                Engagement and Stewardship
              </h1>
              <p className="text-greyish-10 w-[100%] text-base pt-[8px]">
                We actively engage with the companies and projects we invest in
                to promote sustainable business practices. Our stewardship
                activities include providing guidance, support, and resources to
                help these entities enhance their ESG performance and achieve
                their sustainability goals.
              </p>
            </div>
            <div className="pt-[24px]">
              <h1 className="text-base text-redish-20 font-[600]">
                Transparency and Reporting
              </h1>
              <p className="text-greyish-10 w-[100%] text-base pt-[8px]">
                We are committed to providing clear and comprehensive reporting
                on the sustainability impacts of our investments. This includes
                regular updates to our investors and stakeholders on how the
                fund&apos;s activities align with its sustainability objectives
                and the positive impacts achieved.
              </p>
            </div>
            <div className="pt-[24px]">
              <h1 className="text-base text-redish-20 font-[600]">
                Conclusion
              </h1>
              <p className="text-greyish-10 w-[100%] text-base pt-[8px]">
                FRAGG-Invest Green and Impact Fund SCSp, managed by FRAGG-Invest
                GP Sàrl, is firmly committed to sustainable investing under
                Article 9 of SFDR. Our approach integrates rigorous ESG
                criteria, robust impact measurement and management, active
                engagement, and transparent reporting to ensure that our
                investments deliver substantial social and environmental
                benefits alongside financial returns.
              </p>
              <p className="text-greyish-10 w-[100%] text-base pt-[8px]">
                For more detailed information on our sustainability-related
                disclosures or to discuss our impact investing approach, please{" "}
                <span className="text-redish-20">
                  <Link href="/fragg-nigeria/contact">contact us.</Link>
                </span>
              </p>
            </div>
          </div>
        </div>

        <FraggGreenImpactFund />

        <div className="*:text-greyish-10 flex flex-col gap-6">
          <p>
            The fund prioritizes investments in ventures owned and led by women
            and youth, recognizing their potential as drivers of sustainable
            economic growth, social progress, and{" "}
            <br className="hidden md:block" /> environmental well-being. By
            aligning with the United Nations Sustainable Development Goals
            (SDGs) and focusing on empowering women and youth, the fund seeks to
            catalyze <br className="hidden md:block" /> positive social impact
            and contribute to the achievement of global development objectives.
          </p>
          <p>
            Incorporated in Luxembourg as a special limited partnership fund and
            managed by FRAGG-INVEST GP as a registered Alternative Investment
            Fund Manager with the Commission de{" "}
            <br className="hidden md:block" /> Surveillance du Secteur Financier
            (CSSF), the FRAGG-INVEST GREEN and IMPACT FUND SCSp is committed to
            driving positive change, fostering innovation, and creating lasting{" "}
            <br className="hidden md:block" /> value for society and the
            environment.
          </p>
        </div>
      </div>
      <BeginYourInvestment />
    </div>
  );
};

export default Funds;
