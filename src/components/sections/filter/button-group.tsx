import { Button } from "../../ui/button";

const ButtonGroup = () => {
  return (
    <div className="flex gap-5">
      <Button>Filtreleri Temizle</Button>
      <Button className="bg-orange-700">Filtreleri Kaydet</Button>
      <Button className="bg-blue-800">Filtrele</Button>
    </div>
  );
};

export default ButtonGroup;
