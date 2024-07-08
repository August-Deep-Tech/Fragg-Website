"use client";
import React, {useState, useEffect} from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

interface FormData {
  step1: {[key: string]: any};
  step2: {[key: string]: any};
  step3: {[key: string]: any};
  step4: {[key: string]: any};
  step5: {
    investmentAmountYouNeed: string;
    whenIsTheInvestmentNeeded: string;
    expectedMaturityOfTheInvestment: string;
    desiredInterestRate: string;
    hasTheInstitutionUndergoneARatingExercise: string;
    ifSoWhenAndWhichAgency: string;
    [key: string]: any;
  };
}

const ApplyForFundingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    step1: {},
    step2: {},
    step3: {},
    step4: {},
    step5: {
      investmentAmountYouNeed: "",
      whenIsTheInvestmentNeeded: "",
      expectedMaturityOfTheInvestment: "",
      desiredInterestRate: "",
      hasTheInstitutionUndergoneARatingExercise: "Yes", // Set default to "Yes"
      ifSoWhenAndWhichAgency: "",
    },
  });

  useEffect(() => {
    // console.log("Current step updated to", currentStep);
  }, [currentStep]);

  const nextStep = () => {
    // console.log("before", currentStep);
    setCurrentStep(prev => Math.min(prev + 1, 5));
    // console.log("after", currentStep);
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleChange = (step: string, data: {[key: string]: any}) => {
    setFormData(prev => ({
      ...prev,
      [step]: data,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 5) {
      // Handle form submission here
      console.log("Form submitted", formData);
    } else {
      nextStep();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <Step1 formData={formData.step1} handleChange={handleChange} />
        )}
        {currentStep === 2 && (
          <Step2 formData={formData.step2} handleChange={handleChange} />
        )}
        {currentStep === 3 && (
          <Step3 formData={formData.step3} handleChange={handleChange} />
        )}
        {currentStep === 4 && (
          <Step4 formData={formData.step4} handleChange={handleChange} />
        )}
        {currentStep === 5 && (
          <Step5 formData={formData.step5} handleChange={handleChange} />
        )}

        <div className="flex justify-end gap-3 mt-2">
          {currentStep < 5 && (
            <button
              type="button"
              onClick={nextStep}
              className="bg-redish-20 text-white py-4 px-14 rounded-full"
            >
              Next
            </button>
          )}
          {currentStep === 5 && (
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-redish-20 text-white py-4 px-5 rounded-full"
            >
              Submit Application
            </button>
          )}
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-pinkish-10 text-redish-20 py-4 px-12 rounded-full"
            >
              Previous
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ApplyForFundingForm;
