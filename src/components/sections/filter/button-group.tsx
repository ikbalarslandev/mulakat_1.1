import { Button } from "../../ui/button";

const ButtonGroup = () => {
  return (
    <div className="flex gap-5 flex-col md:flex-row">
      <Button>Filtreleri Temizle</Button>
      <Button className="bg-orange-700">Filtreleri Kaydet</Button>
      <Button className="bg-mblue">Filtrele</Button>
    </div>
  );
};

export default ButtonGroup;
