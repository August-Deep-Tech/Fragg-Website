// components/Step3.tsx
import Image from "next/image";
import {useState, useEffect, ChangeEvent} from "react";

interface Owner {
  fullName: string;
  countryLocated: string;
  email: string;
  highestLevelOfEducation: string;
  percentageOwned: string;
  yearsInTheOrganization: string;
  // [key: string]: any; // For any additional fields
}

interface Step3Props {
  formData: {
    owners: Owner[];
    numOwners: number;
  };
  handleChange: (
    step: string,
    data: {owners: Owner[]; numOwners: number}
  ) => void;
  errors: {[key: string]: string};
}

const Step3: React.FC<Step3Props> = ({formData, handleChange, errors}) => {
  const [localData, setLocalData] = useState(formData);
  // const [numOwners, setNumOwners] = useState<number>(localData.numOwners || 1);

  useEffect(() => {
    handleChange("step3", localData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localData]);

  useEffect(() => {
    // Initialize with one owner if numOwners is not set
    if (!localData.numOwners) {
      setLocalData(prevData => ({
        ...prevData,
        numOwners: 1,
        owners: [{}] as Owner[],
      }));
    }
  }, []);

  const handleInputChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const {name, value} = e.target;
    setLocalData(prevData => {
      const updatedOwners = [...(prevData.owners || [])];
      updatedOwners[index] = {
        ...updatedOwners[index],
        [name]: value,
      };
      return {...prevData, owners: updatedOwners};
    });
  };

  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10);
    // setNumOwners(value);
    setLocalData(prevData => {
      let updatedOwners = [...prevData.owners];
      if (value > updatedOwners.length) {
        for (let i = updatedOwners.length; i < value; i++) {
          updatedOwners.push({} as Owner);
        }
      } else {
        updatedOwners = updatedOwners.slice(0, value);
      }
      return {owners: updatedOwners, numOwners: value};
    });
  };

  return (
    <div>
      <Image
        src="/assets/png/applyFunding/step3Tracker.png" // Placeholder image path
        height={40}
        width={1043}
        alt={"Step 3 Tracker"}
      />
      <div className="py-10">
        <p className="text-redish-20 mb-2">Step 3/5</p>
        <h2 className="text-4xl font-semibold mb-2">Ownership Information</h2>
        <p className="text-greyish-10 mb-6">
          Please fill out the section below for each owner (maximum of 7).
        </p>
        <div className="mb-20">
          <label htmlFor="numOwners" className="block mb-2">
            Number of Owners (1-7)
          </label>
          <select
            id="numOwners"
            name="numOwners"
            value={localData.numOwners}
            onChange={handleDropdownChange}
            className={`border-2 ${
              errors.numOwners ? "border-red-500" : "border-[#D9D9D9]"
            } py-4 px-6 rounded-xl w-full md:w-5/12`}
          >
            {[...Array(7)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          {errors.numOwners && (
            <p className="text-red-500 text-sm">{errors.numOwners}</p>
          )}
        </div>
        {localData.owners.map((owner, index) => (
          <div className="mb-20" key={index}>
            <div className="bg-redish-20 w-fit text-white px-4 py-2 rounded-full mb-6">
              {index + 1}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 mb-6">
              {/* full name input */}
              <div className="flex flex-col space-y-2">
                <label htmlFor={`fullName-${index}`}>
                  Owner {index + 1} Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id={`fullName-${index}`}
                  value={owner.fullName || ""}
                  onChange={e => handleInputChange(index, e)}
                  className={`border-2 ${
                    errors[`owners.${index}.fullName`]
                      ? "border-red-500"
                      : "border-[#D9D9D9]"
                  } py-4 px-6 rounded-xl w-full`}
                  placeholder="Full Name"
                />
                {errors[`owners.${index}.fullName`] && (
                  <p className="text-red-500 text-sm">
                    {errors[`owners.${index}.fullName`]}
                  </p>
                )}
              </div>
              {/* country located input */}
              <div className="flex flex-col space-y-2">
                <label htmlFor={`countryLocated-${index}`}>
                  Country Located
                </label>
                <input
                  type="text"
                  name="countryLocated"
                  id={`countryLocated-${index}`}
                  value={owner.countryLocated || ""}
                  onChange={e => handleInputChange(index, e)}
                  className={`border-2 ${
                    errors[`owners.${index}.countryLocated`]
                      ? "border-red-500"
                      : "border-[#D9D9D9]"
                  } py-4 px-6 rounded-xl w-full`}
                  placeholder="Country Located"
                />
                {errors[`owners.${index}.countryLocated`] && (
                  <p className="text-red-500 text-sm">
                    {errors[`owners.${index}.countryLocated`]}
                  </p>
                )}
              </div>
              {/* email input */}
              <div className="flex flex-col space-y-2">
                <label htmlFor={`email-${index}`}>
                  Owner {index + 1} Email
                </label>
                <input
                  type="email"
                  name="email"
                  id={`email-${index}`}
                  value={owner.email || ""}
                  onChange={e => handleInputChange(index, e)}
                  className={`border-2 ${
                    errors[`owners.${index}.email`]
                      ? "border-red-500"
                      : "border-[#D9D9D9]"
                  } py-4 px-6 rounded-xl w-full`}
                  placeholder="Email"
                />
                {errors[`owners.${index}.email`] && (
                  <p className="text-red-500 text-sm">
                    {errors[`owners.${index}.email`]}
                  </p>
                )}
              </div>
              {/* highest level of education input */}
              <div className="flex flex-col space-y-2">
                <label htmlFor={`highestLevelOfEducation-${index}`}>
                  Highest Level of Education
                </label>
                <select
                  name="highestLevelOfEducation"
                  id={`highestLevelOfEducation-${index}`}
                  value={owner.highestLevelOfEducation || ""}
                  onChange={e => handleInputChange(index, e)}
                  className={`border-2 ${
                    errors[`owners.${index}.highestLevelOfEducation`]
                      ? "border-red-500"
                      : "border-[#D9D9D9]"
                  } py-4 px-6 rounded-xl w-full mb-4`}
                >
                  <option value="" disabled hidden>
                    Choose highest level of education
                  </option>
                  <option value="Secondary Education">
                    Secondary Education
                  </option>
                  <option value="Bachelor's Degree">
                    Bachelor&apos;s Degree
                  </option>
                  <option value="Master's Degree">Master&apos;s Degree</option>
                  <option value="Doctorate (PhD)">Doctorate (PhD)</option>
                  <option value="Others">Others</option>
                </select>
                {errors[`owners.${index}.highestLevelOfEducation`] && (
                  <p className="text-red-500 text-sm">
                    {errors[`owners.${index}.highestLevelOfEducation`]}
                  </p>
                )}
              </div>
              {/* percentage owned input */}
              <div className="flex flex-col space-y-2">
                <label htmlFor={`percentageOwned-${index}`}>
                  Percentage owned
                </label>
                <input
                  type="text"
                  name="percentageOwned"
                  id={`percentageOwned-${index}`}
                  value={owner.percentageOwned || ""}
                  onChange={e => handleInputChange(index, e)}
                  className={`border-2 ${
                    errors[`owners.${index}.percentageOwned`]
                      ? "border-red-500"
                      : "border-[#D9D9D9]"
                  } py-4 px-6 rounded-xl w-full`}
                  placeholder="20%"
                />
                {errors[`owners.${index}.percentageOwned`] && (
                  <p className="text-red-500 text-sm">
                    {errors[`owners.${index}.percentageOwned`]}
                  </p>
                )}
              </div>
              {/* years in the organization input */}
              <div className="flex flex-col space-y-2">
                <label htmlFor={`yearsInTheOrganization-${index}`}>
                  Years in the Organization
                </label>
                <input
                  type="number"
                  name="yearsInTheOrganization"
                  id={`yearsInTheOrganization-${index}`}
                  value={owner.yearsInTheOrganization || ""}
                  onChange={e => handleInputChange(index, e)}
                  className={`border-2 ${
                    errors[`owners.${index}.yearsInTheOrganization`]
                      ? "border-red-500"
                      : "border-[#D9D9D9]"
                  } py-4 px-6 rounded-xl w-full`}
                  placeholder="2"
                />
                {errors[`owners.${index}.yearsInTheOrganization`] && (
                  <p className="text-red-500 text-sm">
                    {errors[`owners.${index}.yearsInTheOrganization`]}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step3;
