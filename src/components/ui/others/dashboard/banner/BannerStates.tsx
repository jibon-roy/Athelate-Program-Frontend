"use client";

import React from "react";

type BannerCard = {
  id: string;
  title: string;
  value: string;
  delta?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  progress?: number;
  progressColor?: string;
};

const bannerCards: BannerCard[] = [
  {
    id: "athletes",
    title: "Total Athletes",
    value: "65",
    delta: "+12",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-slate-400">
        <path
          fill="currentColor"
          d="M7.5 7.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm9.5 3a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM4 17.5a4.5 4.5 0 0 1 9 0v.5H4v-.5Zm10 1v-1a4.5 4.5 0 0 0-2.2-3.87A3.5 3.5 0 0 1 20 16.5v2H14Z"
        />
      </svg>
    ),
  },
  {
    id: "ranking",
    title: "Projected Ranking",
    value: "#5",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-slate-400">
        <path
          fill="currentColor"
          d="M6 3h12l1 6-7 12L5 9l1-6Zm3 5a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
        />
      </svg>
    ),
  },
  {
    id: "consistency",
    title: "Consistency Score",
    subtitle: "last 30 days",
    value: "65%",
    progress: 65,
    progressColor: "#3b82f6",
  },
  {
    id: "weekly",
    title: "Weekly Progress",
    value: "35%",
    progress: 35,
    progressColor: "#22c55e",
  },
];

const BannerStates = () => {
  return (
    <div className="flex w-full flex-wrap gap-3">
      {bannerCards.map((card) => {
        const hasProgress = typeof card.progress === "number";
        return (
          <div
            key={card.id}
            className="flex min-w-52.5 flex-1 items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-sm"
          >
            <div className="flex items-center gap-3">
              {card.icon ? (
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50">
                  {card.icon}
                </span>
              ) : null}
              <div>
                <p className="text-xs font-semibold text-slate-500">
                  {card.title}
                </p>
                {card.subtitle ? (
                  <p className="text-[11px] font-medium text-slate-400">
                    {card.subtitle}
                  </p>
                ) : null}
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-lg font-semibold text-slate-900">
                    {card.value}
                  </span>
                  {card.delta ? (
                    <span className="text-xs font-semibold text-emerald-500">
                      {card.delta}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>

            {hasProgress ? (
              <div
                className="relative flex h-12 w-12 items-center justify-center rounded-full"
                style={{
                  background: `conic-gradient(${card.progressColor} ${card.progress}%, #e5e7eb ${card.progress}%)`,
                }}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-semibold text-slate-700">
                  {card.value}
                </span>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default BannerStates;
