import React from "react";

const ProjectProgress = () => {
  return (
    <div className="h-50  w-100 mt-14 ml-35  bg-white rounded-2xl p-4 shadow-xl/10">
      <p> Project Progress</p>
      <div className=" w-92 grid grid-row-2 ">
        <div className=" h-30 grid grid-cols-7 gap-3 p-2">
          <p className="h-28 w-10 bg-fuchsia-500 rounded-t-4xl"></p>
          <p className="h-28 w-10 bg-fuchsia-500 rounded-t-4xl"></p>
          <p className="h-28 w-10 bg-fuchsia-500 rounded-t-4xl"></p>
          <p className="h-28 w-10 bg-fuchsia-500 rounded-t-4xl"></p>
          <p className="h-28 w-10 bg-fuchsia-500 rounded-t-4xl"></p>
          <p className="h-28 w-10 bg-fuchsia-500 rounded-t-4xl"></p>
          <p className="h-28 w-10 bg-fuchsia-500 rounded-t-4xl"></p>
        </div>
        <div className=" h-8 flex flex-row items-center justify-around ">
          <p>S</p>
          <p>M</p>
          <p>T</p>
          <p>W</p>
          <p>T</p>
          <p>F</p>
          <p>S</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress;
