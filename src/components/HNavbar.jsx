import React from "react";
import { Search, Mail, BellRing, Moon } from "lucide-react";

const HNavbar = () => {
  return (
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
  );
};

export default HNavbar;
