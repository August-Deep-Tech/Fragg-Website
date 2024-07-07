import { redHatDisplay } from '@/styles/font';
import { Earth, Goal } from 'lucide-react';
import Image from 'next/image';

const props = [
    {
        backgroundUrl: 'bg-[url("/assets/webp/fragg-nigeria.webp")]',
        title: "FRAGG Investment Management, Nigeria",
        linkHref: "/fragg-nigeria/about",
    },
    {
        backgroundUrl: 'bg-[url("/assets/webp/fragg-gmbh.webp")]',
        title: "FRAGG-Invest GmbH, Germany",
        linkHref: "/fragg-gmbh/about",
    },
    {
        backgroundUrl: 'bg-[url("/assets/webp/fragg-sarl.webp")]',
        title: "FRAGG-Invest GP Sàrl, Luxembourg",
        linkHref: "/fragg-sarl/about",
    },
];


const FraggInvestmentManagement = () => {
    return (
        <div className={`${redHatDisplay.className}`}>
            <div className="pb-[40px] pt-[40px]">
                <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] text-center pb-[10px] sm:pb-[24px]">
                    FRAGG Investment Management
                </h1>
                <p className="text-greyish-10 mx-auto text-center w-[90%] sm:w-[70%] xl:w-[70%] text-base">
                    At FRAGG Investment, we specialize in offering personalized investment management, advisory, and financial planning services to our clients. We provide a variety of investment products and strategies customized to meet your unique needs and objectives, with a primary focus on achieving long-term financial growth and stability.
                </p>
            </div>
            <div className="">
                <section className="h-[400px] text-white bg-[url('/assets/svg/home/investOne.svg')] px-[24px] py-[40px] flex items-end">
                    <div>
                        <Image src="/assets/fragginvest-logo-small-white.svg" width={30} height={30} alt="" />
                        <h2 className="text-2xl font-semibold mb-4 pt-[20px]">FRAGG Investment Management, Nigeria</h2>
                        <p>
                            FRAGG Investment is a leading impact investment manager and advisor specialized in domestic mobilization and management of funds with a strong focus on impact investment, green economy, and sustainable climate-smart technologies for the Sustainable Development Goals of the United Nations. We support our investments with a triple bottom-line approach – Profit, People, and Planet.
                        </p>
                    </div>
                </section>
                <div className="flex flex-col md:flex-row justify-between h-[400px]">
                    <section className="md:w-1/2  px-[24px] py-[40px] flex items-end bg-[url('/assets/svg/home/investTwo.svg')] text-white">
                        <div>
                            <Goal />
                            <h3 className="text-xl font-semibold mb-4 pt-[20px]">Our Target</h3>
                            <p>
                                FRAGG Investment is keen on investing in high impact companies in Africa, Latin America, and the Caribbean, with a special focus on sectors such as renewable energy, sustainable agriculture, and financial inclusion. We aim to support projects that have a positive social and environmental impact on their local communities and the wider world.
                            </p>
                        </div>
                    </section>
                    <section className="md:w-1/2 px-[24px] py-[40px] flex items-end bg-[url('/assets/svg/home/investThree.svg')] text-white">
                        <div>
                            <Earth />
                            <h3 className="text-xl font-semibold mb-4 pt-[20px]">Our Team</h3>
                            <p>
                                With our international team of investment professionals and advisors, we provide extensive networks that span across Africa, Latin America, and the Caribbean. Our team includes recognized leaders in green economy and development finance with a strong commitment to achieving impact-driven results. We work closely with clients to tailor strategies that meet their specific investment goals and objectives.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default FraggInvestmentManagement;
