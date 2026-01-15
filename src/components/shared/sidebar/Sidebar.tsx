import React from "react";
import { IoGrid } from "react-icons/io5";
import {
  AlignJustify,
  BarChart2,
  CalendarDays,
  GraduationCap,
  Headset,
  Home,
  Megaphone,
  MessageCircle,
  Settings,
  Users,
  UserRound,
} from "lucide-react";

const navItems = [
  { id: "home", icon: IoGrid, active: true },
  { id: "academy", icon: GraduationCap },
  { id: "announce", icon: Megaphone },
  { id: "menu", icon: AlignJustify },
  { id: "chat", icon: MessageCircle },
  { id: "stats", icon: BarChart2 },
  { id: "profile", icon: UserRound },
  { id: "calendar", icon: CalendarDays },
  { id: "home-alt", icon: Home },
  { id: "support", icon: Headset },
  { id: "team", icon: Users },
    { id: "settings", icon: Settings },
  
];

const Sidebar = () => {
  return (
    <aside className="flex sticky top-5 h-full items-center">
      <div className="flex h-auto w-18 flex-col items-center justify-between rounded-2xl bg-white/5 py-5 border border-black">
        <div className="flex flex-col items-center gap-5">
          {navItems.map(({ id, icon: Icon, active }) => (
            <button
              key={id}
              className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                active
                  ? "text-white bg-[#3b7cff] shadow-[0_6px_14px_rgba(59,124,255,0.35)]"
                  : "hover:text-white cursor-pointer hover:bg-[#3b7cff]"
              }`}
              aria-label={id}
            >
              <Icon size={22} strokeWidth={2.2} />
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
