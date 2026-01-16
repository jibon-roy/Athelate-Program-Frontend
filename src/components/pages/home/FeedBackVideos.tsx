"use client";

import React from "react";
import VideoCard from "@/src/components/ui/others/dashboard/card/VideoCard";
import { Button } from "../../ui/button/Button";

interface VideoData {
  title: string;
  thumbnail: string;
  progress: number;
  dueDate: string;
  isCompleted?: boolean;
}

const FeedBackVideos = () => {
  // Sample video data - replace with actual data from API
  const videos: VideoData[] = [
    {
      title: "Review Approach Feedback",
      thumbnail: "/api/placeholder/300/200",
      progress: 70,
      dueDate: "Today",
      isCompleted: false,
    },
    {
      title: "Footwork Fundamentals",
      thumbnail: "/api/placeholder/300/200",
      progress: 100,
      dueDate: "2 days ago",
      isCompleted: true,
    },
    {
      title: "Throwing Mechanics",
      thumbnail: "/api/placeholder/300/200",
      progress: 45,
      dueDate: "Tomorrow",
      isCompleted: false,
    },
    {
      title: "Decision Making Drill",
      thumbnail: "/api/placeholder/300/200",
      progress: 85,
      dueDate: "In 3 days",
      isCompleted: false,
    },
  ];

  return (
    <div className="w-full">
      <div className="mb-6 flex gap-6 items-center justify-between">
        <h2 className="text-2xl font-bold text-black mb-2">
          Continue Where You Left off
        </h2>
        <Button variant="primary">View All </Button>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            thumbnail={video.thumbnail}
            progress={video.progress}
            dueDate={video.dueDate}
            isCompleted={video.isCompleted}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedBackVideos;
