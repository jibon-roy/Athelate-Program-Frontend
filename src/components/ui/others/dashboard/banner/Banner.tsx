import React from "react";
import BannerStates from "./BannerStates";
import CheckoutCalender from "../../CheckoutCalender";
import player from "@/src/assets/images/home/player.png";

const Banner = () => {
  return (
    <div
      className="relative w-full rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${player.src})`,
        minHeight: "400px",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-linear-to-t from-white via-white/0 to-transparent"></div>

      {/* Content */}
      <div className="relative  z-10 flex flex-col justify-between p-8 h-full">
        {/* Left side - Title and States */}
        <div className="flex-1 mb-20">
          <h1 className="text-5xl font-bold text-white mb-2">
            The QB Fundamentals
          </h1>

          {/* Banner States */}
        </div>
        <div className="flex">
          <div className="mt-8 flex-1 self-end">
            <BannerStates />
          </div>

          {/* Right side - Checkout Calendar */}
          <div className="max-xl:mt-8 md:ml-5 xl:ml-8">
            <CheckoutCalender />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
