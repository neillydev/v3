"use client";
import React, { useEffect, useState } from "react";

import styles from "./Module.module.css";
import Navigation from "../Navigation/Navigation";

const generateRandomDelay = () => {
  if (Math.random() <= 0.5) {
    return 70;
  }

  return Math.floor(Math.random() * 900) + 100;
};

const asciiArt = [
  " _    __                             ",
  "| |  / /__  _________  ____  ____    ",
  "| | / / _ \\/ ___/ __ \\/ __ \\/ __ \\   ",
  "| |/ /  __/ /  / / / / /_/ / / / /   ",
  "|___/\\___/_/  /_/ /_/\\____/_/_/_/    ",
  "              / | / /__  (_) / /_  __",
  "             /  |/ / _ \\/ / / / / / /",
  "            / /|  /  __/ / / / /_/ / ",
  "           /_/ |_/\\___/_/_/_/\\__, /  ",
  "                            /____/    "
];

const Module = () => {
  const lines = 75;
  const lineLength = 200;

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

  const asciiArtStartLine =
    Math.floor(lines / 2) - Math.floor(asciiArt.length / 2);
  const asciiArtStartPos =
    Math.floor(lineLength / 2) - Math.floor(asciiArt[0].length / 2);

  // Store ASCII art separately
  const [asciiArtContent, setAsciiArtContent] = useState<Array<string>>([]);

  const [content, setContent] = useState(() => {
    const initialContent = Array(lines)
      .fill(null)
      .map((_, lineIndex) => {
        const activePositions = generateActivePositions(lineLength, 50);
        return activePositions.map((position) => {
          const isAscii =
            lineIndex >= asciiArtStartLine &&
            lineIndex < asciiArtStartLine + asciiArt.length &&
            position >= asciiArtStartPos &&
            position < asciiArtStartPos + asciiArt[0].length;
          return {
            position,
            char: isAscii ? " " : generateRandomChar(),
            isAscii,
            nextUpdate: performance.now() + generateRandomDelay(),
            delay: generateRandomDelay(),
          };
        });
      });

    return initialContent;
  });

  const [textContents, setTextContents] = useState(Array(lineLength).fill(""));
  const [isLoading, setIsLoading] = useState(true);

  const [isAnimating, setIsAnimating] = useState(true);
  const [animationEndTime, setAnimationEndTime] = useState(
    performance.now() + 1000
  );

  useEffect(() => {
    let newAsciiArtContent = Array(lines).fill("");
    asciiArt.forEach((line, i) => {
      const paddedLine = line
        .padStart(asciiArtStartPos + line.length)
        .padEnd(lineLength);
      newAsciiArtContent[asciiArtStartLine + i] = paddedLine;
    });
    setAsciiArtContent(newAsciiArtContent);
  }, [lines, lineLength, asciiArtStartLine, asciiArtStartPos, asciiArt]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);

    let animationId: any = null;

    const updateContent = (timestamp: any) => {
      setContent((oldContent) => {
        const newContent = oldContent.map((lineContent, lineIndex) => {
          return lineContent.map((charData) => {
            if (charData.isAscii) {
              return charData;
            }

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
      className={`${styles.moduleContainer} relative z-10 h-screen w-screen`}
    >
      {isLoading ? (
        <span className={styles.loader}></span>
      ) : (
        <>
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
              {textContents.map((_, i) => {
                const lineContent = content[i];
                let lineChars;
                if (lineContent) {
                  lineChars = lineContent.reduce(
                    (lineText, { position, char }) => {
                      lineText[position] = char;
                      return lineText;
                    },
                    Array(lineLength).fill(" ")
                  );
                } else {
                  lineChars = Array(lineLength).fill(" ");
                }

                const asciiArtLine = asciiArtContent[i];
                let asciiLine = "";
                let normalLine = "";
                lineChars.forEach((char, j) => {
                  if (asciiArtLine && asciiArtLine[j] !== " ") {
                    asciiLine += asciiArtLine[j];
                    normalLine += " ";
                  } else {
                    normalLine += char;
                    asciiLine += " ";
                  }
                });

                return (
                  <React.Fragment key={i}>
                    <text
                      x="5"
                      y={(42 * i) / 3}
                      fill="#7d9ddf"
                      className={styles.moduleText}
                    >
                      {normalLine}
                    </text>
                    <text
                      x="5"
                      y={(42 * i) / 3}
                      fill="white"
                      className={styles.moduleText}
                    >
                      {asciiLine}
                    </text>
                  </React.Fragment>
                );
              })}
            </svg>
          </div>
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
          <Navigation />
        </>
      )}
    </div>
  );
};

export default Module;
