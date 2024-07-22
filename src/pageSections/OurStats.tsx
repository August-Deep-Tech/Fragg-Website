import {redHatDisplay} from "@/styles/font";
import Image from "next/image";

const OurStats = () => {
  return (
    <div>
      <div
        className={`${redHatDisplay.className} py-[60px] lg:py-[120px] px-[10px] xl:px-0`}
      >
        <div className="pt-[40px]">
          <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] text-center pb-[10px] sm:pb-[24px]">
            Our Stats
          </h1>
          <p className="text-greyish-10 mx-auto text-center w-[90%] sm:w-[70%] xl:w-[100%] text-base">
            Our Stats reflect our journey of excellence, quantifying our impact
            and inspiring confidence.
          </p>
        </div>
        <div className="pt-[40px] sm:pt-0 xl:pt-[80px] flex flex-col gap-[30px] sm:gap-0 sm:flex-row justify-center">
          {/* <div
            className={`relative w-[100%] h-[300px] sm:h-[300px] lg:h-[372px] sm:w-[300px] lg:w-[418px]`}
          >
            <Image
              src="/assets/svg/home/OurStats/sme4.svg"
              fill
              alt={"Banner preview"}
              className="rounded-[24px]"
            />
          </div> */}
          <div
            className={`relative w-[100%] h-[300px] sm:h-[300px] lg:h-[372px] sm:w-[300px] lg:w-[418px]`}
          >
            <Image
              src="/assets/svg/home/OurStats/frame37.svg"
              fill
              alt={"Banner preview"}
              className="rounded-[24px]"
            />
          </div>
          <div
            className={`relative w-[100%] h-[300px] sm:h-[300px] lg:h-[372px] sm:w-[300px] lg:w-[418px]`}
          >
            <Image
              src="/assets/svg/home/OurStats/investments.svg"
              fill
              alt={"Banner preview"}
              className="rounded-[24px]"
            />
          </div>
          <div
            className={`relative w-[100%] h-[300px] sm:h-[300px] lg:h-[372px] sm:w-[300px] lg:w-[418px]`}
          >
            <Image
              src="/assets/svg/home/OurStats/global.svg"
              fill
              alt={"Banner preview"}
              className="rounded-[24px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStats;
