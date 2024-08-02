import React from 'react'
import FormInput from './FormInput';
import Dropdown from './Dropdown';

interface ISteps {
    handleContactInfoErrorChange: any
    handleContactInfoChange: any
    contactInfoError: any
    contactInfo: any
}

const Stepfive = ({ handleContactInfoErrorChange, handleContactInfoChange, contactInfoError, contactInfo }: ISteps) => {
    return (
        <div><div>
            <h2 className="text-4xl font-semibold mb-2">Revenue & Finance</h2>
            <p className="text-greyish-10 mb-6">
            Please provide Revenue & Finance details below regarding your company:
            </p>
            <div className='flex flex-col gap-[20px]'>
                <div className='flex justify-between gap-[10px] sm:gap-[40px]'>
                    <div className="w-[100%]">
                        <FormInput
                            label="Which year was the company last audited? Please indicate if the company has never been audited:"
                            placeholder="1980"
                            value={contactInfo.step5.year_last_audited}
                            className={`${contactInfoError.year_last_audited && "border-red-500"
                                } w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange(
                                    "step5","year_last_audited", e.target.value);
                                handleContactInfoErrorChange("year_last_audited", false);
                            }}
                        />
                    </div>
                </div>
                <div>
                    <label className="pb-[10px]">
                    Can you provide a hard copy of the latest audited accounts in the next 2 weeks?
                    </label>
                    <div className='pt-[10px] flex flex-col gap-[5px]'>
                        <div className='flex gap-[10px] cursor-pointer' onClick={() => handleContactInfoChange(
                            "step5","provided_copy_of_audited_accounts", true)}>
                            <p className={`border ${contactInfo.step5.provided_copy_of_audited_accounts ? "bg-redish-20" : "border-black"} w-[20px] h-[20px] rounded-full`}></p>
                            <p>Yes</p>
                        </div>
                        <div className='flex gap-[10px] cursor-pointer' onClick={() => handleContactInfoChange(
                            "step5","provided_copy_of_audited_accounts", false)}>
                            <p className={`border ${!contactInfo.step5.provided_copy_of_audited_accounts ? "bg-redish-20" : "border-black"} w-[20px] h-[20px] rounded-full`}></p>
                            <p>No</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between gap-[10px] sm:gap-[40px]'>
                    <div className="w-[100%]">
                        <FormInput
                            label="Total revenue (in USD) in the past 12 months"
                            placeholder="10000"
                            value={contactInfo.step5.total_usd_revenue}
                            className={`${contactInfoError.total_usd_revenue && "border-red-500"
                                } w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange(
                                    "step5","total_usd_revenue", e.target.value);
                                handleContactInfoErrorChange("total_usd_revenue", false);
                            }}
                        />
                    </div>
                </div>
                <div>
                    <label className="pb-[10px]">
                    Have you raised any external funding in the past 12 months?
                    </label>
                    <div className='pt-[10px] flex flex-col gap-[5px]'>
                        <div className='flex gap-[10px] cursor-pointer' onClick={() => handleContactInfoChange(
                            "step5","raised_external_funding", true)}>
                            <p className={`border ${contactInfo.step5.raised_external_funding ? "bg-redish-20  w-[22px] h-[22px]" : "border-black  w-[20px] h-[20px]"} rounded-full`}></p>
                            <p>Yes</p>
                        </div>
                        <div className='flex gap-[10px] cursor-pointer' onClick={() => handleContactInfoChange(
                            "step5","raised_external_funding", false)}>
                            <p className={`border ${!contactInfo.step5.raised_external_funding ? "bg-redish-20  w-[22px] h-[22px]" : "border-black  w-[20px] h-[20px]"} rounded-full`}></p>
                            <p>No</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex mt-[20px] justify-between gap-[10px] sm:gap-[40px]'>
                    <div className="w-[100%]">
                        <Dropdown
                            label="Are you seeking to raise external financing?"
                            options={externalFinancingTiming}
                            value={contactInfo.step5.seeking_to_raise_external_funding}
                            onChange={e => {
                                handleContactInfoChange(
                                    "step5",
                                    "seeking_to_raise_external_funding",
                                    e.target.value
                                );
                                handleContactInfoErrorChange("seeking_to_raise_external_funding", false);
                            }}
                            defaultValue="Select when (if) you need external financing"
                            id="example-dropdown"
                            
                            name=""
                            className={`${contactInfoError.seeking_to_raise_external_funding && "border-red-500"
                                } mb-[20px] text-[#757575] font-semibold bg-transparent w-[100%]`}
                        />

                        <Dropdown
                            label="What is the intended financing for?"
                            options={purposeOfFinancing}
                            value={contactInfo.step5.intended_financing_for}
                            onChange={e => {
                                handleContactInfoChange(
                                    "step5",
                                    "intended_financing_for",
                                    e.target.value
                                );
                                handleContactInfoErrorChange("intended_financing_for", false);
                            }}
                            defaultValue="Select the purpose of the financing"
                            id="example-dropdown"
                            name=""
                            className={`${contactInfoError.intended_financing_for && "border-red-500"
                                } text-[#757575] font-semibold bg-transparent w-[100%]`}
                        />
                    </div>
                    <div className="w-[100%]">
                        <Dropdown
                            label="If yes, what type of financing are you looking for?"
                            options={typeOfFinancing}
                            value={contactInfo.step5.type_of_external_funding}
                            onChange={e => {
                                handleContactInfoChange(
                                    "step5",
                                    "type_of_external_funding",
                                    e.target.value
                                );
                                handleContactInfoErrorChange("type_of_external_funding", false);
                            }}
                            defaultValue="Select preferred source of external financing"
                            id="example-dropdown"
                            name=""
                            className={`${contactInfoError.type_of_external_funding && "border-red-500"
                                } text-[#757575] font-semibold bg-transparent w-[100%]`}
                        />
                    </div>
                </div>
        </div></div>
    )
}

export default Stepfive

const externalFinancingTiming = [
    { label: "Yes, in the next 6 months", value: "6_months" },
    { label: "Yes, in the next 12 months", value: "12_months" },
    { label: "Yes, in the next 18 months", value: "18_months" },
    { label: "No", value: "no" }
];

const typeOfFinancing = [
    { label: "Equity", value: "Equity" },
    { label: "Convertible Debt", value: "Convertible Debt" },
    { label: "Grants", value: "Grants" },
    { label: "Commercial Debt / Credit Facility (from a bank or lending institution)", value: "Commercial Debt / Credit Facility (from a bank or lending institution)" },
    { label: "Not sure", value: "Not sure" }
];

const purposeOfFinancing = [
    { label: "Working Capital", value: "Working Capital" },
    { label: "Marketing", value: "Marketing" },
    { label: "HR - New Hires", value: "HR - New Hires" },
    { label: "Purchase Equipment / CAPEX", value: "Purchase Equipment / CAPEX" },
    { label: "Acquire New Systems", value: "Acquire New Systems" },
    { label: "Expansion to New Markets", value: "Expansion to New Markets" },
    { label: "Product Innovation", value: "Product Innovation" },
    { label: "Research & Development", value: "Research & Development" },
    { label: "Launch of New Products", value: "Launch of New Products" },
    { label: "Other", value: "Other" }
];
