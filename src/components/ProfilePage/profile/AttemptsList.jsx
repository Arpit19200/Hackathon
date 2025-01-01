import * as React from "react";

export function AttemptItem({ question, difficulty, score }) {
  return (
    <div className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-8 py-1.5 w-full bg-white rounded-xl border border-black border-solid max-md:max-w-full">
      <div className="flex gap-3.5 items-end justify-between self-stretch my-auto text-2xl min-w-[240px]">
        <div className="self-stretch my-auto">Q.</div>
        <div className="self-stretch my-auto overflow-hidden">{question}</div>
      </div>
      <div className="self-stretch my-auto">{difficulty}</div>
      <div className="self-stretch my-auto">{score}</div>
    </div>
  );
}

export function AttemptsList({ attempts }) {
  return (
    <div className="flex flex-col px-0.5 pt-3 mt-3.5 w-full rounded-xl border border-black border-solid max-md:max-w-full">
      <div className="flex z-10 flex-wrap gap-5 justify-between self-center max-w-full w-[666px]">
        <div className="flex flex-col">
          <div className="text-2xl font-bold text-black">Last attempts:</div>
          <div className="self-center text-xl text-zinc-600">Question</div>
        </div>
        <div className="flex gap-32 items-end justify-between mt-10 ml-8 text-xl whitespace-nowrap text-zinc-600">
          <div>Difficulty</div>
          <div>Score</div>
        </div>
      </div>
      <div className="flex z-10 flex-col p-2.5 -mb-12 w-full text-xl  text-black max-md:mb-2.5 max-md:max-w-full">
        {attempts.map((attempt, index) => (
          <div key={index} className="mt-2.5 first:mt-0">
            <AttemptItem {...attempt} />
          </div>
        ))}
        <div className="flex gap-10 py-1.5 mt-2.5 w-full bg-white rounded-xl border border-black border-solid min-h-[4px] max-md:max-w-full" />
      </div>
    </div>
  );
}
