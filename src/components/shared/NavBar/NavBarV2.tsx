"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bell, Search, X } from "lucide-react";
import Logo from "../logo/Logo";
import SearchInput from "@/src/components/ui/input/SearchInput";
import messageIcon from "@/src/assets/icon/message.svg";

const NavBarV2 = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <nav className="w-full">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center gap-2 md:gap-4 px-4 py-5">
        <div className="flex items-center gap-2 md:gap-3">
          <Logo />
        </div>
        <div className="flex-1 md:ml-8">
          <p className="font-medium text-black/90 text-sm md:text-[16px]">
            <span className="hidden sm:inline">Welcome Back, Mark</span>
            <span className="sm:hidden">Mark</span>
            <br className="hidden md:block" />
            <span className="text-black/40 text-xs md:text-[14px] hidden lg:inline">
              Overview/
            </span>{" "}
            <span className="text-xs md:text-[16px] hidden lg:inline">
              Athlete Program Dashboard
            </span>
          </p>
        </div>

        {/* Desktop Search */}
        <SearchInput
          value={searchValue}
          onChange={setSearchValue}
          placeholder="Search"
          className="hidden lg:flex  w-full max-w-100"
        />

        {/* Mobile Search Icon */}
        <button
          type="button"
          onClick={() => setShowMobileSearch(true)}
          className="lg:hidden flex h-9 w-9 items-center justify-center rounded-full bg-white/30 shadow-[1px_1px_0_0_white,-1px_-1px_0_0_white]"
          aria-label="Open search"
        >
          <Search className="h-5 w-5" />
        </button>

        <div className="hidden lg:block w-0.5 h-7 bg-black/10"></div>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            className="flex cursor-pointer h-9 w-9 items-center justify-center rounded-full bg-white/30 text-icon shadow-[1px_1px_0_0_white,-1px_-1px_0_0_white]"
            aria-label="Open messages"
          >
            <Image src={messageIcon} alt="Message icon" />
          </button>

          <button
            type="button"
            className="relative cursor-pointer flex h-9 w-9 items-center justify-center rounded-full bg-white/30 text-[] shadow-[1px_1px_0_0_white,-1px_-1px_0_0_white]"
            aria-label="View notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 flex items-center justify-center text-white h-2.5 w-2.5 rounded-full bg-[#E21212] text-[6px]">6</span>
          </button>

          <Link
            href="/profile"
            className="relative cursor-pointer h-9 w-9 overflow-hidden rounded-full ring-white"
            aria-label="Open profile"
          >
            <Image
              src="/user.png"
              alt="User avatar"
              fill
              sizes="40px"
              className="object-cover"
            />
          </Link>
        </div>
      </div>

      {/* Mobile Search Popup */}
      {showMobileSearch && (
        <div className="fixed inset-0 z-50 bg-black/50 lg:hidden">
          <div className="bg-white p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <SearchInput
                value={searchValue}
                onChange={setSearchValue}
                placeholder="Search"
                className="flex-1"
              />
              <button
                type="button"
                onClick={() => setShowMobileSearch(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBarV2;
