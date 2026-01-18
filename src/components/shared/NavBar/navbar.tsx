"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Bell, MessageCircle, Search } from "lucide-react";
// import { useSelector } from "react-redux";
import type { NavbarProps, NavItem, DropdownItem } from "./types";
import { Drawer } from "./drawer";
// import { RootState } from "@/src/redux/store";
// import UserDropdown from "./UserDropdown";

export const Navbar = ({
  logo,
  navDivider = false,
  navItems = [],
  buttons = [],
  mobileBreakpoint = "lg",
  position = "fixed",
  backgroundColor = "bg-gradient-to-r from-[#e9f0fe] to-[#d7e7ff]",
  textColor = "text-slate-800",
  activeTextColor = "text-indigo-600",
  hoverTextColor = "hover:text-indigo-600",
  dropdownBackgroundColor = "bg-white",
  dropdownTextColor = "text-slate-800",
  dropdownHoverBackgroundColor = "hover:bg-slate-100",
  dropdownBorderColor = "border-slate-200",
  hamburgerColor = "text-slate-800",
  drawerBackgroundColor = "bg-white",
  drawerWidth = "w-64",
  shadow = "shadow-md",
  padding = "px-4 py-3",
  transition = "transition-all duration-300 ease-in-out",
  zIndex = "z-[999]",
  showOnScroll = false,
  hideOnScroll = false,
  conditionalRoutes = {},
  className = "",
  activeBgColor = "bg-white",
  activeHoverBgColor = "hover:bg-white/60",
  showSearch = true,
  searchPlaceholder = "Search",
  initialSearchValue = "",
  onSearchChange,
  onNavItemClick,
  onButtonClick,
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<Record<number, boolean>>({});
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(initialSearchValue);
  const pathname = usePathname();

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      if (hideOnScroll) {
        setVisible(scrollPosition > currentPosition || currentPosition < 50);
      }

      if (showOnScroll) {
        setVisible(currentPosition > 50);
      }

      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition, hideOnScroll, showOnScroll]);

  // Toggle dropdown
  const toggleDropdown = (index: number) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setDropdownOpen({});
  };

  // Check if route should be shown based on conditionalRoutes
  const shouldShowRoute = (item: NavItem) => {
    if (!item.path || !conditionalRoutes[item.path]) return true;
    return conditionalRoutes[item.path];
  };

  // Check if route is active
  const isActiveRoute = (path: string) => {
    if (!path) return false;
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  // const user = useSelector((state: RootState) => state.auth.user);

  // console.log(user)

  const handleSearchInput = (value: string) => {
    setSearchValue(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  // Handle nav item click
  const handleNavItemClick = (item: NavItem) => {
    if (onNavItemClick) {
      onNavItemClick(item);
    }
    closeAllDropdowns();
  };

  // Handle button click
  const handleButtonClick = (index: number) => {
    if (onButtonClick && buttons[index]?.onClick) {
      onButtonClick(index, buttons[index]);
    }
  };

  // Position classes
  const positionClasses =
    {
      fixed: "fixed top-0 left-0 right-0",
      sticky: "sticky top-0",
      relative: "relative",
      absolute: "absolute top-0 left-0 right-0",
    }[position] || "fixed top-0 left-0 right-0";

  // Visibility classes
  const visibilityClass = visible ? "translate-y-0" : "-translate-y-full";

  const searchField = (
    <div className="relative w-full max-w-2xl">
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
      <input
        type="search"
        value={searchValue}
        onChange={(e) => handleSearchInput(e.target.value)}
        placeholder={searchPlaceholder}
        className="w-full rounded-full border border-slate-200 bg-white/90 px-4 py-2 pl-10 text-sm text-slate-800 shadow-sm outline-none ring-0 transition focus:border-indigo-200 focus:ring-2 focus:ring-indigo-400"
      />
    </div>
  );

  return (
    <>
      <nav
        className={`${backgroundColor} ${textColor} ${positionClasses} ${shadow} ${padding} ${transition} ${zIndex} ${visibilityClass} w-full border-b border-white/30 backdrop-blur`}
        onMouseLeave={closeAllDropdowns}
      >
        <div
          className={`flex w-full flex-wrap items-center gap-4 ${className}`}
        >
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            {logo &&
              (typeof logo === "string" ? (
                <Link href="/" className="flex items-center">
                  <Image
                    width={300}
                    height={300}
                    priority
                    src={logo || "/placeholder.svg"}
                    alt="Logo"
                    className="h-8 w-auto"
                  />
                </Link>
              ) : (
                logo
              ))}
          </div>

          {/* Desktop Navigation */}
          <div
            className={`hidden ${
              mobileBreakpoint === "lg"
                ? "lg:flex"
                : mobileBreakpoint === "md"
                ? "md:flex"
                : mobileBreakpoint === "sm"
                ? "sm:flex"
                : mobileBreakpoint === "xl"
                ? "xl:flex"
                : mobileBreakpoint === "2xl"
                ? "2xl:flex"
                : ""
            } flex-1 items-center justify-start`}
          >
            <ul className="flex items-center rounded-full bg-white/50 px-2 py-1 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur">
              {navItems
                ?.filter(shouldShowRoute)
                ?.map((item: NavItem, index: number) => (
                  <li key={index} className="relative flex items-center">
                    {item?.dropdown ? (
                      <div className="group">
                        <button
                          onClick={() => toggleDropdown(index)}
                          className={`flex items-center gap-1 rounded-full px-4 py-2 transition ${
                            isActiveRoute(item.path ? item.path : "#")
                              ? `${activeBgColor} ${activeTextColor}`
                              : `${hoverTextColor} text-slate-700`
                          } focus:outline-none`}
                        >
                          {item.label}
                          <svg
                            className={`ml-1 h-4 w-4 transform ${
                              dropdownOpen[index] ? "rotate-180" : ""
                            } ${transition}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {dropdownOpen[index] && (
                          <div
                            className={`absolute left-0 mt-2 w-48 rounded-md border ${dropdownBorderColor} ${dropdownBackgroundColor} ${zIndex} shadow-lg`}
                          >
                            <div className="py-1">
                              {item.dropdown.map(
                                (
                                  dropdownItem: DropdownItem,
                                  dropdownIndex: number
                                ) => (
                                  <Link
                                    key={dropdownIndex}
                                    href={dropdownItem.path || "#"}
                                    className={`block px-4 py-2 text-sm ${dropdownTextColor} ${dropdownHoverBackgroundColor} ${
                                      isActiveRoute(dropdownItem.path || "#")
                                        ? activeTextColor
                                        : ""
                                    }`}
                                    onClick={() =>
                                      handleNavItemClick({
                                        ...item,
                                        path: dropdownItem.path,
                                      })
                                    }
                                  >
                                    {dropdownItem.label}
                                  </Link>
                                )
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.path || "#"}
                        className={`rounded-full px-4 py-2 transition ${
                          isActiveRoute(item.path ? item.path : "#")
                            ? `${activeBgColor} ${activeTextColor}`
                            : `${hoverTextColor} text-slate-700`
                        }`}
                        onClick={() => handleNavItemClick(item)}
                      >
                        {item.label}
                      </Link>
                    )}
                    {navDivider && index < navItems.length - 1 && (
                      <div className="mx-2 h-4 w-px bg-slate-200" />
                    )}
                  </li>
                ))}
            </ul>
          </div>

          {/* Search */}
          {showSearch && (
            <div className="hidden flex-1 justify-center px-2 md:flex">
              {searchField}
            </div>
          )}

          {/* Actions & Buttons */}
          <div className="ml-auto flex items-center gap-2">
            {showSearch && (
              <button
                type="button"
                onClick={() => setMobileSearchOpen((prev) => !prev)}
                className="md:hidden rounded-full border border-slate-200 bg-white/80 p-2 text-slate-700 shadow-sm"
                aria-label="Toggle search"
              >
                <Search className="h-5 w-5" />
              </button>
            )}

            <button className="hidden h-9 w-9 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow-sm transition hover:shadow md:inline-flex">
              <MessageCircle className="h-5 w-5" />
            </button>
            <button className="hidden h-9 w-9 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow-sm transition hover:shadow md:inline-flex">
              <Bell className="h-5 w-5" />
            </button>

            {/* {user && <UserDropdown />} */}

            <div
              className={`hidden ${
                mobileBreakpoint === "lg"
                  ? "lg:flex"
                  : mobileBreakpoint === "md"
                  ? "md:flex"
                  : mobileBreakpoint === "sm"
                  ? "sm:flex"
                  : mobileBreakpoint === "xl"
                  ? "xl:flex"
                  : mobileBreakpoint === "2xl"
                  ? "2xl:flex"
                  : ""
              } items-center gap-2`}
            >
              {buttons.map((button, index) =>
                button.component ? (
                  <div key={index} onClick={() => handleButtonClick(index)}>
                    {button.component}
                  </div>
                ) : (
                  <button
                    key={index}
                    onClick={() => handleButtonClick(index)}
                    className={
                      button.className ||
                      "rounded-full bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-700"
                    }
                  >
                    {button.label}
                  </button>
                )
              )}
            </div>

            {/* Mobile Hamburger */}
            <div
              className={`${
                mobileBreakpoint === "lg"
                  ? "lg:hidden"
                  : mobileBreakpoint === "md"
                  ? "md:hidden"
                  : mobileBreakpoint === "sm"
                  ? "hidden"
                  : mobileBreakpoint === "xl"
                  ? "xl:hidden"
                  : mobileBreakpoint === "2xl"
                  ? "2xl:hidden"
                  : ""
              } flex items-center gap-2`}
            >
              <button
                onClick={() => setIsOpen(true)}
                className={`my-auto aspect-square h-fit rounded-md border bg-white/80 p-2 ${hamburgerColor} shadow-sm focus:outline-none`}
                aria-label="Open navigation"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {showSearch && mobileSearchOpen && (
          <div className="mt-3 md:hidden">{searchField}</div>
        )}
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        navItems={navItems.filter(shouldShowRoute)}
        buttons={buttons}
        backgroundColor={drawerBackgroundColor}
        textColor={textColor}
        activeTextColor={activeTextColor}
        width={drawerWidth}
        zIndex={zIndex}
        onNavItemClick={handleNavItemClick}
        onButtonClick={handleButtonClick}
        isActiveRoute={isActiveRoute}
        activeBgColor={activeBgColor}
        activeHoverBgColor={activeHoverBgColor}
      />
    </>
  );
};
