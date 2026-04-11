"use client";

import { useQuiz } from "@/components/quiz-provider";
import QuizBar from "@/components/home/quiz-bar";

export default function QuizBarConnected() {
  const { setIsQuizOpen } = useQuiz();
  return <QuizBar onOpen={() => setIsQuizOpen(true)} />;
}
