"use client";

interface QuizBarProps {
  onOpen: () => void;
}

export default function QuizBar({ onOpen }: QuizBarProps) {
  return (
    <div
      className="relative z-[2] w-full py-8"
      style={{
        background: "rgba(255,255,255,0.05)",
        borderTop: "1px solid rgba(255,255,255,0.10)",
        borderBottom: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      <style>{`
        @keyframes quiz-bar-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(201,254,110,0); }
          50% { box-shadow: 0 0 20px 0 rgba(201,254,110,0.3); }
        }
        .quiz-bar-pulse { animation: quiz-bar-pulse 2s ease-in-out infinite; }
      `}</style>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4 text-center sm:text-left">
        <p className="text-xl font-medium text-white">
          On a la solution. Encore faut-il savoir laquelle.
        </p>
        <button
          onClick={onOpen}
          className="quiz-bar-pulse whitespace-nowrap rounded-full px-7 py-3.5 font-medium text-black transition-all duration-200 hover:scale-[1.03]"
          style={{ background: "#c9fe6e" }}
        >
          Trouver la mienne →
        </button>
      </div>
    </div>
  );
}
