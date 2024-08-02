import React from 'react'
import FormInput from './FormInput';
import Dropdown from './Dropdown';

interface ISteps {
    handleContactInfoErrorChange: any
    handleContactInfoChange: any
    contactInfoError: any
    contactInfo: any
}

const Stepseven = ({ handleContactInfoErrorChange, handleContactInfoChange, contactInfoError, contactInfo }: ISteps) => {
    return (
        <div><div>
            <h2 className="text-4xl font-semibold mb-2">Outreach</h2>
            <p className="text-greyish-10 mb-6">
            Please provide Outreach information for your company:
            </p>
            <div className='flex flex-col gap-[20px]'>
                <div className='flex justify-between gap-[10px] sm:gap-[40px]'>
                    <div className="w-[100%]">
                        <FormInput
                            label="Where did you first learn about the Accelerator Programme?"
                            placeholder="Indicate the source through which you first learned about the Accelerator Programme (e.g., social media, industry event, referral, etc.)"
                            value={contactInfo.step7.first_learn}
                            className={`${contactInfoError.first_learn && "border-red-500"
                                } w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange("step7", "first_learn", e.target.value);
                                handleContactInfoErrorChange("first_learn", false);
                            }}
                        />
                    </div>
                </div>

                <div className='flex justify-between gap-[10px] sm:gap-[40px]'>
                    <div className="w-[100%]">
                        <FormInput
                            label="Who in your network of entrepreneurs would you recommend to participate in this programme? Please share company name and contact information"
                            placeholder=" Provide the names and contact details of entrepreneurs in your network who would benefit from participating in this programme (e.g., company name, email, phone number)."
                            value={contactInfo.step7.network_of_entrepreneurs}
                            className={`${contactInfoError.network_of_entrepreneurs && "border-red-500"
                                } w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange("step7", "network_of_entrepreneurs", e.target.value);
                                handleContactInfoErrorChange("network_of_entrepreneurs", false);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default Stepseven

