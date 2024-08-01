import React from 'react'
import FormInput from './FormInput';

interface ISteps {
    handleContactInfoErrorChange: any
    handleContactInfoChange: any
    contactInfoError: any
    contactInfo: any
}

const Stepthree = ({ handleContactInfoErrorChange, handleContactInfoChange, contactInfoError, contactInfo }: ISteps) => {
    return (
        <div><div>
            <h2 className="text-4xl font-semibold mb-2">Team and Motivation</h2>
            <p className="text-greyish-10 mb-6">
                Please provide Team & Motivation information for your company:
            </p>
            <div className='flex flex-col gap-[20px]'>
                <div className='flex justify-between gap-[10px] sm:gap-[40px]'>
                    <div className="w-[100%]">
                        <FormInput
                            label="Describe the ownership structure of the company i.e. names of shareholders, number/percentage of shares owned by each shareholder"
                            placeholder=" Provide the ownership structure of the company, detailing the names of shareholders and the number/percentage of shares owned by each"
                            value={contactInfo.step3.ownership_structure}
                            className={`${contactInfoError.ownership_structure && "border-red-500"
                                } w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange("step3", "ownership_structure", e.target.value);
                                handleContactInfoErrorChange("ownership_structure", false);
                            }}
                        />
                    </div>
                </div>
                <div className='flex justify-between gap-[10px] sm:gap-[40px]'>
                    <div className="w-[100%]">
                        <FormInput
                            label="Number of co-founders (please do not include non-active co-owners/directors/”sleeping partners”). Provide full names of each co-founder"
                            placeholder="Enter the number of active co-founders and provide the full names of each co-founder"
                            value={contactInfo.step3.number_of_cofunders}
                            className={`${contactInfoError.number_of_cofunders && "border-red-500"
                                } w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange("step3", "number_of_cofunders", e.target.value);
                                handleContactInfoErrorChange("number_of_cofunders", false);
                            }}
                        />
                    </div>
                </div>
                <div>
                    <label className="pb-[10px]">
                        Does the company have a board of directors?
                    </label>
                    <div className='pt-[10px] flex flex-col gap-[5px]'>
                        <div className='flex gap-[10px] cursor-pointer' onClick={() => handleContactInfoChange("step3", "board_of_directors", true)}>
                            <p className={`border ${contactInfo.step3.board_of_directors ? "bg-redish-20" : "border-black"} w-[20px] h-[20px] rounded-full`}></p>
                            <p>Yes</p>
                        </div>
                        <div className='flex gap-[10px] cursor-pointer' onClick={() => handleContactInfoChange("step3", "board_of_directors", false)}>
                            <p className={`border ${!contactInfo.step3.board_of_directors ? "bg-redish-20" : "border-black"} w-[20px] h-[20px] rounded-full`}></p>
                            <p>No</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between gap-[10px] sm:gap-[40px]'>
                    <div className="w-[100%]">
                        <FormInput
                            label="Number of full time employees (Male)"
                            placeholder="10"
                            value={contactInfo.step3.full_time_male_employees}
                            className={`${contactInfoError.full_time_male_employees && "border-red-500"
                                } w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange("step3", "full_time_male_employees", e.target.value);
                                handleContactInfoErrorChange("full_time_male_employees", false);
                            }}
                        />
                    </div>
                    <div className="w-[100%]">
                        <FormInput
                            label="Number of full time employees (Female)"
                            placeholder="10"
                            value={contactInfo.step3.full_time_female_employees}
                            className={`${contactInfoError.full_time_female_employees && "border-red-500"
                                } w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange("step3", "full_time_female_employees", e.target.value);
                                handleContactInfoErrorChange("full_time_female_employees", false);
                            }}
                        />
                    </div>
                    <div className="w-[100%]">
                        <FormInput
                            label="Number of part-time employees"
                            placeholder="10"
                            value={contactInfo.step3.part_time_employees}
                            className={`${contactInfoError.part_time_employees && "border-red-500"
                                } w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange("step3", "part_time_employees", e.target.value);
                                handleContactInfoErrorChange("part_time_employees", false);
                            }}
                        />
                    </div>
                </div>
                <div>
                    <label className="pb-[10px]">
                    Has the company previously participated in any accelerator programme?
                    </label>
                    <div className='pt-[10px] flex flex-col gap-[5px]'>
                        <div className='flex gap-[10px] cursor-pointer' onClick={() => handleContactInfoChange("step3", "prev_in_accelerator_programme", true)}>
                            <p className={`border ${contactInfo.step3.prev_in_accelerator_programme ? "bg-redish-20  w-[22px] h-[22px]" : "border-black  w-[20px] h-[20px]"} rounded-full`}></p>
                            <p>Yes</p>
                        </div>
                        <div className='flex gap-[10px] cursor-pointer' onClick={() => handleContactInfoChange("step3", "prev_in_accelerator_programme", false)}>
                            <p className={`border ${!contactInfo.step3.prev_in_accelerator_programme ? "bg-redish-20  w-[22px] h-[22px]" : "border-black  w-[20px] h-[20px]"} rounded-full`}></p>
                            <p>No</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between gap-[10px] sm:gap-[40px]'>
                    <div className="w-[100%]">
                        <FormInput
                            label="Why do you want to join this programme?"
                            placeholder="Explain your motivation for joining this program and how it aligns with your business goals"
                            value={contactInfo.step3.why_join_programme}
                            className={`${contactInfoError.why_join_programme && "border-red-500"
                                } w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange("step3", "why_join_programme", e.target.value);
                                handleContactInfoErrorChange("why_join_programme", false);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default Stepthree