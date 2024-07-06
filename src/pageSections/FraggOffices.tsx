import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CountryCardProps {
  backgroundUrl: string;
  phoneNumbers: string[];
  addressTitle: string;
  addressBody: string;
  location: string;
}

const props: CountryCardProps[] = [
  {
    backgroundUrl: 'bg-[url("/assets/png/fraggGroup/fragg-ng.png")]',
    phoneNumbers: ["+234 806 519 2718"],
    location: "Nigeria",
    addressTitle: "FRAGG Investment Management, Nigeria",
    addressBody: "45b, Oluwaleimu Street,Off Allen Avenue, Ikeja, <br/> Lagos.",
  },
  {
    backgroundUrl: 'bg-[url("/assets/png/fraggGroup/fragg-germany.png")]',
    phoneNumbers: ["+49 2463 7953579", "+49 176 23286609"],
    location: "Germany",
    addressTitle: "FRAGG-Invest GmbH, Germany",
    addressBody:
      "HRB 9048 -Amtsgericht Düren Landstraße 37, <br/> D-52445 Titz, Germany",
  },
  {
    backgroundUrl: 'bg-[url("/assets/png/fraggGroup/fragg-luxemborg.png")]',
    phoneNumbers: ["+49 2463 7953579", "+49 176 23286609"],
    location: "Luxembourg",
    addressTitle: "FRAGG-Invest GP Sàrl, Luxembourg",
    addressBody:
      "2C, Parc D'Activités-BP027 L-8308 Capellen <br/> Grand-Duchy of Luxembourg",
  },
];

const CountryCard: React.FC<CountryCardProps> = ({
  backgroundUrl,
  phoneNumbers,
  addressTitle,
  addressBody,
  location,
}) => (
  <div className={`h-[438px] bg-cover bg-center ${backgroundUrl}`}>
    <div className="text-white p-5 md:p-6 z-30 h-full flex flex-col justify-between">
      {/* location */}
      <div className="flex gap-2">
        <Image
          src="/assets/svg/location.svg"
          width={24}
          height={26.67}
          alt="location svg"
        />
        <h3 className="text-2xl ">{location}</h3>
      </div>
      {/* address and phone number  */}
      <div className="space-y-4">
        {/* address */}
        <div className="flex items-start gap-2">
          <Image
            src="/assets/svg/address.svg"
            width={24}
            height={24}
            alt="location svg"
          />
          <div>
            {/* address title */}
            <h3 className="font-semibold">{addressTitle}</h3>
            {/* address body */}
            <p dangerouslySetInnerHTML={{__html: addressBody}} />
          </div>
        </div>
        {/* phone number */}
        <div className="flex gap-6">
          {phoneNumbers.map((phoneNumber, index) => (
            <a key={index} href={`tel: ${phoneNumber}`}>
              <div className="flex md:gap-2">
                <Image
                  src="/assets/svg/call.svg"
                  width={24}
                  height={24}
                  alt="location svg"
                />
                <h3 className="font-medium">{phoneNumber}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const FraggOffices = () => {
  return (
    <div className=" py-20">
      <h2 className="text-4xl md:text-5xl text-greyish-30 font-semibold mb-4">
        FRAGG offices around the world
      </h2>
      <p className="text-greyish-10 mb-10">
        Our global team is a diverse blend of talent, united in our pursuit of
        excellence, spanning continents, and bringing a wealth of perspectives
        and expertise to every endeavor. You can find information on our offices
        below:
      </p>

      <div className=" flex flex-col md:flex-row rounded-3xl overflow-hidden">
        {props.map((prop, index) => (
          <div key={index} className="flex-1">
            <CountryCard
              backgroundUrl={prop.backgroundUrl}
              phoneNumbers={prop.phoneNumbers}
              addressTitle={prop.addressTitle}
              addressBody={prop.addressBody}
              location={prop.location}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FraggOffices;
