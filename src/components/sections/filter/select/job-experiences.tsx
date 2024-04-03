import Select from "../ui-components/select";

const JobExperiences = () => {
  const jobtypeData = [
    { label: "Full Time", value: "Full Time" },
    { label: "Part Time", value: "Part Time" },
    { label: "Internship", value: "Internship" },
  ];
  const salaryData = [
    { label: "1000-2000", value: "1000-2000" },
    { label: "2000-3000", value: "2000-3000" },
    { label: "3000-4000", value: "3000-4000" },
  ];
  const experienceAreaData = [
    { label: "Software", value: "Software" },
    { label: "Hardware", value: "Hardware" },
    { label: "Network", value: "Network" },
  ];
  const experienceSectionData = [
    { label: "Frontend", value: "Frontend" },
    { label: "Backend", value: "Backend" },
    { label: "Fullstack", value: "Fullstack" },
  ];

  return (
    <div>
      <div className="flex gap-5 flex-col md:flex-row">
        <Select data={jobtypeData} label="Calisma Sekli Seciniz" />
        <Select data={salaryData} label="Ucret Beklentisi" />
      </div>
      <div className="flex gap-5 my-8 flex-col md:flex-row ">
        <Select data={experienceAreaData} label="Deneyim Sektoru" />
        <Select data={experienceSectionData} label="Deneyim Bolumu" />
      </div>
    </div>
  );
};

export default JobExperiences;
