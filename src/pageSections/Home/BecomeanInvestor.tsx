"use client";

import {useState} from "react";
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
  const {countries, setCurrentCountry, currentCountry} = useCountry();
  const [plan, setPlan] = useState("Investors");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [investorInfo, setInvestorInfo] = useState({
    name: "",
    email: "",
    phone_number: "",
    instrumentType: "",
    investmentRange: "",
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

  const handleClientInfoChange = (key: any, value: any) => {
    setClientInfo(prevEvent => ({
      ...prevEvent,
      [key]: value,
    }));
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulate an async operation
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Form submitted!");
    }, 2000);
  };
  return (
    <div className={`${redHatDisplay.className} py-[120px]`}>
      <div className="flex justify-center">
        <div className="relative transition-all flex gap-1 mx-auto w-fit p-[12px] rounded-full bg-[#FAF5F5]">
          <div
            className={`${
              plan === "Investors"
                ? "left-3 w-[130px]"
                : "left-[150px] w-[110px]"
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
                    className="sm:w-[452px]"
                    onChange={e =>
                      handleInvestorInfoChange("name", e.target.value)
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
                      handleInvestorInfoChange(
                        "investmentRange",
                        e.target.value
                      )
                    }
                    id="example-dropdown"
                    name=""
                    className="sm:w-[452px] text-greyish-10 bg-transparent"
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
                <Button
                  onClick={handleSubmit}
                  label={isSubmitting ? "Submitting..." : "Begin Consulation"}
                  type="submit"
                  className="bg-white py-[16px] w-[100%] rounded-3xl text-redish-10 font-semibold"
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
                      handleInvestorInfoChange("name", e.target.value)
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
                    value={clientInfo.phone_number}
                    className="w-[100%] sm:w-[452px]"
                    onChange={e =>
                      handleInvestorInfoChange("phone_number", e.target.value)
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
                      handleInvestorInfoChange("role", e.target.value)
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
                      handleInvestorInfoChange("companyWebsite", e.target.value)
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
                    value={clientInfo.role}
                    className="w-[100%] sm:w-[452px] bg-transparent"
                    onChange={e =>
                      handleInvestorInfoChange("role", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="pt-[118px]">
                <Button
                  onClick={handleSubmit}
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
