import { SubpageHero } from '@/components/SubpageHero'
import React from 'react'

const Accelerator = () => {
    return (
        <div>
            <SubpageHero
                backgroundImageUrl={`bg-[url('/assets/svg/accelerator/accelerator-nigeria.svg')]`}
                breadcrumb="Accelerator Programs"
                pageTitle="Promoting sustainable  <br /> and impact finance"
            />
            <div className='px-[20px] py-[60px] sm:py-[112px] xl:px-[64px]'>
                <div className="pb-[40px]">
                    <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] pb-[10px] sm:pb-[24px]">
                    Empowering Start-Ups ... for Growth
                    </h1>
                    <p className="text-greyish-10 w-[100%] text-base">
                    FRAGG Investment Incubation/Accelerator Hub is an exclusive platform designed to nurture and accelerate the growth of innovative start-ups. Our mission is to empower entrepreneurs by providing them with the resources, mentorship, and access to funding needed to succeed.
                    </p>
                    <p className="text-greyish-10 w-[100%] text-base py-[24px]">
                    FRAGG Investment Incubation/Accelerator Hub is dedicated to supporting start-ups through their critical growth phases. We offer tailored programs for early-stage and growth-stage companies, focusing on providing comprehensive support to help them thrive in a competitive market.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Accelerator