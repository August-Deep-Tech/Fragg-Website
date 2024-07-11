"use client";
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ContactEmailInfo from "@/pageSections/ContactEmailInfo";
import OurSocials from "@/pageSections/OurSocials";
import FraggOffices from "@/pageSections/FraggOffices";
import {BeginYourInvestment} from "@/pageSections/BeginYourInvestment";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitSuccess = () => {
    setSubmitted(true);
  };

  return (
    <div>
      <div className="container mx-auto px-4 2xl:px-0">
        {/* contact form */}
        {submitted ? ( // Render thank you message here
          <div className="flex flex-col md:flex-row items-center gap-x-20 py-10 md:py-24">
            <div className=" mb-7 md:mb-0 flex-1 flex flex-col">
              <h2 className="text-4xl md:text-5xl text-greyish-30 font-semibold mb-5">
                Thank you for <br /> Reaching Out!
              </h2>
              <p className="text-greyish-10 mb-10">
                Your message has been successfully sent. Our team will review
                your message and get <br /> back to you within the next{" "}
                <span className="text-redish-20"> 24 hours.</span> If you have
                any questions in the meantime, <br /> please reach out to
                <span className="text-redish-20 ">
                  {" "}
                  <a
                    href="mailto:info@fragginvest.com"
                    className="inline-block"
                  >
                    info@fragginvest.com
                  </a>
                </span>
                .
              </p>
              {/* You can add buttons or links here */}
              <div className="flex gap-3 *:rounded-full *:px-[1.875rem] *:py-[1.063rem] *:cursor-pointer">
                <Link
                  href="/fragg-nigeria/about"
                  className="bg-redish-20 text-white inline-block"
                >
                  More about FRAGG
                </Link>
                <Link
                  href="/fragg-nigeria"
                  className="text-redish-20 bg-pinkish-10 inline-block"
                >
                  Back to home
                </Link>
              </div>
            </div>
            <div className="  flex-1 flex justify-center">
              <Image
                src="/assets/png/thankYouContact.png" // Placeholder image path
                height={400}
                width={460}
                alt={"Thank you"}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-x-20 py-10 md:py-24 ">
            {/* image */}
            <div className=" mb-7 lg:mb-0">
              <Image
                src="/assets/png/contact/contactFormImage.png"
                height={651}
                width={616}
                alt={"Banner preview"}
              />
            </div>
            {/* form */}
            <div className="w-full flex-1">
              <div className="bg-pinkish-10 w-fit flex space-x-2 py-3 px-5 rounded-full mb-5">
                <Image
                  src="/assets/svg/deal.svg"
                  height={15.5}
                  width={21.5}
                  alt={"Banner preview"}
                />
                <p className="text-sm text-redish-20">
                  We look forward to working with you
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl text-greyish-30 font-semibold mb-5">
                Contact us
              </h2>
              <p className="text-greyish-10 mb-5">
                Reach out to us and we will respond as soon as possible.
              </p>
              <ContactForm onSubmitSuccess={handleSubmitSuccess} />
            </div>
          </div>
        )}

        {/* contact email info */}
        <ContactEmailInfo />
        {/* our socials */}
        <OurSocials />
        {/* fragg offices */}
        <FraggOffices />
      </div>
      {/* begin your investment section */}
      <BeginYourInvestment />
    </div>
  );
};

export default ContactUs;
