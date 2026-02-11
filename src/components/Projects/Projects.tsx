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

  return projectsArray.map((project: any, index: number) => (
    <div
      key={index}
      className={`relative flex ${
        index % 2 !== 0 ? "" : "justify-end"
      } min-h-[260px] mb-10`}
    >
      {/* 🔒 IMAGE + OVERLAY BLOCK UNCHANGED */}
      <div className="relative opacity-75 cursor-pointer">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <div
            className={`${styles.overlay} w-full h-full absolute inset-0 bg-purple-600 opacity-50 hover:opacity-0`}
          />
          <img className={`${styles.cover}`} src={project.cover} alt="" />
        </a>
      </div>

      {/* description / text overlay */}
      <div
        className={`${
          index % 2 !== 0
            ? styles.descriptionWrapperRight
            : styles.descriptionWrapperLeft
        } absolute flex flex-col text-right ${
          index % 2 !== 0 ? "items-end" : "items-start"
        }`}
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
        <div className="text-xs flex">
          {project.technologies.map((technology: string, techIndex: number) => (
            <p
              key={techIndex}
              className={
                techIndex === project.technologies.length - 1 ? "" : "mr-4"
              }
            >
              {technology}
            </p>
          ))}
        </div>
        <div className=""></div>
      </div>
    </div>
  ));
};

export default Projects;
