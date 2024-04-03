import { Checkbox } from "@/components/ui/checkbox";

const Header = () => {
  return (
    <div className="flex justify-between pr-5 pt-5 bg-white shadow">
      <div>
        <Checkbox id="All" className="mr-5 ml-2" />
        Aday
      </div>
      <p>Meslek/Egitim Bilgisi</p>
      <p>Son Is Deneyimi </p>
      <p>Islemler</p>
    </div>
  );
};

export default Header;
