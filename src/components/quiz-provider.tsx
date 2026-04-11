"use client";

import { createContext, useContext, useState } from "react";

interface QuizContextValue {
  isQuizOpen: boolean;
  setIsQuizOpen: (open: boolean) => void;
}

const QuizContext = createContext<QuizContextValue>({
  isQuizOpen: false,
  setIsQuizOpen: () => {},
});

export function useQuiz() {
  return useContext(QuizContext);
}

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <QuizContext.Provider value={{ isQuizOpen, setIsQuizOpen }}>
      {children}
    </QuizContext.Provider>
  );
}
