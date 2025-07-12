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

export default function FAQ({
  title = "Questions fréquentes",
  questions = defaultQuestions,
}: FAQ) {
  return (
    <section>
      <div className="container-md">
        <div className="global-padding">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 lg:mb-32">
            {/* Left Column - Heading */}
            <div className="lg:sticky lg:top-16 lg:self-start">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl mb-4">{title}</h2>
            </div>

            {/* Right Column - Questions */}
            <div className="space-y-4">
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
