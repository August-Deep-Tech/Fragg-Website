import React from "react";
import Image from "next/image";

const Franklin = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 py-20 flex gap-8">
      {/* image and email */}
      <div>
        <div className="w-full">
          <Image
            src="/assets/png/team/franklin.png"
            height={340}
            width={280}
            alt="Photo of Franklin"
          />
        </div>
        <div className="text-redish-20 text-center p-4">
          <a
            href="mailto:f.odoemenam@fragginvest.com"
            className="inline-block font-medium "
          >
            f.odoemenam@fragginvest.com
          </a>
        </div>
      </div>
      {/* writeup */}
      <div className="flex flex-col flex-1 gap-3">
        <div className="mb-6">
          <h2 className="font-bold text-4xl text-[#18181B]">
            Franklin Odoemenam
          </h2>
          <p className="text-greyish-10 text-2xl">Managing Partner</p>
        </div>

        <p className="text-greyish-10">
          Franklin Odoemenam stands out as a pivotal figure in the global
          finance sector, with a robust track record of building strategic
          partnerships with major Development Finance Institutions (DFIs) such
          as the African Development Bank (AfDB), Agence Française de
          Développement (AFD), European Investment Bank (EIB), and numerous
          impact and specialized investors and agencies. His visionary
          leadership has been instrumental in the co-founding of Fragg
          Investment Management Ltd and Micro Investment Consultancy Services.
          Under his guidance, these entities have launched significant funds,
          including the Fragg Impact SME Fund I and the Fragg-Invest Green and
          Impact Fund SCSp, highlighting his commitment to promoting sustainable
          growth.
        </p>
        <p className="text-greyish-10">
          Franklin&apos;s leadership extends into designing and managing several
          accelerator programs aimed at fostering economic development and
          sustainability. Notably, he has overseen the FIGAP from 2018 to 2020
          and facilitated the Youth Entrepreneurship Initiative (YEI) in
          Nigeria, implemented by the African Guarantee Fund. His involvement in
          these programs, in partnership with the African Guarantee Fund and the
          African Development Bank, has supported over 500 SMEs across Africa,
          enhancing their growth and operational capacity.
        </p>
        <p className="text-greyish-10">
          Additionally, Franklin has served as a Venture Builder and Mentor in
          various start-up and SME support programs, including the
          Entrepreneurship World Cup 2020. His efforts in these roles have
          significantly contributed to nurturing early-stage companies,
          preparing them for investment readiness and scalable growth.
        </p>
        <p className="text-greyish-10">
          His academic background, with a Master&apos;s Degree in Development
          Planning and Policy from the University of Bielefeld, Germany, and an
          Advanced Master&apos;s degree in Microfinance from the Solvay Business
          School, ULB-Brussels, Belgium provides a solid foundation for his
          innovative contributions to the field of impact investing and
          development finance. Franklin&apos;s expertise and strategic
          initiatives continue to drive positive change and sustainability in
          the finance industry.
        </p>
      </div>
    </div>
  );
};

export default Franklin;
