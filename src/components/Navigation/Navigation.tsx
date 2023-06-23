import React from "react";

const Navigation = () => {
  return (
    <div className="flex flex-row space-between absolute inset-x-14 bottom-0 mt-8 mb-8 mr-12 ml-12">
      <div className="flex flex-1">
        <button className="mx-2 flex gap-2 justify-center items-center w-fit font-medium basis-1 gap-2 justify-center items-center p-2 px-5 min-w-max text-sm font-bold text-center hover:.!text-[#09073a] hover:.bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:.outline-white .outline  rounded-full hover:.outline-offset-4 active:.outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 bg-violet-500/20 text-rose-50 hover:bg-violet-500">About</button>
        <button className="mx-2 flex gap-2 justify-center items-center w-fit font-medium basis-1 gap-2 justify-center items-center p-2 px-5 min-w-max text-sm font-bold text-center hover:.!text-[#09073a] hover:.bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:.outline-white .outline  rounded-full hover:.outline-offset-4 active:.outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 bg-violet-500/20 text-rose-50 hover:bg-violet-500">Experience</button>
      </div>
      <div className="flex flex-1 justify-end">
        <button className="mx-2 flex gap-2 justify-center items-center w-fit font-medium basis-1 gap-2 justify-center items-center p-2 px-5 min-w-max text-sm font-bold text-center hover:.!text-[#09073a] hover:.bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:.outline-white .outline  rounded-full hover:.outline-offset-4 active:.outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 bg-violet-500/20 text-rose-50 hover:bg-violet-500">Projects</button>
        <button className="mx-2 flex gap-2 justify-center items-center w-fit font-medium basis-1 gap-2 justify-center items-center p-2 px-5 min-w-max text-sm font-bold text-center hover:.!text-[#09073a] hover:.bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:.outline-white .outline  rounded-full hover:.outline-offset-4 active:.outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 bg-violet-500/20 text-rose-50 hover:bg-violet-500">Contact</button>
      </div>
    </div>
  );
};

export default Navigation;
