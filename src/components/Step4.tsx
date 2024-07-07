// components/Step4.tsx
import Image from "next/image";
import {useState, useEffect} from "react";
import DynamicDoubleInputForm from "./DynamicDoubleInputForm";

interface Step4Props {
  formData: {[key: string]: any};
  handleChange: (step: string, data: {[key: string]: any}) => void;
}

const Step4: React.FC<Step4Props> = ({formData, handleChange}) => {
  const [localData, setLocalData] = useState(formData);
  const [productFields, setProductFields] = useState([{value: ""}]);
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [creditorValues, setCreditorValues] = useState<string[]>([]);

  useEffect(() => {
    handleChange("step4", {...localData, portfolioValues, creditorValues});
  }, [localData, portfolioValues, creditorValues]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          {" "}
          {/* loan portfolio size input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="loanPortfolioSize">
              Loan portfolio size (Financial Institutions)
            </label>
            <input
              type="text"
              name="loanPortfolioSize"
              value={localData.loanPortfolioSize || ""}
              onChange={handleInputChange}
              className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
              placeholder="$10,000"
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
          {/* average loan amount per client input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="averageLoanAmountPerClient">
              Average loan amount per client (Financial Institutions)
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
          {/* geographic coverage of services input */}
          <div className="flex flex-col space-y-2 md:w-1/2 md:col-span-2">
            <label htmlFor="geographicCoverageOfServices">
              Geographic coverage of services
            </label>
            <input
              type="text"
              name="geographicCoverageOfServices"
              value={localData.geographicCoverageOfServices || ""}
              onChange={handleInputChange}
              className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
              placeholder="$10,000"
            />
          </div>
          {/* Percentages of rural and urban extension of organization and coverage financing need input */}
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
          <DynamicDoubleInputForm
            label="Percentage of loan portfolio according to products"
            firstPlaceholder="Product"
            secondPlaceholder="Percentage"
            onChange={values => setPortfolioValues(values)}
          />
          {/* Names of current creditors and investment currency */}
          <DynamicDoubleInputForm
            label="Names of current creditors and investment currency"
            firstPlaceholder="Investor name"
            secondPlaceholder="Currency"
            onChange={values => setCreditorValues(values)}
          />
        </div>
      </div>
      {/* Add more fields as needed */}
    </div>
  );
};

export default Step4;
