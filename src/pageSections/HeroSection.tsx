import Button from '@/components/Button';
import { redHatDisplay } from '@/styles/font';
import { Mail } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";

interface IProps {
    bgImage: string;
}
const HeroSection = ({ bgImage }: IProps) => {
    return (
        <div className={`${bgImage} text-white ${redHatDisplay.className} flex items-end pb-[44px] px-[80px]`}>
            <div>
                <h1 className='text-[96px] leading-[105px]'>Accelerate access <br /> to Inclusive Finance</h1>
                <div className='flex justify-between pt-[20px]'>
                    <div className='flex gap-[10px] w-[100%]'>
                        <Link href="fragg-nigeria/services">
                            <Button
                                label={"Start Investing"}
                                type="submit"
                                iconLeft={<Image src="/assets/fragginvest-logo-small.svg" width={20} height={20} alt="" />}
                                className="bg-white py-[12px] text-[18px] px-[24px] rounded-[28px] text-black font-semibold w-fit"
                            /></Link>
                        <Link href="fragg-nigeria/services">
                            <Button
                                label={"Contact Us"}
                                type="submit"
                                iconLeft={<Mail />}
                                className="bg-transparent border border-white py-[12px] text-[18px] px-[24px] rounded-[28px] text-white font-semibold w-fit"
                            /></Link>
                    </div>
                    <div className='w-[100%]'>
                        <h1>Empower businesses with FRAGG's inclusive financial solutions. 
                            We bridge funding gaps with tailored strategies, ensuring sustainable
                            growth and maximum impact. Partner with us to unlock the full potential of your investments.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection