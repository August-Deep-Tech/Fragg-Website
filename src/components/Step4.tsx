// components/Step4.tsx
import Image from "next/image";
import {useState, useEffect} from "react";
import DynamicDoubleInputForm from "./DynamicDoubleInputForm";

interface Step4Props {
  formData: {
    industry?: string;
    numberOfEmployees?: string | number;
    numberOfClients?: string | number;
    loanPortfolioSize?: string;
    averageLoanAmountPerClient?: string;
    financingType?: string;
    geographicCoverageOfServices?: string;
    products?: string[];
    percentageOfRuralAndUrbanExtension?: string;
    // Add any other properties you expect in formData
    [key: string]: any;
  };
  handleChange: (step: string, data: {[key: string]: any}) => void;
}

const Step4: React.FC<Step4Props> = ({formData, handleChange}) => {
  const [localData, setLocalData] = useState({
    ...(formData as Step4Props["formData"]),
    industry: formData.industry || "Inclusive Finance",
  });
  const [productFields, setProductFields] = useState([{value: ""}]);
  const [percentageOfLoanPortfolioValues, setPercentageOfLoanPortfolioValues] =
    useState<string[]>([]);
  const [creditorValues, setCreditorValues] = useState<string[]>([]);
  const [industry, setIndustry] = useState("Inclusive Finance");

  useEffect(() => {
    handleChange("step4", {
      ...localData,
      percentageOfLoanPortfolioValues,
      creditorValues,
    });
  }, [localData, percentageOfLoanPortfolioValues, creditorValues]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const {name, value} = e.target;
    setLocalData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProductFieldChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFields = productFields.map((field, i) =>
      i === index ? {...field, value: event.target.value} : field
    );
    setProductFields(newFields);
    setLocalData(prev => ({
      ...prev,
      products: newFields.map(field => field.value),
    }));
  };

  const handleAddProductField = () => {
    setProductFields([...productFields, {value: ""}]);
  };

  const handleRemoveProductField = (index: number) => {
    const newFields = productFields.filter((_, i) => i !== index);
    setProductFields(newFields);
    setLocalData(prev => ({
      ...prev,
      products: newFields.map(field => field.value),
    }));
  };

  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndustry = e.target.value;
    setIndustry(selectedIndustry);
    // Update localData with the selected industry
    setLocalData(prev => ({
      ...prev,
      industry: selectedIndustry,
      // Reset or set other fields based on selected industry
      loanPortfolioSize: selectedIndustry !== "Inclusive Finance" ? "NIL" : "",
      averageLoanAmountPerClient:
        selectedIndustry !== "Inclusive Finance" ? "NIL" : "",
      percentageOfLoanPortfolioValues:
        selectedIndustry !== "Inclusive Finance" ? ["NIL"] : [""],
      percentageOfRuralAndUrbanExtension:
        selectedIndustry !== "Inclusive Finance" ? "NIL" : "",
    }));
  };

  return (
    <div>
      <Image
        src="/assets/png/applyFunding/step4Tracker.png" // Placeholder image path
        height={40}
        width={1043}
        alt={"Thank you"}
      />
      <div className="py-10">
        <p className="text-redish-20 mb-2">Step 4/5</p>
        <h2 className="text-4xl font-semibold mb-2">Loan Information</h2>
        <p className="text-greyish-10 mb-6">
          Please provide details for your current loan situation below:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
          {/* Industry/Sector input */}
          <div className="flex flex-col space-y-2 md:w-1/2 md:col-span-2">
            <label htmlFor="industry">Industry/Sector</label>
            <select
              name="industry"
              value={industry}
              onChange={handleIndustryChange}
              className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
            >
              <option value="Inclusive Finance">Inclusive Finance</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Health">Health</option>
              <option value="Affordable Housing">Affordable Housing</option>
              <option value="Education">Education</option>
              <option value="Climate Finance">Climate Finance</option>
            </select>
          </div>

          {/* number of employees input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="numberOfEmployees">Number of employees</label>
            <input
              type="number"
              name="numberOfEmployees"
              value={localData.numberOfEmployees || ""}
              onChange={handleInputChange}
              className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
              placeholder="20"
            />
          </div>
          {/* number of clients input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="numberOfClients">Number of clients</label>
            <input
              type="number"
              name="numberOfClients"
              value={localData.numberOfClients || ""}
              onChange={handleInputChange}
              className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
              placeholder="20"
            />
          </div>
          {/* loan portfolio size input */}
          {industry === "Inclusive Finance" && (
            <div className="flex flex-col space-y-2">
              <label htmlFor="loanPortfolioSize">Loan portfolio size</label>
              <input
                type="text"
                name="loanPortfolioSize"
                value={localData.loanPortfolioSize || ""}
                onChange={handleInputChange}
                className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
                placeholder="$10,000"
              />
            </div>
          )}
          {/* average loan amount per client input */}
          {industry === "Inclusive Finance" && (
            <div className="flex flex-col space-y-2">
              <label htmlFor="averageLoanAmountPerClient">
                Average loan amount per client
              </label>
              <input
                type="text"
                name="averageLoanAmountPerClient"
                value={localData.averageLoanAmountPerClient || ""}
                onChange={handleInputChange}
                className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
                placeholder="$10,000"
              />
            </div>
          )}
          {/* Type of financing input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="financingType">
              Type of financing (Debt & Equity)
            </label>
            <select
              name="financingType"
              value={localData.financingType || ""}
              onChange={handleInputChange}
              className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
            >
              <option value="" disabled hidden>
                Select your financing type
              </option>
              <option value="Debt">Debt</option>
              <option value="Equity">Equity</option>
              <option value="Bonds">Bonds</option>
              <option value="Syndicated Finance">Syndicated Finance</option>
            </select>
          </div>
          {/* geographic coverage of services input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="geographicCoverageOfServices">
              Geographic coverage of services
            </label>
            <input
              type="text"
              name="geographicCoverageOfServices"
              value={localData.geographicCoverageOfServices || ""}
              onChange={handleInputChange}
              className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
              placeholder="North-West"
            />
          </div>
          {/* Types of products and services input */}
          <div className="flex flex-col space-y-2 md:w-1/2 md:col-span-2">
            <label>
              Types of products and services you offer (a full list)
            </label>
            {productFields.map((field, index) => (
              <div key={index} className="flex items-center space-x-2 mb-4">
                <input
                  type="text"
                  value={field.value}
                  onChange={event => handleProductFieldChange(index, event)}
                  className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full"
                  placeholder="Enter product/service"
                />
                <button
                  type="button"
                  onClick={handleAddProductField}
                  className="bg-pinkish-10 p-2 rounded-lg"
                >
                  <Image
                    src="/assets/svg/plus.svg"
                    width={32}
                    height={32}
                    alt="plus symbol"
                  />
                </button>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveProductField(index)}
                    className="bg-[#F9FAFC] text-white p-3 rounded-lg"
                  >
                    <Image
                      alt="trash symbol"
                      src="/assets/svg/trash.svg"
                      width={24}
                      height={24}
                    />
                  </button>
                )}
              </div>
            ))}
          </div>
          {/* Percentage of loan portfolio according to products */}
          {industry === "Inclusive Finance" && (
            <DynamicDoubleInputForm
              label="Percentage of loan portfolio according to products"
              firstPlaceholder="Individual Loan"
              secondPlaceholder="20%"
              onChange={values => setPercentageOfLoanPortfolioValues(values)}
            />
          )}
          {/* Names of current creditors and investment currency */}
          <DynamicDoubleInputForm
            label="Names of current creditors and investment currency"
            firstPlaceholder="Investor name"
            secondPlaceholder="Currency (USD,EUR,e.t.c.)"
            onChange={values => setCreditorValues(values)}
          />
          {/* Percentages of rural and urban extension of organization and coverage financing need input */}
          {industry === "Inclusive Finance" && (
            <div className="flex flex-col space-y-2 md:w-1/2 md:col-span-2">
              <label htmlFor="percentageOfRuralAndUrbanExtension">
                Percentages of rural and urban extension of organization and
                coverage financing need (amount)
              </label>
              <input
                type="text"
                name="percentageOfRuralAndUrbanExtension"
                value={localData.percentageOfRuralAndUrbanExtension || ""}
                onChange={handleInputChange}
                className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
                placeholder="$10,000"
              />
            </div>
          )}
        </div>
      </div>
      {/* Add more fields as needed */}
    </div>
  );
};

export default Step4;
