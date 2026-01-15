"use client";

import React from "react";
import { Search } from "lucide-react";
import { cn } from "@/src/lib/utils";

type SearchInputProps = {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
  inputClassName?: string;
  iconClassName?: string;
  name?: string;
  disabled?: boolean;
};

const SearchInput = ({
  value,
  defaultValue,
  placeholder = "Search",
  onChange,
  className,
  inputClassName,
  iconClassName,
  name,
  disabled = false,
}: SearchInputProps) => {
  return (
    <div className={cn("relative w-full", className)}>
      <Search
        className={cn(
          "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500",
          iconClassName
        )}
      />
      <input
        type="search"
        name={name}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={placeholder}
        className={cn(
          "h-12 md:h-16 w-full bg-white/30 border-l border-l-white px-4 pl-11 text-sm text-slate-700 placeholder:text-slate-500  outline-none ring-0 transition focus:ring-2 focus:ring-blue-300/60 disabled:cursor-not-allowed disabled:opacity-60",
          inputClassName
        )}
        aria-label={placeholder}
      />
    </div>
  );
};

export default SearchInput;
