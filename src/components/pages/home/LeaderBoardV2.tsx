import React from "react";
import Image, { StaticImageData } from "next/image";

import frame1 from "@/src/assets/images/card/card1.svg";
import frame2 from "@/src/assets/images/card/card2.svg";
import frame3 from "@/src/assets/images/card/card3.svg";

import p1 from "@/src/assets/images/home/player/1.png";
import p2 from "@/src/assets/images/home/player/2.png";
import p3 from "@/src/assets/images/home/player/3.png";
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
  { rank: 1, name: "Marcus Williams", points: 327, image: p1 },
  { rank: 2, name: "Cameron C.", points: 293, image: p2 },
  { rank: 3, name: "Cameron C.", points: 238, image: p3 },
];

const others: ListEntry[] = [
  { rank: 4, name: "Jane Cooper", points: 210, avatar: f0 },
  { rank: 5, name: "Ronald Richards", points: 197, avatar: f1 },
  { rank: 6, name: "Marvin McKinney", points: 185, avatar: f2 },
  { rank: 7, name: "Kristin Watson", points: 184, avatar: f3 },
  { rank: 8, name: "Esther Howard", points: 172, avatar: f4 },
];

function TopCard({ item, orderClass }: { item: TopEntry; orderClass: string }) {
  const isTop = item.rank === 1;
  const containerWidth = isTop
    ? "w-[80%] md:w-[36%] lg:w-[40%]"
    : "w-[60%] md:w-[26%] lg:w-[24%]";
  const imageSizes = isTop
    ? "(max-width: 768px) 60vw, 30vw"
    : "(max-width: 768px) 60vw, 30vw";
  const aspectPad = isTop ? "pt-[112%]" : "pt-[112%]";
  const imageWindow = isTop
    ? "inset-x-[20%] top-[20%] bottom-[18%]"
    : "inset-x-[8%] top-[25%] -bottom-[5%] right-[15%]";

  return (
    <div
      draggable={false}
      className={`flex mb-5 pb-20 flex-col items-center justify-end ${containerWidth} ${orderClass}`}
    >
      <div className="relative h-fit w-full ">
        <div className={`relative w-full ${aspectPad}`}>
          <div className={`absolute ${imageWindow}`}>
            <Image
              src={item.image}
              alt={`${item.name} photo`}
              fill
              draggable={false}
              className={`object-cover w-full object-top`}
            />
          </div>
        </div>
        {item.rank === 1 ? (
          <Image
            src={frame1}
            alt={`${item.name} rank ${item.rank}`}
            sizes={imageSizes}
            draggable={false}
            className="w-full h-auto absolute inset-0"
          />
        ) : item.rank === 2 ? (
          <Image
            src={frame2}
            alt={`${item.name} rank ${item.rank}`}
            sizes={imageSizes}
            draggable={false}
            className="w-full h-auto absolute inset-0"
          />
        ) : (
          <Image
            src={frame3}
            alt={`${item.name} rank ${item.rank}`}
            sizes={imageSizes}
            draggable={false}
            className="w-full h-auto absolute inset-0"
          />
        )}

        {item?.rank === 2 && (
          <div className="z-50 absolute max-md:-bottom-[43%] md:-bottom-[45%] -ml-1 min-w-10/12 left-1/2 -translate-x-1/2 text-center">
            <p className="text-sm font-semibold text-[#141B34] dark:text-white">
              {item.name}
            </p>
            <p className={`font-bold mt-2.5 text-[#141B34]/80`}>
              {item.points}
            </p>
          </div>
        )}
        {item?.rank === 1 && (
          <div className="z-50 absolute max-md:bottom-[15%] md:-bottom-[17.5%] left-1/2 -translate-x-1/2 text-center">
            <p className={`font-bold mb-2  text-white`}>{item.points}</p>
            <p className=" font-semibold text-[#276AEE] italic dark:text-white max-w-20">
              {item.name}
            </p>
          </div>
        )}
        {item?.rank === 3 && (
          <div className="z-50 absolute max-md:bottom-[9%] md:-bottom-[40%] min-w-20 -ml-1 left-1/2 -translate-x-1/2 text-center">
            <p className="text-sm font-semibold text-[#141B34] dark:text-white">
              {item.name}
            </p>
            <p className={`font-bold mt-2.5 text-white`}>{item.points}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ListRow({ entry }: { entry: ListEntry }) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3 rounded-2xl bg-white  ">
      <div
        className={`flex items-center ${entry?.rank === 4 || entry?.rank === 5 ? "gap-3" : "gap-5"}`}
      >
        <div className="text-[#141B34] text-sm md:text-[16px] font-medium">
          #{entry.rank}
        </div>
        {entry?.rank === 4 || entry?.rank === 5 ? (
          <div className="relative -mt-2 -mb-2 mx-2 w-14.5  h-14.5">
            {/* Diamond avatar with colored border */}
            <div className="absolute inset-0 bg-[#68B0EA] rotate-45 rounded-lg  border-4 border-[#68B0EA]"></div>
            <div className="absolute inset-1 rotate-45 overflow-hidden rounded-sm">
              <Image
                src={entry.avatar}
                alt={`${entry.name} avatar`}
                fill
                // optimize false
                unoptimized
                sizes="57px"
                className="object-cover object-center scale-[1.35] -rotate-45"
              />
            </div>
          </div>
        ) : (
          <div className="relative  w-14  h-14">
            <Image
              src={entry.avatar}
              alt={`${entry.name} avatar`}
              fill
              sizes="57px"
              className="object-cover object-center rounded-full"
            />
          </div>
        )}
        <div>
          <p className="text-sm md:text-[16px] text-[#141B34] font-medium">
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

  const orderClasses = {
    2: "order-1 sm:order-1",
    1: "order-0 sm:order-2",
    3: "order-2 sm:order-3",
  } as const;

  return (
    <section className="w-full p-4 sm:p-5 bg-white/30 rounded-3xl overflow-auto shadow-[1px_1px_0_0_white,-1px_-1px_0_0_white]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg md:text-[18px] font-bold">Leaderboard</h2>
        <Button>View More</Button>
      </div>

      {/* Top 3 section with background */}
      <div className="rounded-3xl overflow-hidden relative">
        {/* backgound image */}
        <div className="relative bg-white p-6 md:p-6">
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
          <p className="relative z-10 text-center text-[16px] text-[#141B34] font-medium">
            Jan 2025
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row items-center md:items-end justify-center gap-2 md:gap-2">
            {orderedTop.map((t) => (
              <TopCard
                key={t.rank}
                item={t}
                orderClass={orderClasses[t.rank]}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Others list */}
      <div className="mt-6 space-y-3.5">
        {others.map((o) => (
          <ListRow key={o.rank} entry={o} />
        ))}
      </div>
    </section>
  );
};

export default LeaderBoardV2;
