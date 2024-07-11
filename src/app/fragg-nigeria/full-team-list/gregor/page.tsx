import React from "react";
import Image from "next/image";

const Gregor = () => {
  return (
    <div className="container mx-auto px-4 2xl:px-0 py-20 flex gap-8">
      {/* image and email */}
      <div>
        <div className="w-full">
          <Image
            src="/assets/png/team/gregor.png"
            height={340}
            width={280}
            alt="Photo of Gregor"
          />
        </div>
        <div className="text-redish-20 text-center p-4">
          <a
            href="mailto:g.fasel@fragginvest.com"
            className="inline-block font-medium "
          >
            g.fasel@fragginvest.com
          </a>
        </div>
      </div>
      {/* writeup */}
      <div className="flex flex-col flex-1 gap-3">
        <div className="mb-6">
          <h2 className="font-bold text-4xl text-[#18181B]">Gregor Fasel</h2>
          <p className="text-greyish-10 text-2xl">
            Business Development Manager
          </p>
        </div>

        <p className="text-greyish-10">
          Gregor Fasel is an accomplished professional with extensive experience
          in philosophy and business administration, which he studied at the
          University of Bochum, Germany. His academic pursuits have seamlessly
          transitioned into a significant career that spans continents and
          industries, reflecting a profound understanding of both theoretical
          and practical aspects of business and human resources.
        </p>
        <p className="text-greyish-10">
          Currently serving as the Regional Manager for FRAGG-INVEST LATAM since
          2020, Gregor has effectively mobilized funds for numerous impact
          projects across Latin America. His role involves managing a wide array
          of investment advisory services and navigating diverse investment
          opportunities, which have led to the cultivation of substantial
          partnerships between various financial institutions in Latin America,
          FRAGG-INVEST GmbH, and multiple investment agencies.
        </p>
        <p className="text-greyish-10">
          Gregor&apos;s expertise also extends to the academic sector, where he
          has contributed as a lecturer at the Department of Labour and Human
          Resource Management at the University of Bochum. His academic roles
          underscore his commitment to nurturing future professionals by
          imparting essential knowledge and skills related to the complexities
          of labor markets and human resource management.
        </p>
        <p className="text-greyish-10">
          In addition to his academic and managerial accomplishments, Gregor has
          provided business development services to numerous startups and SMEs
          in both Germany and Mexico. His long-standing experience as a venture
          builder, trainer, and mentor has been pivotal in several startup
          programs and boot camps, equipping emerging businesses with the tools
          necessary for development and scaling.
        </p>
      </div>
    </div>
  );
};

export default Gregor;
