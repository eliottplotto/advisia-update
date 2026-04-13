"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

export default function OfferFaq({ items }: { items: FaqItem[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={`q${i}`}
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          className="border-0"
        >
          <AccordionTrigger
            className="text-left text-base font-medium py-5 hover:no-underline"
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent
            className="text-base pb-5 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
