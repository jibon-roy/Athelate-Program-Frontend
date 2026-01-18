import React from "react";
import BannerStates from "./BannerStates";
import CheckoutCalender from "../../calender/CheckoutCalender";
import player from "@/src/assets/images/home/player.png";

const Banner = () => {
  return (
    <div
      className="relative w-full rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${player.src})`,
        minHeight: "360px",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-linear-to-t from-[#F7FAFF] via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between p-6 md:p-8 h-full">
        {/* Left side - Title and States */}
        <div className="flex-1 mb-6 md:mb-8">
          <h1 className="text-[40px] md:text-[56px] leading-[120%] font-extrabold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
            The QB Fundamentals
          </h1>
        </div>
        <div className="md:flex md:items-end md:justify-between gap-6">
          <div className="flex-1">
            <BannerStates />
          </div>

          {/* Right side - Checkout Calendar */}
          <div className="max-xl:mt-6 md:ml-6 xl:ml-8">
            <CheckoutCalender />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
