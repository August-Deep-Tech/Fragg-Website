import React from 'react'
import FormInput from './FormInput';
import Dropdown from './Dropdown';

interface ISteps {
    handleContactInfoErrorChange: any
    handleContactInfoChange: any
    contactInfoError: any
    contactInfo: any
}

const Steptwo = ({ handleContactInfoErrorChange, handleContactInfoChange, contactInfoError, contactInfo }: ISteps) => {
    return (
        <div><div>
            <h2 className="text-4xl font-semibold mb-2">Contact Information</h2>
            <p className="text-greyish-10 mb-6">
                Please provide background information on the applicant company
            </p>
            <div className='flex flex-col gap-[20px]'>
                <div className='flex justify-between gap-[10px] sm:gap-[40px]'>
                    <div className="w-[100%]">
                        <FormInput
                            label="Company Name"
                            placeholder="Surance Inc."
                            value={contactInfo.step1.company_name}
                            className={`${contactInfoError.company_name && "border-red-500"
                                } w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange("step2", "company_name", e.target.value);
                                handleContactInfoErrorChange("company_name", false);
                            }}
                        />
                    </div>
                    <div className="w-[100%]">
                        <Dropdown
                            label="Country of Incorporation"
                            options={Country}
                            value={contactInfo.step1.country_of_incorporation}
                            onChange={e => {
                                handleContactInfoChange("step2", 
                                    "country_of_incorporation",
                                    e.target.value
                                );
                                handleContactInfoErrorChange("country_of_incorporation", false);
                            }}
                            defaultValue="Please select an option"
                            id="example-dropdown"
                            name=""
                            className={`${contactInfoError.country_of_incorporation && "border-red-500"
                                } text-greyish-10 font-semibold bg-transparent w-[100%]`}
                        />
                    </div>
                </div>
                <div className='flex justify-between gap-[10px] sm:gap-[40px]'>
                    <div className="w-[100%]">
                        <FormInput
                            label="Office Address"
                            placeholder="1234 Victoria Island Road, Lagos, Nigeria"
                            value={contactInfo.step1.office_address}
                            className={`${contactInfoError.office_address && "border-red-500"
                                } w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange("step2", "office_address", e.target.value);
                                handleContactInfoErrorChange("office_address", false);
                            }}
                        />
                    </div>
                    <div className="w-[100%]">
                        <Dropdown
                            label="Country of Effective Activity"
                            options={Country}
                            value={contactInfo.step1.country_of_effective_activity}
                            onChange={e => {
                                handleContactInfoChange("step2", 
                                    "country_of_effective_activity",
                                    e.target.value
                                );
                                handleContactInfoErrorChange("country_of_effective_activity", false);
                            }}
                            defaultValue="Please select an option"
                            id="example-dropdown"
                            name=""
                            className={`${contactInfoError.country_of_effective_activity && "border-red-500"
                                } text-greyish-10 font-semibold bg-transparent w-[100%]`}
                        />
                    </div>
                </div>
                <div className='flex justify-between gap-[10px] sm:gap-[40px]'>
                    <div className="w-[100%]">
                        <FormInput
                            label="Website"
                            placeholder="www.surance.com"
                            value={contactInfo.step1.website}
                            className={`${contactInfoError.website && "border-red-500"
                                } w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange("step2", "website", e.target.value);
                                handleContactInfoErrorChange("website", false);
                            }}
                        />
                    </div>
                    <div className="w-[100%]">
                        <FormInput
                            label="Office Telephone (with country code e.g +234)"
                            placeholder="+234 812 433 8483"
                            value={contactInfo.step1.office_telephone}
                            className={`${contactInfoError.office_telephone && "border-red-500"
                                } w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange("step2", "office_telephone", e.target.value);
                                handleContactInfoErrorChange("office_telephone", false);
                            }}
                        />
                    </div>
                </div>
                <div className='flex justify-between gap-[10px] sm:gap-[40px]'>
                    <div className="w-[100%]">
                        <FormInput
                            label="Company Email"
                            placeholder="contact@surance.com"
                            value={contactInfo.step1.company_mail}
                            className={`${contactInfoError.company_mail && "border-red-500"
                                } w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange("step2", "company_mail", e.target.value);
                                handleContactInfoErrorChange("company_mail", false);
                            }}
                        />
                    </div>
                    <div className="w-[100%]">
                        <FormInput
                            label="Fax"
                            placeholder="+234 812 433 8483"
                            value={contactInfo.step1.fax}
                            className={`${contactInfoError.fax && "border-red-500"
                                } w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange("step2", "fax", e.target.value);
                                handleContactInfoErrorChange("fax", false);
                            }}
                        />
                    </div>
                </div>
                <div className='flex justify-between gap-[10px] sm:gap-[40px]'>
                    <div className="w-[100%]">
                        <FormInput
                            type='date'
                            label="Date of Registration"
                            placeholder="1"
                            value={contactInfo.step1.date_of_registration}
                            className={`${contactInfoError.date_of_registration && "border-red-500"
                                } w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange("step2", "date_of_registration", e.target.value);
                                handleContactInfoErrorChange("date_of_registration", false);
                            }}
                        />
                    </div>
                    <div className="w-[100%]">
                        <FormInput
                            label="Year Operation Began"
                            placeholder="2000"
                            value={contactInfo.step1.year_operation_began}
                            className={`${contactInfoError.year_operation_began && "border-red-500"
                                } w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange("step2", "year_operation_began", e.target.value);
                                handleContactInfoErrorChange("year_operation_began", false);
                            }}
                        />
                    </div>
                </div>
                <div className='flex mb-[20px] justify-between gap-[10px] sm:gap-[40px]'>
                    <div className="w-[100%]">
                        <Dropdown
                            label="Structure / legal status of organization "
                            options={structureLegalStatus}
                            value={contactInfo.step1.structure_legal_status_of_organization}
                            onChange={e => {
                                handleContactInfoChange("step2", 
                                    "structure_legal_status_of_organization",
                                    e.target.value
                                );
                                handleContactInfoErrorChange("structure_legal_status_of_organization", false);
                            }}
                            defaultValue="Select your organizations structure"
                            id="example-dropdown"
                            
                            name=""
                            className={`${contactInfoError.structure_legal_status_of_organization && "border-red-500"
                                } mb-[20px] text-[#757575] font-semibold bg-transparent w-[100%]`}
                        />

                        <Dropdown
                            label="What stage is the company in?"
                            options={companyStage}
                            value={contactInfo.step1.company_stage}
                            onChange={e => {
                                handleContactInfoChange("step2", 
                                    "company_stage",
                                    e.target.value
                                );
                                handleContactInfoErrorChange("company_stage", false);
                            }}
                            defaultValue="Select your organization’s growth stage"
                            id="example-dropdown"
                            name=""
                            className={`${contactInfoError.company_stage && "border-red-500"
                                } text-[#757575] font-semibold bg-transparent w-[100%]`}
                        />
                    </div>
                    <div className="w-[100%]">
                        <Dropdown
                            label="Industry / Sector"
                            options={industrySector}
                            value={contactInfo.step1.industry_sector}
                            onChange={e => {
                                handleContactInfoChange("step2", 
                                    "industry_sector",
                                    e.target.value
                                );
                                handleContactInfoErrorChange("industry_sector", false);
                            }}
                            defaultValue="Select your organization’s sector"
                            id="example-dropdown"
                            name=""
                            className={`${contactInfoError.industry_sector && "border-red-500"
                                } text-[#757575] font-semibold bg-transparent w-[100%]`}
                        />
                    </div>
                </div>
                <div className='flex flex-col justify-between gap-[10px] sm:gap-[40px]'>
                    <p className='text-[#757575]'>Please provide a brief company description in the fields below:</p>
                    <div className="w-[100%]">
                        <FormInput
                            type='text'
                            label="Product / Service Provided"
                            placeholder="Describe your product or service"
                            value={contactInfo.product_service_provided}
                            className={`${contactInfoError.product_service_provided && "border-red-500"
                                } w-[100%]`}
                            onChange={e => {
                                handleContactInfoChange("step2", "product_service_provided", e.target.value);
                                handleContactInfoErrorChange("product_service_provided", false);
                            }}
                        />
                    </div>
                    </div>
            </div>
        </div></div>
    )
}

export default Steptwo

const structureLegalStatus = [
    { label: 'Sole Proprietorship', value: 'sole_proprietorship' },
    { label: 'Partnership', value: 'partnership' },
    { label: 'Limited Liability Company (LLC)', value: 'llc' },
    { label: 'Non-profit Organization', value: 'non_profit_organization' },
    { label: 'Government Agency', value: 'government_agency' },
    { label: 'Public Sector Organization', value: 'public_sector_organization' },
    { label: 'Private Sector Organization', value: 'private_sector_organization' },
    { label: 'Other (please specify)', value: 'other' },
  ];
  

  const industrySector = [
    { label: 'Inclusive Finance', value: 'inclusive_finance' },
    { label: 'Agriculture', value: 'agriculture' },
    { label: 'Health', value: 'health' },
    { label: 'Affordable Housing', value: 'affordable_housing' },
    { label: 'Education', value: 'education' },
    { label: 'Climate Finance', value: 'climate_finance' },
  ];
  
  const companyStage = [
    { label: 'Post - Profit (established, making a profit)', value: 'post_profit' },
    { label: 'Post - Revenue (established, has sales)', value: 'post_revenue' },
    { label: 'Growth-Stage (operating profitably for 2+ years, growth potential)', value: 'growth_stage' },
  ];
  const Country = [
    { value: "Afghanistan", label: "Afghanistan" },
    { value: "Albania", label: "Albania" },
    { value: "Algeria", label: "Algeria" },
    { value: "Andorra", label: "Andorra" },
    { value: "Angola", label: "Angola" },
    { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
    { value: "Argentina", label: "Argentina" },
    { value: "Armenia", label: "Armenia" },
    { value: "Australia", label: "Australia" },
    { value: "Austria", label: "Austria" },
    { value: "Azerbaijan", label: "Azerbaijan" },
    { value: "Bahamas", label: "Bahamas" },
    { value: "Bahrain", label: "Bahrain" },
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "Barbados", label: "Barbados" },
    { value: "Belarus", label: "Belarus" },
    { value: "Belgium", label: "Belgium" },
    { value: "Belize", label: "Belize" },
    { value: "Benin", label: "Benin" },
    { value: "Bhutan", label: "Bhutan" },
    { value: "Bolivia", label: "Bolivia" },
    { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
    { value: "Botswana", label: "Botswana" },
    { value: "Brazil", label: "Brazil" },
    { value: "Brunei", label: "Brunei" },
    { value: "Bulgaria", label: "Bulgaria" },
    { value: "Burkina Faso", label: "Burkina Faso" },
    { value: "Burundi", label: "Burundi" },
    { value: "Cabo Verde", label: "Cabo Verde" },
    { value: "Cambodia", label: "Cambodia" },
    { value: "Cameroon", label: "Cameroon" },
    { value: "Canada", label: "Canada" },
    { value: "Central African Republic", label: "Central African Republic" },
    { value: "Chad", label: "Chad" },
    { value: "Chile", label: "Chile" },
    { value: "China", label: "China" },
    { value: "Colombia", label: "Colombia" },
    { value: "Comoros", label: "Comoros" },
    { value: "Congo, Democratic Republic of the", label: "Congo, Democratic Republic of the" },
    { value: "Congo, Republic of the", label: "Congo, Republic of the" },
    { value: "Costa Rica", label: "Costa Rica" },
    { value: "Croatia", label: "Croatia" },
    { value: "Cuba", label: "Cuba" },
    { value: "Cyprus", label: "Cyprus" },
    { value: "Czech Republic", label: "Czech Republic" },
    { value: "Denmark", label: "Denmark" },
    { value: "Djibouti", label: "Djibouti" },
    { value: "Dominica", label: "Dominica" },
    { value: "Dominican Republic", label: "Dominican Republic" },
    { value: "Ecuador", label: "Ecuador" },
    { value: "Egypt", label: "Egypt" },
    { value: "El Salvador", label: "El Salvador" },
    { value: "Equatorial Guinea", label: "Equatorial Guinea" },
    { value: "Eritrea", label: "Eritrea" },
    { value: "Estonia", label: "Estonia" },
    { value: "Eswatini", label: "Eswatini" },
    { value: "Ethiopia", label: "Ethiopia" },
    { value: "Fiji", label: "Fiji" },
    { value: "Finland", label: "Finland" },
    { value: "France", label: "France" },
    { value: "Gabon", label: "Gabon" },
    { value: "Gambia", label: "Gambia" },
    { value: "Georgia", label: "Georgia" },
    { value: "Germany", label: "Germany" },
    { value: "Ghana", label: "Ghana" },
    { value: "Greece", label: "Greece" },
    { value: "Grenada", label: "Grenada" },
    { value: "Guatemala", label: "Guatemala" },
    { value: "Guinea", label: "Guinea" },
    { value: "Guinea-Bissau", label: "Guinea-Bissau" },
    { value: "Guyana", label: "Guyana" },
    { value: "Haiti", label: "Haiti" },
    { value: "Honduras", label: "Honduras" },
    { value: "Hungary", label: "Hungary" },
    { value: "Iceland", label: "Iceland" },
    { value: "India", label: "India" },
    { value: "Indonesia", label: "Indonesia" },
    { value: "Iran", label: "Iran" },
    { value: "Iraq", label: "Iraq" },
    { value: "Ireland", label: "Ireland" },
    { value: "Israel", label: "Israel" },
    { value: "Italy", label: "Italy" },
    { value: "Jamaica", label: "Jamaica" },
    { value: "Japan", label: "Japan" },
    { value: "Jordan", label: "Jordan" },
    { value: "Kazakhstan", label: "Kazakhstan" },
    { value: "Kenya", label: "Kenya" },
    { value: "Kiribati", label: "Kiribati" },
    { value: "Korea, North", label: "Korea, North" },
    { value: "Korea, South", label: "Korea, South" },
    { value: "Kosovo", label: "Kosovo" },
    { value: "Kuwait", label: "Kuwait" },
    { value: "Kyrgyzstan", label: "Kyrgyzstan" },
    { value: "Laos", label: "Laos" },
    { value: "Latvia", label: "Latvia" },
    { value: "Lebanon", label: "Lebanon" },
    { value: "Lesotho", label: "Lesotho" },
    { value: "Liberia", label: "Liberia" },
    { value: "Libya", label: "Libya" },
    { value: "Liechtenstein", label: "Liechtenstein" },
    { value: "Lithuania", label: "Lithuania" },
    { value: "Luxembourg", label: "Luxembourg" },
    { value: "Madagascar", label: "Madagascar" },
    { value: "Malawi", label: "Malawi" },
    { value: "Malaysia", label: "Malaysia" },
    { value: "Maldives", label: "Maldives" },
    { value: "Mali", label: "Mali" },
    { value: "Malta", label: "Malta" },
    { value: "Marshall Islands", label: "Marshall Islands" },
    { value: "Mauritania", label: "Mauritania" },
    { value: "Mauritius", label: "Mauritius" },
    { value: "Mexico", label: "Mexico" },
    { value: "Micronesia", label: "Micronesia" },
    { value: "Moldova", label: "Moldova" },
    { value: "Monaco", label: "Monaco" },
    { value: "Mongolia", label: "Mongolia" },
    { value: "Montenegro", label: "Montenegro" },
    { value: "Morocco", label: "Morocco" },
    { value: "Mozambique", label: "Mozambique" },
    { value: "Myanmar (Burma)", label: "Myanmar (Burma)" },
    { value: "Namibia", label: "Namibia" },
    { value: "Nauru", label: "Nauru" },
    { value: "Nepal", label: "Nepal" },
    { value: "Netherlands", label: "Netherlands" },
    { value: "New Zealand", label: "New Zealand" },
    { value: "Nicaragua", label: "Nicaragua" },
    { value: "Niger", label: "Niger" },
    { value: "Nigeria", label: "Nigeria" },
    { value: "North Macedonia", label: "North Macedonia" },
    { value: "Norway", label: "Norway" },
    { value: "Oman", label: "Oman" },
    { value: "Pakistan", label: "Pakistan" },
    { value: "Palau", label: "Palau" },
    { value: "Palestine", label: "Palestine" },
    { value: "Panama", label: "Panama" },
    { value: "Papua New Guinea", label: "Papua New Guinea" },
    { value: "Paraguay", label: "Paraguay" },
    { value: "Peru", label: "Peru" },
    { value: "Philippines", label: "Philippines" },
    { value: "Poland", label: "Poland" },
    { value: "Portugal", label: "Portugal" },
    { value: "Qatar", label: "Qatar" },
    { value: "Romania", label: "Romania" },
    { value: "Russia", label: "Russia" },
    { value: "Rwanda", label: "Rwanda" },
    { value: "Saint Kitts and Nevis", label: "Saint Kitts and Nevis" },
    { value: "Saint Lucia", label: "Saint Lucia" },
    { value: "Saint Vincent and the Grenadines", label: "Saint Vincent and the Grenadines" },
    { value: "Samoa", label: "Samoa" },
    { value: "San Marino", label: "San Marino" },
    { value: "Sao Tome and Principe", label: "Sao Tome and Principe" },
    { value: "Saudi Arabia", label: "Saudi Arabia" },
    { value: "Senegal", label: "Senegal" },
    { value: "Serbia", label: "Serbia" },
    { value: "Seychelles", label: "Seychelles" },
    { value: "Sierra Leone", label: "Sierra Leone" },
    { value: "Singapore", label: "Singapore" },
    { value: "Slovakia", label: "Slovakia" },
    { value: "Slovenia", label: "Slovenia" },
    { value: "Solomon Islands", label: "Solomon Islands" },
    { value: "Somalia", label: "Somalia" },
    { value: "South Africa", label: "South Africa" },
    { value: "South Sudan", label: "South Sudan" },
    { value: "Spain", label: "Spain" },
    { value: "Sri Lanka", label: "Sri Lanka" },
    { value: "Sudan", label: "Sudan" },
    { value: "Suriname", label: "Suriname" },
    { value: "Sweden", label: "Sweden" },
    { value: "Switzerland", label: "Switzerland" },
    { value: "Syria", label: "Syria" },
    { value: "Taiwan", label: "Taiwan" },
    { value: "Tajikistan", label: "Tajikistan" },
    { value: "Tanzania", label: "Tanzania" },
    { value: "Thailand", label: "Thailand" },
    { value: "Timor-Leste", label: "Timor-Leste" },
    { value: "Togo", label: "Togo" },
    { value: "Tonga", label: "Tonga" },
    { value: "Trinidad and Tobago", label: "Trinidad and Tobago" },
    { value: "Tunisia", label: "Tunisia" },
    { value: "Turkey", label: "Turkey" },
    { value: "Turkmenistan", label: "Turkmenistan" },
    { value: "Tuvalu", label: "Tuvalu" },
    { value: "Uganda", label: "Uganda" },
    { value: "Ukraine", label: "Ukraine" },
    { value: "United Arab Emirates", label: "United Arab Emirates" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "United States", label: "United States" },
    { value: "Uruguay", label: "Uruguay" },
    { value: "Uzbekistan", label: "Uzbekistan" },
    { value: "Vanuatu", label: "Vanuatu" },
    { value: "Vatican City", label: "Vatican City" },
    { value: "Venezuela", label: "Venezuela" },
    { value: "Vietnam", label: "Vietnam" },
    { value: "Yemen", label: "Yemen" },
    { value: "Zambia", label: "Zambia" },
    { value: "Zimbabwe", label: "Zimbabwe" },
];
