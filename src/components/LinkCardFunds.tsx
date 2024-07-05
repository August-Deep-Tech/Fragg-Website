import React from "react";
import Link from "next/link";

interface LinkCardFundsProps {
  backgroundUrl: string;
  title: string;
  linkHref: string;
}

const LinkCardFunds: React.FC<LinkCardFundsProps> = ({
  backgroundUrl,
  title,
  linkHref,
}) => (
  <Link href={linkHref} className="flex-1">
    <div
      className={`relative group flex items-end bg-cover bg-center ${backgroundUrl} h-full w-full`}
    >
      <div className="z-10 hidden transition-all group-hover:flex bg-black opacity-50 absolute h-full w-full items-center justify-center">
        <Link
          href={linkHref}
          className="bg-white rounded-full px-[14px] py-[17px]"
        >
          <svg
            width="49"
            height="42"
            viewBox="0 0 49 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48.6509 14.5517C49.2447 13.0049 48.4721 11.2697 46.9253 10.6759L21.7186 0.999966C20.1718 0.406202 18.4365 1.1788 17.8428 2.7256C17.249 4.27241 18.0216 6.00769 19.5684 6.60145L41.9743 15.2023L33.3735 37.6082C32.7797 39.155 33.5523 40.8903 35.0991 41.4841C36.646 42.0778 38.3812 41.3052 38.975 39.7584L48.6509 14.5517ZM3.22021 35.7406L47.0704 16.2173L44.63 10.736L0.77979 30.2594L3.22021 35.7406Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>
      {/* acton button and text */}

      <div className="text-white pb-8 pl-5 md:pb-10 md:pl-6 z-30 ">
        <h2 className="text-[2rem] md:text-[3rem] group-hover:underline ">
          {title}
        </h2>
      </div>
    </div>
  </Link>
);

export default LinkCardFunds;
