import * as React from "react";

export function QuizAnswer() {
  return (
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
  );
}
