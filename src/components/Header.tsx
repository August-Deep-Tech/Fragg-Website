"use client";

import React, {useState, useEffect} from "react";
import {usePathname} from "next/navigation";
import usePathCheck from "@/hooks/usePathCheck";
import Link from "next/link";
import Image from "next/image";
import PathBasedNav from "./PathBasedNav";
import PathBasedSideNav from "./PathBasedSideNav";

export const Header = () => {
  const {isFraggNigeria, isFraggGmbh, isFraggSarl} = usePathCheck();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/fragg-nigeria/";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  let logoSrc = "";
  let logoHref = "";
  if (isFraggNigeria) {
    logoSrc = "/assets/fragginvest-logo.svg";
    logoHref = "/fragg-nigeria/";
  }
  if (isFraggGmbh) {
    logoSrc = "/assets/fragginvest-logo-gmbh.svg";
    logoHref = "/fragg-gmbh/";
  }
  if (isFraggSarl) {
    logoSrc = "/assets/fragginvest-logo-sarl.svg";
    logoHref = "/fragg-sarl/";
  }

  return (
    <header
      className={`${
        isHomePage ? "bg-transparent absolute top-0 left-0 w-full" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center">
          <Link href={logoHref}>
            {isHomePage ? (
              <Image
                src="/assets/fragginvest-logo-header-white.svg"
                width={200}
                height={200}
                alt={"Banner preview"}
              />
            ) : (
              <Image
                src={logoSrc}
                width={200}
                height={200}
                alt={"Banner preview"}
              />
            )}
          </Link>
        </div>
        {/* nav links */}
        <PathBasedNav />
        {/* action button  */}
        <div className="hidden xl:block">
          <Link
            href="/fragg-nigeria/apply-for-funding"
            className={`${
              isHomePage
                ? "bg-transparent border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-redish-20"
                : "bg-redish-20 text-white px-6 py-2 rounded-full hover:bg-redish-10"
            } `}
          >
            Apply for Funding
          </Link>
        </div>
        {/* hamburger icon */}
        <div className="xl:hidden">
          <button
            className={`${
              isHomePage ? "text-white" : "text-greyish-10"
            }  hover:text-black focus:outline-none`}
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* side menu */}
      <div
        className={`fixed inset-0 z-20 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`fixed top-0 right-0 z-50 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end items-center px-4 py-5">
          <button
            className="text-greyish-10 hover:text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        {/* side nav */}
        <PathBasedSideNav toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};
