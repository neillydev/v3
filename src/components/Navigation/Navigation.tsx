import React from "react";

import GithubSVG from "@/../public/github.svg";
import LinkedInSVG from "@/../public/linkedin.svg";

const Navigation = () => {
  return (
    <div className="flex flex-row space-between absolute inset-x-14 bottom-0 mt-8 mb-8 mr-12 ml-12 justify-center">
      <div className="flex flex-1 flex-col gap-4 md:flex-row md:gap-0">
        <a href="#about">
          <button className="mx-2 flex gap-2 justify-center items-center w-fit font-medium basis-1 gap-2 justify-center items-center p-2 px-5 min-w-max text-sm font-bold text-center hover:.!text-[#09073a] hover:.bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:.outline-white .outline  rounded-full hover:.outline-offset-4 active:.outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 bg-violet-500/20 text-rose-50 hover:bg-violet-500">
            About
          </button>
        </a>
        <a href="#experience">
          <button className="mx-2 flex gap-2 justify-center items-center w-fit font-medium basis-1 gap-2 justify-center items-center p-2 px-5 min-w-max text-sm font-bold text-center hover:.!text-[#09073a] hover:.bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:.outline-white .outline  rounded-full hover:.outline-offset-4 active:.outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 bg-violet-500/20 text-rose-50 hover:bg-violet-500">
            Experience
          </button>
        </a>
        <a href="#projects">
          <button className="hidden md:flex mx-2 flex gap-2 justify-center items-center w-fit font-medium basis-1 gap-2 justify-center items-center p-2 px-5 min-w-max text-sm font-bold text-center hover:.!text-[#09073a] hover:.bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:.outline-white .outline  rounded-full hover:.outline-offset-4 active:.outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 bg-violet-500/20 text-rose-50 hover:bg-violet-500">
            Projects
          </button>
        </a>
      </div>
      <div className="flex flex-1 flex-col gap-4 md:flex-row md:gap-0 justify-end items-center">
        <a href="#projects">
          <button className="md:hidden mx-2 flex gap-2 justify-center items-center w-fit font-medium basis-1 gap-2 justify-center items-center p-2 px-5 min-w-max text-sm font-bold text-center hover:.!text-[#09073a] hover:.bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:.outline-white .outline  rounded-full hover:.outline-offset-4 active:.outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 bg-violet-500/20 text-rose-50 hover:bg-violet-500">
            Projects
          </button>
        </a>
        <a href="#contact">
          <button className="mx-2 flex gap-2 justify-center items-center w-fit font-medium basis-1 gap-2 justify-center items-center p-2 px-5 min-w-max text-sm font-bold text-center hover:.!text-[#09073a] hover:.bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:.outline-white .outline  rounded-full hover:.outline-offset-4 active:.outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 bg-violet-500/20 text-rose-50 hover:bg-violet-500">
            Contact
          </button>
        </a>
        <a href='https://surfwaves.b-cdn.net/neillydev/Resume.pdf' target="_blank">
          <button className="hidden md:flex mr-4 mx-2 flex gap-2 justify-center items-center w-fit font-medium basis-1 gap-2 justify-center items-center p-2 px-5 min-w-max text-sm font-bold text-center hover:.!text-[#09073a] hover:.bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:.outline-white .outline  rounded-full hover:.outline-offset-4 active:.outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 bg-violet-500/20 text-rose-50 hover:bg-violet-500">
            Resume
          </button>
        </a>
        <a href="https://github.com/neillydev" target="_blank" className="hidden mr-4 md:flex"><GithubSVG className="fill-white hover:opacity-75" /></a>
        <a href="https://linkedin.com/in/neillydev" target="_blank"><LinkedInSVG className="hidden md:flex fill-white hover:opacity-75" /></a>
      </div>
    </div>
  );
};

export default Navigation;
