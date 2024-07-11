import React from "react";

interface DropdownProps {
  options: {value: string; label: string}[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  id?: string;
  name?: string;
  className?: string;
  label?: string;
  required?: boolean;
  defaultValue?: string; // Add defaultValue prop
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  id,
  name,
  className,
  label,
  required = false,
  defaultValue = '', // Default to an empty string if not provided
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="pb-[10px]">
          {label}
        </label>
      )}
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`border border-[#D9D9D9] rounded-md pl-[20px] py-[12px] ${className} `}
        required={required}
      >
        {defaultValue && (
          <option value="" disabled hidden>
            {defaultValue}
          </option>
        )}
        {options.map((option, index) => (
          <option
            key={index}
            value={option.value}
            className={option.value === "" ? "hidden" : ""}
            disabled={option.value === ""}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
