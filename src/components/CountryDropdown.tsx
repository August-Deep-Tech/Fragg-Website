import React, { useState } from "react";
import { capitalize } from "lodash";
import styled from "styled-components";
import Image from "next/image";
import { IoMdSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";


const Select = styled.div`
  border-right: 0;
  padding: 16px 10px 18px 10px;
  outline: none;
  width: 100%;
  color: #062638;
  background: #fafafa;
  border-radius: 12px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--LearnPapayaText2);
  }
  @media (max-width: 600px) {
    padding: 14px 10px 14px 10px;
  }
`;
const OptionContainer = styled.div`
  margin: 5px 0 0 0;
  border: 1px solid #f3f4f6;
  box-shadow: 0px 4px 6px -1px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.1);
  border-radius: 8px;
  background: var(--footerText3);
`;
const Option = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 10px 0 10px 16px;
  color: #374151;
  &:hover {
    background: #f9fafb;
  }
  &:hover .dropdownarrow {
    opacity: 1;
  }
`;

interface IProps {
    onChange: any;
    options: any;
    value?: any
  }

const DropdownMenu = ({ onChange, options, value }: IProps) => {
  const [searchString, setSearchString] = useState("");
  const [option, setOptionSelect] = useState<Record<string, any>>(value);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const filteredCountry = React.useCallback(
    (country: { countryName: any; }) =>
      (country.countryName || "")
        .toLowerCase()
        .includes(searchString.toLowerCase()),
    [searchString]
  );

  return (
    <div className="">
      <div className="relative">
        <Select
          className="text-[14px] cursor-pointer flex space-x-2 justify-end"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span className={"flex border-black text-center"}>
            {option.countryCode}
          </span>

          <div className="left-[60px]">
          <RiArrowDropDownLine className={showDropdown ? "rotate-0" : "rotate-180"}/>
            {/* <Image
              src="/assets/interface/dropdown.svg"
              width={10}
              height={10}
              objectFit="contain"
              alt="dropdown-arrow"
            /> */}
          </div>
        </Select>
      </div>

      {showDropdown && (
        <div className="relative bg-white z-[10] w-[293px] flex flex-col">
          <div className={"absolute top-0 z-20 left-0 right-0"}>
            <div className="flex relative w-full bg-white px-[12px] py-[8px] z-[11] top-[6px] rounded-t-lg items-center border">
              <div className="absolute px-2">
                <IoMdSearch />
              </div>

              <Input
                className="flex-1 pl-8 text-sm py-1"
                name="name"
                type="text"
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
                placeholder="Search country"
              />
            </div>
          </div>

          <OptionContainer className="py-[14px] mt-[5px] absolute left-0 right-0 overflow-y-scroll cursor-pointer customInfoWrapper h-[190px] z-10 bg-white">
            <ul className="pt-[40px]">
              {options.filter(filteredCountry).map((opt: any, index: any) => {
                return (
                  <Option
                    className="flex items-center space-x-[10px] px-4 text-sm"
                    onClick={() => {
                      setOptionSelect(opt);
                      setShowDropdown(!showDropdown);

                      onChange(opt);
                    }}
                    key={index}
                  >
                    <div className="w-[30px] relative h-[22px] flex-shrink-0">
                      <Image
                        src={opt.flag}
                        objectFit="contain"
                        alt="dropdown-arrow"
                        layout={"fill"}
                      />
                    </div>

                    <h1 className="flex-row whitespace-nowrap flex-1">
                      {capitalize(opt.countryName)}
                    </h1>

                    <h1 className="flex-shrink-0">({opt.countryCode})</h1>
                  </Option>
                );
              })}
            </ul>
          </OptionContainer>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

const Input = styled.input`
  border: 1px solid #e3e8ef;
  padding-left: 47px;
  outline: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  color: var(--neutral-800);

  &:hover,
  &:focus {
    transition: all 0.1s ease-out;
    border: 1px solid #eaecf0;
    box-shadow: 0px 1px 2px rgba(242, 98, 85, 0.07),
      0px 0px 0px 3px rgba(242, 98, 85, 0.11);
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--neutal-400);
  }
`;
