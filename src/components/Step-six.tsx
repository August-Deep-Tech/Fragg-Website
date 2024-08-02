import React from 'react'
import FormInput from './FormInput';
import Dropdown from './Dropdown';

interface ISteps {
    handleContactInfoErrorChange: any
    handleContactInfoChange: any
    contactInfoError: any
    contactInfo: any
}

const Stepsix = ({ handleContactInfoErrorChange, handleContactInfoChange, contactInfoError, contactInfo }: ISteps) => {
    return (
        <div><div>
            <h2 className="text-4xl font-semibold mb-2">Achievement & Growth Goals</h2>
            <p className="text-greyish-10 mb-6">
                Please provide Achievement & Growth Goals for your company:
            </p>
            <div className='flex flex-col gap-[20px]'>
            <div className='flex justify-between gap-[10px] sm:gap-[40px]'>
                <div className="w-[100%]">
                    <FormInput
                        label="What 3 milestones did you achieve in the past 12 months?"
                        placeholder="Describe the top three milestones your company achieved in the last 12 months, including key metrics and outcomes"
                        value={contactInfo.step6.milestones_achieved}
                        className={`${contactInfoError.milestones_achieved && "border-red-500"} w-[100%]`}
                        onChange={e => {
                            handleContactInfoChange("step6", "milestones_achieved", e.target.value);
                            handleContactInfoErrorChange("milestones_achieved", false);
                        }}
                    />
                </div>
            </div>

            <div className='flex justify-between gap-[10px] sm:gap-[40px]'>
                <div className="w-[100%]">
                    <FormInput
                        label="Describe your growth plans and strategies for the next 24 months"
                        placeholder="Outline your growth plans and strategies for the next 24 months, including target markets, expansion goals, and key initiatives"
                        value={contactInfo.step6.growth_and_strategies}
                        className={`${contactInfoError.growth_and_strategies && "border-red-500"} w-[100%]`}
                        onChange={e => {
                            handleContactInfoChange("step6", "growth_and_strategies", e.target.value);
                            handleContactInfoErrorChange("growth_and_strategies", false);
                        }}
                    />
                </div>
            </div>
        </div>
        </div></div>
    )
}

export default Stepsix

