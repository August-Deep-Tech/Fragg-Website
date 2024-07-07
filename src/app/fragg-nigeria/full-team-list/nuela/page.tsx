import React from "react";
import Image from "next/image";

const Nuela = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 py-20 flex gap-8">
      {/* image and email */}
      <div>
        <div className="w-full">
          <Image
            src="/assets/png/team/nuela.png"
            height={340}
            width={280}
            alt="Photo of Nuela"
          />
        </div>
        <div className="text-redish-20 text-center p-4">
          <a
            href="mailto:c.unije@fragginvest.com"
            className="inline-block font-medium "
          >
            c.unije@fragginvest.com
          </a>
        </div>
      </div>
      {/* writeup */}
      <div className="flex flex-col flex-1 gap-3">
        <div className="mb-6">
          <h2 className="font-bold text-4xl text-[#18181B]">
            Nuela Chidimma Unije
          </h2>
          <p className="text-greyish-10 text-2xl">
            Partner and Executive Director
          </p>
        </div>

        <p className="text-greyish-10">
          Nuela Unije, with over 13 years of experience, is a leading figure in
          transformative finance, currently serving as Partner and Investment
          Director at FRAGG-INVEST. Her educational journey, equipped with a
          Bachelor&apos;s in Banking and Finance and a Master&apos;s in Finance
          Management from the University of Lagos, Nigeria, has laid the
          foundation for a career characterized by strategic success and
          significant investments.
        </p>
        <p className="text-greyish-10">
          Dedicated to fostering economic growth and sustainability, Nuela
          played a key role in launching the FRAGG Impact SME Fund I,
          demonstrating her capability in impact investing and commitment to SME
          development. Her ambitions didn&apos;t stop there; Nuela co-founded
          and currently leads the FRAGG-INVEST Green and Impact Fund SCSp,
          driving investments in crucial sectors like financial institutions,
          infrastructure, and SMEs, thereby amplifying the fund&apos;s impact on
          sustainable development.
        </p>
        <p className="text-greyish-10">
          Nuela Unije is a distinguished professional in the fields of
          development finance and investment banking, with a rich history of
          success in originating and closing numerous capital raising deals. Her
          expertise is particularly noted in securing financing from Development
          Finance Institutions (DFIs) and diverse investment agencies, which has
          significantly propelled various impact projects across West Africa.
        </p>
        <p className="text-greyish-10">
          Beyond her executive responsibilities, Nuela&apos;s influence extends
          into the governance of investment funds. She has served on the
          investment committees of several funds, both closed and active, where
          her insights and expertise have guided critical investment decisions
          and policy formulations. This role has allowed her to shape the
          financial landscape of the projects and enterprises supported by these
          funds, ensuring their alignment with broader economic objectives and
          sustainability goals.
        </p>
        <p className="text-greyish-10">
          Her strategic leadership in financial management and investment
          planning continues to contribute to the robust financial health and
          operational success of FRAGG Investment Management and FRAGG-INVEST
          GmbH
        </p>
      </div>
    </div>
  );
};

export default Nuela;
