"use client";

import React, { useState } from "react";
import { Button } from "@/src/components/ui/button/Button";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import Image from "next/image";
import v1 from "@/src/assets/images/card/v1.png";

interface Activity {
  id: number;
  icon: React.ReactNode;
  coachName: string;
  action: string;
  description: string;
  description2?: string;
  time: string;
  showFeedback?: boolean;
}

const RecentActivities = () => {
  const [activities] = useState<Activity[]>([
    {
      id: 1,
      icon: (
        <Image
          src={v1}
          className="w-12 h-12"
          alt="Task Icon"
          width={v1.width}
          height={v1.height}
        />
      ),
      coachName: "Coach Bronson",
      action: "added a task",
      description: "Check the itinerary for optimization suggestions.",
      time: "1min ago",
      showFeedback: false,
    },
    {
      id: 2,
      icon: (
        <Image
          src={v1}
          className="w-12 h-12"
          alt="Task Icon"
          width={v1.width}
          height={v1.height}
        />
      ),
      coachName: "Coach Johnny",
      action: "gave feedback on",
      description: "your submission",
      time: "1min ago",
      showFeedback: true,
    },
    {
      id: 3,
      icon: (
        <Image
          src={v1}
          className="w-12 h-12"
          alt="Task Icon"
          width={v1.width}
          height={v1.height}
        />
      ),
      coachName: "Coach Sarah",
      action: "replied to your comment",
      description: "Check the itinerary for optimization suggestions.",
      time: "1min ago",
      showFeedback: false,
    },
  ]);

  return (
    <div className="bg-white/30 backdrop-blur-[6px] w-full rounded-[20px] p-4 shadow-[1px_1px_0_0_white,-1px_-1px_0_0_white] mb-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center">
          <h3 className="text-lg md:text-[20px] font-bold text-gray-900">
            Recent Activity
          </h3>
          <span className="flex items-center gap-1 text-red-500 px-2 py-1 rounded-full text-[11px] font-bold">
            <span className="w-3.5 h-3.5 bg-red-500 border-3 border-red-300 rounded-full animate-pulse"></span>
            LIVE
          </span>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <button
            className="p-2 bg-white/70 rounded-full hover:bg-white transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Filter activities"
          >
            <HiOutlineAdjustmentsVertical className="text-gray-700 text-lg" />
          </button>
          <Button variant="primary" size="default">
            View More
          </Button>
        </div>
      </div>

      {/* Activities List */}
      <div className="space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex hover:bg-white/40 p-2 rounded-xl gap-4"
          >
            {/* Icon */}
            <div>{activity.icon}</div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-black text-sm mb-2 font-semibold">
                    {activity.coachName} <span>{activity.action}</span>
                  </p>
                  <p className="text-black/70 leading-normal text-xs mt-1">
                    {activity.description}
                  </p>
                  {activity.description2 && (
                    <p className="text-black/70 text-sm">
                      {activity.description2}
                    </p>
                  )}
                </div>
                <span className="text-blue-600 text-[10px] font-medium ml-4 whitespace-nowrap">
                  {activity.time}
                </span>
              </div>

              {/* View Feedback Button */}
              {activity.showFeedback && (
                <div className="mt-3">
                  <Button variant="primary" size="sm">
                    View Feedback
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;
