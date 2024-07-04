import React from "react";
import Image from "next/image";

interface ListItem {
  title: string;
  description: string;
}

interface ServiceDescriptionCardProps {
  icon: string;
  title: string;
  description: string;
  list?: ListItem[];
}

export const ServiceDescriptionCard: React.FC<ServiceDescriptionCardProps> = ({
  icon,
  title,
  description,
  list,
}) => {
  return (
    <div>
      {/* icon  */}
      <div className={`relative h-10 w-10 mb-3`}>
        <Image
          // "/assets/services-svg/chart-arrow-up.svg"
          src={icon}
          fill
          alt={"Banner preview"}
        />
      </div>
      {/* title */}
      <h3 className="font-bold mb-5 text-xl">{title}</h3>
      {/* description  */}
      <p className="text-greyish-10">{description}</p>
      {/* list */}
      <ul className="list-disc list list-inside text-redish-20 pl-3">
        {list?.map((item, index) => (
          <li key={index}>
            <span className="text-redish-20 font-semibold mr-1">
              {item.title}:
            </span>
            <span className="text-greyish-10">{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
