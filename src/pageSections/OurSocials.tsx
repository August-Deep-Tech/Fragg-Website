import React, {FC} from "react";
import Image from "next/image";

interface SocialIconCircleProps {
  src: string;
  href: string;
  name: string;
}

const socialMediaLinks: SocialIconCircleProps[] = [
  {
    src: "/assets/svg/facebook.svg",
    href: "facebook.com",
    name: "facebook",
  },
  {
    src: "/assets/svg/twitter.svg",
    href: "x.com",
    name: "twitter",
  },
  {
    src: "/assets/svg/linkedin.svg",
    href: "linkedin.com",
    name: "linkedin",
  },
];

const SocialIconCircle: FC<SocialIconCircleProps> = ({src, href, name}) => (
  <a href={href}>
    <div className="w-16 h-16 bg-redish-20 rounded-full flex items-center justify-center">
      <Image
        src={src}
        width={name === "facebook" ? 16 : name === "twitter" ? 29.33 : 32}
        height={name === "facebook" ? 24 : name === "twitter" ? 26.51 : 32}
        alt="social media icon"
      />
    </div>
  </a>
);

const OurSocials = () => {
  return (
    <div className="flex flex-col md:flex-row gap-x-20">
      <div className="flex items-center space-x-3 mb-5 md:mb-0">
        <h2 className="text-4xl md:text-5xl text-greyish-30 font-semibold text-nowrap">
          Our Socials
        </h2>
        <div className=" bg-redish-20 h-1 w-48 mt-2"></div>
      </div>

      {/* social media circles */}
      <div className="flex gap-x-10">
        {socialMediaLinks.map((item, index) => (
          <SocialIconCircle
            key={index}
            src={item.src}
            href={item.href}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default OurSocials;
