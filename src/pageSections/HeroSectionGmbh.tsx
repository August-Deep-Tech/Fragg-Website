import Button from "@/components/Button";
import { redHatDisplay } from "@/styles/font";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSectionGmbh = () => {
    return (
        <div className="flex bg-black justify-between">
            <div className="w-[100%] px-[80px] relative flex items-center">
                <div className="">
                    <h1 className="text-[32px] text-white leading-[43px] lg:text-[64px] lg:leading-[75px] xl:text-[56px] xl:leading-[67px]">
                        Strategic Financial <br /> Solutions for Growth
                    </h1>
                    <p className="text-white pt-[12px] pb-[24px]">
                        Empower your business with FRAGG's strategic financial solutions, designed to foster inclusive corporate growth.
                    </p>
                    <div className="">
                        <div className="flex gap-[10px] w-[100%]">
                            <Link href="fragg-nigeria/services">
                                <Button
                                    label={"Start Investing"}
                                    type="submit"
                                    iconLeft={
                                        <Image
                                            src="/assets/fragginvest-logo-small-white.svg"
                                            width={25}
                                            height={25}
                                            alt=""
                                        />
                                    }
                                    className="bg-redish-20 py-[16px] text-[14px] sm:text-[18px] px-[40px] rounded-[28px] text-white font-semibold w-fit"
                                />
                            </Link>
                            <Link href="fragg-nigeria/services">
                                <Button
                                    label={"Contact Us"}
                                    type="submit"
                                    iconLeft={<Mail />}
                                    className="bg-transparent border border-white py-[16px] text-[14px] sm:text-[18px] px-[40px] rounded-[28px] text-white font-semibold w-fit"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[8px] absolute bottom-[32px]">
                    <Button
                        label={"Asset Management"}
                        type="submit"
                        iconLeft={<Image
                            src="/assets/svg/home/assetManagement.svg"
                            width={25}
                            height={25}
                            alt=""
                        />}
                        className="bg-[#202020] py-[8px] text-[14px] px-[16px] rounded-[28px] text-white font-[400] w-fit"
                    />
                     <Button
                        label={"Capital Raising"}
                        type="submit"
                        iconLeft={<Image
                            src="/assets/svg/home/capitalRaising.svg"
                            width={25}
                            height={25}
                            alt=""
                        />}
                        className="bg-[#202020] py-[8px] text-[14px] px-[16px] rounded-[28px] text-white font-[400] w-fit"
                    />
                     <Button
                        label={"Advisory Services"}
                        type="submit"
                        iconLeft={<Image
                            src="/assets/svg/home/advisoryServices.svg"
                            width={25}
                            height={25}
                            alt=""
                        />}
                        className="bg-[#202020] py-[8px] text-[14px] px-[16px] rounded-[28px] text-white font-[400] w-fit"
                    />
                </div>
            </div>
            <div className="home-germany w-[100%]">

            </div>
        </div>
    )
}

export default HeroSectionGmbh