"use client";

import React from "react";
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";

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
    <div className="w-full max-w-66 p-3 rounded-[20px] overflow-hidden bg-white/60 hover:bg-white backdrop-blur-[6px] mb-6 shadow-[0px_10px_24px_rgba(15,23,42,0.08),0px_1px_1px_rgba(0,0,0,0.06)] transition-all duration-200 ease-out">
      {/* Video Thumbnail */}
      <div className="relative aspect-video w-full h-32 rounded-xl bg-gray-200 overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        {/* Play button overlay */}
        <div className="absolute cursor-pointer inset-0 flex items-center justify-center bg-black/0 hover:bg-black/40 transition-colors">
          <div className="bg-white/10 shadow-[1px_1px_0_0_rgba(255,255,255,0.6),-1px_-1px_0_0_rgba(255,255,255,0.6)] backdrop-blur-xs p-1 rounded-full">
            <FaCirclePlay className="text-white text-2xl" />
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="pt-4">
        {/* Title */}
        <h3 className="text-[16px] leading-5.5 font-semibold text-slate-900 mb-3 line-clamp-2">
          {title}
        </h3>

        {/* Progress Bar */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
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
          <div className="flex items-center gap-1">
            {/* <div className="w-4 h-4 rounded-full border-2 border-blue-600 flex items-center justify-center">
              {isCompleted ? (
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
              ) : null}
            </div> */}
            {isCompleted ? (
              <div className="flex items-center justify-center w-3">
                <div className="w-2.5 h-2.5 rounded-sm bg-linear-to-b from-[#F7E75C] to-[#CC7B1F] border border-[#F7E75C] shrink-0"></div>
              </div>
            ) : (
              <div className="flex items-center justify-center w-3">
                <div className="w-2.5 h-2.5 rounded-sm bg-linear-to-b from-primary-button-bg1 to-primary-button-bg2 border border-primary-button-bg1 shrink-0"></div>
              </div>
            )}
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
