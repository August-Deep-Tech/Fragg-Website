import React from "react";
import Link from "next/link";

interface LinkCardProps {
  backgroundUrl: string;
  title: string;
  linkHref: string;
}

const LinkCard: React.FC<LinkCardProps> = ({
  backgroundUrl,
  title,
  linkHref,
}) => (
  <div
    className={`relative group flex-1 flex items-end bg-cover bg-center ${backgroundUrl}`}
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
    <div className="text-white p-5 md:p-6 z-30">
      <h2 className="text-[22px] mb-4">{title}</h2>
      <Link
        href={linkHref}
        className="bg-white text-black font-semibold flex items-center w-fit rounded-full px-3 py-2"
      >
        Learn More{" "}
        <span className="ml-1 inline-block">
          <svg
            width="16"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7071 8.20711C17.0976 7.81658 17.0976 7.18342 16.7071 6.79289L10.3431 0.428932C9.95262 0.0384078 9.31946 0.0384078 8.92893 0.428932C8.53841 0.819457 8.53841 1.45262 8.92893 1.84315L14.5858 7.5L8.92893 13.1569C8.53841 13.5474 8.53841 14.1805 8.92893 14.5711C9.31946 14.9616 9.95262 14.9616 10.3431 14.5711L16.7071 8.20711ZM0 8.5H16V6.5H0V8.5Z"
              fill="#232323"
            />
          </svg>
        </span>
      </Link>
    </div>
  </div>
);

export default LinkCard;
