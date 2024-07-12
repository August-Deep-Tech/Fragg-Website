import { redHatDisplay } from '@/styles/font';
import Image from "next/image";

interface IProps {
  image: string;
}

const ConnectionSection = ({ image }: IProps) => {
  return (
    <div className={`bg-[#010100] text-white py-[33px] sm:py-[93px] -translate-y-1 ${redHatDisplay.className}`}>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold">
          Fostering connections with ambitious businesses
        </h1>
        <p className="text-2xl font-semibold">
          poised for expansion
        </p>
        <div className='flex justify-center mt-[63px]'>
          <div
            className={`relative scale-[3] h-[49px] lg:h-[100px] w-[117px] lg:scale-[1] lg:w-[900px]`}
          >
            <Image
              src={image}
              fill
              alt={"Banner preview"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionSection;
