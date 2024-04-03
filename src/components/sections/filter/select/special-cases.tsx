import RadioGroup from "../ui-components/radio";

const SpecialCases = () => {
  return (
    <div className="text-gray-600">
      <p>Engel Durumu</p>
      <RadioGroup data={["Fark Etmez", "Evet", "Hayir"]} />
    </div>
  );
};

export default SpecialCases;
