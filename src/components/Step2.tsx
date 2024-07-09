// components/Step2.tsx
import Image from "next/image";
import {useState, useEffect} from "react";

interface Step2Props {
  formData: {[key: string]: any};
  handleChange: (step: string, data: {[key: string]: any}) => void;
  errors: {[key: string]: string};
}

const Step2: React.FC<Step2Props> = ({formData, handleChange, errors}) => {
  const [localData, setLocalData] = useState(formData);

  useEffect(() => {
    handleChange("step2", localData);
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
        src="/assets/png/applyFunding/step2Tracker.png" // Placeholder image path
        height={40}
        width={1043}
        alt={"Step 2 Tracker"}
      />
      <div className="py-10">
        <p className="text-redish-20 mb-2">Step 2/5</p>
        <h2 className="text-4xl font-semibold mb-2">Organization Details</h2>
        <p className="text-greyish-10 mb-6">
          Please provide more background information on the applicant company
          below:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
          {" "}
          {/* Organization's Name input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="organizationName">Organization&apos;s Name</label>
            <input
              type="text"
              name="organizationName"
              value={localData.organizationName || ""}
              onChange={handleInputChange}
              className={`border-2 ${
                errors.organizationName ? "border-red-500" : "border-[#D9D9D9]"
              }  py-4 px-6 rounded-xl w-full`}
              placeholder="John Doe Ltd."
            />
            {errors.organizationName && (
              <p className="text-red-500 text-sm">{errors.organizationName}</p>
            )}
          </div>
          {/* Date of Incorporation input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="dateOfIncorporation">Date of Incorporation</label>
            <input
              type="date"
              name="dateOfIncorporation"
              value={localData.dateOfIncorporation || ""}
              onChange={handleInputChange}
              className={`border-2 ${
                errors.dateOfIncorporation
                  ? "border-red-500"
                  : "border-[#D9D9D9]"
              }  py-4 px-6 rounded-xl w-full`}
            />
            {errors.dateOfIncorporation && (
              <p className="text-red-500 text-sm">
                {errors.dateOfIncorporation}
              </p>
            )}
          </div>
          {/* company address input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="companyAddress">Company Address</label>
            <input
              type="text"
              name="companyAddress"
              value={localData.companyAddress || ""}
              onChange={handleInputChange}
              className={`border-2 ${
                errors.companyAddress ? "border-red-500" : "border-[#D9D9D9]"
              } py-4 px-6 rounded-xl w-full`}
              placeholder="456 Unity Avenue, Victoria Island, Lagos, Nigeria"
            />
            {errors.companyAddress && (
              <p className="text-red-500 text-sm">{errors.companyAddress}</p>
            )}
          </div>
          {/* company telephone input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="companyTelephone">Company Telephone</label>
            <input
              type="text"
              name="companyTelephone"
              value={localData.companyTelephone || ""}
              onChange={handleInputChange}
              className={`border-2 ${
                errors.companyTelephone ? "border-red-500" : "border-[#D9D9D9]"
              } py-4 px-6 rounded-xl w-full`}
              placeholder="+23480999988472"
            />
            {errors.companyTelephone && (
              <p className="text-red-500 text-sm">{errors.companyTelephone}</p>
            )}
          </div>
          {/* Structure / legal status of organization input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="organizationStructure">
              Structure / legal status of organization
            </label>
            <select
              name="organizationStructure"
              value={localData.organizationStructure || ""}
              onChange={handleInputChange}
              className={`border-2 ${
                errors.organizationStructure
                  ? "border-red-500"
                  : "border-[#D9D9D9]"
              } py-4 px-6 rounded-xl w-full`}
            >
              <option value="" disabled hidden>
                Select your organizations structure
              </option>
              <option value="Sole Proprietorship">Sole Proprietorship</option>
              <option value="Partnership">Partnership</option>
              <option value="Limited Liability Company (LLC)">
                Limited Liability Company (LLC)
              </option>
              <option value="Non-profit Organization">
                Non-profit Organization
              </option>
              <option value="Government Agency">Government Agency</option>
              <option value="Public Sector Organization">
                Public Sector Organization
              </option>
              <option value="Private Sector Organization">
                Private Sector Organization
              </option>
              <option value="Others">Others</option>
            </select>
            {errors.organizationStructure && (
              <p className="text-red-500 text-sm">
                {errors.organizationStructure}
              </p>
            )}
          </div>
          {/*Number of branches input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="numberOfBranches">
              How many branches does the organization have?
            </label>
            <input
              type="number"
              name="numberOfBranches"
              value={localData.numberOfBranches || ""}
              onChange={handleInputChange}
              className={`border-2 ${
                errors.numberOfBranches ? "border-red-500" : "border-[#D9D9D9]"
              } py-4 px-6 rounded-xl w-full`}
              placeholder="2"
            />
            {errors.numberOfBranches && (
              <p className="text-red-500 text-sm">{errors.numberOfBranches}</p>
            )}
          </div>
          {/* Headquarters location input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="headquartersLocation">
              Headquarters location (city)
            </label>
            <input
              type="text"
              name="headquartersLocation"
              value={localData.headquartersLocation || ""}
              onChange={handleInputChange}
              className={`border-2 ${
                errors.headquartersLocation
                  ? "border-red-500"
                  : "border-[#D9D9D9]"
              } py-4 px-6 rounded-xl w-full`}
              placeholder="City"
            />
            {errors.headquartersLocation && (
              <p className="text-red-500 text-sm">
                {errors.headquartersLocation}
              </p>
            )}
          </div>
          {/* Company Profile Link input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="companyProfileLink">
              Link to Company Profile Document
            </label>
            <input
              type="text"
              name="companyProfileLink"
              id="companyProfileLink"
              value={localData.companyProfileLink || ""}
              onChange={handleInputChange}
              className={`border-2 ${
                errors.companyProfileLink
                  ? "border-red-500"
                  : "border-[#D9D9D9]"
              } py-4 px-6 rounded-xl w-full`}
              placeholder="Company Profile"
            />
            {errors.companyProfileLink && (
              <p className="text-red-500 text-sm">
                {errors.companyProfileLink}
              </p>
            )}
          </div>
        </div>
      </div>
      {/* Add more fields as needed */}
    </div>
  );
};

export default Step2;
