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
    <div className={`py-[60px] sm:py-[120px]`}>
      <div className="pt-[40px]">
        <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] text-center pb-[10px] sm:pb-[24px]">
          FRAGG Group Contact
        </h1>
        <p className="text-greyish-10 mx-auto text-center w-[90%] sm:w-[70%] xl:w-[50%] text-base">
          Our global team is a diverse blend of talent, united in our pursuit of
          excellence, spanning continents, and bringing a wealth of perspectives
          and expertise to every endeavor.
        </p>
      </div>

  <div>
  <div className="flex justify-center mt-20 home-map">
        <Image src={logoSrc} width={1280} height={567} alt="map of the world" className="scale-[2] sm:scale-[1]"/>
      </div>
  </div>
    </div>
  );
};

export default GroupContact;
