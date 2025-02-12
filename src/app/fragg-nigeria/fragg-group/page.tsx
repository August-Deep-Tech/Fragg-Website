import React from "react";
import LinkCard from "@/components/LinkCard";

interface LinkCardProps {
  backgroundUrl: string;
  title: string;
  linkHref: string;
}

const props: LinkCardProps[] = [
  {
    backgroundUrl: 'bg-[url("/assets/png/fraggGroup/fragg-ng.png")]',
    title: "FRAGG Investment Management, Nigeria",
    linkHref: "/fragg-nigeria",
  },
  {
    backgroundUrl: 'bg-[url("/assets/png/fraggGroup/fragg-germany.png")]',
    title: "FRAGG-Invest GmbH, Germany",
    linkHref: "/fragg-gmbh",
  },
  {
    backgroundUrl: 'bg-[url("/assets/png/fraggGroup/fragg-luxemborg.png")]',
    title: "FRAGG-Invest GP Sàrl, Luxembourg",
    linkHref: "/fragg-sarl",
  },
];

const FraggGroup = () => {
  return (
    <div>
      <div className="container mx-auto text-center px-4 2xl:px-0 py-10">
        <h2 className="text-4xl md:text-5xl font-semibold mb-5">FRAGG Group</h2>
        <p className="text-greyish-10">
          Join the network of FRAGG Group, which includes FRAGG Investment
          Management in Nigeria, FRAGG Invest-GmbH in Germany, and{" "}
          <br className="hidden md:block" /> FRAGG-Invest GP SÀRL in Luxembourg,
          providing customized investment solutions across borders. Our
          comprehensive services encompass tailored investment advisory{" "}
          <br className="hidden md:block" /> and capital mobilization,investment
          management, and technical assistance. We specialize in impact
          investing and sustainable finance solutions, ensuring that your
          investments not only generate financial{" "}
          <br className="hidden md:block" /> returns but also contribute to
          social and environmental well-being.
        </p>
      </div>

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
    </div>
  );
};

export default FraggGroup;
