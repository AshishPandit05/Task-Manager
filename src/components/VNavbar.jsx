import {
  LayoutDashboard,
  ClipboardCheck,
  ChartGantt,
  CalendarDays,
  ChartNoAxesCombined,
  UserGroup,
  Activity,
  ChartColumn,
  Bolt,
  MessageCircleQuestionMark,
  Info,
  UserPen,
  Sparkles,
} from "lucide-react";
import React from "react";

import { NavLink } from "react-router";

const VNavbar = () => {
  return (
    <div className="h-screen w-60 flex flex-col border-gray-300 border justify-between items-start bg-white ml-3 shadow-gray-300 shadow-xl text-[16px]">
      <div className="flex pt-2 flex-col w-full  border-gray-300 border-b-3 gap-1 p-5">
        <NavLink className="p-2 flex gap-4 bg-gray-200 rounded-sm " to={"/"}>
          <LayoutDashboard />
          Dashboard
        </NavLink>

        <NavLink className="flex mt-2 gap-3 p-1 text-[14px] font-medium">
          <ClipboardCheck className="size-4.5 " />
          My Task
        </NavLink>

        <NavLink className="flex gap-3 p-1 text-[14px]">
          {" "}
          <ChartGantt className="size-4.5" />
          Planing
        </NavLink>

        <NavLink className="flex gap-3 p-1 text-[14px] ">
          <CalendarDays className="size-4.5" />
          Calender
        </NavLink>
      </div>

      <div className="flex flex-col w-full  border-gray-300 border-b-3 gap-1 p-5">
        <NavLink className="flex gap-3 p-1 text-[14px]">
          <ChartNoAxesCombined className="size-4.5" />
          Analytics
        </NavLink>
        <NavLink className="flex gap-3 p-1 text-[14px]">
          {" "}
          <UserGroup className="size-4.5" />
          Team
        </NavLink>
        <NavLink className="flex gap-3 p-1 text-[14px]">
          <Activity className="size-4.5" />
          Activities
        </NavLink>
        <NavLink className="flex gap-3 p-1 text-[14px]">
          <ChartColumn className="size-4.5" />
          Graphp
        </NavLink>
      </div>

      <div className="flex flex-col w-full  border-gray-300 border-b-3 gap-1 p-5">
        <NavLink className="flex gap-3 p-1 text-[14px]">
          <Bolt className="size-4.5" />
          Setting
        </NavLink>

        <NavLink className="flex gap-3 p-1 text-[14px]">
          {" "}
          <MessageCircleQuestionMark className="size-4.5" />
          Help
        </NavLink>
        <NavLink className="flex gap-3 p-1 text-[14px]">
          <Info className="size-4.5" />
          About
        </NavLink>
      </div>
      <div className="gap-3 p-5 flex flex-col w-full">
        <div>
          <NavLink className="flex gap-3 p-1 text-[14px]">
            <UserPen className="size-4.5" />
            My Profile
          </NavLink>
        </div>

        <button className="border-gray-300 border-2 pl-5 pr-5 rounded-sm gap-3 flex p-1 cursor-pointer justify-center items-center">
          <Sparkles className="size-4.5" />
          Upgrade Plan
        </button>
        <button className="border-gray-300 border-2 p-1 rounded-sm cursor-pointer">
          Logout
        </button>
      </div>
    </div>
  );
};

export default VNavbar;
