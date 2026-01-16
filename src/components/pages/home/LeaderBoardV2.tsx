import React from "react";
import Image, { StaticImageData } from "next/image";

import rank1 from "@/src/assets/images/home/1.png";
import rank2 from "@/src/assets/images/home/2.png";
import rank3 from "@/src/assets/images/home/3.png";

import f0 from "@/src/assets/images/card/f0.png";
import f1 from "@/src/assets/images/card/f1.png";
import f2 from "@/src/assets/images/card/f2.png";

type TopEntry = {
  rank: 1 | 2 | 3;
  name: string;
  points: number;
  image: StaticImageData;
};

type ListEntry = {
  rank: number;
  name: string;
  points: number;
  avatar: StaticImageData;
};

const topThree: TopEntry[] = [
  { rank: 1, name: "Marcus Williams", points: 327, image: rank1 },
  { rank: 2, name: "Cameron C.", points: 293, image: rank2 },
  { rank: 3, name: "Cameron C.", points: 238, image: rank3 },
];

const others: ListEntry[] = [
  { rank: 4, name: "Jane Cooper", points: 210, avatar: f0 },
  { rank: 5, name: "Ronald Richards", points: 197, avatar: f1 },
  { rank: 6, name: "Marvin McKinney", points: 185, avatar: f2 },
  { rank: 7, name: "Kristin Watson", points: 184, avatar: f1 },
  { rank: 8, name: "Esther Howard", points: 172, avatar: f0 },
];

function TopCard({ item }: { item: TopEntry }) {
  return (
    <div className="flex flex-col items-center w-[30%] md:w-[28%] lg:w-[26%]">
      <div className="relative w-full shadow-lg overflow-hidden">
        <Image
          src={item.image}
          alt={`${item.name} rank ${item.rank}`}
          sizes="(max-width: 768px) 40vw, 20vw"
          className="w-full h-auto"
        />
      </div>
      <div className="mt-3 text-center">
        <p className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">
          {item.name}
        </p>
        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
          {item.points} points
        </p>
      </div>
    </div>
  );
}

function ListRow({ entry }: { entry: ListEntry }) {
  return (
    <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-white/60 dark:bg-white/10 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 md:w-12 md:h-12">
          {/* Diamond avatar */}
          <div className="absolute inset-0 rotate-45 overflow-hidden rounded-lg">
            <Image
              src={entry.avatar}
              alt={`${entry.name} avatar`}
              fill
              sizes="50px"
              className="object-cover -rotate-45"
            />
          </div>
        </div>
        <div>
          <p className="text-sm md:text-base font-medium">
            #{entry.rank} {entry.name}
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            {entry.points} points
          </p>
        </div>
      </div>
    </div>
  );
}

const LeaderBoardV2 = () => {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg md:text-xl font-bold">Leaderboard</h2>
        <button className="text-xs md:text-sm px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
          View More
        </button>
      </div>

      {/* Top 3 section with background */}
      <div className="rounded-3xl overflow-hidden shadow-lg relative">
        {/* Background will be added here */}
        <div className="relative bg-linear-to-b from-blue-50 to-blue-200/50 dark:from-blue-950/30 dark:to-blue-900/10 p-6 md:p-8">
          <p className="text-center text-xs md:text-sm text-gray-600 mb-6 font-medium">
            Jan 2025
          </p>
          <div className="flex items-end justify-between gap-2 md:gap-4">
            {topThree.map((t) => (
              <TopCard key={t.rank} item={t} />
            ))}
          </div>
        </div>
      </div>

      {/* Others list */}
      <div className="mt-6 space-y-3">
        {others.map((o) => (
          <ListRow key={o.rank} entry={o} />
        ))}
      </div>
    </section>
  );
};

export default LeaderBoardV2;
