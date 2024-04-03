import { Checkbox } from "@/components/ui/checkbox";

const Header = () => {
  return (
    <div className="flex justify-between pr-5 py-4 gap-10 bg-white shadow">
      <div>
        <Checkbox id="All" className="mr-5 ml-2" />
        Adaylar
      </div>
      <div className=" justify-between flex-1 hidden md:flex">
        <p>Meslek/Egitim Bilgisi</p>
        <p>Son Is Deneyimi </p>
        <p>Islemler</p>
      </div>
    </div>
  );
};

export default Header;
