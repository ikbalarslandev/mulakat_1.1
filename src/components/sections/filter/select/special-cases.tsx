import RadioGroup from "../ui-components/radio";

const SpecialCases = () => {
  return (
    <div>
      <p>Engel Durumu</p>
      <RadioGroup data={["Fark Etmez", "Evet", "Hayir"]} />
    </div>
  );
};

export default SpecialCases;
