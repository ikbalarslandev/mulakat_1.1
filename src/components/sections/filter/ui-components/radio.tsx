import { useState } from "react";

function RadioGroup({ data }: { data: string[] }) {
  const [selectedValue, setSelectedValue] = useState<string>("comfortable");

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className="flex gap-5 text-gray-600">
      {data.map((item: any) => (
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id={item}
            value={item}
            checked={selectedValue === item}
            onChange={() => handleChange(item)}
          />
          <label htmlFor={item}>{item}</label>
        </div>
      ))}
    </div>
  );
}

export default RadioGroup;
