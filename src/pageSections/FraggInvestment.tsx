"use client";

import {redHatDisplay} from "@/styles/font";
import {Earth, Goal} from "lucide-react";
import Image from "next/image";
import usePathCheck from "@/hooks/usePathCheck";

interface Iinvestment {
  Data: {
    bg?: string;
    title: string;
    subText: string;
  }[];
}

const FraggInvestmentManagement = ({Data}: Iinvestment) => {
  const {isFraggGmbh, isFraggSarl} = usePathCheck();
  let logoHref = "";
  if (isFraggGmbh) {
    logoHref = "/fragg-gmbh";
  }
  if (isFraggSarl) {
    logoHref = "/fragg-sarl";
  }
  return (
    <div className={`${redHatDisplay.className}`}>
      <div className="pb-[40px] pt-[40px]">
        <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] text-center pb-[10px] sm:pb-[24px]">
          {isFraggGmbh ? "FRAGG GmbH" : "FRAGG Investment Management"}
        </h1>
        <p className="text-greyish-10 mx-auto text-center w-[90%] sm:w-[70%] xl:w-[70%] text-base">
          At {isFraggGmbh ? "Fragg-invest GmbH" : "FRAGG Investment"} , we
          specialize in offering personalized investment management, advisory,
          and financial planning services to our clients. We provide a variety
          of investment products and strategies customized to meet your unique
          needs and objectives, with a primary focus on achieving long-term
          financial growth and stability.
        </p>
      </div>
      {Data.length === 3 ? (
        <div className="">
          <section className="h-[450px] text-white bg-[url('/assets/svg/home/investOne.svg')] bg-no-repeat bg-cover px-[24px] py-[40px] flex items-end">
            <div>
              <Image
                src="/assets/fragginvest-logo-small-white.svg"
                width={30}
                height={30}
                alt=""
              />
              <h2 className="text-2xl font-semibold mb-4 pt-[20px]">
                {Data[0].title}
              </h2>
              <p>{Data[0].subText}</p>
            </div>
          </section>
          <div className="flex flex-col md:flex-row justify-between h-[450px]">
            <section
              className={`md:w-1/2  px-[24px] py-[40px] flex items-end ${
                isFraggGmbh
                  ? "homegmbhOne"
                  : "bg-[url('/assets/svg/home/investTwo.svg')] bg-no-repeat bg-cover"
              } text-white`}
            >
              <div>
                {isFraggGmbh ? (
                  <Image
                    src="/assets/svg/home/combo-shape.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                ) : (
                  <Earth />
                )}
                <h3 className="text-xl font-semibold mb-4 pt-[20px]">
                  {Data[1].title}
                </h3>
                <p>{Data[1].subText}</p>
              </div>
            </section>
            <section
              className={`md:w-1/2 px-[24px] py-[40px] flex items-end ${
                isFraggGmbh
                  ? "homegmbhTwo"
                  : "bg-[url('/assets/svg/home/investThree.svg')] bg-no-repeat bg-cover"
              } text-white`}
            >
              <div>
                {isFraggGmbh ? (
                  <Image
                    src="/assets/svg/home/combo-shape-2.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                ) : (
                  <Earth />
                )}
                <h3 className="text-xl font-semibold mb-4 pt-[20px]">
                  {Data[2].title}
                </h3>
                <p>{Data[2].subText}</p>
              </div>
            </section>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-between h-[400px]">
          <section
            className={`md:w-1/2  px-[24px] py-[40px] flex items-end  text-white`}
          >
            <div>
              <Goal />
              <h3 className="text-xl font-semibold mb-4 pt-[20px]">
                {Data[0].title}
              </h3>
              <p>{Data[0].subText}</p>
            </div>
          </section>
          <section
            className={`md:w-1/2 px-[24px] py-[40px] flex items-end ${Data[1].bg} text-white`}
          >
            <div>
              <Earth />
              <h3 className="text-xl font-semibold mb-4 pt-[20px]">
                {Data[1].title}
              </h3>
              <p>{Data[1].subText}</p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default FraggInvestmentManagement;
