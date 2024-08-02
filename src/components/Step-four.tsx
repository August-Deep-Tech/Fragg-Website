import React from 'react'
import FormInput from './FormInput';
import Dropdown from './Dropdown';

interface ISteps {
    handleContactInfoErrorChange: any
    handleContactInfoChange: any
    contactInfoError: any
    contactInfo: any
}

const StepFour = ({ handleContactInfoErrorChange, handleContactInfoChange, contactInfoError, contactInfo }: ISteps) => {
    return (
        <div><div>
            <h2 className="text-4xl font-semibold mb-2">Growth Challenges</h2>
            <p className="text-greyish-10 mb-6">
                Please provide details below regarding growth challenges faced by your company:
            </p>
            <div className='flex flex-col gap-[20px]'>
                <div className='flex justify-between gap-[10px] sm:gap-[40px]'>
                    <div className="w-[100%]">
                        <Dropdown
                            label="What is the main growth challenge the company is facing?"
                            options={growthChallenges}
                            value={contactInfo.step4.main_growth}
                            onChange={e => {
                                handleContactInfoChange(
                                    "step4",
                                    "main_growth",
                                    e.target.value
                                );
                                handleContactInfoErrorChange("main_growth", false);
                            }}
                            defaultValue="Select main growth challenge"
                            id="example-dropdown"

                            name=""
                            className={`${contactInfoError.main_growth && "border-red-500"
                                } mb-[20px] text-[#757575] font-semibold bg-transparent w-[100%]`}
                        />
                    </div>
                    <div className="w-[100%]">
                        <Dropdown
                            label="What Primary Impact Objective Does the Company Address?"
                            options={impactObjectives}
                            value={contactInfo.step4.primary_objective}
                            onChange={e => {
                                handleContactInfoChange(
                                    "step4",
                                    "primary_objective",
                                    e.target.value
                                );
                                handleContactInfoErrorChange("primary_objective", false);
                            }}
                            defaultValue="Select primary impact objective"
                            id="example-dropdown"
                            name=""
                            className={`${contactInfoError.primary_objective && "border-red-500"
                                } text-[#757575] font-semibold bg-transparent w-[100%]`}
                        />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default StepFour

const growthChallenges = [
    { value: "Funding / Access to Growth Capital", label: "Funding / Access to Growth Capital" },
    { value: "Expansion / Market Outreach", label: "Expansion / Market Outreach" },
    { value: "Competition", label: "Competition" },
    { value: "Product Development", label: "Product Development" },
    { value: "Capacity Development / Human Resources", label: "Capacity Development / Human Resources" },
    { value: "Other", label: "Other" },
];

const impactObjectives = [
    { value: "Access to Clean Water", label: "Access to Clean Water" },
    { value: "Access to Education", label: "Access to Education" },
    { value: "Access to Energy", label: "Access to Energy" },
    { value: "Access to Financial Services", label: "Access to Financial Services" },
    { value: "Affordable Housing", label: "Affordable Housing" },
    { value: "Agriculture Productivity", label: "Agriculture Productivity" },
    { value: "Capacity Building", label: "Capacity Building" },
    { value: "Community Development", label: "Community Development" },
    { value: "Employment Generation", label: "Employment Generation" },
    { value: "Energy and Fuel Efficiency", label: "Energy and Fuel Efficiency" },
    { value: "Food Security", label: "Food Security" },
    { value: "Health Improvement", label: "Health Improvement" },
    { value: "Pollution Prevention and Waste Management", label: "Pollution Prevention and Waste Management" },
    { value: "Sustainable Energy", label: "Sustainable Energy" },
    { value: "Water Resources Management", label: "Water Resources Management" },
    { value: "Other", label: "Other" }
]