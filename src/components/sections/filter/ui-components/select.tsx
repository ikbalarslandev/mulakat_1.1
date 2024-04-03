import { useState } from "react";

const Select = ({ data, label }: any) => {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: any) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <div className="flex-1 ">
      <p className="text-gray-600">{label}</p>
      <button
        className="bg-white border border-blue-800 rounded-md shadow-sm px-4 py-2 w-full text-left "
        onClick={toggleDropdown}
      >
        {selected ? selected : "Seciniz"}
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 flex-1 bg-white border border-gray-300 w-60 shadow-lg ">
          <div className="py-1">
            {data.map((item: any) => (
              <div
                key={item.value}
                className="text-gray-700 hover:bg-gray-100 px-4 py-2 cursor-pointer"
                onClick={() => handleSelect(item.value)}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
