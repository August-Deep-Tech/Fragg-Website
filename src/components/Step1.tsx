// components/Step1.tsx
import Image from "next/image";
import {useState, useEffect} from "react";

interface Step1Props {
  formData: {[key: string]: any};
  handleChange: (step: string, data: {[key: string]: any}) => void;
  errors: {[key: string]: string};
}

const Step1: React.FC<Step1Props> = ({formData, handleChange, errors}) => {
  const [localData, setLocalData] = useState(formData);

  useEffect(() => {
    handleChange("step1", localData);
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
        src="/assets/png/applyFunding/step1Tracker.png" // Placeholder image path
        height={40}
        width={1043}
        alt={"Step 1 Tracker"}
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
              className={`border-2 ${
                errors.fullName ? "border-red-500" : "border-[#D9D9D9]"
              }  py-4 px-6 rounded-xl w-full`}
              placeholder="Full Name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
          </div>
          {/* role in organisation input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="role">Role in the organization</label>
            <input
              type="text"
              name="role"
              value={localData.role || ""}
              onChange={handleInputChange}
              className={`border-2 ${
                errors.role ? "border-red-500" : "border-[#D9D9D9]"
              } py-4 px-6 rounded-xl w-full`}
              placeholder="Role in Organization"
            />
            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role}</p>
            )}
          </div>
          {/* email input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              value={localData.email || ""}
              onChange={handleInputChange}
              className={`border-2 ${
                errors.email ? "border-red-500" : "border-[#D9D9D9]"
              } py-4 px-6 rounded-xl w-full`}
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          {/* phone number input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="phoneNumber">Your Phone</label>
            <input
              type="tel"
              name="phoneNumber"
              value={localData.phoneNumber || ""}
              onChange={handleInputChange}
              className={`border-2 ${
                errors.phoneNumber ? "border-red-500" : "border-[#D9D9D9]"
              } py-4 px-6 rounded-xl w-full`}
              placeholder="Phone Number"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}
          </div>
          {/* linkedin link input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="linkedinProfile">Your LinkedIn profile link</label>
            <input
              type="text"
              name="linkedinProfile"
              value={localData.linkedinProfile || ""}
              onChange={handleInputChange}
              className={`border-2 ${
                errors.linkedinProfile ? "border-red-500" : "border-[#D9D9D9]"
              } py-4 px-6 rounded-xl w-full`}
              placeholder="LinkedIn Profile Link"
            />
            {errors.linkedinProfile && (
              <p className="text-red-500 text-sm">{errors.linkedinProfile}</p>
            )}
          </div>
          {/* How did you learn about FRAGG input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="howDidYouLearnAboutFragg">
              How did you learn about FRAGG?
            </label>
            <select
              name="howDidYouLearnAboutFragg"
              value={localData.howDidYouLearnAboutFragg || ""}
              onChange={handleInputChange}
              className={`border-2 ${
                errors.howDidYouLearnAboutFragg
                  ? "border-red-500"
                  : "border-[#D9D9D9]"
              } py-4 px-6 rounded-xl w-full`}
            >
              <option value="" disabled hidden>
                Select an option
              </option>
              <option value="Google Search">Google Search</option>
              <option value="Facebook">Facebook</option>
              <option value="Twitter">Twitter</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Online Advertisement">Online Advertisement</option>
              <option value="Referral from a Friend/Colleague/Family Member">
                Referral from a Friend / Colleague / Family Member
              </option>
              <option value="Industry Event">Industry Event</option>
              <option value="Online Seminar">Online Seminar</option>
              <option value="Others">Others</option>
            </select>
            {errors.howDidYouLearnAboutFragg && (
              <p className="text-red-500 text-sm">
                {errors.howDidYouLearnAboutFragg}
              </p>
            )}
          </div>
        </div>
      </div>
      {/* Add more fields as needed */}
    </div>
  );
};

export default Step1;
