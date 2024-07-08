import {redHatDisplay} from "@/styles/font";
import Image from "next/image";

const GroupContact = () => {
  return (
    <div className={`relative bg-[url("/assets/png/map-bg-img.jpeg")]`}>
      <div className="absolute h-full w-full bg-white opacity-75 z-0"></div>
      <div
        className={`${redHatDisplay.className} py-[60px] sm:py-[120px] relative z-50`}
      >
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

        <div className="flex justify-center mt-20">
          <Image
            src={"/assets/svg/home/fragginvest-nigeria-map.svg"}
            width={1280}
            height={567}
            alt="map of the world"
          />
        </div>
      </div>
    </div>
  );
};

export default GroupContact;
