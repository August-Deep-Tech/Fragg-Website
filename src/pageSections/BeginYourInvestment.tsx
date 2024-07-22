"use client";

import Button from "@/components/Button";
import {useRouter} from "next/navigation";
import Image from "next/image";
import React from "react";
import manImage from "../../public/assets/png/beginYourInvestmentMan.png";

export const BeginYourInvestment = () => {
  const router = useRouter();

  const clickButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push("/fragg-nigeria/investors-form");
  };

  return (
    <div
      className="bg-cover bg-center min-h-[746px] py-28"
      style={{backgroundImage: "url('/assets/svg/CTA-12.svg')"}}
    >
      <div className="container mx-auto px-4 2xl:px-0">
        {/* text */}
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-semibold mb-7">
            Begin your Investment Journey
          </h2>
          <p className="mb-4">
            Trust <span className="text-redish-20">FRAGG</span> to put your
            capital and interests first
          </p>
          <Button
            label="Join Now"
            onClick={clickButton}
            className="bg-redish-20 text-white rounded-full px-10 py-2"
          />
        </div>
      </div>
    </div>
  );
};
