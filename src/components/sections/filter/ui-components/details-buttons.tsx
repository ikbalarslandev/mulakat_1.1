import { Button } from "../../../ui/button";

interface DetailsButtonsProps {
  active: string;
  setActive: (value: string) => void;
}

const DetailsButtons = ({ active, setActive }: DetailsButtonsProps) => {
  return (
    <div className="w-full flex gap-3 mb-5 min-w-[500px]">
      <Button
        variant={active === "Kisisel Bilgiler" ? "detailsActive" : "details"}
        onClick={() => setActive("Kisisel Bilgiler")}
      >
        Kisisel Bilgiler
      </Button>
      <Button
        variant={active === "Is Deneyimleri" ? "detailsActive" : "details"}
        onClick={() => setActive("Is Deneyimleri")}
      >
        Is Deneyimleri
      </Button>
      <Button
        variant={active === "Yabanci Dil" ? "detailsActive" : "details"}
        onClick={() => setActive("Yabanci Dil")}
      >
        Yabanci Dil
      </Button>
      <Button
        variant={active === "Egitim" ? "detailsActive" : "details"}
        onClick={() => setActive("Egitim")}
      >
        Egitim
      </Button>
      <Button
        variant={active === "Ozel Durumlar" ? "detailsActive" : "details"}
        onClick={() => setActive("Ozel Durumlar")}
      >
        Ozel Durumlar
      </Button>
    </div>
  );
};

export default DetailsButtons;
