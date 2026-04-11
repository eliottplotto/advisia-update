"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { QuizProvider, useQuiz } from "@/components/quiz-provider";
import QuizModal from "@/components/quiz-modal";
import QuizFloatingButton from "@/components/quiz-floating-button";

function QuizInner({ children }: { children: React.ReactNode }) {
  const { isQuizOpen, setIsQuizOpen } = useQuiz();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("quiz") === "open") {
      setIsQuizOpen(true);
    }
  }, [searchParams, setIsQuizOpen]);

  return (
    <>
      {children}
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
      <QuizFloatingButton onOpen={() => setIsQuizOpen(true)} />
    </>
  );
}

import { Suspense } from "react";

export function QuizShell({ children }: { children: React.ReactNode }) {
  return (
    <QuizProvider>
      <Suspense>
        <QuizInner>{children}</QuizInner>
      </Suspense>
    </QuizProvider>
  );
}
