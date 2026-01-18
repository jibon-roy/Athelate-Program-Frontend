import React from "react";
import Image, { StaticImageData } from "next/image";

import rank1 from "@/src/assets/images/home/1.png";
import rank2 from "@/src/assets/images/home/2.png";
import rank3 from "@/src/assets/images/home/3.png";

import f0 from "@/src/assets/images/home/player/player1.png";
import f1 from "@/src/assets/images/home/player/player2.png";
import f2 from "@/src/assets/images/home/player/player3.png";
import f3 from "@/src/assets/images/home/player/player4.png";
import f4 from "@/src/assets/images/home/player/player5.png";
import { Button } from "../../ui/button/Button";
import leaderboard_bg from "@/src/assets/images/card/leaderboard_bg.png";

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
  { rank: 7, name: "Kristin Watson", points: 184, avatar: f3 },
  { rank: 8, name: "Esther Howard", points: 172, avatar: f4 },
];

function TopCard({ item }: { item: TopEntry }) {
  const isTop = item.rank === 1;
  const containerWidth = isTop
    ? "w-[40%] md:w-[36%] lg:w-[40%]"
    : "w-[28%] md:w-[26%] lg:w-[24%]";
  const imageSizes = isTop
    ? "(max-width: 768px) 60vw, 30vw"
    : "(max-width: 768px) 40vw, 20vw";

  return (
    <div className={`flex flex-col items-center ${containerWidth}`}>
      <div className="relative w-full  overflow-hidden">
        <Image
          src={item.image}
          alt={`${item.name} rank ${item.rank}`}
          sizes={imageSizes}
          className="w-full h-auto"
        />
      </div>
      <div className="mt-3 text-center">
        {/* <p className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">
          {item.name}
        </p>
        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
          {item.points} points
        </p> */}
      </div>
    </div>
  );
}

function ListRow({ entry }: { entry: ListEntry }) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3 rounded-2xl bg-white  ">
      <div className="flex items-center gap-3">
        <div className="text-[#141B34] text-sm md:text-[16px] font-semibold">#{entry.rank}</div>
        <div className="relative -mt-2 -mb-2 mx-2 w-14.5 h-14.5">
          {/* Diamond avatar with colored border */}
          <div className="absolute inset-0 rotate-45 rounded-lg  border-4 border-[#6CB3FF]"></div>
          <div className="absolute inset-1 rotate-45 overflow-hidden rounded-lg">
            <Image
              src={entry.avatar}
              alt={`${entry.name} avatar`}
              fill
              sizes="56px"
              className="object-cover object-center scale-[1.6] -rotate-45"
            />
          </div>
        </div>
        <div>
          <p className="text-sm md:text-[16px] text-[#141B34] font-semibold">
            {entry.name}
          </p>
          <p className="text-xs md:text-[14px] text-[#141B34B2]">
            {entry.points} points
          </p>
        </div>
      </div>
    </div>
  );
}

const LeaderBoardV2 = () => {
  const orderedTop: TopEntry[] = [
    topThree.find((t) => t.rank === 2)!,
    topThree.find((t) => t.rank === 1)!,
    topThree.find((t) => t.rank === 3)!,
  ];
  return (
    <section className="w-full p-4 bg-white/30 rounded-3xl overflow-auto shadow-[1px_1px_0_0_white,-1px_-1px_0_0_white]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg md:text-[18px] font-bold">Leaderboard</h2>
        <Button>View More</Button>
      </div>

      {/* Top 3 section with background */}
      <div className="rounded-3xl overflow-hidden relative">
        {/* backgound image */}
        <div className="relative p-6 md:p-8">
          {/* Extend background 5px top/bottom to fully cover the mask */}
          <div className="absolute inset-x-0 -inset-y-1.25">
            <Image
              src={leaderboard_bg}
              alt="Leaderboard Background"
              fill
              className="object-cover object-bottom-left"
              priority
            />
          </div>
          <p className="relative z-10 text-center text-lg text-black font-medium">
            Jan 2025
          </p>
          <div className="relative z-10 flex items-end justify-center gap-2 md:gap-2">
            {orderedTop.map((t) => (
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
