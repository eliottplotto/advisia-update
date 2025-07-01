import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "item-1",
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate a return.",
  },
  {
    id: "item-2",
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available for faster delivery.",
  },
  {
    id: "item-3",
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries worldwide. International shipping times vary by location, typically 7-14 business days. Additional customs fees may apply.",
  },
  {
    id: "item-4",
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's site.",
  },
  {
    id: "item-5",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay for your convenience.",
  },
  {
    id: "item-6",
    question: "Can I modify or cancel my order?",
    answer:
      "Orders can be modified or cancelled within 1 hour of placement. After that, please contact customer service as soon as possible for assistance.",
  },
];

export default function FAQ() {
  return (
    <section className="main-layout" data-theme="light">
      <div></div>
      <div className="global-padding lg:border-x">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-32">
          {/* Left Column - Heading */}
          <div className="lg:sticky lg:top-16 lg:self-start">
            <h2 className="text-4xl md:text-6xl mb-4">
              Questions
              <br />
              fréquentes
            </h2>
          </div>

          {/* Right Column - Questions */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>
                    <span>{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}
