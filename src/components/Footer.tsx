"use client";

import Link from "next/link";
import Image from "next/image";
import usePathCheck from "@/hooks/usePathCheck";
import {usePathname} from "next/navigation";

import {bebasNeue, redHatDisplay} from "@/styles/font";
import {Key} from "react";

const Footer = () => {
  const {isFraggNigeria, isFraggGmbh, isFraggSarl} = usePathCheck();
  let logoSrc = "";
  let logoHref = "";
  let footerCategory: any[] = [];
  if (isFraggNigeria) {
    logoSrc = "/assets/fragginvest-logo.svg";
    logoHref = "/fragg-nigeria";
    footerCategory = [
      {
        categoryName: "GET IN TOUCH",
        children: [
          {
            text: "Facebook",
            linkTo:
              "https://www.facebook.com/people/FRAGG-Investment-Management-Limited/100063701136300/?ref=br_rs",
            ext: true,
            isLink: true,
          },
          {
            text: "Linkedln",
            linkTo:
              "https://www.linkedin.com/company/fragg-investment-management-limited/",
            ext: true,
            isLink: true,
          },
          {
            text: "X",
            linkTo: "https://twitter.com/fragginvest",
            ext: true,
            isLink: true,
          },
          {
            text: "Press Release",
            linkTo: "https://medium.com/@jubilant_gamboge_locust_73",
            ext: true,
            isLink: true,
          },
        ],
      },
      {
        categoryName: "EXPLORE",
        children: [
          {
            text: "About Us",
            linkTo: `${logoHref}/about`,
            ext: false,
            isLink: true,
          },
          {
            text: "Our Services",
            linkTo: `${logoHref}/services`,
            ext: false,
            isLink: true,
          },
          {
            text: "Impact and Sustainability",
            linkTo: `${logoHref}/impact-and-sustainability`,
            ext: false,
            isLink: true,
          },
          {
            text: "Advisory",
            linkTo: `${logoHref}/advisory`,
            ext: false,
            isLink: true,
          },
          {
            text: "FRAGG Group",
            linkTo: `${logoHref}/fragg-group`,
            ext: false,
            isLink: true,
          },
          {
            text: "Contact Us",
            linkTo: `${logoHref}/contact`,
            ext: false,
            isLink: true,
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
            isLink: false,
          },
          {
            text: "FRAGG-Invest GmbH, Germany",
            textTwo:
              "HRB 9048 -Amtsgericht Düren Landstraße 37, D-52445 Titz, Germany",
            linkTo: "",
            ext: true,
            isLink: false,
          },
          {
            text: "FRAGG-Invest GP Sàrl, Luxembourg",
            textTwo:
              "2C, Parc D’Activités-BP027 L-8308 Capellen Grand-Duchy of Luxembourg",
            linkTo: "#",
            ext: true,
            isLink: false,
          },
        ],
      },
    ];
  }
  if (isFraggGmbh) {
    logoSrc = "/assets/fragginvest-logo-gmbh.svg";
    logoHref = "/fragg-gmbh";
    footerCategory = [
      {
        categoryName: "GET IN TOUCH",
        children: [
          {
            text: "Facebook",
            linkTo:
              "https://www.facebook.com/people/FRAGG-Investment-Management-Limited/100063701136300/?ref=br_rs",
            ext: true,
            isLink: true,
          },
          {
            text: "Linkedln",
            linkTo:
              "https://www.linkedin.com/company/fragg-investment-management-limited/",
            ext: true,
            isLink: true,
          },
          {
            text: "X",
            linkTo: "https://twitter.com/fragginvest",
            ext: true,
            isLink: true,
          },
          {
            text: "Press Release",
            linkTo: "https://medium.com/@jubilant_gamboge_locust_73",
            ext: true,
            isLink: true,
          },
        ],
      },
      {
        categoryName: "EXPLORE",
        children: [
          {
            text: "About Us",
            linkTo: `${logoHref}/about`,
            ext: false,
            isLink: true,
          },
          {
            text: "Our Services",
            linkTo: `${logoHref}/services`,
            ext: false,
            isLink: true,
          },
          {
            text: "Impact and Sustainability",
            linkTo: `${logoHref}/impact-and-sustainability`,
            ext: false,
            isLink: true,
          },
          {
            text: "Advisory",
            linkTo: `${logoHref}/advisory`,
            ext: false,
            isLink: true,
          },
          {
            text: "FRAGG Group",
            linkTo: `${logoHref}/fragg-group`,
            ext: false,
            isLink: true,
          },
          {
            text: "Contact Us",
            linkTo: `/fragg-nigeria/contact`,
            ext: false,
            isLink: true,
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
            isLink: false,
          },
          {
            text: "FRAGG-Invest GmbH, Germany",
            textTwo:
              "HRB 9048 -Amtsgericht Düren Landstraße 37, D-52445 Titz, Germany",
            linkTo: "",
            ext: true,
            isLink: false,
          },
          {
            text: "FRAGG-Invest GP Sàrl, Luxembourg",
            textTwo:
              "2C, Parc D’Activités-BP027 L-8308 Capellen Grand-Duchy of Luxembourg",
            linkTo: "#",
            ext: true,
            isLink: false,
          },
        ],
      },
    ];
  }
  if (isFraggSarl) {
    logoSrc = "/assets/fragginvest-logo-sarl.svg";
    logoHref = "/fragg-sarl";
    footerCategory = [
      {
        categoryName: "GET IN TOUCH",
        children: [
          {
            text: "Facebook",
            linkTo:
              "https://www.facebook.com/people/FRAGG-Investment-Management-Limited/100063701136300/?ref=br_rs",
            ext: true,
            isLink: true,
          },
          {
            text: "Linkedln",
            linkTo:
              "https://www.linkedin.com/company/fragg-investment-management-limited/",
            ext: true,
            isLink: true,
          },
          {
            text: "X",
            linkTo: "https://twitter.com/fragginvest",
            ext: true,
            isLink: true,
          },
          {
            text: "Press Release",
            linkTo: "https://medium.com/@jubilant_gamboge_locust_73",
            ext: true,
            isLink: true,
          },
        ],
      },
      {
        categoryName: "EXPLORE",
        children: [
          {
            text: "About Us",
            linkTo: `${logoHref}/about`,
            ext: false,
            isLink: true,
          },
          {
            text: "Our Services",
            linkTo: `${logoHref}/services`,
            ext: false,
            isLink: true,
          },
          {
            text: "Funds",
            linkTo: `${logoHref}/funds`,
            ext: false,
            isLink: true,
          },
          {
            text: "FRAGG Group",
            linkTo: `${logoHref}/fragg-group`,
            ext: false,
            isLink: true,
          },
          {
            text: "Contact Us",
            linkTo: `/fragg-nigeria/contact`,
            ext: false,
            isLink: true,
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
            isLink: false,
          },
          {
            text: "FRAGG-Invest GmbH, Germany",
            textTwo:
              "HRB 9048 -Amtsgericht Düren Landstraße 37, D-52445 Titz, Germany",
            linkTo: "",
            ext: true,
            isLink: false,
          },
          {
            text: "FRAGG-Invest GP Sàrl, Luxembourg",
            textTwo:
              "2C, Parc D’Activités-BP027 L-8308 Capellen Grand-Duchy of Luxembourg",
            linkTo: "#",
            ext: true,
            isLink: false,
          },
        ],
      },
    ];
  }

  return (
    <footer className="border-t-8 border-redish-20">
      <div className="p-[20px] sm:p-[40px] xl:p-[80px] flex flex-col gap-[64px]">
        <div className="flex justify-between items-center">
          <div
            className={`relative h-[49px] lg:h-[48px] w-[117px] lg:w-[202px]`}
          >
            <Image src={logoSrc} fill alt={"Banner preview"} />
          </div>
          <div>
            <div
              className={`relative h-[25px] w-[25px] sm:h-[49px] sm:w-[48px]`}
            >
              <Image
                src="/assets/footer-icon.svg"
                fill
                alt={"Banner preview"}
              />
            </div>
          </div>
        </div>
        <div
          className={` flex flex-wrap flex-row gap-[28px] gap-y-[35px] md:flex-nowrap sm:flex justify-between lg:mt-0`}
        >
          {footerCategory.map(e => {
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
                  <span
                    className={`${bebasNeue.className} font-heading text-[24px] font-bold md:text-[40px] text-redish-20`}
                  >
                    {"["}
                    {e.categoryName}
                    {"]"}
                  </span>
                  {e.children.map((item: any, idx: Key | null | undefined) => {
                    return (
                      <li
                        key={idx}
                        className={`${redHatDisplay.className} block text-[16px] md:text-[20px] leading-[21px] text-redish-20`}
                      >
                        {item.isLink ? (
                          !item?.ext ? (
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
                          )
                        ) : (
                          <div>
                            <h1 className="text-greyish-10 pb-[4px]">
                              {item.text}
                            </h1>
                            <p>{item.textTwo}</p>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>

        <div className="">
          <p className="border border-t-[#9C0000A3] border-opacity-65 w-[100%]"></p>
          <div className="flex justify-between">
            <h1
              className={`${bebasNeue.className} text-[24px] md:text-[32px] leading-[48px] text-greyish-10 pt-[33px]`}
            >
              © 2024 FRAGG
            </h1>
            <h1
              className={`${bebasNeue.className} text-[24px] md:text-[32px] leading-[48px] text-redish-20 pt-[33px]`}
            >
              Privacy Policy
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
