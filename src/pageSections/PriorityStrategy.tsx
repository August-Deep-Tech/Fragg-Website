import { redHatDisplay } from '@/styles/font'

const PriorityStrategy = () => {
    return (
        <div>
            <div className={`${redHatDisplay.className} py-[60px] lg:py-[120px] px-[20px] xl:px-[80px]`}>
                <div className="pt-[40px]">
                    <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] text-center pb-[10px] sm:pb-[24px]">
                        Priority Strategy
                    </h1>
                    <p className="text-greyish-10 mx-auto text-center w-[90%] sm:w-[70%] xl:w-[100%] text-base">
                        As part of our strategy and in pursuit of inclusiveness and equality, we are committed to investments that drive social inclusiveness.
                    </p>
                </div>

                <div className='flex flex-col lg:flex-row gap-[0px] pt-[80px]'>
                    <div className='lg:w-[60%]'>
                        <div className='priorityOne h-[292px] w-[100%] rounded-t-[24px] flex items-end px-[18px]'>
                            <h1 className='text-white text-[48px] font-[600]'>Youth</h1>
                        </div>
                        <p className='text-[#757575] p-[16px]'>Supporting youth by investing in youth led /managed projects as well as projects with youth outreach.</p>
                    </div>
                    <div className='lg:w-[40%]'>
                        <div className='priorityTwo h-[292px] w-[100%] rounded-t-[24px] flex items-end px-[18px]'>
                        <h1 className='text-white text-[48px] font-[600]'>Women</h1>
                        </div>
                        <p className='text-[#757575] p-[16px]'>Investments in women-owned and women-managed pipelines as well as projects that provide support for women in its outreach.</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-[0px] mt-[20px]'>
                    <div className='lg:w-[40%]'>
                        <div className='priorityThree h-[292px] w-[100%] rounded-t-[24px] flex items-end px-[18px]'>
                        <h1 className='text-white text-[48px] font-[600]'>Rural Outreach</h1>
                        </div>
                        <p className='text-[#757575] p-[16px]'>FRAGG prioritizes pipelines with over 40% rural outreach, driving sustainable growth and impactful investments in underserved areas.</p>
                    </div>
                    <div className='lg:w-[60%]'>
                        <div className='priorityFour h-[292px] w-[100%] rounded-t-[24px] flex items-end px-[18px]'>
                        <h1 className='text-white text-[48px] font-[600]'>Innovative Technology</h1>
                        </div>
                        <p className='text-[#757575] p-[16px]'>Investing in projects leveraging innovative technology to drive impactful solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriorityStrategy