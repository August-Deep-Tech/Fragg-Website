"use client";
import React, {useEffect} from "react";
import Image from "next/image";
import {useRouter, useSearchParams} from "next/navigation";
import Link from "next/link";
import {ArrowLeft} from "lucide-react";

const Olugbenga = () => {
  // beginning of new addition
  const searchParams = useSearchParams();

  const getBackUrl = () => {
    const source = searchParams.get("source");

    switch (source) {
      case "nigeria":
        return "/fragg-nigeria/about/?scrollTo=team";
      case "gmbh":
        return "/fragg-gmbh/about/?scrollTo=team";
      case "sarl":
        return "/fragg-sarl/about/?scrollTo=team";
      case "full-team":
        return "/fragg-nigeria/full-team-list/";
      default:
        return "/fragg-nigeria/about/?scrollTo=team"; // default fallback
    }
  };

  const handleBack = () => {
    window.location.href = getBackUrl();
  };
  // end of addition

  return (
    <div className="container mx-auto px-4 2xl:px-0 py-20">
      {/* Back button */}
      <button
        onClick={handleBack}
        className="flex items-center text-redish-20 mb-8 hover:underline"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Our Team
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* image and email */}
        <div>
          <div className="w-full">
            <Image
              src="/assets/png/team/olugbenga.png"
              height={340}
              width={280}
              alt="Photo of Olugbenga"
            />
          </div>
          <div className="text-redish-20 text-center p-4">
            <a
              href="mailto:m.olugbenga@fragginvest.com"
              className="inline-block font-medium "
            >
              m.olugbenga@fragginvest.com
            </a>
          </div>
        </div>
        {/* writeup */}
        <div className="flex flex-col flex-1 gap-3">
          <div className="mb-6">
            <h2 className="font-bold text-4xl text-[#18181B]">
              Olugbenga Musa
            </h2>
            <p className="text-greyish-10 text-2xl">Investment Manager</p>
          </div>

          <p className="text-greyish-10">
            Olugbenga Musa, an esteemed Investment Manager at FRAGG Investment
            Management Ltd, brings to the table over 12 years of rich experience
            in investment banking and advisory services. Olugbenga&apos;s
            proficiency in strategy development, financial modeling, investment
            origination, and appraisal underscores his ability to navigate
            complex investment landscapes. His skill set has been instrumental
            in spearheading several cohorts of Accelerator programs at FRAGG
            Investment Management, where his leadership has not only fostered
            successful mentorship but also catalyzed strategic investments into
            numerous startups across West Africa.
          </p>
          <p className="text-greyish-10">
            Olugbenga Musa brings an enriched professional portfolio to his role
            as an Investment Manager at FRAGG Investment Management Ltd,
            grounded in a Bachelor&apos;s degree in Economics. Since joining the
            team in 2017, Olugbenga has developed a notable proficiency in
            analyzing investment opportunities and performing meticulous due
            diligence processes. His expertise is not limited to financial
            assessments; Olugbenga is also adept in Environmental, Social, and
            Governance (ESG) evaluations, as well as in measuring impacts on
            environmental and community levels. This comprehensive approach
            ensures that all investments not only yield financial returns but
            also contribute positively to societal and environmental outcomes.
          </p>
          <p className="text-greyish-10">
            Olugbenga&apos;s role at FRAGG extends beyond investment analysis.
            He has been a dynamic trainer and mentor within various accelerator
            and incubation programs operated by FRAGG Investment Management and
            other collaborating entities. His guidance is often sought in the
            realms of financial modeling, strategic planning, and ESG
            integration, where he imparts practical knowledge and actionable
            insights to emerging startups and SMEs.
          </p>
          <p className="text-greyish-10">
            Holding a Bachelor&apos;s degree in Economics, Olugbenga Musa&apos;s
            academic foundation complements his professional acumen, enhancing
            his contributions to the investment management field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Olugbenga;
