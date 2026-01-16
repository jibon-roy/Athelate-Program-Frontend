"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bell } from "lucide-react";
import Logo from "../logo/Logo";
import SearchInput from "@/src/components/ui/input/SearchInput";
import messageIcon from "@/src/assets/icon/message.svg";

const NavBarV2 = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <nav className="w-full">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center gap-4 px-4 py-5">
        <div className="flex items-center gap-3">
          <Logo />
        </div>
        <div className="flex-1 md:ml-5">
          <p className="font-medium">
            <span>Welcome Back, Mark</span>
            <br />
            <span className="text-black/40">Overview /</span>{" "}
            <span>Athlete Program Dashboard</span>
          </p>
        </div>

        <SearchInput
          value={searchValue}
          onChange={setSearchValue}
          placeholder="Search"
          className="w-full max-w-sm"
              />
              <div className="w-0.5 h-7 bg-black/10"></div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/30 text-icon shadow-[1px_1px_0_0_white,-1px_-1px_0_0_white]"
            aria-label="Open messages"
          >
            <Image src={messageIcon} alt="Message icon" />
          </button>

          <button
            type="button"
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/30 text-[] shadow-[1px_1px_0_0_white,-1px_-1px_0_0_white]"
            aria-label="View notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
          </button>

          <Link
            href="/profile"
            className="relative h-9 w-9 overflow-hidden rounded-full ring-white"
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
    </nav>
  );
};

export default NavBarV2;
