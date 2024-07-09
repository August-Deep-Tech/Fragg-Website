import { SubpageHero } from '@/components/SubpageHero'
import { BeginYourInvestment } from '@/pageSections/BeginYourInvestment'
import PriorityStrategy from '@/pageSections/PriorityStrategy'
import Image from "next/image";

const InvestmentBankingSolutions = () => {
    return (
        <div>
            <SubpageHero
                backgroundImageUrl={`bg-[url('/assets/webp/investment-banking-solutions.webp')]`}
                breadcrumb="UMBRELLA FUND, LUXEMBOURG"
                pageTitle="Flexible investment <br /> solutions that scale"
            />
            <div className='px-[20px] py-[60px] xl:px-[64px]'>
                <div className="pb-[40px]">
                    <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] pb-[10px] sm:pb-[24px]">
                        A diversified approach to building wealth..
                    </h1>
                    <p className="text-greyish-10 w-[100%] text-base">
                        FRAGG Umbrella Fund offers investors a comprehensive and diversified approach to wealth accumulation. With a sophisticated structure encompassing multiple sub-funds, each managed by top-tier investment professionals, FRAGG provides unparalleled access to a wide range of investment strategies and asset classes.
                    </p>
                    <p className="text-greyish-10 w-[100%] text-base py-[24px]">
                        Whether you{'"'}re seeking growth opportunities in emerging markets, stability in traditional assets, or exposure to alternative investments, our umbrella fund delivers tailored solutions to suit your financial objectives. Backed by rigorous due diligence and a commitment to transparency, FRAGG Umbrella Fund empowers investors to navigate market complexities with confidence, maximizing returns while mitigating risks.
                    </p>
                    <p className="text-greyish-10 w-[100%] text-base">
                        Join us in harnessing the full potential of global markets and building a resilient portfolio for lasting prosperity.
                    </p>
                </div>
            </div>
            <div className={`py-[60px]`}>
                <div className="pt-[40px]">
                    <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] text-center pb-[10px] sm:pb-[24px]">
                        Asset Impact Sectors
                    </h1>
                    <p className="text-greyish-10 mx-auto text-center w-[90%] sm:w-[70%] xl:w-[70%] text-base">
                        FRAGG focuses on identifying priority areas within asset impact sectors for social and environmental impact investment, driving positive change and sustainable development
                    </p>
                </div>
                <div className="pb-[96px]">
                    <div className="flex justify-center gap-[30px] pt-[80px]">
                        <div className="flex flex-col gap-[40px] sm:flex-row justify-between w-[90%] xl:w-[80%] pb-[30px] sm:pb-0">
                            <div className="w-[100%] text-center sm:pr-[40px] xl:pr-[80px] sm:pb-[40px] xl:pb-[80px]">
                                <div
                                    className={`relative w-[40px] h-[40px] mx-auto`}
                                >
                                    <Image
                                        src="/assets/svg/about/line-chart.svg"
                                        fill
                                        alt={"Banner preview"}
                                    />
                                </div>
                                <h1 className="text-[#181818] font-[700] text-[20px] leading-5 py-[24px]">Inclusive Finance</h1>
                                <p className="text-greyish-10">Including but not limited to Microfinance/SMEs Banks, Finance Houses, Other Financial Intermediaries, Commercial Banks, Payment Solutions, and other Financial Technology Solutions and Businesses.</p>
                            </div>
                            <div className="w-[100%] text-center sm:border-l border-[#E4E4E7] sm:pl-[40px] xl:pl-[80px] sm:pb-[40px] xl:pb-[80px]">
                                <div
                                    className={`relative w-[40px] h-[40px] mx-auto`}
                                >
                                    <Image
                                        src="/assets/svg/about/wave.svg"
                                        fill
                                        alt={"Banner preview"}
                                    />
                                </div>
                                <h1 className="text-[#181818] font-[700] text-[20px] leading-5 py-[24px]">Agriculture</h1>
                                <p className="text-greyish-10">
                                    Agribusinesses including food production especially small-holder farming, food processing and storage, packaging, distribution (transportation and haulage), and wholesale/retail market (export or domestic).
                                </p>
                            </div>
                            <div className="w-[100%] text-center sm:border-l border-[#E4E4E7] sm:pl-[40px] xl:pl-[80px] sm:pb-[40px] xl:pb-[80px]">
                                <div
                                    className={`relative w-[40px] h-[40px] mx-auto`}
                                >
                                    <Image
                                        src="/assets/svg/about/health.svg"
                                        fill
                                        alt={"Banner preview"}
                                    />
                                </div>
                                <h1 className="text-[#181818] font-[700] text-[20px] leading-5 py-[24px]">Health</h1>
                                <p className="text-greyish-10">
                                    From diagnosis to treatment and core areas of health management and prevention, including general and specialized hospitals, primary health care centers, pharmaceuticals, HMOs, and Health Tech.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='hidden sm:block bg-[#E4E4E7] h-[2px] w-[85%] mx-auto'></div>
                    <div className="flex justify-center">
                        <div className="flex flex-col gap-[40px] sm:flex-row justify-between w-[90%] xl:w-[80%]">
                            <div className="w-[100%] text-center sm:pr-[40px] xl:pr-[80px] sm:pt-[40px] xl:pt-[80px]">
                                <div
                                    className={`relative w-[40px] h-[40px] mx-auto`}
                                >
                                    <Image
                                        src="/assets/svg/about/house.svg"
                                        fill
                                        alt={"Banner preview"}
                                    />
                                </div>
                                <h1 className="text-[#181818] font-[700] text-[20px] leading-5 py-[24px]">Housing</h1>
                                <p className="text-greyish-10">Housing projects that increase access to practical and viable housing especially for earners on the lower end of the spectrum. Sustainable and energy efficiency housing projects are of particular interest.</p>
                            </div>
                            <div className="w-[100%] text-center sm:border-l border-[#E4E4E7] sm:pl-[40px] xl:pl-[80px] sm:pt-[40px] xl:pt-[80px] sm:-translate-y-[1px]">
                                <div
                                    className={`relative w-[40px] h-[40px] mx-auto`}
                                >
                                    <Image
                                        src="/assets/svg/about/graduation-cap.svg"
                                        fill
                                        alt={"Banner preview"}
                                    />
                                </div>
                                <h1 className="text-[#181818] font-[700] text-[20px] leading-5 py-[24px]">Education</h1>
                                <p className="text-greyish-10">Inclusive education models with projects covering low-fee private education in preparatory, primary, secondary, tertiary, and vocational institutions, EdTech, Educational Infra and related services.</p>
                            </div>
                            <div className="w-[100%] text-center sm:border-l border-[#E4E4E7] sm:pl-[40px] xl:pl-[80px] sm:pt-[40px] xl:pt-[80px] sm:-translate-y-[1px]">
                                <div
                                    className={`relative w-[40px] h-[40px] mx-auto`}
                                >
                                    <Image
                                        src="/assets/svg/about/cloud.svg"
                                        fill
                                        alt={"Banner preview"}
                                    />
                                </div>
                                <h1 className="text-[#181818] font-[700] text-[20px] leading-5 py-[24px]">Climate</h1>
                                <p className="text-greyish-10">Projects covering Climate Mitigation, Adaptation and REDD+ (reducing emissions from deforestation and forest degradation), Renewable Energy, Efficient Energy Generation and much more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PriorityStrategy />
            <BeginYourInvestment />
        </div>

    )
}

export default InvestmentBankingSolutions