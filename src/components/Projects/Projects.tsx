"use client";
import React, { useState } from "react";

import styles from "./Projects.module.css";

const Projects = () => {
  const [selected, setSelected] = useState(0);

  const projectsArray = [
    {
      github: "",
      url: "https://github.com/neillydev/vern",
      cover:
        "https://img001.prntscr.com/file/img001/f-o1nE4HTSOM_QPeNfl-jQ.png",
      title: "VERN.",
      description: "AI For People: Bridging the Gap, Unlocking Potential",
      technologies: ["React", "Python", "NextJS", "Typescript"],
    },
    {
      github: "",
      url: "https://gitme.app",
      cover: "https://i.imgur.com/45ELxNs.png",
      title: "GitMe",
      description: "A modernized approach to developer portfolios",
      technologies: ["React", "NextJS", "Typescript"],
    },
    {
      github: "",
      url: "https://surfwaves.io",
      cover:
        "https://img001.prntscr.com/file/img001/wcY4DBQkSPm3HABTgvtdRQ.png",
      title: "Waves",
      description:
        "Live short-form video-based social media app that allows users to create, watch, and share videos",
      technologies: ["React", "NextJS", "Typescript", "PostgreSQL"],
    },
  ];

  return projectsArray.map((project: any, index: number) => {
    const isGitMe = index === 1;

    return (
      <div
        key={index}
        className={`flex items-center gap-10 mb-10 ${
          isGitMe ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative opacity-75 hover:opacity-100 cursor-pointer shrink-0"
        >
          <div
            className={`${styles.overlay} absolute inset-0 bg-purple-600 opacity-50 hover:opacity-0`}
          />
          <img className={styles.cover} src={project.cover} alt="" />
        </a>
        <div
          className={`flex flex-col ${
            isGitMe ? "items-start text-left" : "items-start text-left"
          } max-w-[420px]`}
        >
          <h2 className="text-purple-400 text-xs whitespace-nowrap mb-1">
            Featured Project
          </h2>
          <h3 className="text-xl whitespace-nowrap">{project.title}</h3>

          <div
            className={`${styles.description} w-full bg-purple-600 rounded-sm p-5 my-4`}
          >
            <p className="text-xs">{project.description}</p>
          </div>

          <div className="text-xs flex flex-wrap gap-x-4 gap-y-2">
            {project.technologies.map(
              (technology: string, techIndex: number) => (
                <p key={techIndex}>{technology}</p>
              )
            )}
          </div>
        </div>
      </div>
    );
  });
};

export default Projects;
