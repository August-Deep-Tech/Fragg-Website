"use client"

import Button from '@/components/Button';
import usePathCheck from '@/hooks/usePathCheck';
import { redHatDisplay } from '@/styles/font'
import Image from "next/image";
import Link from 'next/link';

const GrowWithFragg = () => {
    const {isFraggNigeria, isFraggGmbh, isFraggSarl} = usePathCheck();
    let logoHref = "";
    if (isFraggNigeria) {
      logoHref = "/fragg-nigeria";
    }
    if (isFraggGmbh) {
      logoHref = "/fragg-gmbh";
    }
    if (isFraggSarl) {
      logoHref = "/fragg-sarl";
    }
    return (
        <div className={`${redHatDisplay.className} px-[20px] xl:px-[100px] py-[60px] lg:py-[120px]`}>
            <div className='flex flex-col-reverse gap-[20px] sm:flex-row items-center'>
                <div className='w-[100%]'>
                    <h1 className="text-[24px] lg:text-[30px] xl:text-[48px] xl:leading-[57px] text-black font-[600] pb-[10px] sm:pb-[24px] sm:w-[95%]">
                        Grow with the FRAGG
                        Impact Growth Accelerator
                        Programme
                    </h1>
                    <p className='border-b-[5px] border-redish-20 w-[64px]'></p>
                    <p className='font-[600] pt-[28px] text-[#757575]'>A program tailored for you to <span className='text-redish-20'>impact millions</span> of lives <br/> by <span className='text-redish-20'>investing in one</span> ground-breaking idea.</p>
                    <Link href={`${logoHref}/advisory/accelerator-program`}>
                    <Button
                        label={"Join Now"}
                        type="submit"
                        className="bg-redish-20 py-[16px] text-[18px] px-[64px] rounded-[28px] text-white font-semibold w-fit mt-[20px]"
                    /></Link>
                </div>
                <div className='relative w-[100%]'>
                    <div
                        className={`relative w-[100%] h-[300px] sm:h-[300px] lg:h-[470px]`}
                    >
                        <Image
                            src="/assets/svg/home/growwithfragg.svg"
                            fill
                            alt={"Banner preview"}
                            className='rounded-[24px]'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GrowWithFragg