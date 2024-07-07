// components/Step5.tsx
import Image from "next/image";
import {useState, useEffect} from "react";

interface Step5Props {
  formData: {[key: string]: any};
  handleChange: (step: string, data: {[key: string]: any}) => void;
}

const Step5: React.FC<Step5Props> = ({formData, handleChange}) => {
  const [localData, setLocalData] = useState(formData);

  useEffect(() => {
    handleChange("step5", localData);
  }, [localData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <p className="text-redish-20 mb-2">Step 1/5</p>
        <h2 className="text-4xl font-semibold mb-2">Contact Details</h2>
        <p className="text-greyish-10 mb-6">
          Please provide information for the key contact person and company
          below:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
          {" "}
          {/* full name input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="fullName">Your Full Name</label>
            <input
              type="text"
              name="fullName"
              value={localData.fullName || ""}
              onChange={handleInputChange}
              className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
              placeholder="Full Name"
            />
          </div>
          {/* role in organisation input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="role">Role in the organisation</label>
            <input
              type="text"
              name="role"
              value={localData.role || ""}
              onChange={handleInputChange}
              className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
              placeholder="Role in Organization"
            />
          </div>
          {/* email input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              value={localData.email || ""}
              onChange={handleInputChange}
              className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
              placeholder="Email"
            />
          </div>
          {/* company website input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="website">Company Website</label>
            <input
              type="url"
              name="website"
              value={localData.website || ""}
              onChange={handleInputChange}
              className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
              placeholder="Company Website"
            />
          </div>
          {/* phone number input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="phoneNumber">Your Phone</label>
            <input
              type="tel"
              name="phoneNumber"
              value={localData.phoneNumber || ""}
              onChange={handleInputChange}
              className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
              placeholder="Phone Number"
            />
          </div>
          {/* company street input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="companyStreet">Company Street Address</label>
            <input
              type="text"
              name="companyStreet"
              value={localData.companyStreet || ""}
              onChange={handleInputChange}
              className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
              placeholder="Company Street"
            />
          </div>
          {/* linkedin link input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="linkedinProfile">Your LinkedIn profile link</label>
            <input
              type="url"
              name="linkedinProfile"
              value={localData.linkedin || ""}
              onChange={handleInputChange}
              className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-full mb-4"
              placeholder="LinkedIn Profile Link"
            />
          </div>
        </div>
      </div>
      {/* Add more fields as needed */}
    </div>
  );
};

export default Step5;
