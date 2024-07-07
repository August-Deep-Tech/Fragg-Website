import { redHatDisplay } from '@/styles/font'

interface IProps {
    image: string;
}

const GroupContact = ({image}: IProps) => {
    return (
        <div className={`${redHatDisplay.className} py-[60px] sm:py-[120px]`}>
            <div className="pt-[40px]">
                <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] text-center pb-[10px] sm:pb-[24px]">
                    FRAGG Group Contact
                </h1>
                <p className="text-greyish-10 mx-auto text-center w-[90%] sm:w-[70%] xl:w-[50%] text-base">
                    Our global team is a diverse blend of talent, united in our pursuit of excellence,
                    spanning continents, and bringing a wealth of perspectives and expertise to every endeavor.
                </p>
            </div>

            <div className={`${image}`}>

            </div>
        </div>
    )
}

export default GroupContact