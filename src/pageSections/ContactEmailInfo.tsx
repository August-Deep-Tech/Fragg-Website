import React, {FC} from "react";
import Image from "next/image";

interface EmailProps {
  src: string;
  title: string;
  email: string;
}

const emails = [
  {
    src: "/assets/svg/mail.svg",
    title: "General Enquiry",
    email: "info@FRAGGinvest.com",
  },
  {
    src: "/assets/svg/mail.svg",
    title: "SME Funding",
    email: "smefinance@FRAGGinvest.com",
  },
  {
    src: "/assets/svg/mail.svg",
    title: "Investors",
    email: "invest@FRAGGinvest.com",
  },
  {
    src: "/assets/svg/mail.svg",
    title: "Accelerator Programme",
    email: "accelerator@FRAGGinvest.com",
  },
];

const EmailCardDisplay: FC<EmailProps> = ({src, title, email}) => (
  <div className="flex flex-col">
    <Image
      src={src}
      height={30}
      width={33.33}
      alt={"Banner preview"}
      className="mb-5"
    />
    <div>
      <h3 className="text-greyish-30 text-2xl font-semibold">{title}</h3>
      <p className="text-greyish-10 hover:underline cursor-pointer">
        <a href={`mailto:${email}`}> {email}</a>
      </p>
    </div>
  </div>
);

const ContactEmailInfo = () => {
  return (
    <div className="py-20">
      <h2 className="text-4xl md:text-5xl text-greyish-30 font-semibold mb-5">
        Need specific information?
      </h2>
      <p className="text-greyish-10 mb-10">
        Send us an email and our team of experts will send you all the details
        you need to get started.{" "}
      </p>
      <div className="flex gap-y-6 lg:gap-y-0 flex-col lg:flex-row justify-between">
        {emails.map((email, index) => (
          <EmailCardDisplay
            key={index}
            src={email.src}
            title={email.title}
            email={email.email}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactEmailInfo;
