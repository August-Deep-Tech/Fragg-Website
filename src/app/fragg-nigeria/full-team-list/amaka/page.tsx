"use client";
import React, {useEffect} from "react";
import Image from "next/image";
import {useRouter, useSearchParams} from "next/navigation";
import Link from "next/link";
import {ArrowLeft} from "lucide-react";

const Amaka = () => {
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
              src="/assets/png/team/amaka.png"
              height={340}
              width={280}
              alt="Photo of Amaka"
            />
          </div>
          <div className="text-redish-20 text-center p-4">
            <a
              href="mailto:a.unije@fragginvest.com"
              className="inline-block font-medium "
            >
              a.unije@fragginvest.com
            </a>
          </div>
        </div>
        {/* writeup */}
        <div className="flex flex-col flex-1 gap-3">
          <div className="mb-6">
            <h2 className="font-bold text-4xl text-[#18181B]">Amaka Onyechi</h2>
            <p className="text-greyish-10 text-2xl">
              Administrative & Finance Officer
            </p>
          </div>

          <p className="text-greyish-10">
            Amaka Onyechi stands out as a Finance and Admin Officer, boasting 8
            years of multifaceted experience in the realms of administrative and
            financial management, human resources, research, data management,
            customer experience, and digital marketing. Her distinguished
            contributions to the FRAGG Impact SME Fund 1 and the FRAGG
            Growth-Impact Accelerator Programmes underscore her expertise in
            investment strategy and a deep-seated commitment to nurturing
            startup ventures across West Africa.
          </p>
          <p className="text-greyish-10">
            Amaka&apos;s academic foundation, with a BSc in Public
            Administration from Nnamdi Azikiwe University, Awka Nigeria has been
            instrumental in her professional development. This background,
            combined with her expansive role at Fragg Investment Management Ltd,
            plays a crucial role in advancing our strategic objectives and
            fostering organizational growth. Amaka&apos;s blend of skills and
            experience not only enhances our operational efficiency but also
            enriches our firm&apos;s culture of innovation and impact-driven
            investment strategy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Amaka;
