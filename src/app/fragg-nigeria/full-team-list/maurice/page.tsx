import React from "react";
import Image from "next/image";

const Maurice = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 py-20 flex gap-8">
      {/* image and email */}
      <div>
        <div className="w-full">
          <Image
            src="/assets/png/team/maurice.png"
            height={340}
            width={280}
            alt="Photo of Maurice"
          />
        </div>
        <div className="text-redish-20 text-center p-4">
          <a
            href="mailto:m.dinkelbach@fragginvest.com"
            className="inline-block font-medium "
          >
            m.dinkelbach@fragginvest.com
          </a>
        </div>
      </div>
      {/* writeup */}
      <div className="flex flex-col flex-1 gap-3">
        <div className="mb-6">
          <h2 className="font-bold text-4xl text-[#18181B]">
            Maurice Dinkelbach
          </h2>
          <p className="text-greyish-10 text-2xl">Investment Officer</p>
        </div>

        <p className="text-greyish-10">
          Maurice Dinkelbach stands out as an Investment Officer with a distinct
          blend of entrepreneurship, and advisory expertise across Europe and
          Latam. His five-year journey of supporting small businesses and
          startups has been marked by a passion for building enterprises from
          the foundation up, offering critical investment advisory and readiness
          services. His pivotal three-year tenure in Mexico at Fragg-Invest GmbH
          showcased Maurice&apos;s exceptional capabilities in deal origination,
          forging strategic partnerships, conducting due diligence, and closing
          investments. This period underscored his commitment to enhancing the
          start-up ecosystem&apos;s growth and sustainability, solidifying his
          role as an integral part of our investment team.
        </p>
        <p className="text-greyish-10">
          Maurice&apos;s approach is characterized by a global perspective
          paired with a nuanced understanding of local market intricacies. This
          unique combination allows him to uncover and leverage unparalleled
          investment opportunities. His efforts in nurturing emerging companies
          significantly propel their growth, diversifying and strengthening our
          investment portfolio.
        </p>
        <p className="text-greyish-10">
          In his role, Maurice employs his vast entrepreneurial background and
          sharp investment insights to advance our objective of empowering
          businesses and sparking innovation worldwide. His academic Degree in
          Business Administration further enriches his professional pursuits,
          offering a robust theoretical underpinning to his practical
          achievements.
        </p>
      </div>
    </div>
  );
};

export default Maurice;
