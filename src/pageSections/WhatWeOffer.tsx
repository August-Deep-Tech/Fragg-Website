import Button from "@/components/Button";
import { redHatDisplay } from "@/styles/font";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WhatWeOffer = () => {
    return (
        <div className={`${redHatDisplay.className} pt-[350px] pb-[60px] lg:py-[120px]`}>
            <div className="pt-[40px]">
                <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] text-center pb-[10px] sm:pb-[24px]">
                    What We Offer
                </h1>
                <p className="text-greyish-10 mx-auto text-center w-[90%] sm:w-[70%] xl:w-[50%] text-base">
                    FRAGG{"'"}s capital strategies drive growth. From debt to partnerships, we secure funds for innovation and expansion,
                    ensuring sustained success. We also offer non financial services to accelerate your growth.
                </p>
            </div>
            <div className="pb-[96px]">
                <div className="flex justify-center gap-[30px] pt-[80px]">
                    <div className="flex flex-col gap-[40px] sm:flex-row justify-between w-[90%] xl:w-[80%] pb-[30px] sm:pb-0">
                        <div className="w-[100%] text-center sm:pr-[40px] xl:pr-[80px] sm:pb-[40px] xl:pb-[80px] border-[#E4E4E7]">
                            <div
                                className={`relative w-[40px] h-[40px] mx-auto`}
                            >
                                <Image
                                    src="/assets/svg/home/whatweoffer/chart.svg"
                                    fill
                                    alt={"Banner preview"}
                                />
                            </div>
                            <h1 className="text-[#181818] font-[700] text-[20px] leading-5 py-[24px]">Impact Investment Advisory</h1>
                            <p className="text-greyish-10">FRAGG Investment advises investors and SMEs in Health, Energy,
                                Agriculture, Education, and Housing, specializing in impact investment and financial structuring.</p>
                        </div>
                        <div className="w-[100%] text-center sm:border-l border-[#E4E4E7] sm:pl-[40px] xl:pl-[80px] sm:pb-[40px] xl:pb-[80px]">
                            <div
                                className={`relative w-[40px] h-[40px] mx-auto`}
                            >
                                <Image
                                    src="/assets/svg/home/whatweoffer/money-bag-coin.svg"
                                    fill
                                    alt={"Banner preview"}
                                />
                            </div>
                            <h1 className="text-[#181818] font-[700] text-[20px] leading-5 py-[24px]">Fund Mobilization</h1>
                            <p className="text-greyish-10">FRAGG Investment facilitates fund mobilization and finance linkage for banks, 
                                impact projects, and SMEs, raising capital for sustainable development.</p>
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
                                    src="/assets/svg/home/whatweoffer/setting.svg"
                                    fill
                                    alt={"Banner preview"}
                                />
                            </div>
                            <h1 className="text-[#181818] font-[700] text-[20px] leading-5 py-[24px]">Project Management</h1>
                            <p className="text-greyish-10">FRAGG Investment manages impact projects in climate infrastructure, renewable energy, health, housing, and financial services, providing comprehensive support.</p>
                        </div>
                        <div className="w-[100%] text-center sm:border-l  border-[#E4E4E7] sm:pl-[40px] xl:pl-[80px] sm:pt-[40px] xl:pt-[80px] sm:-translate-y-[1px]">
                            <div
                                className={`relative w-[40px] h-[40px] mx-auto`}
                            >
                                <Image
                                    src="/assets/svg/home/whatweoffer/calculator.svg"
                                    fill
                                    alt={"Banner preview"}
                                />
                            </div>
                            <h1 className="text-[#181818] font-[700] text-[20px] leading-5 py-[24px]">Fund Management</h1>
                            <p className="text-greyish-10">FRAGG Investment excels in designing, structuring,  launching, and managing sustainable funds with strict adherence to ESG standards and controls.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <Link href="fragg-nigeria/services">
                    <Button
                        label={"View All Services"}
                        type="submit"
                        iconRight={<ArrowRight />}
                        className="bg-redish-20 py-[16px] text-[18px] px-[24px] rounded-[28px] text-white font-semibold w-fit"
                    /></Link>
            </div>
        </div>
    )
}

export default WhatWeOffer