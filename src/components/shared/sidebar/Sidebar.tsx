import React from "react";
// import { IoGrid } from "react-icons/io5";
// import {
//   AlignJustify,
//   BarChart2,
//   CalendarDays,
//   GraduationCap,
//   Headset,
//   Home,
//   Megaphone,
//   MessageCircle,
//   Settings,
//   Users,
//   UserRound,
// } from "lucide-react";

import {
  Analytics2UpIcon,
  AnalyticsUpIcon,
  Calendar03Icon,
  CustomerSupportIcon,
  MarketingIcon,
  Menu02Icon,
  Message02Icon,
  MoneyBag02Icon,
  Mortarboard02Icon,
  RankingIcon,
  Settings01Icon,
  UserGroup1Icon,
  UserGroupIcon,
} from "@/src/components/icon/IconComponents";
import { HiViewGrid } from "react-icons/hi";

const navItems = [
  { id: "home", icon: HiViewGrid, active: true },
  { id: "academy", icon: Mortarboard02Icon },
  { id: "announce", icon: MarketingIcon },
  { id: "menu", icon: Menu02Icon },
  { id: "chat", icon: Message02Icon },
  { id: "analytics", icon: Analytics2UpIcon },
  { id: "team-alt", icon: UserGroup1Icon },
  { id: "calendar", icon: Calendar03Icon },
  { id: "stats", icon: AnalyticsUpIcon },
  { id: "profile", icon: MoneyBag02Icon },
  { id: "ranking", icon: RankingIcon },
  { id: "support", icon: CustomerSupportIcon },
  { id: "team", icon: UserGroupIcon },
  { id: "settings", icon: Settings01Icon },
];

const Sidebar = () => {
  return (
    <aside className="flex sticky top-5 min-h-0 items-center">
      <div className="flex hide-scrollbar h-fit max-h-[calc(100vh-2.5rem)] w-14 md:w-18 flex-col items-center justify-between rounded-2xl bg-white/5 py-4 md:py-6 border border-black overflow-y-auto">
        <div className="flex flex-col items-center gap-4">
          {navItems.map(({ id, icon: Icon, active }, idx) => (
            <button
              key={id}
              className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                active
                  ? "text-white bg-linear-to-b border-t border-[#68B0EA] from-primary-button-bg1 to-primary-button-bg2 "
                  : "hover:text-white relative text-[#141B34] cursor-pointer hover:bg-[#3b7cff]"
              } ${idx === 7 || idx === 10 ? "mb-4 after:content-[' '] after:w-8 after:h-0.5 after:bg-[#141B341A] after:absolute after:-bottom-4" : ""} `}
              aria-label={id}
            >
              <Icon size={25} />
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
