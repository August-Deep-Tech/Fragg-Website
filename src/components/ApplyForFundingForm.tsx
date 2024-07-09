"use client";
import React, {useState, useEffect} from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

interface Owner {
  fullName: string;
  countryLocated: string;
  email: string;
  highestLevelOfEducation: string;
  percentageOwned: string;
  yearsInTheOrganization: string;
  [key: string]: any; // For any additional fields
}

interface FormData {
  step1: {[key: string]: any};
  step2: {[key: string]: any};
  step3: {
    owners: Owner[];
    numOwners: number;
    [key: string]: any;
  };
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

type RequiredFields = {
  step1: string[];
  step2: string[];
  step3: {ownerFields: string[]};
  step4: string[];
  step5: string[];
};

const requiredFields: RequiredFields = {
  step1: [
    "fullName",
    "role",
    "email",
    "phoneNumber",
    "linkedinProfile",
    "howDidYouLearnAboutFragg",
  ],
  step2: [
    "organizationName",
    "dateOfIncorporation",
    "companyAddress",
    "companyTelephone",
    "organizationStructure",
    "numberOfBranches",
    "headquartersLocation",
    "companyProfileLink",
  ],
  step3: {
    ownerFields: [
      "fullName",
      "countryLocated",
      "email",
      "highestLevelOfEducation",
      "percentageOwned",
      "yearsInTheOrganization",
    ],
  },
  step4: [
    "industry",
    "numberOfEmployees",
    "numberOfClients",
    "financingType",
    "geographicCoverageOfServices",
    "loanPortfolioSize",
    "averageLoanAmountPerClient",
    "percentageOfRuralAndUrbanExtension",
  ],
  step5: [
    "investmentAmountYouNeed",
    "whenIsTheInvestmentNeeded",
    "expectedMaturityOfTheInvestment",
    "desiredInterestRate",
    "hasTheInstitutionUndergoneARatingExercise",
    "ifSoWhenAndWhichAgency",
  ],
};

const ApplyForFundingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    step1: {},
    step2: {},
    step3: {
      owners: [], // Initialize with one empty owner
      numOwners: 0,
    },
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

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // useEffect(() => {
  //   // console.log("Current step updated to", currentStep);
  // }, [currentStep]);

  const validateStep = (step: number) => {
    const stepData = formData[`step${step}` as keyof FormData];
    const stepRequiredFields =
      requiredFields[`step${step}` as keyof typeof requiredFields];
    const newErrors: {[key: string]: string} = {};

    if (step === 3 && "owners" in stepData) {
      // Validate owners
      const ownerFields = (stepRequiredFields as {ownerFields: string[]})
        .ownerFields;
      (stepData.owners as Owner[]).forEach((owner: Owner, index: number) => {
        ownerFields.forEach(field => {
          if (
            !owner[field as keyof Owner] ||
            (owner[field as keyof Owner] as string).trim() === ""
          ) {
            newErrors[`owners.${index}.${field}`] = "This field is required";
          }
        });
      });
    } else if (step === 4) {
      // Special handling for Step 4
      if (Array.isArray(stepRequiredFields)) {
        stepRequiredFields.forEach((field: string) => {
          if (!stepData[field] || stepData[field].trim() === "") {
            newErrors[field] = "This field is required";
          }
        });
      }

      // Check for array inputs

      if (
        !stepData.products ||
        stepData.products.length === 0 ||
        stepData.products.every((product: string) => product.trim() === "")
      ) {
        newErrors.products = "Please add at least one product or service";
      }

      if (
        stepData.industry === "Inclusive Finance" &&
        (!stepData.percentageOfLoanPortfolioValues ||
          stepData.percentageOfLoanPortfolioValues.length === 0)
      ) {
        newErrors.percentageOfLoanPortfolioValues =
          "Please add at least one loan portfolio percentage";
      }

      if (!stepData.creditorValues || stepData.creditorValues.length === 0) {
        newErrors.creditorValues = "Please add at least one creditor";
      }

      // Merge with any errors from the Step4 component
      if (stepData.errors) {
        Object.assign(newErrors, stepData.errors);
      }
    } else if (Array.isArray(stepRequiredFields)) {
      // Existing validation for other steps
      stepRequiredFields.forEach((field: string) => {
        if (!stepData[field] || stepData[field].trim() === "") {
          newErrors[field] = "This field is required";
        }
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 5));
      console.log(formData);
    }
    // console.log(formData);
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
    if (validateStep(currentStep)) {
      if (currentStep === 5) {
        // Handle form submission here
        console.log("Form submitted", formData);
      } else {
        nextStep();
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <Step1
            formData={formData.step1}
            handleChange={handleChange}
            errors={errors}
          />
        )}
        {currentStep === 2 && (
          <Step2
            formData={formData.step2}
            handleChange={handleChange}
            errors={errors}
          />
        )}
        {currentStep === 3 && (
          <Step3
            formData={formData.step3}
            handleChange={handleChange}
            errors={errors}
          />
        )}
        {currentStep === 4 && (
          <Step4
            formData={formData.step4}
            handleChange={handleChange}
            errors={errors}
          />
        )}
        {currentStep === 5 && (
          <Step5
            formData={formData.step5}
            handleChange={handleChange}
            errors={errors}
          />
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
