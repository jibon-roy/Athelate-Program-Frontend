"use client";

import React, { useState, useMemo } from "react";
import { Button } from "../../button/Button";
import { IoIosArrowRoundUp } from "react-icons/io";
import { BiSolidBell } from "react-icons/bi";
// import { TbPlayerPlayFilled } from "react-icons/tb";
import playIcon from "@/src/assets/icon/play.png";
import Image from "next/image";

interface TaskItem {
  id: number;
  title: string;
  subtitle: string;
  status: "due" | "live" | "complete" | "upcoming";
  statusText: string;
  actionButton: {
    text: string;
    variant: "primary" | "secondary";
    icon?: React.ReactNode;
  };
}

interface DayTask {
  day: string;
  date: number;
  month: number;
  hasTask?: boolean;
  isToday?: boolean;
  taskColor?: "blue" | "orange";
}

const TaskCalender = () => {
  const [currentDate] = useState(new Date());

  // Sample task data
  const tasks: TaskItem[] = [
    {
      id: 1,
      title: "Linebacker Drills",
      subtitle: "Hawaii Trench Warriors",
      status: "due",
      statusText: "Due Today",
      actionButton: {
        text: "Upload",
        variant: "primary",
        icon: (
          <div className="bg-white/30 rounded-full flex items-center justify-center text-white text-md p-px">
            <IoIosArrowRoundUp className="text-white text-xs" />
          </div>
        ),
      },
    },
    {
      id: 2,
      title: "University Of Oregon Virtual Camp",
      subtitle: "Hawaii Trench Warriors",
      status: "live",
      statusText: "5:30 pm",
      actionButton: {
        text: "Remind Me",
        variant: "primary",
        icon: (
          <div className="bg-white/40 rounded-full flex items-center justify-center text-white p-1">
            <BiSolidBell className="text-white text-xs" />
          </div>
        ),
      },
    },
    {
      id: 3,
      title: "QB Fundamentals",
      subtitle: "Hawaii Trench Warriors",
      status: "complete",
      statusText: "Complete",
      actionButton: {
        text: "Done",
        variant: "secondary",
      },
    },
    {
      id: 4,
      title: "Practice Reading Offense Quiz",
      subtitle: "Hawaii Trench Warriors",
      status: "upcoming",
      statusText: "3 days left",
      actionButton: {
        text: "Start",
        variant: "primary",
        icon: (
          <div>
            <Image src={playIcon} alt="play" className="text-white w-3 h-3" />
          </div>
        ),
      },
    },
  ];

  // Get the current week's days
  const weekDays = useMemo(() => {
    const today = new Date(currentDate);
    const dayOfWeek = today.getDay();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - dayOfWeek);

    const days: DayTask[] = [];
    const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);

      days.push({
        day: dayLabels[i],
        date: date.getDate(),
        month: date.getMonth() + 1,
        isToday: date.toDateString() === today.toDateString(),
        hasTask: i === 4 || i === 5, // Example: Thu and Fri have tasks
        taskColor: i === 4 ? "blue" : "orange",
      });
    }

    return days;
  }, [currentDate]);

  return (
    <div className="w-full rounded-[20px] max-w-5xl bg-white/30 backdrop-blur-[6px] p-4 shadow-[1px_1px_0_0_white,-1px_-1px_0_0_white]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <h2 className="text-lg md:text-[20px] font-semibold text-slate-900">
          Todays tasks
        </h2>
        <Button variant="primary">View Entire Schedule</Button>
      </div>

      {/* Week Days */}
      <div className="flex items-center overflow-x-auto gap-1 sm:gap-2 md:gap-3 scrollbar-hide md:scrollbar-default pb-2">
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          @media (min-width: 768px) {
            .scrollbar-default::-webkit-scrollbar {
              display: block;
            }
            .scrollbar-default {
              -ms-overflow-style: auto;
              scrollbar-width: auto;
            }
          }
        `}</style>
        {weekDays.map((day, index) => (
          <div
            key={index}
            className="flex flex-col items-center shrink-0 relative min-w-15 sm:min-w-17.5 md:flex-1"
          >
            <div
              className={`w-full flex flex-col pt-3 items-center px-1.5 mb-2 sm:px-2 md:px-3 py-2   rounded-lg sm:rounded-xl md:rounded-2xl transition-all cursor-pointer ${
                day.day === "Tue"
                  ? "bg-white shadow-lg shadow-primary-button-bg1/20"
                  : "bg-white/50 hover:bg-slate-50/50"
              }`}
            >
              {/* Day Label */}
              <span
                className={`text-xs sm:text-sm md:text-[18px] text-[#141B34] font-medium mb-1 sm:mb-1.5 md:mb-2 ${
                  day.isToday ? "text-[#141B34]" : "text-[#141B34]"
                }`}
              >
                {day.day}
              </span>

              {/* Date */}
              <span
                className={`text-xs sm:text-sm md:text-[12px] mb-2 sm:mb-2.5 md:mb-3 ${
                  day.isToday ? "text-[#141B34]" : "text-[#141B34]"
                }`}
              >
                {day.month}/{day.date}
              </span>
            </div>

            {/* Task Indicator Dot - positioned below */}
            {day.hasTask && (
              <div
                className={`w-2 h-2 sm:w-1.5 sm:h-1.5 absolute right-1.5 sm:right-2 md:right-3.5 top-0.5 rounded-full mt-2 ${
                  day.taskColor === "blue"
                    ? "bg-linear-to-b from-primary-button-bg1 to-primary-button-bg2 shadow-md"
                    : "bg-linear-to-b from-[#FDB631] to-[#EC4213]"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Task List */}
      <div className="space-y-2 sm:space-y-3">
        {tasks.map((task, idx) => (
          <div
            key={task.id}
            className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 rounded-xl sm:rounded-2xl gap-3 sm:gap-0 ${
              idx === 0 ? "bg-white/40" : ""
            } hover:bg-white/40 transition-colors`}
          >
            {/* Left Section: Indicator + Task Info */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0 w-full sm:w-auto">
              {/* Status Indicator */}

              {/* Task Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
                  <h3 className="text-sm sm:text-[14px] font-semibold text-slate-900">
                    {task.title}
                  </h3>
                  {task.status === "live" && (
                    <span className="flex items-center gap-1 text-red-500 px-2 py-1 rounded-full text-[11px] font-bold">
                      <span className="w-2 h-2 bg-red-500 rounded-xs animate-pulse"></span>
                      Live
                    </span>
                  )}
                  {task.id === 1 && (
                    <span className="px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[10px] font-medium text-black bg-[#0000001A] rounded-full whitespace-nowrap">
                      Video Submission Required
                    </span>
                  )}
                </div>
                <div className="text-[12px] flex gap-1 text-[#141B34CC]">
                  {" "}
                  {task.status === "live" ? (
                    <div className="flex items-center justify-center w-3">
                      <div className="w-3 h-3 rounded bg-linear-to-b from-[#F7E75C] to-[#CC7B1F] border border-[#F7E75C] shrink-0"></div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center w-3">
                      <div className="w-3 h-3 rounded bg-linear-to-b from-primary-button-bg1 to-primary-button-bg2 border border-primary-button-bg1 shrink-0"></div>
                    </div>
                  )}
                  {task.subtitle}
                </div>
              </div>
            </div>

            {/* Right Section: Status + Button */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-5 sm:ml-4 w-full sm:w-auto">
              {/* Status Text with Icon */}
              <div className="flex items-center gap-1.5 sm:gap-2 text-[12px] text-gray-600 min-w-20 sm:min-w-30 justify-start">
                {task.status === "due" && (
                  <>
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
                    <span>{task.statusText}</span>
                  </>
                )}
                {task.status === "live" && (
                  <>
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{task.statusText}</span>
                  </>
                )}
                {task.status === "complete" && (
                  <>
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span className="text-green-600 font-medium">
                      {task.statusText}
                    </span>
                  </>
                )}
                {task.status === "upcoming" && (
                  <>
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
                    <span>{task.statusText}</span>
                  </>
                )}
              </div>

              {/* Action Button */}
              <div className="flex-1 sm:flex-initial sm:w-28 md:w-36 flex justify-end">
                <Button
                  variant={task.actionButton.variant}
                  size="sm"
                  className={`${task.actionButton.icon ? "pl-2.5 pr-3" : "px-4"} w-auto  py-2`}
                >
                  {task.actionButton.icon && (
                    <div className="mr-1.5 sm:mr-2">
                      {task.actionButton.icon}
                    </div>
                  )}
                  {task.actionButton.text}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskCalender;
