import {useState} from "react";
import Image from "next/image";

interface DynamicDoubleInputFormProps {
  label: string;
  firstPlaceholder: string;
  secondPlaceholder: string;
  onChange: (values: string[]) => void;
  error?: string;
}

const DynamicDoubleInputForm: React.FC<DynamicDoubleInputFormProps> = ({
  label,
  firstPlaceholder,
  secondPlaceholder,
  onChange,
  error,
}) => {
  const [fields, setFields] = useState([{firstValue: "", secondValue: ""}]);

  const handleAddField = () => {
    setFields([...fields, {firstValue: "", secondValue: ""}]);
  };

  const handleRemoveField = (index: number) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
    onChange(
      newFields.map(field => `${field.firstValue} - ${field.secondValue}`)
    );
  };

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {name, value} = event.target;
    const newFields = fields.map((field, i) =>
      i === index ? {...field, [name]: value} : field
    );
    setFields(newFields);
    onChange(
      newFields.map(field => `${field.firstValue} - ${field.secondValue}`)
    );
  };

  return (
    <div className="flex flex-col space-y-2 md:w-1/2 md:col-span-2">
      <label>{label}</label>
      {fields.map((field, index) => (
        <div key={index} className="flex items-center space-x-2 mb-4">
          <input
            type="text"
            name="firstValue"
            value={field.firstValue}
            onChange={event => handleChange(index, event)}
            className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-1/2"
            placeholder={firstPlaceholder}
          />
          <input
            type="text"
            name="secondValue"
            value={field.secondValue}
            onChange={event => handleChange(index, event)}
            className="border-2 border-[#D9D9D9] py-4 px-6 rounded-xl w-1/2"
            placeholder={secondPlaceholder}
          />
          <button
            type="button"
            onClick={handleAddField}
            className="bg-pinkish-10 p-2 rounded-lg"
          >
            <Image
              src="/assets/svg/plus.svg"
              width={32}
              height={32}
              alt="plus symbol"
            />
          </button>
          {index > 0 && (
            <button
              type="button"
              onClick={() => handleRemoveField(index)}
              className="bg-[#F9FAFC] text-white p-3 rounded-lg"
            >
              <Image
                alt="trash symbol"
                src="/assets/svg/trash.svg"
                width={24}
                height={24}
              />
            </button>
          )}
        </div>
      ))}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default DynamicDoubleInputForm;
