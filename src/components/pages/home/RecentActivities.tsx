"use client";

import React, { useState } from "react";
import { Button } from "@/src/components/ui/button/Button";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";

interface Activity {
  id: number;
  icon: string;
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
      icon: "V",
      coachName: "Coach Bronson",
      action: "added a task",
      description: "Check the itinerary for optimization suggestions.",
      time: "1min ago",
      showFeedback: false,
    },
    {
      id: 2,
      icon: "V",
      coachName: "Coach Johnny",
      action: "gave feedback on",
      description: "your submission",
      time: "1min ago",
      showFeedback: true,
    },
    {
      id: 3,
      icon: "V",
      coachName: "Coach Sarah",
      action: "replied to your",
      description: "comment",
      description2: "Check the itinerary for optimization suggestions.",
      time: "1min ago",
      showFeedback: false,
    },
  ]);

  return (
    <div className="bg-white/60 backdrop-blur-[6px] w-full rounded-[20px] p-5 shadow-[0px_10px_24px_rgba(15,23,42,0.08),0px_1px_1px_rgba(0,0,0,0.06)] mb-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2 md:gap-3">
          <h3 className="text-lg md:text-xl font-bold text-gray-900">
            Recent Activity
          </h3>
          <span className="flex items-center gap-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
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
          <Button
            variant="primary"
            size="default"
            className="text-xs md:text-sm whitespace-nowrap"
          >
            View More
          </Button>
        </div>
      </div>

      {/* Activities List */}
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex hover:bg-white/40 p-2 rounded-xl gap-4"
          >
            {/* Icon */}
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-lg">
                {activity.icon}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-gray-900 font-semibold">
                    {activity.coachName}{" "}
                    <span className="font-normal">{activity.action}</span>
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    {activity.description}
                  </p>
                  {activity.description2 && (
                    <p className="text-gray-600 text-sm">
                      {activity.description2}
                    </p>
                  )}
                </div>
                <span className="text-blue-600 text-xs font-medium ml-4 whitespace-nowrap">
                  {activity.time}
                </span>
              </div>

              {/* View Feedback Button */}
              {activity.showFeedback && (
                <div className="mt-3">
                  <Button variant="primary" size="sm" className="text-sm">
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
