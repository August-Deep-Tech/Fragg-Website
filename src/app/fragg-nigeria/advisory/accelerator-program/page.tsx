import {SubpageHero} from "@/components/SubpageHero";
import {BeginYourInvestment} from "@/pageSections/BeginYourInvestment";
import Image from "next/image";

const Accelerator = () => {
  return (
    <div>
      <SubpageHero
        backgroundImageUrl={`bg-[url('/assets/svg/accelerator/accelerator-nigeria.svg')]`}
        breadcrumb="Accelerator Programs"
        pageTitle="Promoting sustainable  <br /> and impact finance"
      />
      <div className="px-[20px] py-[60px] sm:py-[112px] xl:px-[64px]">
        <div className="">
          <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] pb-[10px] sm:pb-[24px]">
            Empowering Start-Ups ... for Growth
          </h1>
          <p className="text-greyish-10 w-[100%] text-base">
            FRAGG Investment Incubation/Accelerator Hub is an exclusive platform
            designed to nurture and accelerate the growth of innovative
            start-ups. Our mission is to empower entrepreneurs by providing them
            with the resources, mentorship, and access to funding needed to
            succeed.
          </p>
          <p className="text-greyish-10 w-[100%] text-base py-[24px]">
            FRAGG Investment Incubation/Accelerator Hub is dedicated to
            supporting start-ups through their critical growth phases. We offer
            tailored programs for early-stage and growth-stage companies,
            focusing on providing comprehensive support to help them thrive in a
            competitive market.
          </p>
        </div>
      </div>

      <div>
        <section className="h-[400px] text-white bg-[url('/assets/webp/the-model.webp')] bg-cover bg-center px-[24px] py-[40px] flex items-end">
          <div>
            <h2 className="text-5xl font-semibold">The Model</h2>
            <p className="py-[24px]">
              Our incubation program provides foundational support for
              early-stage start-ups over a 6-12-month period, offering
              trainings, access to expert mentors, business development support,
              access to initial funding opportunities, market entry support as
              well as networking opportunities. Our acceleration program on the
              other hand is targeted at growth-stage start-ups, focusing on
              scaling operations over a 3-6-month period. Our Accelerator Hub
              provides intensive mentorship, advanced funding opportunities, and
              market access and expansion support.
            </p>
            <p>
              FRAGG Investment Incubation/Accelerator Hub is dedicated to
              supporting start-ups through their critical growth phases. We
              offer tailored programs for early-stage and growth-stage
              companies, focusing on providing comprehensive support to help
              them thrive in a competitive market.
            </p>
          </div>
        </section>
        <div className="flex flex-col md:flex-row justify-between h-[400px]">
          <section
            className={`md:w-1/2  px-[24px] py-[40px] flex items-end bg-[url('/assets/jpg/captial.jpg')] bg-cover bg-center text-white`}
          >
            <div>
              <h3 className="text-xl font-semibold mb-4 pt-[20px]">
                Access to Capital
              </h3>
              <p>
                We provide access to seed funding to help start-ups launch and
                establish their business, as well as support for Series A, B,
                and C funding rounds. We also provide information and access to
                various grants and start-up competitions. Moreover, our internal
                fund can also co-invest into any of the start-ups using
                different range of instruments.
              </p>
            </div>
          </section>
          <section
            className={`md:w-1/2 px-[24px] py-[40px] flex items-end bg-[url('/assets/jpg/success.jpg')] bg-cover bg-center text-white`}
          >
            <div>
              <h3 className="text-xl font-semibold mb-4 pt-[20px]">
                Success Stories
              </h3>
              <p>
                To date, we have supported over 500 SMEs, helping them
                collectively raise over $250 million in funding and create over
                6,000 jobs, contributing to substantial economic growth across
                West and Central Africa.
              </p>
            </div>
          </section>
        </div>
        <div className="flex flex-col md:flex-row justify-between h-[400px]">
          <section
            className={`md:w-1/2  px-[24px] py-[40px] flex items-end bg-[url('/assets/jpg/Strategic.jpg')] bg-cover bg-center  text-white`}
          >
            <div>
              <h3 className="text-xl font-semibold mb-4 pt-[20px]">
                Strategic Partnerships
              </h3>
              <p>
                We collaborate with key industry players to provide start-ups
                with resources, expertise, and market access, fostering a
                thriving start-up ecosystem. We have been engaged by the African
                Guarantee Fund (AGF) and African Development Bank (AfDB) to
                organise Incubator and Accelerator Programs targeted at Youths
                and Women owned businesses across West and Central Africa
                regions.
              </p>
            </div>
          </section>
          <section
            className={`md:w-1/2 px-[24px] py-[40px] flex items-end bg-[url('/assets/jpg/investment.jpg')] bg-cover bg-center text-white`}
          >
            <div>
              <h3 className="text-xl font-semibold mb-4 pt-[20px]">
                Investment Platforms
              </h3>
              <p>
                Participants at our Incubator and Accelerator Programs have a
                higher chance of being linked to potential investors as they are
                listed on our Investment Platform granting access to our network
                of funding partners.
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className={`py-[60px] lg:py-[120px]`}>
        <div className="pt-[40px]">
          <h1 className="text-[30px] sm:text-[48px] leading-[57px] text-black font-[600] text-center pb-[10px] sm:pb-[24px]">
            Target Impact Sectors
          </h1>
          <p className="text-greyish-10 mx-auto text-center w-[90%] sm:w-[70%] xl:w-[70%] text-base">
            These sectors represent the focal areas for the accelerator
            programme sponsored by FRAGG Investment, strategically aimed at
            fostering positive societal impact and sustainable economic growth.
          </p>
        </div>
        <div className="pb-[96px]">
          <div className="flex justify-center gap-[30px] pt-[80px]">
            <div className="flex flex-col gap-[40px] sm:flex-row justify-between w-[90%] xl:w-[80%] pb-[30px] sm:pb-0">
              <div className="w-[100%] text-center sm:pr-[40px] xl:pr-[80px] sm:pb-[40px] xl:pb-[80px]">
                <div className={`relative w-[40px] h-[40px] mx-auto`}>
                  <Image
                    src="/assets/svg/about/line-chart.svg"
                    fill
                    alt={"Banner preview"}
                  />
                </div>
                <h1 className="text-[#181818] font-[700] text-[20px] leading-5 py-[24px]">
                  Inclusive Finance
                </h1>
                <p className="text-greyish-10">
                  Including but not limited to Microfinance/SMEs Banks, Finance
                  Houses, Other Financial Intermediaries, Commercial Banks,
                  Payment Solutions, and other Financial Technology Solutions
                  and Businesses.
                </p>
              </div>
              <div className="w-[100%] text-center sm:border-l border-[#E4E4E7] sm:pl-[40px] xl:pl-[80px] sm:pb-[40px] xl:pb-[80px]">
                <div className={`relative w-[40px] h-[40px] mx-auto`}>
                  <Image
                    src="/assets/svg/about/wave.svg"
                    fill
                    alt={"Banner preview"}
                  />
                </div>
                <h1 className="text-[#181818] font-[700] text-[20px] leading-5 py-[24px]">
                  Agriculture
                </h1>
                <p className="text-greyish-10">
                  Agribusinesses including food production especially
                  small-holder farming, food processing and storage, packaging,
                  distribution (transportation and haulage), and
                  wholesale/retail market (export or domestic).
                </p>
              </div>
              <div className="w-[100%] text-center sm:border-l border-[#E4E4E7] sm:pl-[40px] xl:pl-[80px] sm:pb-[40px] xl:pb-[80px]">
                <div className={`relative w-[40px] h-[40px] mx-auto`}>
                  <Image
                    src="/assets/svg/about/health.svg"
                    fill
                    alt={"Banner preview"}
                  />
                </div>
                <h1 className="text-[#181818] font-[700] text-[20px] leading-5 py-[24px]">
                  Health
                </h1>
                <p className="text-greyish-10">
                  From diagnosis to treatment and core areas of health
                  management and prevention, including general and specialized
                  hospitals, primary health care centers, pharmaceuticals, HMOs,
                  and Health Tech.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden sm:block bg-[#E4E4E7] h-[2px] w-[85%] mx-auto"></div>
          <div className="flex justify-center">
            <div className="flex flex-col gap-[40px] sm:flex-row justify-between w-[90%] xl:w-[80%]">
              <div className="w-[100%] text-center sm:pr-[40px] xl:pr-[80px] sm:pt-[40px] xl:pt-[80px]">
                <div className={`relative w-[40px] h-[40px] mx-auto`}>
                  <Image
                    src="/assets/svg/about/house.svg"
                    fill
                    alt={"Banner preview"}
                  />
                </div>
                <h1 className="text-[#181818] font-[700] text-[20px] leading-5 py-[24px]">
                  Housing
                </h1>
                <p className="text-greyish-10">
                  Housing projects that increase access to practical and viable
                  housing especially for earners on the lower end of the
                  spectrum. Sustainable and energy efficiency housing projects
                  are of particular interest.
                </p>
              </div>
              <div className="w-[100%] text-center sm:border-l border-[#E4E4E7] sm:pl-[40px] xl:pl-[80px] sm:pt-[40px] xl:pt-[80px] sm:-translate-y-[1px]">
                <div className={`relative w-[40px] h-[40px] mx-auto`}>
                  <Image
                    src="/assets/svg/about/graduation-cap.svg"
                    fill
                    alt={"Banner preview"}
                  />
                </div>
                <h1 className="text-[#181818] font-[700] text-[20px] leading-5 py-[24px]">
                  Education
                </h1>
                <p className="text-greyish-10">
                  Inclusive education models with projects covering low-fee
                  private education in preparatory, primary, secondary,
                  tertiary, and vocational institutions, EdTech, Educational
                  Infra and related services.
                </p>
              </div>
              <div className="w-[100%] text-center sm:border-l border-[#E4E4E7] sm:pl-[40px] xl:pl-[80px] sm:pt-[40px] xl:pt-[80px] sm:-translate-y-[1px]">
                <div className={`relative w-[40px] h-[40px] mx-auto`}>
                  <Image
                    src="/assets/svg/about/cloud.svg"
                    fill
                    alt={"Banner preview"}
                  />
                </div>
                <h1 className="text-[#181818] font-[700] text-[20px] leading-5 py-[24px]">
                  Climate
                </h1>
                <p className="text-greyish-10">
                  Projects covering Climate Mitigation, Adaptation and REDD+
                  (reducing emissions from deforestation and forest
                  degradation), Renewable Energy, Efficient Energy Generation
                  and much more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative accelerator-cta flex justify-start items-center pl-[20px] lg:pl-[80px]">
        <h1 className="text-[36px] lg:text-[48px] leading-[56px] lg:leading-[64px] font-[600] text-white">
          FRAGG Investment Incubation/Accelerator Hub is <br />
          committed to empowering start-ups and driving <br />
          innovation. We are proud of our achievements and <br />
          look forward to continuing our mission of <br />
          supporting the next generation of entrepreneurs.
        </h1>
      </div>
      <BeginYourInvestment />
    </div>
  );
};

export default Accelerator;
