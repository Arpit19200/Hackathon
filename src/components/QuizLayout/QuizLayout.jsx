import * as React from "react";
import { QuizHeader } from "./QuizHeader";
import { QuizQuestion } from "./QuizQuestion";
import { QuizAnswer } from "./QuizAnswer";
import { QuizActions } from "./QuizActions";

export function QuizLayout() {
  return (
    <div className="flex overflow-hidden flex-col px-14 pt-40 pb-72 text-2xl font-semibold text-black bg-white max-md:px-5 max-md:py-24">
      
    <div className="self-start mt-14 max-md:mt-10 max-md:max-w-full">
        Scenario 1: Gareeb teri maa ki ch**t
      </div>
      <div className="self-start mt-4">Question: Gareeb ki maa ki kya?</div>
      <form>
      <label htmlFor="quizAnswer" className="sr-only">
        Submit your answer
      </label>
      <textarea
        id="quizAnswer"
        className="px-5 pt-3.5 pb-16 mt-6 text-xl rounded-xl border border-black border-solid max-md:pr-5 max-md:max-w-full w-full"
        placeholder="Submit your answer...."
        aria-label="Quiz answer input"
      />
    </form>
    <div className="flex flex-wrap gap-5 justify-between mt-4 w-full text-stone-800 max-md:max-w-full">
      <button
        className="gap-2.5 self-stretch px-2.5 py-4 bg-cyan-300 rounded-xl min-h-[65px]"
        type="submit"
      >
        Submit answer
      </button>
    </div>
    </div>
  );
}
