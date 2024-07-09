import { SubpageHero } from '@/components/SubpageHero'
import { BeginYourInvestment } from '@/pageSections/BeginYourInvestment';
import Image from "next/image";

const ImpactStability = () => {
    return (
        <div>
            <SubpageHero
                backgroundImageUrl={`bg-[url('/assets/webp/impactStability.webp')]`}
                breadcrumb="FINANCIAL INCLUSION"
                pageTitle="Making Long-Term Impact  <br /> where it is needed"
            />
            <div className='px-[20px] py-[60px] sm:py-[112px] xl:px-[64px]'>
                <div className="pb-[40px]">
                    <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] pb-[10px] sm:pb-[24px]">
                        Sustainability-related Disclosures
                    </h1>
                    <p className="text-greyish-10 w-[100%] text-base">
                        FRAGG-Invest is dedicated to leveraging capital for the betterment of both people and the environment. This declaration offers investors and stakeholders insight into the impact and sustainability-related aspects of FRAGG-Invest and its funds, as mandated by the regulation on sustainability-related disclosures in the financial services sector (EU/2019/2088) (hereinafter referred to as {'"'}SFDR{'"'}). The FRAGG-Invest Green and Impact Fund aligns with SFDR requirements, specifically under Article 9. As proponents of impact investing, FRAGG-Invest pursues sustainable investments and adheres transparently to SFDR disclosure obligations. Our focus lies in investing in financially sustainable enterprises that address socio-economic challenges while mitigating adverse effects on people and the environment.
                    </p>
                    <div className='pt-[24px]'>
                        <h1 className='text-base text-redish-20 font-[600]'>Sustainability Risks Integration (Article 3 SFDR)</h1>
                        <p className="text-greyish-10 w-[100%] text-base pt-[8px]">
                            With over 100 years of combined team experience concerning Fund Management, Private Equity, Fund Mobilization, SME debt & equity investments, deal origination, portfolio management and exit, and implementation of Business Development Services for SME projects,  FRAGG-Invest  GP  Sàrl has an experienced local and international team with deep knowledge of the market, culture, language, socio-political, regulatory environment, and the entire impact eco-system in the focal regions while maintaining a strong external affiliation with the international stakeholders in the impact ecosystem.
                        </p>
                    </div>
                    <div className='py-[24px]'>
                        <h1 className='text-base text-redish-20 font-[600]'>Integration of ESG risks in the remuneration policy (Article 5 SFDR)</h1>
                        <p className="text-greyish-10 w-[100%] text-base pt-[8px]">
                            In accordance with Article 5 of SFDR, FRAGG-Invest is required to outline how its remuneration policy supports the integration of sustainability risks. We achieve this by evaluating employee performance not solely on financial metric but considers several other principles such as effective risk management, interest of our clients, investors and for each other in the organization, following the code of conduct that promotes long-term sustainability and impact objectives.
                        </p>
                    </div>
                    <div>
                        <h1 className='text-base text-redish-20 font-[600]'>Article 9 disclosures</h1>
                        <p className="text-greyish-10 w-[100%] text-base pt-[8px]">
                            Our FRAGG-Invest Green and Impact fund classify under Article 9 of SFDR.
                        </p>
                    </div>

                </div>
            </div>
            <div>
                <div className="pt-[40px]">
                    <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] text-center pb-[10px] sm:pb-[24px]">
                        Sustainable Development Goals
                    </h1>
                    <p className="text-greyish-10 mx-auto text-center w-[90%] sm:w-[70%] xl:w-[70%] text-base">
                        At FRAGG Investment, we{"'"}re committed to advancing Sustainable Development Goals in line with UN guidelines.
                        Our mission is to drive positive change through responsible investment practices. Join us in shaping a brighter, sustainable future for all.
                    </p>
                </div>

                <div className='relative sustainable-goals flex justify-start items-center pl-[20px] sm:pl-[80px] mt-[80px]'>
                    <h1 className='text-[52px] lg:text-[64px] leading-[64px] lg:leading-[80px] font-[600] text-black'>
                        We work with the United Nations to <br />
                        advance <span className='text-[#069EDB]'>SDG’s</span>. This means your <br />
                        investments are always put <br />
                        into ventures that help humanity. <br />
                    </h1>
                </div>

                <div className='px-[20px] py-[80px] xl:p-[80px] flex flex-col gap-[60px] xl:gap-[120px]'>
                    <div>
                        <div className='flex justify-center'>
                            <div
                                className={`relative w-[640px] h-[200px] sm:h-[375px]`}
                            >
                                <Image
                                    src="/assets/svg/impact/Financial.svg"
                                    fill
                                    alt={"Image preview"}
                                />
                            </div>
                        </div>
                        <h1 className='text-base sm:text-2xl text-black font-[600] pt-[40px] pb-[16px]'>Financial Inclusion Investment target sectors Inclusive financial institutions/Fintech: SDGs 1, 4, 5, 9 & 17</h1>
                        <p className="text-greyish-10 w-[100%] text-base sm:text-2xl pt-[8px]">
                            Bridging the investment gap on social impact lending, SMEs and Microfinance lending – financing of businesses that are expanding access to basic services, creating basic infrastructure and creating jobs as well as financial institutions for on-lending to SMEs and MSMEs. Expand lending to unbanked women led or owned business.
                        </p>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <div
                                className={`relative w-[640px] h-[100px] sm:h-[200px]`}
                            >
                                <Image
                                    src="/assets/svg/impact/Sustainable.svg"
                                    fill
                                    alt={"Image preview"}
                                />
                            </div>
                        </div>
                        <h1 className='text-base sm:text-2xl text-black font-[600] pt-[40px] pb-[16px]'>
                        Sustainable and affordable Housing/Prop-tech: SDGs 5, 10 & 11
                            </h1>
                        <p className="text-greyish-10 w-[100%] text-base sm:text-2xl pt-[8px]">
                        Development of energy-efficient, low-income housing targeting underserved communities particularly women and first-time owners.
                        </p>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <div
                                className={`relative w-[640px] h-[100px] sm:h-[200px]`}
                            >
                                <Image
                                    src="/assets/svg/impact/Agric.svg"
                                    fill
                                    alt={"Image preview"}
                                />
                            </div>
                        </div>
                        <h1 className='text-base sm:text-2xl text-black font-[600] pt-[40px] pb-[16px]'>
                        Sustainable Agriculture and Food Security/Agri-tech : SDG 2
                            </h1>
                        <p className="text-greyish-10 w-[100%] text-base sm:text-2xl pt-[8px]">
                        Target development for enterprises in agriculture commodities and food chains especially the improvement of agricultural yield, food processing and production of organic foods.
                        </p>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <div
                                className={`relative w-[640px] h-[100px] sm:h-[200px]`}
                            >
                                <Image
                                    src="/assets/svg/impact/Affordable.svg"
                                    fill
                                    alt={"Image preview"}
                                />
                            </div>
                        </div>
                        <h1 className='text-base sm:text-2xl text-black font-[600] pt-[40px] pb-[16px]'>
                        Affordable Health Care and related Services/Health-tech: SDGs 3 & 5
                            </h1>
                        <p className="text-greyish-10 w-[100%] text-base sm:text-2xl pt-[8px]">
                        Investment into high growth, market leading startups/businesses in the health domain especially in rural health outreaches, and healthcare services to low-income households and difficult to reach regions.
                        </p>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <div
                                className={`relative w-[640px] h-[200px] sm:h-[375px]`}
                            >
                                <Image
                                    src="/assets/svg/impact/Climate.svg"
                                    fill
                                    alt={"Image preview"}
                                />
                            </div>
                        </div>
                        <h1 className='text-base sm:text-2xl text-black font-[600] pt-[40px] pb-[16px]'>
                        Climate/Environmental Finance: SDGs 7, 9, 12 & 13
                            </h1>
                        <p className="text-greyish-10 w-[100%] text-base sm:text-2xl pt-[8px]">
                        Investing in climate friendly solutions in response to increasing energy demand, advancing renewable energy solutions, valuable climate change and resource efficiency solutions to rural communities and low-income earners, bolstering energy security, through distributed clean energy transition, supporting circular economy initiatives, waste management, recycling etc.
                        </p>
                    </div>
                </div>
            </div>
            <BeginYourInvestment />
        </div>
    )
}

export default ImpactStability