"use client";

import React, { useState, useMemo } from "react";
import { Button } from "../../button/Button";
import { IoIosArrowRoundUp } from "react-icons/io";
import { BiSolidBell } from "react-icons/bi";
import { TbPlayerPlayFilled } from "react-icons/tb";


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
          <div className="bg-white/40 rounded-full flex items-center justify-center text-white text-md p-px">
            <IoIosArrowRoundUp />
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
          <div className="bg-white/40 rounded-full flex items-center justify-center text-white p-1">
            <TbPlayerPlayFilled className="text-white text-xs" />
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
    <div className="w-full rounded-2xl bg-white/30 p-5 shadow-[1px_1px_0_0_rgba(255,255,255,1),-1px_-1px_0_0_rgba(255,255,255,1)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-slate-900">Todays tasks</h2>
        <Button variant="primary">View Entire Schedule</Button>
      </div>

      {/* Week Days */}
      <div className="flex items-center justify-between gap-3">
        {weekDays.map((day, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-1 relative"
          >
            <div
              className={`w-full flex flex-col items-center px-3 py-3 rounded-2xl transition-all cursor-pointer ${
                day.isToday
                  ? "bg-white shadow-lg shadow-primary-button-bg1/30"
                  : "bg-white/50 hover:bg-slate-50/50"
              }`}
            >
              {/* Day Label */}
              <span
                className={`text-base font-semibold mb-2 ${
                  day.isToday ? "text-[#141B34]" : "text-[#141B34]"
                }`}
              >
                {day.day}
              </span>

              {/* Date */}
              <span
                className={`text-base mb-3 ${
                  day.isToday ? "text-[#141B34]" : "text-[#141B34]"
                }`}
              >
                {day.month}/{day.date}
              </span>
            </div>

            {/* Task Indicator Dot - positioned below */}
            {day.hasTask && (
              <div
                className={`w-2.5 h-2.5 absolute right-3 top-1 rounded-full mt-2 ${
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
      <div className="mt-8 space-y-3">
        {tasks.map((task, idx) => (
          <div
            key={task.id}
            className={`flex items-center justify-between p-4 rounded-2xl ${
              idx === 0 ? "bg-white" : ""
            } hover:bg-white transition-colors`}
          >
            {/* Left Section: Indicator + Task Info */}
            <div className="flex items-center gap-4 flex-1 min-w-0">
              {/* Status Indicator */}

              {/* Task Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-semibold text-slate-900">
                    {task.title}
                  </h3>
                  {task.status === "live" && (
                    <span className="px-2 py-0.5 text-xs font-semibold text-red-600 bg-red-100 rounded">
                      Live
                    </span>
                  )}
                  {task.id === 1 && (
                    <span className="px-2 py-0.5 text-xs font-medium text-gray-600 bg-gray-100 rounded whitespace-nowrap">
                      Video Submission Required
                    </span>
                  )}
                </div>
                <div className="text-sm flex gap-1 text-gray-600">
                  {" "}
                  {task.status === "live" ? (
                    <div className="flex items-center justify-center w-3">
                      <div className="w-2.5 h-2.5 rounded-sm bg-linear-to-b from-[#F7E75C] to-[#CC7B1F] border border-[#F7E75C] shrink-0"></div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center w-3">
                      <div className="w-2.5 h-2.5 rounded-sm bg-linear-to-b from-primary-button-bg1 to-primary-button-bg2 border border-primary-button-bg1 shrink-0"></div>
                    </div>
                  )}
                  {task.subtitle}
                </div>
              </div>
            </div>

            {/* Right Section: Status + Button */}
            <div className="flex items-center gap-5 ml-4">
              {/* Status Text with Icon */}
              <div className="flex items-center gap-2 text-sm text-gray-600 min-w-30 justify-start">
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
              <div className="w-36 flex justify-end">
                <Button variant={task.actionButton.variant} size="sm">
                  {task.actionButton.icon && (
                    <div className="mr-2">{task.actionButton.icon}</div>
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
