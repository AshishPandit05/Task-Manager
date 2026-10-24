import React from "react";
import {
  Search,
  Mail,
  BellRing,
  ClipboardPlus,
  Download,
  ArrowUpRight,
  Moon,
} from "lucide-react";
import ProjectAnalytics from "../components/ProjectAnalytics";
import Timer from "../components/Timer";
import Projects from "../components/Projects";
import TeamCollaboration from "../components/TeamCollaboration";
import ProjectProgress from "../components/ProjectProgress";

const DashboardPage = () => {
  return (
    <div className="w-280 h-screen rounded-md p-3 text-[16px] ">
      <div className=" flex flex-row justify-between items-center rounded-md w-274 h-15 p-5 bg-white shadow-gray-200 shadow-xl mt-2">
        <div className="justify-center items-center flex bg-gray-200 pl-4 pr-40 rounded-4xl gap-4 h-10 cursor-pointer">
          <Search className="size-5" />
          search
        </div>
        <div className="flex flex-row gap-8 justify-between items-center">
          <div className="justify-center items-center flex rounded-4xl h-10 cursor-pointer">
            <Moon className="size-5" />
          </div>
          <div className="justify-center items-center flex rounded-4xl h-10 cursor-pointer">
            <Mail className="size-5" />
          </div>
          <div className="justify-center items-center flex rounded-4xl h-10 cursor-pointer">
            <BellRing className="size-5" />
          </div>
          <div className="justify-center items-center flex bg-green-600 text-white pl-2 pr-10 rounded-4xl gap-4 h-10 cursor-pointer">
            <div className="bg-white rounded-4xl h-7 w-7"></div>
            Your Name
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center rounded-md w-274 h-15 mt-5">
        <div>
          <h1 className="text-3xl font-medium">Dashboard</h1>
          <p className="font-light  text-gray-700">
            Plan priortize, and accomplish your task with ease.
          </p>
        </div>
        <div className="flex flex-row gap-5 justify-between items-center">
          <button className="pl-6 pr-6 p-2 border-2 bg-white border-gray-400 rounded-4xl justify-center items-center flex gap-3 cursor-pointer">
            <ClipboardPlus className="size-4" />
            Add Project
          </button>
          <button className="pl-6 pr-6 p-2 border-2 bg-white border-gray-400 rounded-4xl justify-center items-center flex gap-3 cursor-pointer">
            <Download className="size-4" />
            Import Data
          </button>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center mt-5 ">
        <div className="h-30 w-65 bg-white rounded-2xl p-3">
          <div className="flex justify-between items-center">
            <p className="text-xl">Total Projects</p>
            <ArrowUpRight className="size-4 p-2 h-10 w-10 rounded-4xl bg-amber-200" />
          </div>

          <p className="text-4xl font-semibold ">15</p>
          <p className="text-sm text-gray-500">
            <span className="text-green-500 font-bold">5 </span>Increased from
            last month
          </p>
        </div>
        <div className="h-30 w-65 bg-white rounded-2xl p-3 text-xl">
          <div className="flex justify-between items-center">
            <p className="text-xl">Ended Projects</p>
            <ArrowUpRight className="size-4 p-2 h-10 w-10 rounded-4xl bg-amber-200" />
          </div>
          <p className="text-4xl font-semibold ">10</p>
          <p className="text-sm text-gray-500">
            <span className="text-green-500 font-bold">12 </span>Increased from
            last month
          </p>
        </div>
        <div className="h-30 w-65 bg-white rounded-2xl p-3 text-xl">
          <div className="flex justify-between items-center">
            <p className="text-xl">Running Projects</p>
            <ArrowUpRight className="size-4 p-2 h-10 w-10 rounded-4xl bg-amber-200" />
          </div>
          <p className="text-4xl font-semibold ">5</p>
          <p className="text-sm text-gray-500">
            <span className="text-green-500 font-bold">10 </span>Increased from
            last month
          </p>
        </div>
        <div className="h-30 w-65 bg-white rounded-2xl p-3 text-xl">
          <div className="flex justify-between items-center">
            <p className="text-xl">Pending Projects</p>
            <ArrowUpRight className="size-4 p-2 h-10 w-10 rounded-4xl bg-amber-200" />
          </div>
          <p className="text-4xl font-semibold">10</p>
          <p className="text-sm text-gray-500">
            <span className="text-green-500 font-bold">8 </span>Increased from
            last month
          </p>
        </div>
      </div>

      <div className="w-275 h-80 grid grid-cols-4 gap-5 grid-rows-4  justify-between  mt-5 ">
        <ProjectAnalytics />
        <Timer />
        <Projects />
        <TeamCollaboration />
        <ProjectProgress />
      </div>
    </div>
  );
};

export default DashboardPage;
