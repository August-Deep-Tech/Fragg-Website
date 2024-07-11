"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";
import {FaUser, FaPhone, FaLocationDot} from "react-icons/fa6";
import {IoMail} from "react-icons/io5";
import {TfiMoney} from "react-icons/tfi";
import {IoIosCheckmark} from "react-icons/io";
import {TbWorld} from "react-icons/tb";

import FormInput from "@/components/FormInput";
import {redHatDisplay} from "@/styles/font";
import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";
import {useCountry} from "@/hooks/useCountry";
import DropdownMenu from "@/components/CountryDropdown";

const instrumentOptions = [
  {value: "GSS Bonds", label: "GSS Bonds"},
  {value: "Debt Funding", label: "Debt Funding"},
  {value: "Equity Funding", label: "Equity Funding"},
  {value: "Syndicated Finance", label: "Syndicated Finance"},
];

const investmentRangeOptions = [
  {value: "Below $100,000", label: "Below $100,000"},
  {value: "$100,000 - $1,000,000", label: "$100,000 - $1,000,000"},
  {value: "$1,000,000 - $5,000,000", label: "$1,000,000 - $5,000,000"},
  {value: "Above $5,000,000", label: "Above $5,000,000"},
];

const BecomeanInvestor = () => {
  const router = useRouter();
  const {countries, setCurrentCountry, currentCountry} = useCountry();
  const [plan, setPlan] = useState("Investors");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [investorInfo, setInvestorInfo] = useState({
    name: "",
    email: "",
    phone_number: "",
    instrumentType: "",
    investmentRange: "",
  });
  const [investorInfoError, setInvestorInfoError] = useState({
    name: false,
    email: false,
    phone_number: false,
    instrumentType: false,
    investmentRange: false,
  });
  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    phone_number: "",
    role: "",
    companyWebsite: "",
    companyAddress: "",
  });

  const handleInvestorInfoChange = (key: any, value: any) => {
    setInvestorInfo(prevEvent => ({
      ...prevEvent,
      [key]: value,
    }));
  };

  const handleInvestorInfoErrorChange = (key: any, value: any) => {
    setInvestorInfoError(prevEvent => ({
      ...prevEvent,
      [key]: value,
    }));
  };

  const handleClientInfoChange = (key: any, value: any) => {
    setClientInfo(prevEvent => ({
      ...prevEvent,
      [key]: value,
    }));
  };

  const allowSubmission =
    investorInfo.name.length < 1 ||
    investorInfo.email.length < 1 ||
    investorInfo.phone_number.length < 1 ||
    investorInfo.instrumentType.length < 1 ||
    investorInfo.investmentRange.length < 1;

  const handleSubmitForClient = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    router.push("/fragg-nigeria/apply-for-funding");
  };

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (allowSubmission) {
      if (investorInfo.name.length < 1) {
        handleInvestorInfoErrorChange("name", true);
      }
      if (investorInfo.email.length < 1) {
        handleInvestorInfoErrorChange("email", true);
      }
      if (investorInfo.phone_number.length < 1) {
        handleInvestorInfoErrorChange("phone_number", true);
      }
      if (investorInfo.instrumentType.length < 1) {
        handleInvestorInfoErrorChange("instrumentType", true);
      }
      if (investorInfo.investmentRange.length < 1) {
        handleInvestorInfoErrorChange("investmentRange", true);
      }
      setErrorMessage("Please fill all fields");
      return;
    }
    setIsSubmitting(true);

    // handle submit for investor form
    try {
      const response = await fetch(
        "https://fragg-forms-api.onrender.com/submit-investor-info",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(investorInfo),
        }
      );

      // const result = await response.json();
      if (response.ok) {
        // alert("Form submitted successfully!");
        setSuccessMessage("Form Submitted Successfully");
        setInvestorInfo({
          name: "",
          email: "",
          phone_number: "",
          instrumentType: "",
          investmentRange: "",
        });
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
      // Clear the success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }
  };

  return (
    <div
      className={`${redHatDisplay.className} py-[60px] lg:py-[120px]`}
      id="investor"
    >
      <div className="flex justify-center">
        <div className="relative transition-all flex gap-1 mx-auto w-fit p-[12px] rounded-full bg-[#FAF5F5]">
          <div
            className={`${
              plan === "Investors"
                ? "left-3 w-[135px]"
                : "left-[165px] w-[110px]"
            } transition-all duration-500 absolute top-[.65rem] h-[40px]  rounded-full bg-redish-20 shadow-md`}
          ></div>
          <button
            onClick={() => setPlan("Investors")}
            className={`
          ${
            plan === "Investors"
              ? "text-white"
              : "text-greyish-10 bg-[#99999914] shadow-sm"
          }
          z-[1] capitalize text-base hover:border-2 border-2 border-transparent py-1 px-5  rounded-full`}
          >
            For Investors
          </button>
          <button
            onClick={() => setPlan("Clients")}
            className={`
          ${
            plan === "Clients"
              ? "text-white"
              : "text-greyish-10 bg-[#99999914] shadow-sm"
          }
          z-[1] capitalize text-base hover:border-2 border-2 border-transparent py-1 px-5 rounded-full`}
          >
            For Clients
          </button>
        </div>
      </div>
      {plan === "Investors" ? (
        <div className="pt-[40px]">
          <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] text-center pb-[10px] sm:pb-[24px]">
            Become a FRAGG Investor
          </h1>
          <p className="text-greyish-10 mx-auto text-center w-[90%] sm:w-[70%] xl:w-[50%] text-base">
            After our initial consultation, expect personalized conditions
            perfectly suited to your needs. Let&apos;s begin shaping your
            investment success story together!
          </p>
        </div>
      ) : (
        <div className="pt-[40px]">
          <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] text-center pb-[10px] sm:pb-[24px]">
            Apply for Funding
          </h1>
          <p className="text-greyish-10 mx-auto text-center w-[90%] sm:w-[70%] xl:w-[50%] text-base">
            After our initial discussion, anticipate tailor-made terms
            meticulously crafted to match your unique requirements. Let&apos;s
            embark on shaping your financial success journey together!
          </p>
        </div>
      )}

      <div className="flex sm:justify-center pt-[40px] xl:pt-[80px]">
        {plan === "Investors" ? (
          <div className="flex flex-col xl:flex-row sm:items-center gap-[40px]">
            <div className="w-[100vw] sm:w-fit p-[20px] sm:p-[40px]">
              <div className="flex gap-[12px] sm:gap-[24px]">
                <div className="w-fit">
                  <div className="bg-redish-10 w-[50px] h-[50px] sm:w-[64px] sm:h-[64px] rounded-full flex items-center justify-center">
                    <FaUser size={20} color="white" />
                  </div>
                </div>
                <div className="w-[100%] sm:w-[452px]">
                  <FormInput
                    label="Your Name"
                    placeholder="John Doe"
                    value={investorInfo.name}
                    className={`${
                      investorInfoError.name && "border-red-500"
                    } w-[100%] sm:w-[452px]`}
                    onChange={e => {
                      handleInvestorInfoChange("name", e.target.value);
                      handleInvestorInfoErrorChange("name", false);
                    }}
                  />
                </div>
              </div>
              <div className="flex gap-[12px] sm:gap-[24px] pt-[40px]">
                <div className="w-fit">
                  <div className="bg-redish-10 w-[50px] h-[50px] sm:w-[64px] sm:h-[64px] rounded-full flex items-center justify-center">
                    <IoMail size={20} color="white" />
                  </div>
                </div>
                <div className="w-[100%]">
                  <FormInput
                    label="Your Email"
                    placeholder="johndoe@mail.com"
                    value={investorInfo.email}
                    className={`${
                      investorInfoError.email && "border-red-500"
                    } w-[100%] sm:w-[452px]`}
                    onChange={e => {
                      handleInvestorInfoChange("email", e.target.value);
                      handleInvestorInfoErrorChange("email", false);
                    }}
                  />
                </div>
              </div>
              <div className="flex gap-[12px] sm:gap-[24px] pt-[40px]">
                <div className="w-fit">
                  <div className="bg-redish-10 w-[50px] h-[50px] sm:w-[64px] sm:h-[64px] rounded-full flex items-center justify-center">
                    <FaPhone size={20} color="white" />
                  </div>
                </div>
                <div className="w-[100%] flex">
                  {/* <div className="relative z-[10] w-[80px] bg-white">
                                        <DropdownMenu
                                            options={countries}
                                            value={currentCountry}
                                            onChange={setCurrentCountry}
                                        />
                                    </div> */}
                  <FormInput
                    label="Your Phone"
                    placeholder="812 345 6789"
                    value={investorInfo.phone_number}
                    className={`${
                      investorInfoError.phone_number && "border-red-500"
                    } w-[100%] sm:w-[452px]`}
                    onChange={e => {
                      handleInvestorInfoChange("phone_number", e.target.value);
                      handleInvestorInfoErrorChange("phone_number", false);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="bg-redish-20 w-[100vw] sm:w-fit p-[20px] sm:p-[40px] rounded-xl">
              <div className="flex gap-[24px] text-white">
                <div className="w-fit">
                  <div className="bg-white w-[50px] h-[50px] sm:w-[64px] sm:h-[64px] rounded-full flex items-center justify-center">
                    <FaUser size={20} color="#700000" />
                  </div>
                </div>
                <div className="w-[100%]">
                  <Dropdown
                    label="Type of Instrument"
                    options={instrumentOptions}
                    value={investorInfo.instrumentType}
                    onChange={e => {
                      handleInvestorInfoChange(
                        "instrumentType",
                        e.target.value
                      );
                      handleInvestorInfoErrorChange("instrumentType", false);
                    }}
                    defaultValue="Please select an option"
                    id="example-dropdown"
                    name=""
                    className={`${
                      investorInfoError.instrumentType && "border-red-500"
                    } text-greyish-10 bg-transparent w-[100%] sm:w-[452px]`}
                  />
                </div>
              </div>
              <div className="flex gap-[24px] text-white pt-[20px]">
                <div className="w-fit">
                  <div className="bg-white w-[50px] h-[50px] sm:w-[64px] sm:h-[64px] rounded-full flex items-center justify-center">
                    <TfiMoney size={20} color="#700000" />
                  </div>
                </div>
                <div className="w-[100%]">
                  <Dropdown
                    label="Range of Investment"
                    options={investmentRangeOptions}
                    value={investorInfo.investmentRange}
                    onChange={e => {
                      handleInvestorInfoChange(
                        "investmentRange",
                        e.target.value
                      );
                      handleInvestorInfoErrorChange("investmentRange", false);
                    }}
                    defaultValue="Please select an option"
                    id="example-dropdown"
                    name=""
                    className={`${
                      investorInfoError.investmentRange && "border-red-500"
                    } text-greyish-10 bg-transparent w-[100%] sm:w-[452px]`}
                  />
                </div>
              </div>
              <div className="pt-[40px]">
                <h1 className="text-[24px] text-white border-b pb-[12px] border-white font-[600]">
                  FRAGG offers you
                </h1>
                <div className="pt-[24px] pb-[20px] flex flex-col gap-[8px]">
                  <div className="flex gap-[8px]">
                    <div className="bg-white w-[22px] flex items-center justify-center rounded-full">
                      <IoIosCheckmark />
                    </div>
                    <p className="text-white font-[600]"> Capital protection</p>
                  </div>
                  <div className="flex gap-[8px]">
                    <div className="bg-white w-[22px] flex items-center justify-center rounded-full">
                      <IoIosCheckmark />
                    </div>
                    <p className="text-white font-[600]"> Desired term</p>
                  </div>
                  <div className="flex gap-[8px]">
                    <div className="bg-white w-[22px] flex items-center justify-center rounded-full">
                      <IoIosCheckmark />
                    </div>
                    <p className="text-white font-[600]"> Secure return</p>
                  </div>
                </div>
                {/* <div>{successMessage}</div> */}
                {errorMessage !== "" && (
                  <div className="font-bold text-red-200 text-xs">
                    {errorMessage}
                  </div>
                )}
                {successMessage !== "" && (
                  <div className="font-bold text-green-500 mb-3 text-xs">
                    {successMessage}
                  </div>
                )}
                <Button
                  onClick={handleSubmit}
                  label={isSubmitting ? "Submitting..." : "Begin Consulation"}
                  type="submit"
                  className="bg-white py-[16px] w-[100%] rounded-3xl text-redish-10 font-semibold text-center"
                  disabled={isSubmitting}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col xl:flex-row sm:items-center gap-[40px]">
            <div className="w-[100vw] sm:w-fit p-[20px] sm:p-[40px]">
              <div className="flex gap-[12px] sm:gap-[24px]">
                <div className="w-fit">
                  <div className="bg-redish-10 w-[50px] h-[50px] sm:w-[64px] sm:h-[64px] rounded-full flex items-center justify-center">
                    <FaUser size={20} color="white" />
                  </div>
                </div>
                <div className="w-[100%]">
                  <FormInput
                    label="Your Name"
                    placeholder="John Doe"
                    value={clientInfo.name}
                    className="sm:w-[452px]"
                    onChange={e =>
                      handleClientInfoChange("name", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="flex gap-[12px] sm:gap-[24px] pt-[40px]">
                <div className="w-fit">
                  <div className="bg-redish-10 w-[50px] h-[50px] sm:w-[64px] sm:h-[64px] rounded-full flex items-center justify-center">
                    <IoMail size={20} color="white" />
                  </div>
                </div>
                <div className="w-[100%]">
                  <FormInput
                    label="Your Email"
                    placeholder="johndoe@mail.com"
                    value={clientInfo.email}
                    className="w-[100%] sm:w-[452px]"
                    onChange={e =>
                      handleClientInfoChange("email", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="flex gap-[12px] sm:gap-[24px] pt-[40px]">
                <div className="w-fit">
                  <div className="bg-redish-10 w-[50px] h-[50px] sm:w-[64px] sm:h-[64px] rounded-full flex items-center justify-center">
                    <FaPhone size={20} color="white" />
                  </div>
                </div>
                <div className="w-[100%]">
                  <FormInput
                    label="Your Phone"
                    placeholder="812 345 6789"
                    value={clientInfo.phone_number}
                    className="w-[100%] sm:w-[452px]"
                    onChange={e =>
                      handleClientInfoChange("phone_number", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
            <div className="bg-redish-20 w-[100vw] sm:w-fit p-[20px] sm:p-[40px] rounded-xl">
              <div className="flex gap-[12px] sm:gap-[24px] text-white ">
                <div className="w-fit">
                  <div className="bg-white w-[50px] h-[50px] sm:w-[64px] sm:h-[64px] rounded-full flex items-center justify-center">
                    <FaUser size={20} color="#700000" />
                  </div>
                </div>
                <div className="w-[100%]">
                  <FormInput
                    label="Role in the organization"
                    placeholder="John Doe Ltd."
                    value={clientInfo.role}
                    className="w-[100%] sm:w-[452px] bg-transparent"
                    onChange={e =>
                      handleClientInfoChange("role", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="flex gap-[12px] sm:gap-[24px] text-white pt-[20px]">
                <div className="w-fit">
                  <div className="bg-white w-[50px] h-[50px] sm:w-[64px] sm:h-[64px] rounded-full flex items-center justify-center">
                    <TbWorld size={20} color="#700000" />
                  </div>
                </div>
                <div className="w-[100%]">
                  <FormInput
                    label="Company Website"
                    placeholder="Johndoeltd.com"
                    value={clientInfo.companyWebsite}
                    className="w-[100%] sm:w-[452px] bg-transparent"
                    onChange={e =>
                      handleClientInfoChange("companyWebsite", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="flex gap-[12px] sm:gap-[24px] text-white pt-[20px]">
                <div className="w-fit">
                  <div className="bg-white w-[50px] h-[50px] sm:w-[64px] sm:h-[64px] rounded-full flex items-center justify-center">
                    <FaLocationDot size={20} color="#700000" />
                  </div>
                </div>
                <div className="w-[100%]">
                  <FormInput
                    label="Company Street Address"
                    placeholder="Street name, City, State , Country"
                    value={clientInfo.companyAddress}
                    className="w-[100%] sm:w-[452px] bg-transparent"
                    onChange={e =>
                      handleClientInfoChange("companyAddress", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="pt-[118px]">
                <Button
                  onClick={handleSubmitForClient}
                  label={
                    isSubmitting ? "Submitting..." : "Continue Application"
                  }
                  type="submit"
                  className="bg-white py-[16px] w-[100%] rounded-3xl text-redish-10 font-semibold"
                  disabled={isSubmitting}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BecomeanInvestor;
