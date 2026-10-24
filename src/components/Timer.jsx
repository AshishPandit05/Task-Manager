import { Pause } from "lucide-react";
import React from "react";

export default function Timer() {
  return (
    <div className="h-30 w-65 bg-white rounded-2xl p-1 shadow-xl/10 grid-cols-2 grid">
      <div className="p-2">
        <p>Timer</p>
        <p className="text-4xl font-semibold">15:32</p>
        <button className=" mt-2 pl-5 h-6 pr-5   font-normal  rounded-md  cursor-pointer bg-gray-400 text-white">
          Reset
        </button>
      </div>
      <div className="bg-cyan-600/30 rounded-2xl flex justify-center items-center">
        <div className="h-25 w-25 rounded-[50%] border-10 border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.4)]     flex justify-center items-center shadow-gry-700/30">
          <div className="h-13 w-13 flex justify-center items-center bg-black rounded-4xl shadow shadow-xl/20">
            <Pause className="text-white size-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
