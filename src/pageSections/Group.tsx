import LinkCard from "@/components/LinkCard";
import {redHatDisplay} from "@/styles/font";
import React from "react";

interface LinkCardProps {
  backgroundUrl: string;
  title: string;
  linkHref: string;
}

const props: LinkCardProps[] = [
  {
    backgroundUrl: 'bg-[url("/assets/webp/fragg-nigeria.webp")]',
    title: "FRAGG Investment Management, Nigeria",
    linkHref: "/fragg-nigeria/about",
  },
  {
    backgroundUrl: 'bg-[url("/assets/webp/fragg-gmbh.webp")]',
    title: "FRAGG-Invest GmbH, Germany",
    linkHref: "/fragg-gmbh/about",
  },
  {
    backgroundUrl: 'bg-[url("/assets/webp/fragg-sarl.webp")]',
    title: "FRAGG-Invest GP Sàrl, Luxembourg",
    linkHref: "/fragg-sarl/about",
  },
];
interface IGroups {
  text: string;
}

const Group = ({text}: IGroups) => {
  return (
    <div className={`${redHatDisplay.className} pt-[80px]`}>
      <div className="pt-[40px]">
        <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] text-center pb-[10px] sm:pb-[24px]">
          FRAGG Group
        </h1>
        <p className="text-greyish-10 mx-auto text-center w-[90%] sm:w-[70%] xl:w-[60%] text-base">
          {text}
        </p>
      </div>

      <div className="h-[53.125rem] flex flex-col lg:flex-row justify-between pt-[40px]">
        {props.map((prop, index) => (
          <LinkCard
            key={index}
            backgroundUrl={prop.backgroundUrl}
            title={prop.title}
            linkHref={prop.linkHref}
          />
        ))}
      </div>
    </div>
  );
};

export default Group;
