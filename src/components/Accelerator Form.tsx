"use client"

import React, { useState } from 'react'
import Image from "next/image";
import FormInput from './FormInput';
import Stepone from './Step-one';
import Steptwo from './Step-two';
import Stepthree from './Step-three';
import StepFour from './Step-four';
import StepFive from './Step-five';
import Stepsix from './Step-six';
import Stepseven from './Step-seven';

const AcceleratorForm = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [contactInfo, setContactInfo] = useState({
        step1: {
            first_name: "",
            last_name: "",
            address: "",
            telephone: "",
            email: "",
            company_role: ""
        },
        step2: {
            company_name: "",
            country_of_incorporation: "",
            office_address: "",
            country_of_effective_activity: "",
            website: "",
            office_telephone: "",
            company_mail: "",
            fax: "",
            date_of_registration: "",
            year_operation_began: "",
            structure_legal_status_of_organization: "",
            industry_sector: "",
            company_stage: "",
            product_service_provided: ""
        },
        step3: {
            ownership_structure: "",
            number_of_cofunders: "",
            board_of_directors: false,
            full_time_male_employees: "",
            full_time_female_employees: "",
            part_time_employees: "",
            prev_in_accelerator_programme: false,
            why_join_programme: ""
        },
        step4: {
            main_growth: "",
            primary_objective: ""
        },
        step5: {
            year_last_audited: "",
            provided_copy_of_audited_accounts: false,
            total_usd_revenue: "",
            raised_external_funding: false,
            seeking_to_raise_external_funding: "",
            type_of_external_funding: "",
            intended_financing_for: ""
        },
        step6: {
            milestones_achieved: "",
            growth_and_strategies: ""
        },
        step7: {
            first_learn: "",
            network_of_entrepreneurs: ""
        }
    });
    

    const [contactInfoError, setContactInfoError] = useState({
        first_name: false,
        last_name: false,
        address: false,
        telephone: false,
        email: false,
        company_role: false,

        company_name: false,
        country_of_incorporation: false,
        office_address: false,
        country_of_effective_activity: false,
        website: false,
        office_telephone: false,
        company_mail: false,
        fax: false,
        date_of_registration: false,
        year_operation_began: false,
        structure_legal_status_of_organization: false,
        industry_sector: false,
        company_stage: false,
        product_service_provided: false,

        ownership_structure: false,
        number_of_cofunders: false,
        board_of_directors: false,
        full_time_male_employees: false,
        full_time_female_employees: false,
        part_time_employees: false,
        prev_in_accelerator_programme: false,
        why_join_programme: false,

        main_growth: false,
        primary_objective: false,

        year_last_audited: false,
        provided_copy_of_audited_accounts: false,
        total_usd_revenue: false,
        raised_external_funding: false,
        seeking_to_raise_external_funding: false,
        type_of_external_funding: false,
        intended_financing_for: false,

        milestones_achieved: false,
        growth_and_strategies: false,

        first_learn: false,
        network_of_entrepreneurs: false
    });

    function handleContactInfoChange(step: any, key: any, value: any) {
        setContactInfo((prevState: any) => ({
            ...prevState,
            [step]: {
                ...prevState[step],
                [key]: value
            }
        }));
    }
    
    const handleContactInfoErrorChange = (key: any, value: any) => {
        setContactInfoError(prevEvent => ({
            ...prevEvent,
            [key]: value,
        }));
    };

    const createFormData = (formData: any) => {
        const fd = new FormData();
    
        Object.keys(formData).forEach(step => {
            Object.keys(formData[step]).forEach(key => {
                fd.append(`${step}.${key}`, formData[step][key]);
            });
        });
    
        return fd;
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log(contactInfo)
    }

    const validateStep = (step: number) => {
        switch (step) {
            case 1:
                const stepOneErrors = [
                    { field: 'first_name', condition: contactInfo.step1.first_name.length < 1 },
                    { field: 'last_name', condition: contactInfo.step1.last_name.length < 1 },
                    { field: 'address', condition: contactInfo.step1.address.length < 1 },
                    { field: 'telephone', condition: contactInfo.step1.telephone.length < 1 },
                    { field: 'email', condition: contactInfo.step1.email.length < 1 },
                    { field: 'company_role', condition: contactInfo.step1.company_role.length < 1 },
                ];

                const hasStepOneErrors = stepOneErrors.some(error => error.condition);

                if (hasStepOneErrors) {
                    stepOneErrors.forEach(error => handleContactInfoErrorChange(error.field, error.condition));
                    setErrorMessage("Please fill all fields");
                    return;
                } else {
                    setStep(prev => Math.min(prev + 1, 7));
                    setErrorMessage("");
                    stepOneErrors.forEach(error => handleContactInfoErrorChange(error.field, false));
                }
                break;

            case 2:
                const stepTwoErrors = [
                    { field: 'company_name', condition: contactInfo.step2.company_name.length < 1 },
                    { field: 'country_of_incorporation', condition: contactInfo.step2.country_of_incorporation.length < 1 },
                    { field: 'office_address', condition: contactInfo.step2.office_address.length < 1 },
                    { field: 'country_of_effective_activity', condition: contactInfo.step2.country_of_effective_activity.length < 1 },
                    { field: 'website', condition: contactInfo.step2.website.length < 1 },
                    { field: 'office_telephone', condition: contactInfo.step2.office_telephone.length < 1 },
                    { field: 'company_mail', condition: contactInfo.step2.company_mail.length < 1 },
                    { field: 'fax', condition: contactInfo.step2.fax.length < 1 },
                    { field: 'date_of_registration', condition: contactInfo.step2.date_of_registration.length < 1 },
                    { field: 'year_operation_began', condition: contactInfo.step2.year_operation_began.length < 1 },
                    { field: 'structure_legal_status_of_organization', condition: contactInfo.step2.structure_legal_status_of_organization.length < 1 },
                    { field: 'industry_sector', condition: contactInfo.step2.industry_sector.length < 1 },
                    { field: 'company_stage', condition: contactInfo.step2.company_stage.length < 1 },
                    { field: 'product_service_provided', condition: contactInfo.step2.product_service_provided.length < 1 },
                ];

                const hasStepTwoErrors = stepTwoErrors.some(error => error.condition);

                if (hasStepTwoErrors) {
                    stepTwoErrors.forEach(error => {
                        handleContactInfoErrorChange(error.field, error.condition)
                        console.log(error.field)
                    });
                    setErrorMessage("Please fill all fields");
                    return;
                } else {
                    setStep(prev => Math.min(prev + 1, 7));
                    setErrorMessage("");
                    stepTwoErrors.forEach(error => handleContactInfoErrorChange(error.field, false));
                }
                break;

            case 3:
                const stepThreeErrors = [
                    { field: 'ownership_structure', condition: contactInfo.step3.ownership_structure.length < 1 },
                    { field: 'number_of_cofunders', condition: contactInfo.step3.number_of_cofunders.length < 1 },
                    { field: 'full_time_male_employees', condition: contactInfo.step3.full_time_male_employees.length < 1 },
                    { field: 'full_time_female_employees', condition: contactInfo.step3.full_time_female_employees.length < 1 },
                    { field: 'part_time_employees', condition: contactInfo.step3.part_time_employees.length < 1 },
                    { field: 'why_join_programme', condition: contactInfo.step3.why_join_programme.length < 1 },
                ];


                const hasStepThreeErrors = stepThreeErrors.some(error => error.condition);

                if (hasStepThreeErrors) {
                    stepThreeErrors.forEach(error => {
                        handleContactInfoErrorChange(error.field, error.condition)
                        console.log(error.field)
                    });
                    setErrorMessage("Please fill all fields");
                    return;
                } else {
                    setStep(prev => Math.min(prev + 1, 7));
                    setErrorMessage("");
                    stepThreeErrors.forEach(error => handleContactInfoErrorChange(error.field, false));
                }
                break;

            case 4:
                const stepFourErrors = [
                    { field: 'main_growth', condition: contactInfo.step4.main_growth.length < 1 },
                    { field: 'primary_objective', condition: contactInfo.step4.primary_objective.length < 1 },
                ];


                const hasStepFourErrors = stepFourErrors.some(error => error.condition);

                if (hasStepFourErrors) {
                    stepFourErrors.forEach(error => {
                        handleContactInfoErrorChange(error.field, error.condition)
                        console.log(error.field)
                    });
                    setErrorMessage("Please fill all fields");
                    return;
                } else {
                    setStep(prev => Math.min(prev + 1, 7));
                    setErrorMessage("");
                    stepFourErrors.forEach(error => handleContactInfoErrorChange(error.field, false));
                }
                break;

            case 5:
                const stepFiveErrors = [
                    { field: 'year_last_audited', condition: contactInfo.step5.year_last_audited.length < 1 },
                    { field: 'total_usd_revenue', condition: contactInfo.step5.total_usd_revenue.length < 1 },
                    { field: 'seeking_to_raise_external_funding', condition: contactInfo.step5.seeking_to_raise_external_funding.length < 1 },
                    { field: 'type_of_external_funding', condition: contactInfo.step5.type_of_external_funding.length < 1 },
                    { field: 'intended_financing_for', condition: contactInfo.step5.intended_financing_for.length < 1 },
                ];


                const hasStepFiveErrors = stepFiveErrors.some(error => error.condition);

                if (hasStepFiveErrors) {
                    stepFiveErrors.forEach(error => {
                        handleContactInfoErrorChange(error.field, error.condition)
                        console.log(error.field)
                    });
                    setErrorMessage("Please fill all fields");
                    return;
                } else {
                    setStep(prev => Math.min(prev + 1, 7));
                    setErrorMessage("");
                    stepFiveErrors.forEach(error => handleContactInfoErrorChange(error.field, false));
                }
                break;


            case 6:
                const stepSixErrors = [
                    { field: 'milestones_achieved', condition: contactInfo.step6.milestones_achieved.length < 1 },
                    { field: 'growth_and_strategies', condition: contactInfo.step6.growth_and_strategies.length < 1 },
                ];


                const hasStepSixErrors = stepSixErrors.some(error => error.condition);

                if (hasStepSixErrors) {
                    stepSixErrors.forEach(error => {
                        handleContactInfoErrorChange(error.field, error.condition)
                        console.log(error.field)
                    });
                    setErrorMessage("Please fill all fields");
                    return;
                } else {
                    setStep(prev => Math.min(prev + 1, 7));
                    setErrorMessage("");
                    stepSixErrors.forEach(error => handleContactInfoErrorChange(error.field, false));
                }
                break;

            case 7:
                const stepSevenErrors = [
                    { field: 'network_of_entrepreneurs', condition: contactInfo.step7.network_of_entrepreneurs.length < 1 },
                    { field: 'first_learn', condition: contactInfo.step7.first_learn.length < 1 },
                ];


                const hasStepSevenErrors = stepSevenErrors.some(error => error.condition);

                if (hasStepSevenErrors) {
                    stepSevenErrors.forEach(error => {
                        handleContactInfoErrorChange(error.field, error.condition)
                        console.log(error.field)
                    });
                    setErrorMessage("Please fill all fields");
                    return;
                } else {
                    setStep(prev => Math.min(prev + 1, 7));
                    setErrorMessage("");
                    stepSevenErrors.forEach(error => handleContactInfoErrorChange(error.field, false));
                }
                break;

            default:
                // For steps other than 1 and 2
                setStep(prev => Math.min(prev + 1, 7));
                setErrorMessage("");
                break;
        }
    };



    const nextStep = () => {
        validateStep(step)
    };

    const prevStep = () => {
        setStep(prev => Math.max(prev - 1, 1));
    };

    return (
        <div className='pt-[54px] '>
            <div>
                <Image
                    src={`/assets/svg/accelerator/formtracker${step}.svg`}
                    height={40}
                    width={1043}
                    alt={`Step ${step} Tracker`}
                />
                <div className="py-10">
                    <p className="text-redish-20 mb-2">Step {step}/7</p>
                    {step === 1 && <Stepone
                        contactInfo={contactInfo}
                        contactInfoError={contactInfoError}
                        handleContactInfoChange={handleContactInfoChange}
                        handleContactInfoErrorChange={handleContactInfoErrorChange}
                    />}
                    {step === 2 && <Steptwo
                        contactInfo={contactInfo}
                        contactInfoError={contactInfoError}
                        handleContactInfoChange={handleContactInfoChange}
                        handleContactInfoErrorChange={handleContactInfoErrorChange}
                    />}
                    {step === 3 && <Stepthree
                        contactInfo={contactInfo}
                        contactInfoError={contactInfoError}
                        handleContactInfoChange={handleContactInfoChange}
                        handleContactInfoErrorChange={handleContactInfoErrorChange}
                    />}
                    {step === 4 && <StepFour
                        contactInfo={contactInfo}
                        contactInfoError={contactInfoError}
                        handleContactInfoChange={handleContactInfoChange}
                        handleContactInfoErrorChange={handleContactInfoErrorChange}
                    />}
                    {step === 5 && <StepFive
                        contactInfo={contactInfo}
                        contactInfoError={contactInfoError}
                        handleContactInfoChange={handleContactInfoChange}
                        handleContactInfoErrorChange={handleContactInfoErrorChange}
                    />}
                    {step === 6 && <Stepsix
                        contactInfo={contactInfo}
                        contactInfoError={contactInfoError}
                        handleContactInfoChange={handleContactInfoChange}
                        handleContactInfoErrorChange={handleContactInfoErrorChange}
                    />}
                    {step === 7 && <Stepseven
                        contactInfo={contactInfo}
                        contactInfoError={contactInfoError}
                        handleContactInfoChange={handleContactInfoChange}
                        handleContactInfoErrorChange={handleContactInfoErrorChange}
                    />}
                </div>
                {errorMessage !== "" && (
                    <div className="text-redish-20">
                        {errorMessage}
                    </div>
                )}
                {successMessage !== "" && (
                    <div className="text-green-500 mb-3">
                        {successMessage}
                    </div>
                )}
                <div className="flex justify-end gap-3 mt-1">
                    {step < 7 && (
                        <button
                            type="button"
                            onClick={nextStep}
                            className="bg-redish-20 text-white py-4 px-14 rounded-full"
                        >
                            Next
                        </button>
                    )}
                    {step === 7 && (
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="bg-redish-20 text-white py-4 px-5 rounded-full"
                        >
                            {isSubmitting ? "Submitting..." : "Submit Application"}
                        </button>
                    )}
                    {step > 1 && (
                        <button
                            type="button"
                            onClick={prevStep}
                            className="bg-pinkish-10 text-redish-20 py-4 px-12 rounded-full"
                        >
                            Previous
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AcceleratorForm