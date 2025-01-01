import * as React from "react";

export function QuizActions() {
  return (
    <div className="flex flex-wrap gap-5 justify-between mt-4 w-full text-stone-800 max-md:max-w-full">
      <button
        className="gap-2.5 self-stretch px-2.5 py-4 bg-cyan-300 rounded-xl min-h-[65px]"
        type="submit"
      >
        Submit answer
      </button>
      <button
        className="gap-2.5 self-stretch px-2.5 py-4 rounded-xl border border-black border-solid min-h-[65px]"
        type="button"
      >
        Exit Quizz
      </button>
    </div>
  );
}
