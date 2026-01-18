"use client";

import React from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";

import { LiaCommentDots } from "react-icons/lia";
import { LuCirclePlay } from "react-icons/lu";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { IoMdRepeat } from "react-icons/io";

interface AnnouncementCardProps {
  id: number;
  authorName: string;
  authorUsername: string;
  authorAvatar: string;
  timeAgo: string;
  title: string;
  coaches?: string[];
  description: string;
  image?: string;
  isLive?: boolean;
  hasRSVP?: boolean;
  likes: number;
  replies: number;
}

const AnnouncementCard = ({
  authorName,
  authorUsername,
  authorAvatar,
  timeAgo,
  title,
  coaches,
  description,
  image,
  isLive = false,
  hasRSVP = false,
  likes,
  replies,
}: AnnouncementCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-4 mb-4 hover:bg-white/80 transition-colors shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-2">
          {/* Avatar */}
          <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 bg-gray-200">
            <Image
              src={authorAvatar}
              alt={authorName}
              fill
              className="object-cover"
            />
          </div>

          {/* Author Info */}
          <div>
            <div className="flex items-center gap-1.5 mb-0.5">
              <h4 className="font-bold text-[16px] text-[#0F1419]">
                {authorName}
              </h4>
              <span className="text-[#536471] text-[16px]">
                {authorUsername}
              </span>
            </div>
            <p className="text-[#141B3499] text-[10px]">{timeAgo}</p>
          </div>
        </div>

        {/* Menu Button
        <button className="text-gray-500 hover:text-gray-700 p-1">
          <BsThreeDotsVertical className="text-[18px]" />
        </button> */}
      </div>

      {/* Content */}
      <div className="mb-4">
        <h3 className="text-lg md:text-[20px] font-bold text-[#0F1419] mb-1">
          {title}
        </h3>

        {/* Coaches Links */}
        {coaches && coaches.length > 0 && (
          <div className="mb-1 text-[14px]">
            {coaches.map((coach, index) => (
              <span key={index}>
                <a href="#" className="text-[#276AEE]  hover:underline">
                  {coach}
                </a>
                {index < coaches.length - 1 && " & "}
              </span>
            ))}
            <span className="text-[#0F1419] ml-1">{description}</span>
          </div>
        )}

        {!coaches && (
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            {description}
          </p>
        )}

        {/* Image */}
        {image && (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        )}
      </div>

      {/* Actions Row */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-200">
        <div className="flex w-full max-md:flex-wrap items-center gap-3 md:gap-4">
          <div className="flex flex-1 items-center gap-2">
            {isLive && (
              <button className="flex items-center gap-2 bg-linear-to-r from-[#FF6565] to-[#EC4213] hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors">
                <LuCirclePlay className="text-base" />
                Join LIVE
              </button>
            )}
            {hasRSVP && (
              <button className="flex items-center gap-2 bg-blue-50 hover:bg-[#457FF326] text-[#276AEE] px-4 py-2 rounded-xl text-sm  transition-colors">
                <LuClipboardList className="text-base" />
                RSVP to Practice
              </button>
            )}
          </div>
          <div className="flex justify-end items-center gap-6">
            <button className="flex items-center gap-2 text-gray-600  transition-colors">
              <span className="text-red-500">
                <FaHeart className="text-lg" />
              </span>
              <span className="text-sm font-medium">{likes} Likes</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
              <LiaCommentDots className="text-lg" />
              <span className="text-sm font-medium">{replies} Replies</span>
            </button>
          </div>
        </div>
        {/* <button className="flex items-center gap-2 text-[#276AEE] hover:text-blue-700 transition-colors">
          <IoMdRepeat className="text-[18px]" />
        </button> */}
      </div>
    </div>
  );
};

export default AnnouncementCard;
