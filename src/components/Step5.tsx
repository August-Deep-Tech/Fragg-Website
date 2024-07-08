// components/Step5.tsx
import Image from "next/image";
import {useState, useEffect} from "react";

interface FormData {
  investmentAmountYouNeed: string;
  whenIsTheInvestmentNeeded: string;
  expectedMaturityOfTheInvestment: string;
  desiredInterestRate: string;
  hasTheInstitutionUndergoneARatingExercise: string;
  ifSoWhenAndWhichAgency: string;
  [key: string]: any; // This allows for additional properties
}

interface Step5Props {
  formData: FormData;
  handleChange: (step: string, data: {[key: string]: any}) => void;
}

const Step5: React.FC<Step5Props> = ({formData, handleChange}) => {
  const [localData, setLocalData] = useState<FormData>({
    ...formData,
    hasTheInstitutionUndergoneARatingExercise:
      formData.hasTheInstitutionUndergoneARatingExercise || "Yes",
  });

  useEffect(() => {
    handleChange("step5", localData);
  }, [localData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const {name, value} = e.target;
    setLocalData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <Image
        src="/assets/png/applyFunding/step5Tracker.png" // Placeholder image path
        height={40}
        width={1043}
        alt={"Thank you"}
      />
      <div className="py-10">
        <p className="text-redish-20 mb-2">Step 5/5</p>
        <h2 className="text-4xl font-semibold mb-2">Investment Information</h2>
        <p className="text-greyish-10 mb-6">
          Please provide investment details below, outlining the type of
          investment you're interested in and any other pertinent information to
          assist us in tailoring our offerings to your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
          {" "}
          {/* investment amount you need input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="investmentAmountYouNeed">
              Investment Amount you need
            </label>
            <input
              type="text"
              name="investmentAmountYouNeed"
              value={localData.investmentAmountYouNeed || ""}
              onChange={handleInputChange}
              className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
              placeholder="$10,000"
            />
          </div>
          {/*  When is the Investment needed? input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="whenIsTheInvestmentNeeded">
              When is the Investment needed?
            </label>
            <input
              type="date"
              name="whenIsTheInvestmentNeeded"
              value={localData.whenIsTheInvestmentNeeded || ""}
              onChange={handleInputChange}
              className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
            />
          </div>
          {/* expected maturity of the investment input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="expectedMaturityOfTheInvestment">
              Expected maturity of the investment (years)
            </label>
            <input
              type="number"
              name="expectedMaturityOfTheInvestment"
              value={localData.expectedMaturityOfTheInvestment || ""}
              onChange={handleInputChange}
              className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
              placeholder="4"
            />
          </div>
          {/* desired interest rate input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="desiredInterestRate">
              If it is a loan, what is the desired interest rate?
            </label>
            <input
              type="text"
              name="desiredInterestRate"
              value={localData.desiredInterestRate || ""}
              onChange={handleInputChange}
              className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
              placeholder="10%"
            />
          </div>
          {/* Has the institution undergone a rating exercise or External Auditing input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="hasTheInstitutionUndergoneARatingExercise">
              Has the institution undergone a rating exercise or External
              Auditing?
            </label>
            <select
              name="hasTheInstitutionUndergoneARatingExercise"
              value={localData.hasTheInstitutionUndergoneARatingExercise || ""}
              onChange={handleInputChange}
              className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          {/* If so, when and which agency input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="ifSoWhenAndWhichAgency">
              If so, when and which agency?
            </label>
            <input
              type="text"
              name="ifSoWhenAndWhichAgency"
              value={localData.ifSoWhenAndWhichAgency || ""}
              onChange={handleInputChange}
              className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
              placeholder="In 2017 , by X & Y Agency, here are more details ..."
            />
          </div>
        </div>
      </div>
      {/* Add more fields as needed */}
    </div>
  );
};

export default Step5;
