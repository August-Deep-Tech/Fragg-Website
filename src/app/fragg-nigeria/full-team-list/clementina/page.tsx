"use client";
import React, {useEffect} from "react";
import Image from "next/image";
import {useRouter, useSearchParams} from "next/navigation";
import Link from "next/link";
import {ArrowLeft} from "lucide-react";

const Clementina = () => {
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
    <div className="container mx-auto px-4 2xl:px-0 py-20 ">
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
              src="/assets/png/team/clementina.png"
              height={340}
              width={280}
              alt="Photo of Clementina"
            />
          </div>
          <div className="text-redish-20 text-center p-4">
            <a
              href="mailto:c.kanu@fragginvest.com"
              className="inline-block font-medium "
            >
              c.kanu@fragginvest.com
            </a>
          </div>
        </div>
        {/* writeup */}
        <div className="flex flex-col flex-1 gap-3">
          <div className="mb-6">
            <h2 className="font-bold text-4xl text-[#18181B]">
              DR. Clementina Kanu (ACA, CIBN)
            </h2>
            <p className="text-greyish-10 text-2xl">Director of Portfolio</p>
          </div>

          <p className="text-greyish-10">
            Clementina has over 23 years of experience in banking, Fund
            Management, and Investment Advisory, with extensive management
            exposure in Microfinance and social investments, and over 10 years
            of experience in the management of an SME bank. Outside her
            professional engagements in investment management and advisory, Dr.
            Clementina Kanu contributes to academia as a lecturer in Accounting
            and Finance at Alex Ekwueme Federal University, Ndufu-Alike, Ebonyi
            State, Nigeria. Her involvement in both professional and academic
            fields deepens her insight and enhances her methodologies in
            financial education. This dual role allows Dr. Kanu to offer
            practical, impactful learning experiences, bridging theoretical
            knowledge with real-world application, thereby enriching the
            academic journey of her students.
          </p>
          <p className="text-greyish-10">
            She has managed a trust fund of over 10 Million USD with investments
            in the Impact domain - Education and Health - and co-managed the
            FRAGG Impact SME 25 Million USD Fund and was instrumental in closing
            multiple deals. She is a Chartered Accountant and a Chartered Banker
            with International Financial Reporting Standard certification. She
            holds a master&apos;s degree in Financial Management and Finance,
            and a Ph.D in Economics
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clementina;
