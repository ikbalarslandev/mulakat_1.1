import Select from "./ui-components/select";
import RadioGroup from "./ui-components/radio";

const Basic = () => {
  const positionData = [
    {
      value: "Satis Temsilcisi",
      label: "Satis Temsilcisi",
    },
    {
      value: "Yazilimci",
      label: "Yazilimci",
    },
    {
      value: "Is guvenligi uzmani",
      label: "Is guvenligi uzmani",
    },
  ];
  const genderData = [
    {
      value: "Erkek",
      label: "Erkek",
    },
    {
      value: "Kadin",
      label: "Kadin",
    },
  ];
  const experienceData = [
    {
      value: "1-3",
      label: "1-3",
    },
    {
      value: "3-5",
      label: "3-5",
    },
    {
      value: "5-10",
      label: "5-10",
    },
  ];
  const cityData = [
    {
      value: "Istanbul",
      label: "Istanbul",
    },
    {
      value: "Ankara",
      label: "Ankara",
    },
    {
      value: "Izmir",
      label: "Izmir",
    },
  ];
  const provinceData = [
    {
      value: "Kadikoy",
      label: "Kadikoy",
    },
    {
      value: "Besiktas",
      label: "Besiktas",
    },
    {
      value: "Uskudar",
      label: "Uskudar",
    },
  ];
  const radioData = ["Tum Adaylar", "Incelenenler", "Incelenmeyenler"];
  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-5">
        <Select data={positionData} label="Pozisyon" />
        <Select data={genderData} label="Cinsiyet" />
        <Select data={experienceData} label="Deneyim" />
      </div>
      <div className=" flex items-center justify-between gap-5 my-3">
        <Select data={cityData} label="Sehir" />
        <Select data={provinceData} label="Ilce" />
      </div>
      <RadioGroup data={radioData} />
    </div>
  );
};

export default Basic;
