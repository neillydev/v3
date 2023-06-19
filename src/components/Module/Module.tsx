"use client";
import React, { useEffect, useState } from "react";

import styles from "./Module.module.css";

const generateRandomDelay = () => {
  if (Math.random() <= 0.5) {
    return 70;
  }

  return Math.floor(Math.random() * 900) + 100;
};

const Module = () => {
  const lines = 75;
  const lineLength = 500;

  const generateRandomChar = () => {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz /,";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ /,";

    const chars = Math.random() < 0.9 ? lowerCaseChars : upperCaseChars;
    return Math.random() <= 0.3
      ? " "
      : chars[Math.floor(Math.random() * chars.length)];
  };
  const generateActivePositions = (length: number, spacePercentage: number) => {
    let activePositions = [];

    for (let i = 0; i < length; i++) {
      if (Math.random() > spacePercentage / 100) {
        activePositions.push(i);
      }
    }
    return activePositions;
  };

  const [content, setContent] = useState(() => {
    const initialContent = Array(lines)
      .fill(null)
      .map((_, lineIndex) => {
        const activePositions = generateActivePositions(lineLength, 50);
        return activePositions.map((position) => ({
          position,
          char: generateRandomChar(),
          nextUpdate: performance.now() + generateRandomDelay(),
          delay: generateRandomDelay(),
        }));
      });
    return initialContent;
  });
  const [textContents, setTextContents] = useState(Array(lineLength).fill(""));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);

    let animationId: any = null;

    const updateContent = (timestamp: any) => {
      setContent((oldContent) => {
        const newContent = oldContent.map((lineContent) => {
          return lineContent.map((charData) => {
            if (charData.nextUpdate <= timestamp) {
              return {
                ...charData,
                char: generateRandomChar(),
                nextUpdate: timestamp + charData.delay,
              };
            } else {
              return charData;
            }
          });
        });
        return newContent;
      });

      animationId = requestAnimationFrame(updateContent);
    };

    animationId = requestAnimationFrame(updateContent);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div
      className={`${styles.moduleContainer} relative z-10 h-screen w-screen font-mono`}
    >
      {isLoading ? (
        <span className={styles.loader}></span>
      ) : (
        <div
          className={`${styles.moduleGridWrapper} ${styles.moduleFadeIn} absolute flex justify-center items-center overflow-hidden shadow-lg rounded-3xl inset-4 lg:inset-12 !bottom-36 md:!bottom-24`}
        >
          <svg
            id="bannerSVG"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1455 976"
            className={styles.moduleGridSvg}
          >
            {textContents.map((line, i) => (
              <text
                key={line + i}
                x="5"
                y={(42 * i) / 3}
                fill="#7d9ddf"
                className={styles.moduleText}
              >
                {" "}
                {content[i]
                  ?.reduce((lineText, { position, char }) => {
                    lineText[position] = char;
                    return lineText;
                  }, Array(lineLength).fill(" "))
                  .join("")}{" "}
              </text>
            ))}
          </svg>
          <button className="flex gap-2 justify-center items-center w-fit font-medium basis-1 gap-2 justify-center items-center p-2 px-5 min-w-max text-sm font-bold text-center hover:.!text-[#09073a] hover:.bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:.outline-white .outline  rounded-full hover:.outline-offset-4 active:.outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 absolute right-1/2 bottom-4 z-10 aspect-square translate-x-1/2 bg-slate-800/20 hover:bg-slate-700/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              height="20"
              className="inline text-slate-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Module;
