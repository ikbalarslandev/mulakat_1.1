import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

import Trigger from "./filter/Trigger";
import Basic from "./filter/basic";

const Filter = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <Trigger />

        <AccordionContent>
          <Basic />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Filter;
