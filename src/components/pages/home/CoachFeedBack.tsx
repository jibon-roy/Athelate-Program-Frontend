"use client";

import React, { useState } from "react";
import { Button } from "@/src/components/ui/button/Button";

interface Feedback {
  id: number;
  coachName: string;
  coachImage: string;
  time: string;
  message: string;
  rating: number;
}

const CoachFeedBack = () => {
  const [feedbacks] = useState<Feedback[]>([
    {
      id: 1,
      coachName: "Coach Sarah",
      coachImage: "/placeholder-coach-1.jpg",
      time: "2h ago",
      message:
        "Great progress on your strength training! 💪 Stay consistent and keep challenging yourself. You're getting stronger every day — keep pushing! 🚀",
      rating: 4,
    },
    {
      id: 2,
      coachName: "Coach Sarah",
      coachImage: "/placeholder-coach-2.jpg",
      time: "3h ago",
      message:
        "Your squat form is looking much better! 🏆 Stay focused on technique each rep. Keep it up—you're building real strength! 🔥",
      rating: 4,
    },
    {
      id: 3,
      coachName: "Coach Sarah",
      coachImage: "/placeholder-coach-3.jpg",
      time: "",
      message:
        "Solid improvement on your squat technique! Each rep looks more confident. Keep driving forward—you're doing great! 🚀",
      rating: 4,
    },
  ]);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? "text-orange-400 fill-orange-400"
                : "text-orange-400 fill-none"
            }`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white/60 backdrop-blur-[6px] w-full rounded-[20px] p-6 shadow-[0px_10px_24px_rgba(15,23,42,0.08),0px_1px_1px_rgba(0,0,0,0.06)]">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h3 className="text-lg md:text-xl font-bold text-gray-900">
          Coach Feedback
        </h3>
        <Button
          variant="primary"
          size="default"
          className="whitespace-nowrap"
        >
          View More
        </Button>
      </div>

      {/* Feedback List */}
      <div className="space-y-6">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="flex gap-4">
            {/* Coach Avatar */}
            <div className="relative w-12 h-12 rounded-full bg-linear-to-br from-gray-200 to-gray-400 shrink-0 overflow-hidden">
              {/* Placeholder for coach image */}
              <div className="w-full h-full flex items-center justify-center text-gray-600 font-semibold">
                CS
              </div>
            </div>

            {/* Feedback Content */}
            <div className="flex-1">
              {/* Coach Name and Stars */}
              <div className="flex items-start justify-between max-sm:flex-wrap gap-3 mb-2">
                <div>
                  <h4 className="text-gray-900 font-semibold">
                    {feedback.coachName}
                  </h4>
                  <p className="text-gray-500 text-sm">{feedback.time}</p>
                </div>
                <div className="sm:ml-4">{renderStars(feedback.rating)}</div>
              </div>

              {/* Feedback Message */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feedback.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoachFeedBack;
