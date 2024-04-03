import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

import Trigger from "./filter/Trigger";

const Filter = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <Trigger />

        <AccordionContent>Hello</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Filter;
