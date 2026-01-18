"use client";

import React, { useRef, useState } from "react";
import VideoCard from "../../ui/others/dashboard/card/VideoCard";
import { Button } from "../../ui/button/Button";
import f0 from "@/src/assets/images/card/f0.png";
import f1 from "@/src/assets/images/card/f1.png";
import f2 from "@/src/assets/images/card/f2.png";

interface VideoData {
  title: string;
  thumbnail: string;
  progress: number;
  dueDate: string;
  isCompleted?: boolean;
}

const FeedBackVideos = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  // Sample video data - replace with actual data from API
  const videos: VideoData[] = [
    {
      title: "Review Approach Feedback",
      thumbnail: f0.src,
      progress: 70,
      dueDate: "Today",
      isCompleted: false,
    },
    {
      title: "Footwork Fundamentals",
      thumbnail: f1.src,
      progress: 100,
      dueDate: "2 days ago",
      isCompleted: true,
    },
    {
      title: "Throwing Mechanics",
      thumbnail: f2.src,
      progress: 45,
      dueDate: "Tomorrow",
      isCompleted: false,
    },
    {
      title: "Decision Making Drill",
      thumbnail: f1.src,
      progress: 85,
      dueDate: "In 3 days",
      isCompleted: false,
    },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setDragStart(e.clientX);
    setScrollStart(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const diff = e.clientX - dragStart;
    scrollContainerRef.current.scrollLeft = scrollStart - diff;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full">
      <div className="mb-6 flex flex-wrap gap-3 items-center justify-between">
        <h2 className="text-lg md:text-[20px] font-bold text-black">
          Continue Where You Left off
        </h2>
        <Button variant="primary" className="whitespace-nowrap">
          View More{" "}
        </Button>
      </div>

      {/* Video Grid with Drag to Scroll */}
      <div
        ref={scrollContainerRef}
        className={`overflow-x-auto hide-scrollbar ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="flex gap-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className="shrink-0 w-62.5"
              onMouseDown={(e) => e.preventDefault()}
            >
              <VideoCard
                title={video.title}
                thumbnail={video.thumbnail}
                progress={video.progress}
                dueDate={video.dueDate}
                isCompleted={video.isCompleted}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedBackVideos;
