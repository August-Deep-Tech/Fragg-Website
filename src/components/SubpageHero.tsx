import React from "react";

interface SubpageHeroProps {
  backgroundImageUrl: string;
  breadcrumb: string;
  pageTitle: string;
}

export const SubpageHero: React.FC<SubpageHeroProps> = ({
  backgroundImageUrl,
  breadcrumb,
  pageTitle,
}) => {
  return (
    <div
      className={`relative flex items-center justify-center ${backgroundImageUrl} bg-cover bg-center`}
    >
      <div className="text-white text-center mt-36 mb-56 space-y-3">
        <span>{breadcrumb}</span>
        <h2
          className="text-6xl"
          dangerouslySetInnerHTML={{__html: pageTitle}}
        />
      </div>
    </div>
  );
};
