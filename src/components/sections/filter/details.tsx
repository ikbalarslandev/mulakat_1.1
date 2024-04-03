import DetailsButtons from "./ui-components/details-buttons";
import { useState } from "react";
import Education from "./select/education";
import ForeignLanguages from "./select/foreign-languages";
import JobExperiences from "./select/job-experiences";
import PersonalInfo from "./select/personal-info";
import SpecialCases from "./select/special-cases";

const Details = () => {
  const [active, setActive] = useState("Kisisel Bilgiler");
  const currentComponent = () => {
    switch (active) {
      case "Kisisel Bilgiler":
        return <PersonalInfo />;
      case "Egitim":
        return <Education />;
      case "Is Deneyimleri":
        return <JobExperiences />;
      case "Yabanci Dil":
        return <ForeignLanguages />;
      case "Ozel Durumlar":
        return <SpecialCases />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <div>
      <DetailsButtons active={active} setActive={setActive} />
      {currentComponent()}
    </div>
  );
};

export default Details;
