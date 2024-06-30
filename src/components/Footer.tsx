import Link from 'next/link';
import Image from "next/image";

import { bebasNeue, redHatDisplay } from '@/styles/font';

const Footer = () => {
    return (
        <footer className='border-t-8 border-redish-20'>
            <div className='p-[80px] flex flex-col gap-[64px]'>
                <div className='flex justify-between items-center'>
                    <div className={`relative h-[49px] lg:h-[48px] w-[117px] lg:w-[202px]`}>
                        <Image
                            src="/assets/fragginvest-logo.svg"
                            fill
                            alt={"Banner preview"}
                        />
                    </div>
                    <div>
                        <div className={`relative h-[49px] w-[48px]`}>
                            <Image
                                src="/assets/footer-icon.svg"
                                fill
                                alt={"Banner preview"}
                            />
                        </div>
                    </div>
                </div>
                <div className={` grid grid-cols-2 flex-row gap-[28px] gap-y-[35px] sm:flex justify-between lg:mt-0`}>
                    {[
                        {
                            categoryName: "GET IN TOUCH",
                            children: [
                                {
                                    text: "Facebook",
                                    linkTo: "#",
                                    ext: false,
                                    isLink: true
                                },
                                {
                                    text: "Linkedln",
                                    linkTo: "#",
                                    ext: false,
                                    isLink: true
                                },
                                {
                                    text: "X",
                                    linkTo: "#",
                                    ext: false,
                                    isLink: true
                                },
                            ],
                        },
                        {
                            categoryName: "EXPLORE",
                            children: [
                                {
                                    text: "About Us",
                                    linkTo: "#",
                                    ext: false,
                                    isLink: true
                                },
                                {
                                    text: "Our Services",
                                    linkTo: "#",
                                    ext: false,
                                    isLink: true
                                },
                                {
                                    text: "Impact and Sustainability",
                                    linkTo: "#",
                                    ext: false,
                                    isLink: true
                                },
                                {
                                    text: "Advisory",
                                    linkTo: "#",
                                    ext: false,
                                    isLink: true
                                },
                                {
                                    text: "FRAGG Group",
                                    linkTo: "#",
                                    ext: false,
                                    isLink: true
                                },
                                {
                                    text: "Contact Us",
                                    linkTo: "#",
                                    ext: false,
                                    isLink: true
                                },
                            ],
                        },
                        {
                            categoryName: "FIND US",
                            children: [
                                {
                                    text: "FRAGG Investment Management, Nigeria",
                                    textTwo: "45b, Oluwaleimu Street, Off Allen Avenue, Ikeja, Lagos.",
                                    linkTo: "",
                                    ext: true,
                                    isLink: false
                                },
                                {
                                    text: "FRAGG-Invest GmbH, Germany",
                                    textTwo: "HRB 9048 -Amtsgericht Düren Landstraße 37, D-52445 Titz, Germany",
                                    linkTo: "",
                                    ext: true,
                                    isLink: false
                                },
                                {
                                    text: "FRAGG-Invest GP Sàrl, Luxembourg",
                                    textTwo: "2C, Parc D’Activités-BP027 L-8308 Capellen Grand-Duchy of Luxembourg",
                                    linkTo: "#",
                                    ext: true,
                                    isLink: false
                                },
                            ],
                        },
                    ].map((e) => {
                        return (
                            <section
                                key={e.categoryName}
                                className={
                                    e.categoryName === "Support"
                                        ? "-translat-y-5 sm:translae-y-0 md:-translat-x-4 lg:translat-x-0 px-0 md:px-4 text-redish-20"
                                        : "px-0 md:px-4"
                                }
                            >
                                <ul className="space-y-3 md:space-y-4">
                                    <span className={`${bebasNeue.className} font-heading text-[18px] font-bold md:text-[40px] text-redish-20`}>
                                        {"["}{e.categoryName}{"]"}
                                    </span>
                                    {e.children.map(
                                        (
                                            item: any,
                                            idx,
                                        ) => {
                                            return (
                                                <li
                                                    key={idx}
                                                    className={`${redHatDisplay.className} block text-[20px] leading-[21px] text-redish-20`}
                                                >
                                                    {item.isLink ? !item?.ext ? (
                                                        <Link
                                                            href={item?.linkTo}
                                                            className="hover:underline text-redish-20"
                                                        >
                                                            <p>{item.text}</p>
                                                        </Link>
                                                    ) : (
                                                        <Link
                                                            href={item.linkTo ?? "#"}
                                                            target="_blank"
                                                            className="hover:underline text-redish-20"
                                                            passHref
                                                        >
                                                            <p>{item.text}</p>
                                                        </Link>
                                                    ) : <div>
                                                        <h1 className='text-greyish-10 pb-[4px]'>{item.text}</h1>
                                                        <p>{item.textTwo}</p>
                                                    </div>}
                                                </li>
                                            );
                                        },
                                    )}
                                </ul>
                            </section>
                        );
                    })}
                </div>

                <div className=''>
                    <p className='border border-t-[#9C0000A3] border-opacity-65 w-[100%]'></p>
                    <h1 className={`${bebasNeue.className} text-[32px] leading-[48px] text-greyish-10 pt-[33px]`}>© 2024 FRAGG</h1>
                </div>
            </div>
        </footer>

    )
}

export default Footer