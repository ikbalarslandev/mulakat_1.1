import Select from "../ui-components/select";

const ForeignLanguages = () => {
  const languageData = [
    { label: "English", value: "English" },
    { label: "French", value: "French" },
    { label: "German", value: "German" },
  ];

  const languageLevelData = [
    { label: "Beginner", value: "Beginner" },
    { label: "Intermediate", value: "Intermediate" },
    { label: "Advanced", value: "Advanced" },
  ];

  return (
    <div className="flex gap-5 flex-col md:flex-row my-8">
      <Select data={languageData} label="Yabanci Dil" />
      <Select data={languageLevelData} label="Yabanci Dil Seviyesi" />
    </div>
  );
};

export default ForeignLanguages;
