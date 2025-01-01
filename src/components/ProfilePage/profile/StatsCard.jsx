import * as React from "react";

export function StatsCard({
  currentRank,
  previousRank,
  currentStreak,
  longestStreak,
  lastLogin,
}) {
  return (
    <div className="pt-5 pr-3 pb-10 pl-6 bg-cyan-300 rounded-xl max-md:pl-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full font-semibold text-black max-md:mt-10">
            <div className="flex justify-center items-start pb-12 max-w-full rounded-none w-[178px]">
              <div className="grow shrink text-2xl w-48">
                Current rank:
              </div>
              <div className="grow text-center text-6xl max-md:text-4xl">{currentRank}</div>
            </div>
            <div className="flex justify-center items-start pb-10 mt-1.5 max-w-full rounded-none w-[218px]">
              <div className="grow shrink w-48 text-2xl">Previous rank:</div>
              <div className="mt-2.5 text-center text-6xl max-md:text-4xl">
                {previousRank}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full font-semibold text-black max-md:mt-10">
            <div className="flex justify-center items-start pb-12 max-w-full rounded-none w-[205px]">
              <div className="grow mr-0 w-44 text-2xl">Current streak:</div>
              <div className="text-6xl text-center max-md:text-4xl">{currentStreak}</div>
            </div>
            <div className="flex justify-center items-start pb-12 max-w-full rounded-none w-[205px]">
              <div className="grow mr-0 w-44 text-2xl">Longest streak:</div>
              <div className="text-6xl text-center max-md:text-4xl">{longestStreak}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-center justify-bottom mt-36 font-semibold text-black max-md:mt-10">
            <div className="text-1xl">Last login:</div>
            <div className=" text-1xl">{lastLogin}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
