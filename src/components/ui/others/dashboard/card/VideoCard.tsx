"use client";

import React from "react";
import Image from "next/image";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  progress: number;
  dueDate: string;
  isCompleted?: boolean;
}

const VideoCard = ({
  title,
  thumbnail,
  progress,
  dueDate,
  isCompleted = false,
}: VideoCardProps) => {
  return (
    <div className="w-full max-w-sm p-3 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow">
      {/* Video Thumbnail */}
      <div className="relative aspect-video w-full h-32 rounded-xl bg-gray-200 overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
            <svg
              className="w-6 h-6 text-blue-600 ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="pt-4">
        {/* Title */}
        <h3 className="text-base font-semibold text-slate-900 mb-3 line-clamp-2">
          {title}
        </h3>

        {/* Progress Bar */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs font-semibold text-slate-600 min-w-fit">
              {progress}%
            </span>
          </div>
        </div>

        {/* Status and Due Date */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border-2 border-blue-600 flex items-center justify-center">
              {isCompleted ? (
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
              ) : null}
            </div>
            <span className="text-xs font-medium text-slate-600">
              {progress}% Complete
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs font-medium text-slate-600">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {dueDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
