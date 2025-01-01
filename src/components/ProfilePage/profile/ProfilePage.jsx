import * as React from "react";
import { ProfileCard } from "./ProfileCard";
import { StatsCard } from "./StatsCard";
import { AttemptsList } from "./AttemptsList";

const mockAttempts = [
  {
    question: "Lauda lassan lauda lassan........",
    difficulty: "Easy",
    score: "7/10",
  },
  {
    question: "Lauda lassan lauda lassan........",
    difficulty: "Easy",
    score: "7/10",
  },
  {
    question: "Lauda lassan lauda lassan........",
    difficulty: "Easy",
    score: "7/10",
  },
  {
    question: "Lauda lassan lauda lassan........",
    difficulty: "Easy",
    score: "7/10",
  },
  {
    question: "Lauda lassan lauda lassan........",
    difficulty: "Easy",
    score: "7/10",
  },
];

export function ProfilePage() {
  return (
    <div className="overflow-hidden px-16 pt-6 pb-12 bg-white max-md:px-5 max-md:pt-24">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
          <ProfileCard
            username="jhonny_sins"
            questionsSolved={69}
            currentRank={69}
            previousRank={54}
            totalPoints={29130}
            rating="3 Star"
            avatarUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/e9ea3b2f2f63c7e4b14f1deb10fca6340f22ba8f97bd6394da90b8e62b509f73?placeholderIfAbsent=true&apiKey=5fd980f3be9141b1b823767a6d39fbe1"
            verifiedBadgeUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/44c31d4abb051092b69525fa350f473adca2823771ab1ba59560c4eb2bf4181d?placeholderIfAbsent=true&apiKey=5fd980f3be9141b1b823767a6d39fbe1"
          />
        </div>
        <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
            <StatsCard
              currentRank={69}
              previousRank={54}
              currentStreak={28}
              longestStreak={32}
              lastLogin="1 day ago"
            />
            <AttemptsList attempts={mockAttempts} />
          </div>
        </div>
      </div>
    </div>
  );
}
