import React from 'react';

interface FormInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  type?: string;
  id?: string;
  name?: string;
  className?: string;
  isRequired?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  value,
  type = 'text',
  id,
  name,
  className,
  onChange,
  onKeyPress,
  required = false,
  isRequired
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="pb-[10px]">
          {label} {isRequired && <span className='text-redish-20'>*</span>}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        className={`border border-[#D9D9D9] rounded-md pl-[20px] py-[12px] ${className}`}
        onChange={onChange}
        onKeyPress={onKeyPress}
        required={required}
      />
    </div>
  );
};

export default FormInput;
