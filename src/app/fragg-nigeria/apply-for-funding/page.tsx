import ApplyForFundingForm from "@/components/ApplyForFundingForm";
import React from "react";

const ApplyForFunding = () => {
  return (
    <div className="container mx-auto px-4 2xl:px-0 py-20">
      <h2 className="text-greyish-30 text-4xl md:text-5xl font-semibold mb-6">
        Apply for funding
      </h2>
      <p className="text-greyish-10 mb-6">
        Completing this application form is your first step towards accessing
        tailored funding solutions from FRAGG Investment. Your input enables us
        to <br className="hidden md:block" /> assess your needs and align them
        with suitable opportunities, ensuring a seamless process as we work
        together to realize your business goals
      </p>
      <ApplyForFundingForm />
    </div>
  );
};

export default ApplyForFunding;
