import React from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ContactEmailInfo from "@/pageSections/ContactEmailInfo";
import OurSocials from "@/pageSections/OurSocials";
import FraggOffices from "@/pageSections/FraggOffices";
import {BeginYourInvestment} from "@/pageSections/BeginYourInvestment";

const ContactUs = () => {
  return (
    <div>
      <div className="container mx-auto px-4 md:px-0">
        {/* contact form */}
        <div className="flex flex-col md:flex-row gap-x-20 py-10 md:py-24 ">
          {/* image */}
          <div className=" mb-7 md:mb-0">
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
            <ContactForm />
          </div>
        </div>
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
