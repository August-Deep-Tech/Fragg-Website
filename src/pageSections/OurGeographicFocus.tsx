import React from "react";

const OurGeographicFocus = () => {
  return (
    <div className="bg-[url('/assets/png/geographicFocus.png')] bg-cover text-white">
      <div className="container mx-auto px-4 2xl:px-0 py-28 flex flex-col items-center text-center">
        <div className="flex flex-col gap-y-6 lg:w-[52.5rem]">
          {" "}
          <h3 className="text-4xl md:text-5xl font-semibold">
            Our Geographic Focus
          </h3>
          <p>
            At FRAGG Invest - Sàrl, we target key regions where we see the
            greatest potential for growth and impact. Through careful analysis,
            we identify promising markets and opportunities for investment. By
            concentrating our efforts in these areas, we aim to drive economic
            development and create lasting value for both investors and local
            communities.
          </p>
          <div className="flex gap-y-10 md:gapy-y-0 flex-col md:flex-row justify-around *:font-bold text-[2rem]">
            <h4>Europe</h4>
            <h4>Latin America</h4>
            <h4>Africa</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGeographicFocus;
