import React, {useState} from "react";
import AcceleratorForm from "./Accelerator Form";

const AcceleratorProgram = () => {
  return (
    <div>
      <div className="px-[20px] py-[60px] sm:py-[112px] xl:px-[64px]">
        <div>
          <h1 className="text-[48px] leading-[57px] text-[#18181B]">
            Application Process
          </h1>
          <p className="text-[#757575] pt-[24px]">
            Start-ups with a viable product or service, high-growth potential,
            and a strong and committed team can apply to our programs through an
            online application, initial screening, and pitch presentation. Call
            for Application are posted on our website all year round.
          </p>
        </div>
        <div className="pt-[54px]">
          <h1 className="text-[48px] leading-[57px] text-[#18181B]">
            Application Form
          </h1>
          <p className="pt-[24px] sm:pt-[40px] pb-[20px] sm:pb-[40px] text-[24px]">
            Instructions
          </p>
          <div className="text-[#757575] text-[18px]">
            <p className="">
              The completed application form will provide us with essential
              insights into your company, enabling us to assess its current
              state at the time of your application. Please ensure you provide
              the most up-to-date information.
            </p>
            <p className=" pt-[10px]">
              Please note that you can only apply by completing the form at the
              bottom of the page. To submit your application, start by clicking
              on Step 1 on the form at the bottom of the page and continue
              filling out the subsequent steps accordingly.
            </p>
            {/* <p className='pt-[10px]'> */}
            <ul className="list-decimal list-item space-y-2 translate-x-5">
              <li>
                {" "}
                Carefully read each question and provide accurate information,
                ensuring you have supporting documentation where applicable.
              </li>
              <li>
                {" "}
                Where options are provided, select the one that best fits your
                organization&apos;s situation. If multiple options apply, use
                the provided space to include additional information.
              </li>
              <li>
                {" "}
                The questions in this form will help determine your
                company&apos;s eligibility for this program. Be aware that
                further documentation will be required after this initial stage.
              </li>
              <li>
                {" "}
                All applications must be submitted online through our website,
                where the forms must be completed for review. Failure to do so
                will automatically invalidate the application.
              </li>
              <li>
                {" "}
                Applications are accepted and reviewed on a rolling basis.
              </li>
              <li>
                {" "}
                The form can be completed offline, so you don&apos;t need to
                worry about losing data if your internet connection is
                interrupted or you need to pause. However, to be safe, keep the
                browser tab open while working on the form.
              </li>
            </ul>
            {/* </p> */}
            <p className="pt-[10px]">
              Please for any further clarification, you can send an email
              directly to the address provided for assistance{" "}
              <a
                className="underline"
                href="mailto:accelerator@fragginvest.com "
              >
                accelerator@fragginvest.com
              </a>
            </p>
          </div>
        </div>
        <AcceleratorForm />
      </div>
    </div>
  );
};

export default AcceleratorProgram;
