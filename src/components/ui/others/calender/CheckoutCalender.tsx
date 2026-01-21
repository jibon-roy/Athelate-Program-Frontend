"use client";

import { GiCheckMark } from "react-icons/gi";
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
    <div className="w-full sm:max-w-82.5 rounded-3xl  bg-linear-to-t from-white via-white to-white/80 p-4 shadow-[0_18px_45px_rgba(17,24,39,0.08)]">
      <div className="flex items-start justify-between gap-8">
        <div>
          <p className="text-xs font-semibold tracking-wide text-black mt-3">
            Active Streak
          </p>
          <div className="bg-white mt-2 shadow-md">
            <div className="mt-1 flex items-end gap-2">
              <span className="text-2xl font-semibold text-slate-900">
                12 Days
              </span>
            </div>
            <p className="mt-1 text-[11px] font-medium text-[#141B34CC]">
              Next milestone: 15 days
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="rounded-full h-10 bg-[linear-gradient(160deg,#FDB631_0%,#EC4213_60%)]  px-4 py-3 text-xs font-semibold text-white shadow-inner">
            Hot Streak
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg">
            🔥
          </span>
        </div>
      </div>

      <div className="mt-2 flex items-center gap-4 justify-between">
        {weekItems?.map((item, id) => (
          <div
            key={`${item.label}-${id}`}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[11px] font-semibold text-slate-400">
              {item.label}
            </span>
            {item.active ? (
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-b from-[#5C8FF7]  to-[#276AEE] text-xs font-semibold text-white">
                <GiCheckMark className="h-3 w-3" />
              </span>
            ) : (
              <span className="text-xs bg-white h-6 w-6 flex items-center justify-center rounded-full font-semibold text-slate-500">
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
