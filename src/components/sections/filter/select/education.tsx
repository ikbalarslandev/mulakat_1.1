import Select from "../ui-components/select";

const Education = () => {
  const educationLevelData = [
    { label: "Ilkokul", value: "Ilkokul" },
    { label: "Ortaokul", value: "Ortaokul" },
    { label: "Lise", value: "Lise" },
  ];
  const educationFieldData = [
    { label: "Software", value: "Software" },
    { label: "Hardware", value: "Hardware" },
    { label: "Network", value: "Network" },
  ];
  const universityData = [
    { label: "Bogazici", value: "Bogazici" },
    { label: "ITU", value: "ITU" },
    { label: "YTU", value: "YTU" },
  ];

  return (
    <div className="flex gap-5">
      <Select data={educationLevelData} label="Egitim Seviyesi" />
      <Select data={educationFieldData} label="Bolum" />
      <Select data={universityData} label="Universite" />
    </div>
  );
};

export default Education;
