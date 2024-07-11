"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";
import {FaUser, FaPhone, FaLocationDot} from "react-icons/fa6";
import {IoMail} from "react-icons/io5";
import {TfiMoney} from "react-icons/tfi";
import {IoIosCheckmark} from "react-icons/io";
import {TbWorld} from "react-icons/tb";

import FormInput from "@/components/FormInput";
import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";

const instrumentOptions = [
  {value: "", label: "Select an instrument"},
  {value: "GSS Bonds", label: "GSS Bonds"},
  {value: "Debt Funding", label: "Debt Funding"},
  {value: "Equity Funding", label: "Equity Funding"},
  {value: "Syndicated Finance", label: "Syndicated Finance"},
];

const investmentRangeOptions = [
  {value: "", label: "Select an investment range"},
  {value: "Below $100,000", label: "Below $100,000"},
  {value: "$100,000 - $1,000,000", label: "$100,000 - $1,000,000"},
  {value: "$1,000,000 - $5,000,000", label: "$1,000,000 - $5,000,000"},
  {value: "Above $5,000,000", label: "Above $5,000,000"},
];

const InvestorsForm = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [investorInfo, setInvestorInfo] = useState({
    name: "",
    email: "",
    phone_number: "",
    instrumentType: "",
    investmentRange: "",
  });

  const handleInvestorInfoChange = (key: any, value: any) => {
    setInvestorInfo(prevEvent => ({
      ...prevEvent,
      [key]: value,
    }));
  };

  const validateForm = () => {
    const {name, email, phone_number, instrumentType, investmentRange} =
      investorInfo;
    if (
      !name ||
      !email ||
      !phone_number ||
      !instrumentType ||
      !investmentRange
    ) {
      setErrorMessage("Please fill out all fields.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (!validateForm()) {
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
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
        router.push("/fragg-nigeria");
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
    <div className="container mx-auto px-4 2xl:px-0 py-[60px] lg:py-[60px]">
      <div className="pt-[40px] mb-10 text-center">
        <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] text-center pb-[10px] sm:pb-[24px]">
          Become a FRAGG Investor
        </h1>
        <p className="text-greyish-10 mx-auto text-center w-[90%] sm:w-[70%] xl:w-[50%] text-base">
          After our initial consultation, expect personalized conditions
          perfectly suited to your needs. Let&apos;s begin shaping your
          investment success story together!
        </p>
      </div>
      {/* form */}
      <div className="flex flex-col xl:flex-row sm:items-center gap-[40px] justify-center">
        <div className="p-[20px] sm:p-[40px]">
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
                className="sm:w-[452px]"
                onChange={e => handleInvestorInfoChange("name", e.target.value)}
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
                className="w-[100%] sm:w-[452px]"
                onChange={e =>
                  handleInvestorInfoChange("email", e.target.value)
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
                value={investorInfo.phone_number}
                className="w-[100%] sm:w-[452px]"
                onChange={e =>
                  handleInvestorInfoChange("phone_number", e.target.value)
                }
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
                onChange={e =>
                  handleInvestorInfoChange("instrumentType", e.target.value)
                }
                id="example-dropdown"
                name=""
                className="sm:w-[452px] text-greyish-10 bg-transparent"
                required={true}
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
                onChange={e =>
                  handleInvestorInfoChange("investmentRange", e.target.value)
                }
                id="example-dropdown"
                name=""
                className="sm:w-[452px] text-greyish-10 bg-transparent"
                required={true}
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
    </div>
  );
};

export default InvestorsForm;
