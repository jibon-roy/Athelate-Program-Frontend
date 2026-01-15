"use client";

import React from "react";

const weekItems = [
  { label: "M", active: true },
  { label: "T", active: true },
  { label: "W", active: true },
  { label: "T", active: true },
  { label: "F", value: "23" },
  { label: "S", value: "24" },
  { label: "S", value: "25" },
];

const CheckoutCalender = () => {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-black/5 bg-white p-5 shadow-[0_18px_45px_rgba(17,24,39,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Active Streak
          </p>
          <div className="mt-1 flex items-end gap-2">
            <span className="text-2xl font-semibold text-slate-900">12</span>
            <span className="text-sm font-medium text-slate-500">Days</span>
          </div>
          <p className="mt-1 text-[11px] font-medium text-slate-400">
            Next milestone: 15 days
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-linear-to-r from-orange-400 to-rose-500 px-4 py-1 text-xs font-semibold text-white shadow-sm">
            Hot Streak
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-50 text-lg">
            🔥
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        {weekItems.map((item) => (
          <div
            key={`${item.label}-${item.value ?? ""}`}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[11px] font-semibold text-slate-400">
              {item.label}
            </span>
            {item.active ? (
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white shadow-[0_8px_16px_rgba(37,99,235,0.35)]">
                ✓
              </span>
            ) : (
              <span className="text-sm font-semibold text-slate-500">
                {item.value}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutCalender;
