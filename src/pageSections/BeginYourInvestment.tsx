"use client";

import Button from "@/components/Button";
import {useRouter} from "next/navigation";
import Image from "next/image";
import React from "react";

export const BeginYourInvestment = () => {
  const router = useRouter();

  const clickButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="md:mt-36">
      {/* text  */}
      <div className="text-center flex flex-col items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold mb-7">
          Begin your Investment Journey
        </h2>
        <p className="mb-4">
          Trust <span className=" text-redish-20"> FRAGG </span> to put your
          capital and interests first
        </p>
        <Button
          label="Join Now"
          onClick={clickButton}
          className="bg-redish-20 text-white rounded-full px-10 py-2"
        />
      </div>
      {/* image */}
      <div className="flex justify-center">
        <Image
          // "/assets/services-svg/chart-arrow-up.svg"
          src={"/assets/png/beginYourInvestmentMan.png"}
          width={1000}
          height={1000}
          alt={"Banner preview"}
        />
      </div>
    </div>
  );
};
