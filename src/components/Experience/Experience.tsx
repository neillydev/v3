"use client";
import React, { useState } from "react";

import styles from "./Experience.module.css";

import BuildingSvg from "@/../../public/building.svg";

const Experience = () => {
  const [selected, setSelected] = useState(0);

  const experienceArray = [
    {
      title: "Software Engineer II",
      duration: "Nov. 2022 - Present",
      achievements: [
        "Pioneered the adoption and integration of machine learning models for automating media content, enabling the automatic generation of videos, resulting in a remarkable 35% uptick in publisher video production, improving publisher engagement.",
        "Devised and implemented an algorithm capable of identifying and calculating trending search terms amongst publishers across diverse intervals, enhancing the company's ability to respond quickly to dynamic media-search trends.",
        "Refactored critical Golang backend API modules alongside the development of various front-end Vue.js components, significantly improving user experience and code maintainability, as well as ensuring seamless integration with existing and future systems.",
        "Implemented serverless functions with an API using OpenFAAS, integrating machine learning libraries with a robust Golang backend.",
      ],
      company: true,
      companyName: "Ezoic",
      companyLink: "https://ezoic.com",
    },

    {
      title: "Full Stack Developer",
      duration: "May 2022 - Nov. 2022",
      achievements: [
        "Completely refactored an API, handling all backend functionality for associate onboarding, boosting development productivity by 60%, using NodeJS and GraphQL.",
        "Developed a system of automated text messaging-based reminders, promoting associate acquisition by 30%, utilizing NodeJS, PostgreSQL, and GraphQL.",
        "Engineered an administrator panel web application utilizing React, NextJS, GraphQL, NodeJS, and PostgreSQL, optimizing associate data fetching for all corporate staff.",
        "Oversaw all development projects in a team including front-end, back-end, and SQL/PostgreSQL database management systems. ",
      ],
      company: true,
      companyName: "Exact Staff",
      companyLink: "https://exactstaff.com",
    },

    {
      title: "Software Developer",
      duration: "Jan. 2016 - May 2022",
      achievements: [
        "Created a backend API in NodeJS, Express, MySQL, and Typescript which handled authentication using JSON Web Tokens.",
        "Engineered and maintained an API for a referral system, resulting in thousands of customer acquisitions, leveraging NodeJS, Express, and PostgreSQL",
        "Developed Java plugins for multiple clients",
      ],
      company: false,
      companyName: "Freelance",
    },
  ];

  return (
    <div className="flex">
      <div className="relative z-10 w-max">
        {experienceArray.map((experienceItem, index) => (
          <button
            key={index}
            className={`${styles.experienceTab} no-underline relative flex items-center w-full bg-transparent whitespace-nowrap`}
            onClick={() => setSelected(index)}
          >
            <span className={`${selected !== index || "text-purple-400"}`}>
              {experienceItem.companyName}
            </span>
          </button>
        ))}
      </div>
      <div className={`${styles.experienceBodyContent} relative w-full mx-0 md:ml-5`}>
        <div className={`${styles.experienceBodyItem} w-full h-auto`}>
          <div className="flex">
            {experienceArray[selected].company && (
              <BuildingSvg className="stroke-purple-500 mr-2" />
            )}
            <h3 className="text-sm md:text-base">
              {experienceArray[selected].title} @{" "}
              {(experienceArray[selected].company ||
                experienceArray[selected].companyName) && (
                <span className="">
                  <a
                    href={`${
                      experienceArray[selected].company
                        ? experienceArray[selected].companyLink
                        : ""
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 underline font-medium italic"
                  >
                    {experienceArray[selected].companyName}
                  </a>
                </span>
              )}
            </h3>
          </div>
          <p className="my-2 text-sm md:text-base">{experienceArray[selected].duration}</p>
          <ul className="my-4">
            {experienceArray[selected].achievements.map(
              (achievement: string) => (
                <>
                  <li className="text-xs md:text-sm">• {achievement}</li>
                  <br />
                </>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
