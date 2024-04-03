import { Button } from "../../../ui/button";

interface DetailsButtonsProps {
  active: string;
  setActive: (value: string) => void;
}

const Data = [
  "Kisisel Bilgiler",
  "Is Deneyimleri",
  "Yabanci Dil",
  "Egitim",
  "Ozel Durumlar",
];

const DetailsButtons = ({ active, setActive }: DetailsButtonsProps) => {
  return (
    <div className="w-full overflow-x-auto flex gap-3 mb-5 ">
      {Data.map((item) => (
        <Button
          variant={active === item ? "detailsActive" : "details"}
          onClick={() => setActive(item)}
          key={item}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default DetailsButtons;
