import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

import Trigger from "./filter/Trigger";
import Basic from "./filter/basic";
import ButtonGroup from "./filter/button-group";
import Details from "./filter/details";

const Filter = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <Trigger />

        <AccordionContent>
          <Basic />
          <Details />
          <ButtonGroup />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Filter;
