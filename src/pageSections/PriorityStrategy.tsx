import { redHatDisplay } from '@/styles/font'

const PriorityStrategy = () => {
    return (
        <div>
            <div className={`${redHatDisplay.className} py-[60px] lg:py-[120px] px-[10px] xl:px-0`}>
                <div className="pt-[40px]">
                    <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] text-center pb-[10px] sm:pb-[24px]">
                        Priority Strategy
                    </h1>
                    <p className="text-greyish-10 mx-auto text-center w-[90%] sm:w-[70%] xl:w-[100%] text-base">
                        As part of our strategy and in pursuit of inclusiveness and equality, we are committed to investments that drive social inclusiveness.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PriorityStrategy