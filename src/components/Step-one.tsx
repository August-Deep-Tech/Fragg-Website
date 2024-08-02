import React from 'react'
import FormInput from './FormInput';

interface ISteps {
    handleContactInfoErrorChange: any
    handleContactInfoChange: any
    contactInfoError: any
    contactInfo: any
}

const Stepone = ({ handleContactInfoErrorChange, handleContactInfoChange, contactInfoError, contactInfo }: ISteps) => {
    return (
        <div><div>
            <h2 className="text-4xl font-semibold mb-2">Key Contact</h2>
            <p className="text-greyish-10 mb-6">
                Please provide information for the key contact person and company
                below:
            </p>
            <div className='flex flex-col gap-[20px]'>
                <div className='flex justify-between gap-[10px] sm:gap-[40px]'>
                    <div className="w-[100%]">
                        <FormInput
                            label="First Name"
                            placeholder="John"
                            value={contactInfo.step1.first_name}
                            className={`${contactInfoError.first_name && "border-red-500"} w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange("step1", "first_name", e.target.value);
                                handleContactInfoErrorChange("first_name", false);
                            }}
                        />
                    </div>
                    <div className="w-[100%]">
                        <FormInput
                            label="Last Name"
                            placeholder="Doe"
                            value={contactInfo.step1.last_name}
                            className={`${contactInfoError.last_name && "border-red-500"} w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange("step1", "last_name", e.target.value);
                                handleContactInfoErrorChange("last_name", false);
                            }}
                        />
                    </div>
                </div>
                <div className='flex justify-between gap-[10px] sm:gap-[40px]'>
                    <div className="w-[100%]">
                        <FormInput
                            label="Address"
                            placeholder="Street, City, State, Country"
                            value={contactInfo.step1.address}
                            className={`${contactInfoError.address && "border-red-500"} w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange("step1", "address", e.target.value);
                                handleContactInfoErrorChange("address", false);
                            }}
                        />
                    </div>
                    <div className="w-[100%]">
                        <FormInput
                            label="Telephone (with country code e.g +234)"
                            placeholder="+234 812 433 8483"
                            value={contactInfo.step1.telephone}
                            className={`${contactInfoError.telephone && "border-red-500"} w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange("step1", "telephone", e.target.value);
                                handleContactInfoErrorChange("telephone", false);
                            }}
                        />
                    </div>
                </div>
                <div className='flex justify-between gap-[10px] sm:gap-[40px]'>
                    <div className="w-[100%]">
                        <FormInput
                            label="Email Address"
                            placeholder="john.doe@gmail.com"
                            value={contactInfo.step1.email}
                            className={`${contactInfoError.email && "border-red-500"} w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange("step1", "email", e.target.value);
                                handleContactInfoErrorChange("email", false);
                            }}
                        />
                    </div>
                    <div className="w-[100%]">
                        <FormInput
                            label="Role in Company"
                            placeholder="Finance Officer"
                            value={contactInfo.step1.company_role}
                            className={`${contactInfoError.company_role && "border-red-500"} w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange("step1", "company_role", e.target.value);
                                handleContactInfoErrorChange("company_role", false);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default Stepone