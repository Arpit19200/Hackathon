import * as React from "react";

export function ProfileCard({
  username,
  questionsSolved,
  currentRank,
  previousRank,
  totalPoints,
  rating,
  avatarUrl,
  verifiedBadgeUrl,
}) {
  return (
    <div className="flex flex-col px-7 pt-7 pb-11 mx-auto w-full text-2xl text-black bg-cyan-300 rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src={avatarUrl}
        alt={`Profile picture of ${username}`}
        className="object-contain w-full rounded-xl aspect-[1.14]"
      />
      <div className="flex justify-center items-center self-center mt-3.5 font-bold whitespace-nowrap">
        <div className="self-stretch my-auto">{username}</div>
        <img
          loading="lazy"
          src={verifiedBadgeUrl}
          alt="Verification badge"
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
        />
      </div>
      <div className="flex flex-col self-start mt-5 ml-5 max-md:ml-2.5">
        <div>
          <span className="font-semibold">Questions solved</span>:{" "}
          {questionsSolved}
        </div>
        <div className="mt-1.5">
          <span className="font-semibold">Current rank</span>: {currentRank}
        </div>
        <div className="mt-1.5">
          <span className="font-semibold">Previous highest rank</span>:{" "}
          {previousRank}
        </div>
        <div className="mt-1.5 font-semibold">
          Total points: <span>{totalPoints}</span>
        </div>
        <div className="mt-1.5 font-semibold">Rating: {rating}</div>
      </div>
    </div>
  );
}
