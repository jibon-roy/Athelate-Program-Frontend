import React from "react";
import Image, { StaticImageData } from "next/image";

import frame1 from "@/src/assets/images/frames/frame1.png";
import frame2 from "@/src/assets/images/frames/frame2.png";
import frame3 from "@/src/assets/images/frames/frame3.png";

import player from "@/src/assets/images/home/player.png";
import f0 from "@/src/assets/images/card/f0.png";
import f1 from "@/src/assets/images/card/f1.png";
import f2 from "@/src/assets/images/card/f2.png";

type TopEntry = {
  rank: 1 | 2 | 3;
  name: string;
  points: number;
  userImage: StaticImageData; // Static import from next/image
  frameImage: StaticImageData; // Static import from next/image
};

type ListEntry = {
  rank: number;
  name: string;
  points: number;
  avatar: StaticImageData; // Static import
};

const topThree: TopEntry[] = [
  {
    rank: 2,
    name: "Cameron C.",
    points: 293,
    userImage: f1,
    frameImage: frame2,
  },
  {
    rank: 1,
    name: "Marcus Williams",
    points: 327,
    userImage: player,
    frameImage: frame1,
  },
  {
    rank: 3,
    name: "Cameron C.",
    points: 238,
    userImage: f2,
    frameImage: frame3,
  },
];

const others: ListEntry[] = [
  { rank: 4, name: "Jane Cooper", points: 210, avatar: f0 },
  { rank: 5, name: "Ronald Richards", points: 197, avatar: f1 },
  { rank: 6, name: "Marvin McKinney", points: 185, avatar: f2 },
  { rank: 7, name: "Kristin Watson", points: 184, avatar: f1 },
  { rank: 8, name: "Esther Howard", points: 172, avatar: f0 },
];


function PointsBadge({
  points,
  tone,
}: {
  points: number;
  tone: "blue" | "gray" | "orange";
}) {
  const bg =
    tone === "blue"
      ? "bg-blue-600"
      : tone === "gray"
      ? "bg-gray-500"
      : "bg-orange-500";
  return (
    <div
      className={`absolute -bottom-3 left-1/2 -translate-x-1/2 ${bg} text-white text-xs md:text-sm px-3 py-1 rounded-full shadow-md`}
    >
      {points}
    </div>
  );
}

function TopCard({ item }: { item: TopEntry }) {
  const tone: "blue" | "gray" | "orange" =
    item.rank === 1 ? "blue" : item.rank === 2 ? "gray" : "orange";

  return (
    <div className="flex flex-col items-center w-[34%] md:w-[28%] lg:w-[26%]">
      <div className={`relative w-full aspect-3/4 rounded-xl`}>
        {/* Frame background */}
        <Image
          src={item.frameImage}
          alt={`Rank ${item.rank} frame`}
          fill
          priority
          className="object-contain z-0"
        />
        {/* User image clipped to the plaque window */}
        <div
          className="absolute overflow-hidden z-10"
          style={{
            top: "50%",
            left: "12%",
            width: "76%",
            height: "48%",
            borderRadius: "16px",
          }}
        >
          <Image
            src={item.userImage}
            alt={`${item.name} photo`}
            fill
            priority
            className="object-cover w-40!"
          />
        </div>
        {/* <RankBadge rank={item.rank} /> */}
        <PointsBadge points={item.points} tone={tone} />
      </div>
      <div className="mt-6 text-center">
        <p
          className={`text-sm md:text-base font-semibold ${
            item.rank === 1
              ? "text-blue-700"
              : item.rank === 2
              ? "text-gray-700"
              : "text-orange-700"
          }`}
        >
          {item.name}
        </p>
      </div>
    </div>
  );
}

function ListRow({ entry }: { entry: ListEntry }) {
  return (
    <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-white/60 dark:bg-white/10 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="relative w-9 h-9 md:w-10 md:h-10">
          {/* Diamond avatar */}
          <div className="absolute inset-0 rotate-45 overflow-hidden rounded-lg">
            <Image
              src={entry.avatar}
              alt={`${entry.name} avatar`}
              fill
              sizes="40px"
              className="object-cover -rotate-45"
            />
          </div>
        </div>
        <div>
          <p className="text-sm md:text-base font-medium">
            #{entry.rank} {entry.name}
          </p>
          <p className="text-xs md:text-sm text-gray-500">{entry.points}</p>
        </div>
      </div>
    </div>
  );
}

const Leaderboard = () => {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg md:text-xl font-bold">Leaderboard</h2>
        <button className="text-xs md:text-sm px-3 py-1 rounded-full border border-blue-300 text-blue-600 hover:bg-blue-50">
          View More
        </button>
      </div>

      {/* Top 3 section */}
      <div className="rounded-3xl p-4 md:p-6 bg-linear-to-b from-blue-50 to-blue-200/50 dark:from-blue-950/30 dark:to-blue-900/10">
        <p className="text-center text-xs md:text-sm text-gray-600 mb-4">
          Jan 2025
        </p>
        <div className="flex items-end justify-between gap-2 md:gap-4">
          {topThree.map((t) => (
            <TopCard key={t.rank} item={t} />
          ))}
        </div>
      </div>

      {/* Others list */}
      <div className="mt-4 space-y-3">
        {others.map((o) => (
          <ListRow key={o.rank} entry={o} />
        ))}
      </div>
    </section>
  );
};

export default Leaderboard;
