"use client";

import React, {useState, useEffect} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`${
        isHomePage ? "bg-transparent absolute top-0 left-0 w-full" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/fragginvest-logo.svg"
              width={200}
              height={200}
              alt={"Banner preview"}
            />
          </Link>
        </div>
        {/* nav links */}
        <nav className="hidden md:flex items-center space-x-16  ">
          <Link href="fragg-nigeria/about" className="text-greyish-10 hover:text-black">
            About Us
          </Link>
          <Link
            href="/fragg-nigeria/fragg-group"
            className="text-greyish-10 hover:text-black"
          >
            FRAGG Group
          </Link>
          <Link
            href="/fragg-nigeria/services"
            className="text-greyish-10 hover:text-black"
          >
            Our Services
          </Link>
          <Link
            href="/impact-and-sustainability"
            className="text-greyish-10 hover:text-black"
          >
            Impact and Sustainability
          </Link>
          <Link
            href="/fragg-nigeria/advisory"
            className="text-greyish-10 hover:text-black"
          >
            Advisory
          </Link>
        </nav>
        {/* action button  */}
        <div className="hidden md:block">
          <button className="bg-redish-20 text-white px-6 py-2 rounded-full hover:bg-redish-10">
            Start Investing
          </button>
        </div>
        {/* hamburger icon */}
        <div className="md:hidden">
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
        <nav className="flex flex-col items-center space-y-6 py-4">
          <Link
            href="ragg-nigeria/about"
            className="text-greyish-10 hover:text-black"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            href="/fragg-group"
            className="text-greyish-10 hover:text-black"
            onClick={toggleMenu}
          >
            FRAGG Group
          </Link>
          <Link
            href="/fragg-nigeria/services"
            className="text-greyish-10 hover:text-black"
            onClick={toggleMenu}
          >
            Our Services
          </Link>
          <Link
            href="/impact-and-sustainability"
            className="text-greyish-10 hover:text-black"
            onClick={toggleMenu}
          >
            Impact and Sustainability
          </Link>
          <Link
            href="/fragg-nigeria/advisory"
            className="text-greyish-10 hover:text-black"
            onClick={toggleMenu}
          >
            Advisory
          </Link>
          <button className="bg-redish-20 text-white px-6 py-2 rounded-full hover:bg-redish-10">
            Start Investing
          </button>
        </nav>
      </div>
    </header>
  );
};
