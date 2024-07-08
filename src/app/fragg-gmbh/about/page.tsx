import Button from '@/components/Button';
import { SubpageHero } from '@/components/SubpageHero'
import { BeginYourInvestment } from '@/pageSections/BeginYourInvestment';
import GroupContact from '@/pageSections/GroupContact';
import { ArrowRight } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
interface companyCardProps {
  imageSrc: string;
  name: string;
  position: string;
  description: string;
  pageLink: string;
}

const teamMembers: companyCardProps[] = [
  {
    imageSrc: "/assets/png/team/franklin.png",
    name: "Franklin Odoemenam",
    position: "Managing Partner",
    description:
      "Franklin Odoemenam stands out as a pivotal figure in the global finance sector, with a robust track record of building strategic partnerships with major Development Finance Institutions (DFIs) such as the African Development Bank (AfDB), Agence Fr...",
    pageLink: "/fragg-nigeria/full-team-list/franklin",
  },
  {
    imageSrc: "/assets/png/team/nuela.png",
    name: "Nuela Chidimma Unije",
    position: "Partner and Executive Director",
    description:
      "Nuela Unije, with over 13 years of experience, is a leading figure in transformative finance, currently serving as Partner and Investment Director at FRAGG-INVEST. Her educational journey, equipped with a Bachelor's in Banking and Finance and...",
    pageLink: "/fragg-nigeria/full-team-list/nuela",
  },
  {
    imageSrc: "/assets/png/team/amaka.png",
    name: "Amaka Onyechi",
    position: "Administrative & Finance Officer",
    description:
      "Amaka Onyechi stands out as a Finance and Admin Officer, boasting 8 years of multifaceted experience in the realms of administrative and financial management, human resources, research, data management, customer experience, and digital marketing. Her...",
    pageLink: "/fragg-nigeria/full-team-list/amaka",
  },
  {
    imageSrc: "/assets/png/team/olugbenga.png",
    name: "Olugbenga Musa",
    position: "Investment Manager",
    description:
      "Olugbenga Musa, an esteemed Investment Manager at FRAGG Investment Management Ltd, brings to the table over 12 years of rich experience in investment banking and advisory services. Olugbenga's proficiency in strategy development, fi...",
    pageLink: "/fragg-nigeria/full-team-list/olugbenga",
  },

];
const About = () => {
  return (
    <div>
      <SubpageHero
        backgroundImageUrl={`bg-[url('/assets/webp/about.webp')]`}
        breadcrumb="FRAGG Investment Management"
        pageTitle="Your trusted Investment <br /> Partner"
      />

      <div className='px-[20px] py-[60px] sm:py-[112px] xl:px-[64px]'>
        <div className="pb-[40px]">
          <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] pb-[10px] sm:pb-[24px]">
            FRAGG Investment Management
          </h1>
          <p className="text-greyish-10 w-[100%] text-base">
            FRAGG Investment Management has a strong network and partnerships in fundraising, implementation,
            and management of numerous impact investment initiatives that address market needs within the Africa and LAC region. As a fund manager, FRAGG Investment has a proven track record of designing, structuring, launching, implementing, and divesting innovative funds. FRAGG{"'"}s mission is to enable the flow of sustainable financial instruments to emerging and frontier economies by closing the financial needs of financial intermediaries, and SMEs through the facilitation of access to funds from diversified sources. Our vision is to improve people{"'"}s skills and capacities through impact investments to achieve more equality, social and financial inclusion, and climate resilience.
          </p>
        </div>
        <div className='flex flex-col lg:flex-row gap-[0px] mt-[20px]'>
          {[
            {
              bg: "investAboutOne",
              bgImage: "/assets/svg/home/global-search.svg",
              text: "Geographical Focus",
              subText: "FRAGG strategically focuses on Europe, Africa, and Latin America, harnessing regional strengths to drive sustainable growth and impactful investments across diverse economic landscapes and cultural contexts.",
            },
            {
              bg: "investAboutTwo",
              bgImage: "/assets/svg/home/graph.svg",
              text: "Sector",
              subText: "Finance (Financial Institutions, FinTech & Payment Systems), Healthcare, Affordable Housing, Climate Finance (Clean Energy & Environmental Projects), Agriculture, Education.",
            },
            {
              bg: "investAboutThree",
              bgImage: "/assets/svg/home/cartesian.svg",
              text: "Instrument",
              subText: "Debt (Venture & Subordinated), Mezzanine & Equity - tailored to the needs and capacities of the investee. We actively engage as investors, providing strategic guidance and resources for long-term success.",
            },
          ].map((e, id) => {
            return (
              <div className={`w-[100%]`} key={id}>
                <div className={`${e.bg} h-[220px] w-[100%] flex flex-col px-[18px] pt-[44px]`}>
                  <div className='flex gap-[10px]'>
                    <div
                      className={`relative w-[30px] h-[30px]`}
                    >
                      <Image
                        src={e.bgImage}
                        fill
                        alt={"Image preview"}
                      />
                    </div>
                    <h1 className='text-white text-[20px] xl:text-[24px] font-[600]'>{e.text}</h1>
                  </div>
                  <p className='text-white text-sm xl:text-base pt-[16px]'>{e.subText}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className='relative aboutInvestments flex justify-start items-center pl-[20px] sm:pl-[80px]'>
        <h1 className='text-[52px] lg:text-[64px] leading-[64px] lg:leading-[80px] font-[700] text-white'>
          <span className='text-[#999999A3]'>We Target</span> Investments <br />
          <span className='text-[#999999A3]'>  with a</span> triple <span className='text-[#999999A3]'>bottom line </span> <br />
          <span className='text-[#999999A3]'>  approach - </span> <br />
          Profit, People and Planet
        </h1>
      </div>


      <div className='bg-[#2C2F33] px-[20px] py-[60px] lg:p-[80px] relative'>
        <div className='hidden lg:block absolute bottom-0'>
          <div
            className={`relative w-[222px] h-[222px] xl:h-[322px]`}
          >
            <Image
              src="/assets/svg/about/vectorOne.svg"
              fill
              alt={"Banner preview"}
            />
          </div>
        </div>
        <div className='hidden lg:block absolute right-0 top-0'>
          <div
            className={`relative w-[222px] h-[200px] xl:h-[322px]`}
          >
            <Image
              src="/assets/svg/about/vectorTwo.svg"
              fill
              alt={"Banner preview"}
            />
          </div>
        </div>

        <div className='flex justify-between w-[100%]'>
          <div>
            <div
              className={`relative w-[100px] h-[100px] sm:w-[222px] sm:h-[222px]`}
            >
              <Image
                src="/assets/svg/about/vision.svg"
                fill
                alt={"Banner preview"}
              />
            </div>
          </div>
          <div>
            <h1 className='text-white text-[24px] sm:text-[64px]'>Our Vision</h1>
            <h1 className='text-white text-[16px] sm:text-[24px] lg:w-[50%] font-[400]'>We aim to improve human potential and achieve greater equity through strategic impact investments, fostering social and financial inclusion, and building climate resilience.</h1>
          </div>
        </div>

        <div className='relative flex xl:w-[80%] my-[64px] mx-auto'>
          <div className='flex'>
            <div className='xl:w-[30%] flex xl:justify-end'>
              <div
              className={`relative w-[100px] h-[100px] sm:w-[222px] sm:h-[222px]`}
              >
                <Image
                  src="/assets/svg/about/mission.svg"
                  fill
                  alt={"Banner preview"}
                />
              </div>
            </div>
            <div className='w-[100%] xl:w-[50%]'>
              <h1 className='text-white text-[24px] sm:text-[64px]'>Our Mission</h1>
              <h1 className='text-white text-[16px] sm:text-[24px] w-[100%] font-[400]'>
                Our mission is to drive sustainable growth in emerging and frontier economies by meeting the financial needs of financial institutions and SMEs
                through direct and managed funds to empower vital sectors, fostering their significant contribution to improved environment, economies, and communities.
              </h1>
            </div>
          </div>
        </div>

        <div className='relative flex xl:justify-end w-[100%]'>
          <div className='flex justify-between'>
            <div className='xl:w-[100%] flex xl:justify-end'>
              <div
              className={`relative w-[100px] h-[100px] sm:w-[222px] sm:h-[222px]`}
              >
                <Image
                  src="/assets/svg/about/values.svg"
                  fill
                  alt={"Banner preview"}
                />
              </div>
            </div>
            <div className='w-[100%]'>
              <h1 className='text-white text-[24px] sm:text-[64px]'>Our Values</h1>
              <h1 className='text-white text-[16px] sm:text-[24px] w-[100%] font-[400]'>
                With a diverse international team across continents, we{"'"}re dedicated to enhancing financial inclusion and environmental stewardship. Our flexible client solutions and focused impact areas leverage a global network for added client and investor value,
                reflecting our commitment to growth and societal impact. At the core of our investment strategy is the triple bottom line approach, prioritizing Profit, People, and Planet, to ensure sustainable and inclusive growth
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className='px-[20px] py-[60px] sm:py-[112px] xl:px-[64px]'>
        <div className="pb-[40px]">
          <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] pb-[10px] sm:pb-[24px]">
          Our Approach
          </h1>
          <p className="text-greyish-10 w-[100%] text-base">
          FRAGG-Invest has a strong network and partnerships in fundraising, implementation, and management of numerous impact investment initiatives that address market needs within the Africa and LAC region. As a fund manager, FRAGG-Invest has a proven track record of designing, structuring, launching, implementing, and divesting innovative funds. FRAGG{"'"}s mission is to enable the flow of sustainable financial instruments to emerging and frontier economies by closing the financial needs of financial intermediaries, and SMEs through the facilitation of access to funds from diversified sources. Our vision is to improve people{"'"}s skills and capacities through impact investments to achieve more equality, social and financial inclusion, and climate resilience.
          </p>
        </div>
        <div className='flex flex-col lg:flex-row gap-[0px] mt-[20px]'>
          {[
            {
              bg: "approachOne",
              bgImage: "/assets/svg/about/people.svg",
              text: "People",
              subText: "Realisation of social impact (fighting/reducing inequality, promoting inclusion and gender equity).",
            },
            {
              bg: "approachTwo",
              bgImage: "/assets/svg/home/global-search.svg",
              text: "Planet",
              subText: "Realizing tangible and quantifiable environmental benefits through targeted initiatives and measurable actions.",
            },
            {
              bg: "approachThree",
              bgImage: "/assets/svg/about/line-chart-two.svg",
              text: "Profit",
              subText: "Ensuring consistent and reliable returns through meticulous strategies and robust performance metrics, guaranteeing profit.",
            },
          ].map((e, id) => {
            return (
              <div className={`w-[100%] `} key={id}>
                <div className={`${e.bg} h-[300px] sm:h-[600px] w-[100%] flex flex-col justify-end it px-[18px] pb-[40px]`}>
                  <div className='flex gap-[10px]'>
                    <div
                      className={`relative w-[30px] h-[30px]`}
                    >
                      <Image
                        src={e.bgImage}
                        fill
                        alt={"Image preview"}
                      />
                    </div>
                    <h1 className='text-white text-[20px] xl:text-2xl font-[600]'>{e.text}</h1>
                  </div>
                  <p className='text-white text-sm xl:text-2xl pt-[16px]'>{e.subText}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className='relative courtGmbh flex justify-start items-center pl-[20px] sm:pl-[80px]'>
        <h1 className='text-[52px] lg:text-[48px] leading-[64px] lg:leading-[60px] font-[600] text-white'>
        FRAGG-INVEST GmbH is incorporated <br />
        in Germany under the High Court of <br />
        Dueren (HRB 9048)  and registered <br />
        with the Chambers of Commerce of <br />
        the region of Aachen in the North <br />
        Westfalia State of Germany. <br />
        </h1>
      </div>
      <div className="container mx-auto px-4 md:px-0 text-center py-20">
        <h2 className="text-4xl md:text-5xl font-semibold mb-5">Our team</h2>
        <p className="text-greyish-10 mb-16">
          Dedicated professionals committed to guiding you towards financial
          success with expertise and <br /> personalized service.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 text-left">
          {teamMembers.map((teamMember, index) => (
            <CompanyCard
              key={index}
              imageSrc={teamMember.imageSrc}
              name={teamMember.name}
              position={teamMember.position}
              description={teamMember.description}
              pageLink={teamMember.pageLink}
            />
          ))}
        </div>

        <div className="flex justify-center mt-[64px]">
          <Link href="/fragg-nigeria/full-team-list">
            <Button
              label={"View Full Team"}
              type="submit"
              iconRight={<ArrowRight />}
              className="bg-redish-20 py-[16px] text-[18px] px-[24px] rounded-[28px] text-white font-semibold w-fit"
            /></Link>
        </div>
      </div>
      <div className={`py-[60px] lg:py-[120px]`}>
        <div className="pt-[40px]">
          <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] text-center pb-[10px] sm:pb-[24px]">
            Our Areas of Focus
          </h1>
          <p className="text-greyish-10 mx-auto text-center w-[90%] sm:w-[70%] xl:w-[70%] text-base">
            Following the company’s core values, FRAGG uses both equity and debt instruments to target the clients’
            financial needs through profitable investment products in a variety of impact sectors, but particularly in:
          </p>
        </div>
        <div className="pb-[96px]">
          <div className="flex justify-center gap-[30px] pt-[80px]">
            <div className="flex flex-col gap-[40px] sm:flex-row justify-between w-[90%] xl:w-[80%] pb-[30px] sm:pb-0">
              <div className="w-[100%] text-center sm:pr-[40px] xl:pr-[80px] sm:pb-[40px] xl:pb-[80px]">
                <div
                  className={`relative w-[40px] h-[40px] mx-auto`}
                >
                  <Image
                    src="/assets/svg/about/line-chart.svg"
                    fill
                    alt={"Banner preview"}
                  />
                </div>
                <h1 className="text-[#181818] font-[700] text-[20px] leading-5 py-[24px]">Inclusive Finance</h1>
                <p className="text-greyish-10">Including but not limited to Microfinance/SMEs Banks, Finance Houses, Other Financial Intermediaries, Commercial Banks, Payment Solutions, and other Financial Technology Solutions and Businesses.</p>
              </div>
              <div className="w-[100%] text-center sm:border-l border-[#E4E4E7] sm:pl-[40px] xl:pl-[80px] sm:pb-[40px] xl:pb-[80px]">
                <div
                  className={`relative w-[40px] h-[40px] mx-auto`}
                >
                  <Image
                    src="/assets/svg/about/wave.svg"
                    fill
                    alt={"Banner preview"}
                  />
                </div>
                <h1 className="text-[#181818] font-[700] text-[20px] leading-5 py-[24px]">Agriculture</h1>
                <p className="text-greyish-10">
                  Agribusinesses including food production especially small-holder farming, food processing and storage, packaging, distribution (transportation and haulage), and wholesale/retail market (export or domestic).
                </p>
              </div>
              <div className="w-[100%] text-center sm:border-l border-[#E4E4E7] sm:pl-[40px] xl:pl-[80px] sm:pb-[40px] xl:pb-[80px]">
                <div
                  className={`relative w-[40px] h-[40px] mx-auto`}
                >
                  <Image
                    src="/assets/svg/about/health.svg"
                    fill
                    alt={"Banner preview"}
                  />
                </div>
                <h1 className="text-[#181818] font-[700] text-[20px] leading-5 py-[24px]">Health</h1>
                <p className="text-greyish-10">
                  From diagnosis to treatment and core areas of health management and prevention, including general and specialized hospitals, primary health care centers, pharmaceuticals, HMOs, and Health Tech.
                </p>
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
                    src="/assets/svg/about/house.svg"
                    fill
                    alt={"Banner preview"}
                  />
                </div>
                <h1 className="text-[#181818] font-[700] text-[20px] leading-5 py-[24px]">Housing</h1>
                <p className="text-greyish-10">Housing projects that increase access to practical and viable housing especially for earners on the lower end of the spectrum. Sustainable and energy efficiency housing projects are of particular interest.</p>
              </div>
              <div className="w-[100%] text-center sm:border-l border-[#E4E4E7] sm:pl-[40px] xl:pl-[80px] sm:pt-[40px] xl:pt-[80px] sm:-translate-y-[1px]">
                <div
                  className={`relative w-[40px] h-[40px] mx-auto`}
                >
                  <Image
                    src="/assets/svg/about/graduation-cap.svg"
                    fill
                    alt={"Banner preview"}
                  />
                </div>
                <h1 className="text-[#181818] font-[700] text-[20px] leading-5 py-[24px]">Education</h1>
                <p className="text-greyish-10">Inclusive education models with projects covering low-fee private education in preparatory, primary, secondary, tertiary, and vocational institutions, EdTech, Educational Infra and related services.</p>
              </div>
              <div className="w-[100%] text-center sm:border-l border-[#E4E4E7] sm:pl-[40px] xl:pl-[80px] sm:pt-[40px] xl:pt-[80px] sm:-translate-y-[1px]">
                <div
                  className={`relative w-[40px] h-[40px] mx-auto`}
                >
                  <Image
                    src="/assets/svg/about/cloud.svg"
                    fill
                    alt={"Banner preview"}
                  />
                </div>
                <h1 className="text-[#181818] font-[700] text-[20px] leading-5 py-[24px]">Climate</h1>
                <p className="text-greyish-10">Projects covering Climate Mitigation, Adaptation and REDD+ (reducing emissions from deforestation and forest degradation), Renewable Energy, Efficient Energy Generation and much more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GroupContact image="map-germany" />
      <BeginYourInvestment />

    </div>
  )
}

export default About

const CompanyCard: React.FC<companyCardProps> = ({
  imageSrc,
  name,
  position,
  description,
  pageLink,
}) => (
  <div className="flex items-center">
    {/* image */}
    <div className="flex-1">
      <Image
        src={imageSrc}
        height={340}
        width={280}
        alt={`${name}'s Potrait`}
      />
    </div>
    {/* writeup */}
    <div className="flex-1">
      <h3 className="font-bold text-xl">{name}</h3>
      <p className="text-greyish-10 mb-4">{position}</p>
      <p
        className="text-greyish-10 mb-4"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      <Link
        href={pageLink}
        className=" text-redish-20 flex items-center justify-end group px-2"
      >
        <p>Read More </p>
        <span className="inline-block group-hover:translate-x-2 group-hover:transition-all">
          <Image
            src="/assets/svg/direction-right.svg"
            width={16}
            height={16}
            alt="right arrow svg"
          />
        </span>
      </Link>
    </div>
  </div>
);