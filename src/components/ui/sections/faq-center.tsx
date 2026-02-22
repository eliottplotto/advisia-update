import { RevealText } from "@/components/reveal-text";
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
    <section
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="px-4 md:px-8 lg:px-12 py-12 lg:py-20">
          <div className="flex flex-col items-center gap-8 lg:gap-16">
            <div className="max-w-3xl text-center">
              <div className="section-label mb-6 mx-auto w-fit">
                ● Questions fréquentes
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <RevealText>{title}</RevealText>
              </h2>
            </div>

            <div
              className="w-full max-w-2xl rounded-2xl p-6 md:p-8"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <Accordion type="single" collapsible className="w-full">
                {questions.map((question, index) => (
                  <AccordionItem key={index} value={question.id}>
                    <AccordionTrigger>
                      <span>{question.question}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p style={{ color: "var(--text-secondary)" }}>
                        {question.answer}
                      </p>
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
