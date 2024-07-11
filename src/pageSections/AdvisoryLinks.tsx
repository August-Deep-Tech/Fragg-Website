import React from "react";
import LinkCard from "@/components/LinkCard";

interface LinkCardProps {
  backgroundUrl: string;
  title: string;
  linkHref: string;
}

const props: LinkCardProps[] = [
  {
    backgroundUrl: 'bg-[url("/assets/png/advisory/raisingFunds.png")]',
    title: "Raising Funds",
    linkHref: "/fragg-nigeria/advisory/raising-funds",
  },
  {
    backgroundUrl: 'bg-[url("/assets/png/advisory/technicalAssistance.png")]',
    title: "Technical Assistance",
    linkHref: "/fragg-nigeria/advisory/technical-assistance",
  },
  {
    backgroundUrl: 'bg-[url("/assets/png/advisory/acceleratorPrograms.png")]',
    title: "Aceelerator Programs",
    linkHref: "/fragg-nigeria/advisory/accelerator-program",
  },
];

const AdvisoryLinks = () => {
  return (
    <div className="h-[53.125rem] flex flex-col lg:flex-row justify-between">
      {props.map((prop, index) => (
        <LinkCard
          key={index}
          backgroundUrl={prop.backgroundUrl}
          title={prop.title}
          linkHref={prop.linkHref}
        />
      ))}
    </div>
  );
};

export default AdvisoryLinks;
