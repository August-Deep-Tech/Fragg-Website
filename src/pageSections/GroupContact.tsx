"use client";

import usePathCheck from "@/hooks/usePathCheck";
import Image from "next/image";

const GroupContact = () => {
  const {isFraggNigeria, isFraggGmbh, isFraggSarl} = usePathCheck();
  let logoSrc = "";
  if (isFraggNigeria) {
    logoSrc = "/assets/svg/home/fragginvest-nigeria-map.svg";
  }
  if (isFraggGmbh) {
    logoSrc = "/assets/svg/home/fragginvest-germany-map.svg";
  }
  if (isFraggSarl) {
    logoSrc = "/assets/svg/home/fragginvest-sarl-map.svg";
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url('/assets/png/map-bg-img.jpeg')] bg-opacity-30 z-0">
        <div className="absolute inset-0 bg-white opacity-80"></div>
      </div>
      <div className={`py-[60px] sm:py-[120px] relative z-20`}>
        <div className="pt-[40px]">
          <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] text-center pb-[10px] sm:pb-[24px]">
            FRAGG Group Contact
          </h1>
          <p className="text-greyish-10 mx-auto text-center w-[90%] sm:w-[70%] xl:w-[50%] text-base">
            Our global team is a diverse blend of talent, united in our pursuit
            of excellence, spanning continents, and bringing a wealth of
            perspectives and expertise to every endeavor.
          </p>
        </div>

        <div>
          <div className="flex justify-center mt-20 ">
            <Image
              src={logoSrc}
              width={1280}
              height={567}
              alt="map of the world"
              className="scale-[1.5] sm:scale-[1]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupContact;
