import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Question {
  id: string;
  question: string;
  answer: string;
}

interface FAQ {
  title?: string;
  subtitle?: string;
  questions: Question[];
}

const defaultQuestions: Question[] = [
  {
    id: "q1",
    question: "Question 1",
    answer: "Réponse 1",
  },
  {
    id: "q2",
    question: "Question 2",
    answer: "Réponse 2",
  },
];

export default function FAQCenter({
  title = "On répond à vos questions",
  questions = defaultQuestions,
}: FAQ) {
  return (
    <section className="bg-secondary">
      <div className="container-md">
        <div className="global-padding-x py-8 lg:py-16">
          <div className="flex flex-col items-center gap-8 lg:gap-16">
            <div className="max-w-3xl text-center">
              <h2 className="text-4xl md:text-6xl">{title}</h2>
            </div>

            <div className="global-padding-x bg-background w-full max-w-2xl rounded-sm">
              <Accordion type="single" collapsible className="w-full">
                {questions.map((question, index) => (
                  <AccordionItem key={index} value={question.id}>
                    <AccordionTrigger>
                      <span>{question.question}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>{question.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
