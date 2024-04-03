import { AccordionTrigger } from "@/components/ui/accordion";
import { IoIosSearch } from "react-icons/io";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Trigger = () => {
  return (
    <div className="flex items-center justify-between text-mblue">
      <AccordionTrigger className="text-lg ">Aday Filtrele</AccordionTrigger>
      <div className=" gap-8 hidden md:flex">
        <p>
          CV Goruntuleme Hakki: <span className="text-orange-600">47</span>
        </p>

        <HoverCard>
          <HoverCardTrigger className="flex justify-center items-center gap-1 ">
            <IoIosSearch className="w-5 h-5" />
            Kayitli Aramalarim
          </HoverCardTrigger>
          <HoverCardContent className="flex flex-col text-mblue">
            <p>demo</p>
            <p>demo</p>
            <p>demo</p>
            <hr />
            <p>Kayitli Aramalari Duzenle</p>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};

export default Trigger;
