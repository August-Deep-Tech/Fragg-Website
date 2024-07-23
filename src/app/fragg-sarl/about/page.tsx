"use client";
import Button from "@/components/Button";
import {SubpageHero} from "@/components/SubpageHero";
import {BeginYourInvestment} from "@/pageSections/BeginYourInvestment";
import GroupContact from "@/pageSections/GroupContact";
import {ArrowRight} from "lucide-react";
import {useEffect} from "react";
import {useSearchParams} from "next/navigation";
import {usePathname} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
interface companyCardProps {
  imageSrc: string;
  name: string;
  position: string;
  description: string;
  pageLink: string;
}

const teamMembers: companyCardProps[] = [
  {
    imageSrc: "/assets/png/team/franklin.png",
    name: "Franklin Odoemenam",
    position: "Managing Partner",
    description:
      "Franklin Odoemenam stands out as a pivotal figure in the global finance sector, with a robust track record of building strategic partnerships with major Development Finance Institutions (DFIs) such as the African Development Bank (AfDB), Agence Fr...",
    pageLink: "/fragg-nigeria/full-team-list/franklin",
  },
  {
    imageSrc: "/assets/png/team/nuela.png",
    name: "Nuela Chidimma Unije",
    position: "Partner and Executive Director",
    description:
      "Nuela Unije, with over 13 years of experience, is a leading figure in transformative finance, currently serving as Partner and Investment Director at FRAGG-INVEST. Her educational journey, equipped with a Bachelor's in Banking and Finance and...",
    pageLink: "/fragg-nigeria/full-team-list/nuela",
  },
  {
    imageSrc: "/assets/png/team/amaka.png",
    name: "Amaka Onyechi",
    position: "Administrative & Finance Officer",
    description:
      "Amaka Onyechi stands out as a Finance and Admin Officer, boasting 8 years of multifaceted experience in the realms of administrative and financial management, human resources, research, data management, customer experience, and digital marketing. Her...",
    pageLink: "/fragg-nigeria/full-team-list/amaka",
  },
  {
    imageSrc: "/assets/png/team/olugbenga.png",
    name: "Olugbenga Musa",
    position: "Investment Manager",
    description:
      "Olugbenga Musa, an esteemed Investment Manager at FRAGG Investment Management Ltd, brings to the table over 12 years of rich experience in investment banking and advisory services. Olugbenga's proficiency in strategy development, fi...",
    pageLink: "/fragg-nigeria/full-team-list/olugbenga",
  },
];
const About = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("scrollTo") === "team") {
      const teamSection = document.getElementById("our-team");
      if (teamSection) {
        teamSection.scrollIntoView({behavior: "smooth"});
      }
    }
  }, [searchParams]);

  return (
    <div>
      <SubpageHero
        backgroundImageUrl={`bg-[url('/assets/webp/about-sarl.webp')]`}
        breadcrumb="FRAGG Investment"
        pageTitle="Your dependable wealth <br /> and funds partner"
      />

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
              bg: "investAboutOne",
              bgImage: "/assets/svg/home/global-search.svg",
              text: "Geographical Focus",
              subText:
                "FRAGG strategically focuses on Europe, Africa, and Latin America, harnessing regional strengths to drive sustainable growth and impactful investments across diverse economic landscapes and cultural contexts.",
            },
            {
              bg: "investAboutTwo",
              bgImage: "/assets/svg/home/graph.svg",
              text: "Sectors",
              subText:
                "Finance (Financial Institutions, FinTech & Payment Systems), Healthcare, Affordable Housing, Climate Finance (Clean Energy & Environmental Projects), Agriculture, Education.",
            },
            {
              bg: "investAboutThree",
              bgImage: "/assets/svg/home/cartesian.svg",
              text: "Instrument",
              subText:
                "Debt (Venture & Subordinated), Mezzanine & Equity - tailored to the needs and capacities of the investee. We actively engage as investors, providing strategic guidance and resources for long-term success.",
            },
          ].map((e, id) => {
            return (
              <div className={`w-[100%]`} key={id}>
                <div
                  className={`${e.bg} h-[220px] w-[100%] flex flex-col px-[18px] pt-[44px]`}
                >
                  <div className="flex gap-[10px]">
                    <div className={`relative w-[30px] h-[30px]`}>
                      <Image src={e.bgImage} fill alt={"Image preview"} />
                    </div>
                    <h1 className="text-white text-[20px] xl:text-[24px] font-[600]">
                      {e.text}
                    </h1>
                  </div>
                  <p className="text-white text-sm xl:text-base pt-[16px]">
                    {e.subText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        id="our-team"
        className="container mx-auto px-4 2xl:px-0 text-center py-20"
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-5">Our team</h2>
        <p className="text-greyish-10 mb-16">
          Dedicated professionals committed to guiding you towards financial
          success with expertise and <br /> personalized service.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 text-left">
          {teamMembers.map((teamMember, index) => (
            <CompanyCard
              key={index}
              imageSrc={teamMember.imageSrc}
              name={teamMember.name}
              position={teamMember.position}
              description={teamMember.description}
              pageLink={teamMember.pageLink}
            />
          ))}
        </div>

        <div className="flex justify-center mt-[64px]">
          <Link href="/fragg-nigeria/full-team-list">
            <Button
              label={"View Full Team"}
              type="submit"
              iconRight={<ArrowRight />}
              className="bg-redish-20 py-[16px] text-[18px] px-[24px] rounded-[28px] text-white font-semibold w-fit"
            />
          </Link>
        </div>
      </div>

      <GroupContact />
      <BeginYourInvestment />
    </div>
  );
};

export default About;

const CompanyCard: React.FC<companyCardProps> = ({
  imageSrc,
  name,
  position,
  description,
  pageLink,
}) => {
  const pathname = usePathname();
  const source = pathname.split("/")[1].replace("fragg-", "");
  return (
    <div className="flex flex-col xl:flex-row gap-y-5 xl:gap-y-0 xl:items-center">
      {/* image */}
      <div className="flex-1">
        <Image
          src={imageSrc}
          height={340}
          width={280}
          alt={`${name}'s Potrait`}
        />
      </div>
      {/* writeup */}
      <div className="flex-1">
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="text-greyish-10 mb-4">{position}</p>
        <p
          className="text-greyish-10 mb-4"
          dangerouslySetInnerHTML={{__html: description}}
        ></p>
        <Link
          href={`${pageLink}?scrollTo=team&source=${source}`}
          className=" text-redish-20 flex items-center justify-end group px-2"
        >
          <p>Read More </p>
          <span className="inline-block group-hover:translate-x-2 group-hover:transition-all">
            <Image
              src="/assets/svg/direction-right.svg"
              width={16}
              height={16}
              alt="right arrow svg"
            />
          </span>
        </Link>
      </div>
    </div>
  );
};
