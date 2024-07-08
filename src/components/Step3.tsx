// components/Step3.tsx
import Image from "next/image";
import {useState, useEffect, ChangeEvent} from "react";

interface Step3Props {
  formData: {[key: string]: any};
  handleChange: (step: string, data: {[key: string]: any}) => void;
}

const Step3: React.FC<Step3Props> = ({formData, handleChange}) => {
  const [localData, setLocalData] = useState(formData);
  const [numOwners, setNumOwners] = useState<number>(localData.numOwners || 1);

  useEffect(() => {
    handleChange("step3", localData);
  }, [localData]);

  const handleInputChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const {name, value} = e.target;
    console.log(value);

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
    setNumOwners(value);
    setLocalData(prevData => {
      const updatedOwners = prevData.owners || [];
      if (value > updatedOwners.length) {
        for (let i = updatedOwners.length; i < value; i++) {
          updatedOwners.push({});
        }
      } else {
        updatedOwners.splice(value);
      }
      return {...prevData, owners: updatedOwners, numOwners: value};
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
            value={numOwners}
            onChange={handleDropdownChange}
            className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full md:w-5/12"
          >
            {[...Array(7)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        {Array.from({length: numOwners}, (_, index) => (
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
                  value={localData.owners?.[index]?.fullName || ""}
                  onChange={e => handleInputChange(index, e)}
                  className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full"
                  placeholder="Full Name"
                />
              </div>
              {/* country located input */}
              <div className="flex flex-col space-y-2">
                <label htmlFor={`countryLocated`}>Country Located</label>
                <input
                  type="text"
                  name="countryLocated"
                  id={`countryLocated`}
                  value={localData.owners?.[index]?.countryLocated || ""}
                  onChange={e => handleInputChange(index, e)}
                  className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full"
                  placeholder="Country Located"
                />
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
                  value={localData.owners?.[index]?.email || ""}
                  onChange={e => handleInputChange(index, e)}
                  className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full"
                  placeholder="Email"
                />
              </div>
              {/* highest level of education input */}
              <div className="flex flex-col space-y-2">
                <label htmlFor={`highestLevelOfEducation-${index}`}>
                  Highest Level of Education
                </label>
                <select
                  name="highestLevelOfEducation"
                  id={`highestLevelOfEducation-${index}`}
                  value={
                    localData.owners?.[index]?.highestLevelOfEducation || ""
                  }
                  onChange={e => handleInputChange(index, e)}
                  className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
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
              </div>
              {/* percentage input */}
              <div className="flex flex-col space-y-2">
                <label htmlFor={`percentageOwned-${index}`}>
                  Percentage owned
                </label>
                <input
                  type="text"
                  name="percentageOwned"
                  id={`percentageOwned-${index}`}
                  value={localData.owners?.[index]?.percentageOwned || ""}
                  onChange={e => handleInputChange(index, e)}
                  className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full"
                  placeholder="20%"
                />
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
                  value={
                    localData.owners?.[index]?.yearsInTheOrganization || ""
                  }
                  onChange={e => handleInputChange(index, e)}
                  className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full"
                  placeholder="2"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step3;
