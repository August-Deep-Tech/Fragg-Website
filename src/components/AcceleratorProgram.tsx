import React, { useState } from 'react'
import AcceleratorForm from './Accelerator Form'

const AcceleratorProgram = () => {
  return (
    <div>
      <div className="px-[20px] py-[60px] sm:py-[112px] xl:px-[64px]">
        <div>
          <h1 className='text-[48px] leading-[57px] text-[#18181B]'>Application Process</h1>
          <p className='text-[#757575] pt-[24px]'>Start-ups with a viable product or service, high-growth potential,
            and a strong and committed team can apply to our programs through an
            online application, initial screening, and pitch presentation.
            Call for Application are posted on our website all year round.</p>
        </div>
        <div className='pt-[54px]'>
          <h1 className='text-[48px] leading-[57px] text-[#18181B]'>Application Form</h1>
          <p className='pt-[24px] sm:pt-[40px] pb-[20px] sm:pb-[40px] text-[24px]'>Instructions</p>
          <div className='text-[#757575] text-[18px]'>
            <p className=''>
              The completed application form will give us as much insight into your
              company as is necessary to appraise the state of the business at the
              time of your application, please provide the most up-to-date information.
            </p>
            <p className=' pt-[10px]'>
              Please note that application can be submitted either by filling the form at
              the bottom of the page or by clicking the <span className='underline'>Apply</span> button which will take you
              to the same form on the <span className='underline'>F6s platform.</span> Both forms are the same and you can fill
              one or the other, not both. Application from both platforms are accorded the
              same status.
            </p>
            {/* <p className='pt-[10px]'> */}
            <ul className="list-decimal list-item space-y-2 translate-x-5">
                <li > Read through each question carefully and provide only information that is true and for which you have supporting documentation where applicable</li>
                <li> Where options are provided, please select the option that best answers the question for your organisation. Where more than one option applies, fill the others in the space provided, if available.</li>
                <li> The questions provided will provide insight into the eligibility of your company for this programme. Note that further documentation will be required after this stage of your application.</li>
                <li>  All application must be submitted by 06:00 pm, 31 August 2025. Applications submitted later than this date will not be eligible for review.</li>
                <li>  The form works offline too so you don’t have to worry about losing data if your internet gets disconnected or you have to leave the form for a moment. Ensure that the browser tab remains open to be on the safer side.</li>
              </ul>
            {/* </p> */}
            <p className='pt-[10px]'>Please send all enquiries to  <a href='mailto:accelerator@FRAGGinvest.com'>accelerator@FRAGGinvest.com</a></p>

          </div>
        </div>
        <AcceleratorForm />
      </div>
    </div>
  )
}

export default AcceleratorProgram