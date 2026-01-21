import React from "react";
import BannerStates from "./BannerStates";
import CheckoutCalender from "../../calender/CheckoutCalender";
import player from "@/src/assets/images/home/player.png";

const Banner = () => {
  return (
    <div
      className="relative w-full min-h-106.25 rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${player.src})`,
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent via-40% to-white"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between p-5 md:p-7 lg:absolute lg:inset-0">
        {/* Left side - Title and States */}
        <div className="flex-1 mb-6 md:mb-7">
          <h1 className="font-['Poppins'] text-2xl md:text-[32px] lg:text-[48px] leading-[140%] font-semibold tracking-[0px] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
            The QB Fundamentals
          </h1>
        </div>
        <div className="flex max-lg:flex-col lg:items-end md:justify-between gap-2">
          <div className="flex-1">
            <BannerStates />
          </div>

          {/* Right side - Checkout Calendar */}
          <div>
            <CheckoutCalender />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
