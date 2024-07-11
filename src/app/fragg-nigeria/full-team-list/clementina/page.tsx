import React from "react";
import Image from "next/image";

const Clementina = () => {
  return (
    <div className="container mx-auto px-4 2xl:px-0 py-20 flex gap-8">
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
          exposure in Microfinance and social investments, and over 10 years of
          experience in the management of an SME bank. Outside her professional
          engagements in investment management and advisory, Dr. Clementina Kanu
          contributes to academia as a lecturer in Accounting and Finance at
          Alex Ekwueme Federal University, Ndufu-Alike, Ebonyi State, Nigeria.
          Her involvement in both professional and academic fields deepens her
          insight and enhances her methodologies in financial education. This
          dual role allows Dr. Kanu to offer practical, impactful learning
          experiences, bridging theoretical knowledge with real-world
          application, thereby enriching the academic journey of her students.
        </p>
        <p className="text-greyish-10">
          She has managed a trust fund of over 10 Million USD with investments
          in the Impact domain - Education and Health - and co-managed the FRAGG
          Impact SME 25 Million USD Fund and was instrumental in closing
          multiple deals. She is a Chartered Accountant and a Chartered Banker
          with International Financial Reporting Standard certification. She
          holds a master&apos;s degree in Financial Management and Finance, and
          a Ph.D in Economics
        </p>
      </div>
    </div>
  );
};

export default Clementina;
