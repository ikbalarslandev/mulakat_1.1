import Select from "../ui-components/select";
import RadioGroup from "../ui-components/radio";

const PersonalInfo = () => {
  const dayData = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
  ];
  const monthData = [
    { label: "January", value: 1 },
    { label: "February", value: 2 },
    { label: "March", value: 3 },
  ];
  const yearData = [
    { label: "2021", value: 2021 },
    { label: "2022", value: 2022 },
    { label: "2023", value: 2023 },
  ];
  const yearGapData = [
    { label: "18", value: 18 },
    { label: "25", value: 25 },
    { label: "40", value: 40 },
  ];
  return (
    <div className="text-gray-600">
      <p className="my-1">Ozgecmis guncelleme tarihi</p>
      <div className="flex gap-5">
        <Select data={dayData} label="" placeholder="Gun" />
        <Select data={monthData} label="" placeholder="Ay" />
        <Select data={yearData} label="" placeholder="Yil" />
      </div>
      <div className="flex flex-col md:flex-row gap-5 my-3">
        <Select data={yearGapData} label="Yas Araligi/Min" />
        <Select data={yearGapData} label="Yas Araligi/Max" />
      </div>
      <div className="flex justify-between flex-col md:flex-row">
        <div>
          <p>Medeni Hal</p>
          <RadioGroup data={["Fark Etmez", "Evli", "Bekar"]} />
        </div>
        <div>
          <p>Sigara Kullanimi</p>
          <RadioGroup data={["Fark Etmez", "Hayir", "Evet"]} />
        </div>
      </div>

      <div className="my-3">
        <p>Ehliyet</p>
        <RadioGroup data={["Fark Etmez", "Var", "Yok"]} />
      </div>
    </div>
  );
};

export default PersonalInfo;
