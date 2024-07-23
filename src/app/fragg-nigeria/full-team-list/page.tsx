"use client";
import React from "react";
import {useEffect} from "react";
import {useSearchParams} from "next/navigation";
import {usePathname} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {SubpageHero} from "@/components/SubpageHero";

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
  {
    imageSrc: "/assets/png/team/clementina.png",
    name: "DR. Clementina Kanu (ACA, CIBN)",
    position: "Director of Portfolio",
    description:
      "Clementina has over 23 years of experience in banking, Fund Management, and Investment Advisory, with extensive management exposure in Microfinance and social investments, and over 10 years of experience in the management of an SME bank. Outside her professional engagements...",
    pageLink: "/fragg-nigeria/full-team-list/clementina",
  },
  {
    imageSrc: "/assets/png/team/gregor.png",
    name: "Gregor Fasel",
    position: "Business Development Manager",
    description:
      "Gregor Fasel is an accomplished professional with extensive experience in philosophy and business administration, which he studied at the University of Bochum, Germany. His academic pursuits have seamlessly transitioned into a significant career that spans continents and industries, reflecting a...",
    pageLink: "/fragg-nigeria/full-team-list/gregor",
  },
  {
    imageSrc: "/assets/png/team/maurice.png",
    name: "Maurice Dinkelbach",
    position: "Investment Officer",
    description:
      "Maurice Dinkelbach stands out as an Investment Officer with a distinct blend of entrepreneurship, and advisory expertise across Europe and Latam. His five-year journey of supporting small businesses and startups has been marked by a passion for building enterprises from the foundation up...",
    pageLink: "/fragg-nigeria/full-team-list/maurice",
  },
];

const CompanyCard: React.FC<companyCardProps> = ({
  imageSrc,
  name,
  position,
  description,
  pageLink,
}) => (
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
        href={`${pageLink}?source=full-team`}
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

const FullTeamList = () => {
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
        backgroundImageUrl={`bg-[url('/assets/png/fullTeamListHeroImage.png')]`}
        breadcrumb="Our Team"
        pageTitle="A global team of <br />committed professionals"
      />
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
      </div>
    </div>
  );
};

export default FullTeamList;
