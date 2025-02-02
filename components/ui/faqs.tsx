import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./accordion";
  
  const FAQS = () => {
    return (
      <div className="relative flex justify-center items-center flex-col gap-5 md:gap-0 mb-10 w-full mt-20">
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="px-2 md:px-10 md:py-2 rounded-xl"
          >
            <AccordionTrigger className="text-lg md:text-xl">
              How does the AI-powered application review work?
            </AccordionTrigger>
            <AccordionContent className="text-pink-600">
              Rachel screens and ranks applications instantly based on your criteria.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="px-2 md:px-10 md:py-2 rounded-xl mt-5"
          >
            <AccordionTrigger className="text-lg md:text-xl">
              What does Rachel do during phone screens?
            </AccordionTrigger>
            <AccordionContent className="text-pink-600">
              Rachel asks personalized questions to filter the best candidates.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="px-2 md:px-10 md:py-2 rounded-xl mt-5"
          >
            <AccordionTrigger className="text-lg md:text-xl">
              How are updates delivered?
            </AccordionTrigger>
            <AccordionContent className="text-pink-600">
              Rachel sends shortlisted candidates via Slack and email instantly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="px-2 md:px-10 md:py-2 rounded-xl mt-5"
          >
            <AccordionTrigger className="text-lg md:text-xl">
              Can I customize screening criteria?
            </AccordionTrigger>
            <AccordionContent className="text-pink-600">
              Yes, you can fully customize Rachel’s screening criteria.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-5"
            className="px-2 md:px-10 md:py-2 rounded-xl mt-5"
          >
            <AccordionTrigger className="text-lg md:text-xl">
              How do I get started?
            </AccordionTrigger>
            <AccordionContent className="text-pink-600">
              Set up your account, define criteria, and let Rachel handle the rest.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  };
  
  export default FAQS;