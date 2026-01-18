"use client";

import Image from "next/image";
import React from "react";
import userGroup from "@/src/assets/icon/user-group.png";
import medal from "@/src/assets/icon/medal-02.png";

type BannerCard = {
  id: string;
  title: string;
  value?: string;
  delta?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  progress?: number;
  progressColor?: string;
};

function ProgressRing({
  valueText,
  progress,
  color,
}: {
  valueText: string;
  progress: number;
  color: string;
}) {
  const clamped = Math.max(0, Math.min(100, progress));
  const size = 50;
  const stroke = 6;
  const cx = size / 2;
  const cy = size / 2;
  const radius = (size - stroke) / 2;

  // Speedometer/gauge: draw an arc with a bottom gap.
  // Angles are in degrees, 0° is at 3 o'clock, increasing clockwise.
  const startAngle = 220; // left-bottom
  const sweep = 300; // degrees (leaves ~60deg gap at bottom)
  const currentAngle = startAngle + (sweep * clamped) / 100;

  const polarToCartesian = (angleDeg: number) => {
    const angleRad = ((angleDeg - 90) * Math.PI) / 180;
    return {
      x: cx + radius * Math.cos(angleRad),
      y: cy + radius * Math.sin(angleRad),
    };
  };

  const describeArc = (fromDeg: number, toDeg: number) => {
    const from = polarToCartesian(fromDeg);
    const to = polarToCartesian(toDeg);
    const largeArcFlag = Math.abs(toDeg - fromDeg) > 180 ? 1 : 0;
    return `M ${from.x} ${from.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${to.x} ${to.y}`;
  };

  const trackPath = describeArc(startAngle, startAngle + sweep);
  const progressPath = describeArc(startAngle, currentAngle);
  const dot = polarToCartesian(currentAngle);

  const dotTrail = Array.from({ length: 4 }).map((_, idx) => {
    const trailAngle = currentAngle - idx * 9;
    const p = polarToCartesian(trailAngle);
    const opacity = 0.55 - idx * 0.12;
    return {
      x: p.x,
      y: p.y,
      opacity: Math.max(0.08, opacity),
    };
  });

  return (
    <div className="relative h-12 w-12 shrink-0">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="block"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={`g-${color.replace("#", "")}`}
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor={color} stopOpacity="0.70" />
            <stop offset="100%" stopColor={color} stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Track (gap at bottom) */}
        <path
          d={trackPath}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth={stroke}
          strokeLinecap="round"
        />

        {/* Glow */}
        <path
          d={progressPath}
          fill="none"
          stroke={color}
          strokeWidth={stroke + 4}
          strokeLinecap="round"
          opacity={0.18}
        />

        {/* Progress (gradient) */}
        <path
          d={progressPath}
          fill="none"
          stroke={`url(#g-${color.replace("#", "")})`}
          strokeWidth={stroke}
          strokeLinecap="round"
        />

        {/* Dotted trail (as in reference) */}
        {dotTrail.map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={1.25}
            fill={color}
            opacity={d.opacity}
          />
        ))}

        {/* Endpoint dot indicator (1px core with white outline) */}
        <circle cx={dot.x} cy={dot.y} r={1} fill={"#FFFFFF"} />
        <circle
          cx={dot.x}
          cy={dot.y}
          r={2}
          fill="none"
          stroke={color}
          strokeWidth={2}
          opacity={0.95}
        />
      </svg>

      {/* Center value (no pill/shadow; only text) */}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[12px] font-semibold leading-4.25 text-slate-700">
        {valueText}
      </span>
    </div>
  );
}

const bannerCards: BannerCard[] = [
  {
    id: "athletes",
    title: "Total Athletes",
    value: "65",
    delta: "+12",
    icon: (
      <Image src={userGroup} alt="athletes" width={24} height={24} priority />
    ),
  },
  {
    id: "ranking",
    title: "Projected Ranking",
    value: "#5",
    icon: (
      <Image
        src={medal}
        alt="medal"
        width={34}
        unoptimized
        className="w-5"
        height={34}
        priority
      />
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
    <div className="flex w-full flex-wrap xl:flex-nowrap gap-3 lg:gap-1">
      {bannerCards.map((card) => {
        const hasProgress = typeof card.progress === "number";
        return (
          <div
            key={card.id}
            className="flex min-w-45 flex-1 items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white px-4 py-3"
          >
            <div className="flex items-center gap-3">
              {card.icon ? (
                <div className="flex h-10 w-10 items-center justify-center rounded-full ">
                  {card.icon}
                </div>
              ) : null}
              <div>
                <p className="text-[12px] font-medium leading-4.25 tracking-[-0.02em] text-[#141B34B2]">
                  {card.title}
                </p>
                {card.subtitle ? (
                  <p className="text-[10px] font-medium text-[#141B34B2]">
                    {card.subtitle}
                  </p>
                ) : null}
                {!hasProgress ? (
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-lg font-semibold text-slate-900">
                      {card.value}
                    </span>
                    {card.delta ? (
                      <span className="text-xs text-emerald-500">
                        {card.delta}
                      </span>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>

            {hasProgress && card.progressColor ? (
              <ProgressRing
                valueText={card.value ?? `${card.progress}%`}
                progress={card.progress!}
                color={card.progressColor}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default BannerStates;
