"use client";

import React, { useState } from "react";
import AnnouncementCard from "@/src/components/ui/others/dashboard/card/AnnouncementCard";
import { Button } from "@/src/components/ui/button/Button";
import post1 from "@/src/assets/images/home/post1.png";
import post2 from "@/src/assets/images/home/post2.png";
import guy1 from "@/src/assets/images/home/guy1.png";
import guy2 from "@/src/assets/images/home/guy2.png";

interface Announcement {
  id: number;
  authorName: string;
  authorUsername: string;
  authorAvatar: string;
  timeAgo: string;
  title: string;
  coaches?: string[];
  description: string;
  type: "image" | "video" | "text";
  image?: string;
  isLive?: boolean;
  hasRSVP?: boolean;
  likes: number;
  replies: number;
}

const Announcements = () => {
  const [announcements] = useState<Announcement[]>([
    {
      id: 1,
      authorName: "Sam Guy",
      authorUsername: "@samguy",
      authorAvatar: guy1.src,
      timeAgo: "8 hour ago",
      title: "Live video session",
      coaches: ["COACH GORDAN", "COACH MCCULLUM"],
      description: "Live video session",
      type: "video",
      image: post1.src,
      isLive: true,
      hasRSVP: true,
      likes: 20,
      replies: 34,
    },
    {
      id: 2,
      authorName: "Sam Guy",
      authorUsername: "@samguy",
      authorAvatar: guy2.src,
      timeAgo: "8 hour ago",
      title: "Casual Ride!",
      type: "image",
      description:
        "Join us for our Friday morning casual bike ride around central park! We will meet you all @6AM EST near Great Lawn Softball Field 7!",
      image: post2.src,
      isLive: false,
      hasRSVP: false,
      likes: 15,
      replies: 8,
    },
  ]);

  return (
    <div className="w-full  bg-white/30 rounded-3xl overflow-auto shadow-[1px_1px_0_0_white,-1px_-1px_0_0_white]">
      {/* Header */}
      <div className="flex p-4 sm:p-5 bg-white/40 rounded-t-[20px] items-center justify-between">
        <h2 className="text-lg md:text-[18px] font-semibold text-[#141B34]">
          Announcements preview
        </h2>
        <Button
          aria-label="View more announcements"
          variant="primary"
          className="whitespace-nowrap"
        >
          View More
        </Button>
      </div>
      <div className="p-4 sm:p-5">
        {/* Announcements List */}
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <AnnouncementCard key={announcement.id} {...announcement} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;
