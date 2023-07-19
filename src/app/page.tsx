"use client";
import Module from "@/components/Module/Module";
import Section from "@/components/Section/Section";
import Technologies from "@/components/Technologies/Technologies";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";

import styles from "./page.module.css";
import Contact from "@/components/Contact/Contact";
import { useState } from "react";

/**
 * 
 * @returns 
 * TO DO: 
 * 
 */

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <main className={`${styles.main} font-mono`}>
      <Module isLoading={isLoading} setIsLoading={setIsLoading} />
      <div
        className={`${
          isLoading ? "hidden" : "flex"
        } relative mx-auto w-full max-w-4xl flex-col gap-16 overflow-hidden p-8 leading-relaxed text-blue-100 max-md:mt-16 md:p-16`}
      >
        <Section
          id="about"
          title="Who Am I?"
          body="I'm Vernon Neilly, and I simply love programming. From a young age, I've been captivated by the internet and computers, always eager to dig deeper into how it all works behind the scenes.
          \n
          Starting from scratch, I taught myself how to build websites using HTML, Javascript, and CSS. This led me down a path where I started building plugins and web applications, first as a freelancer for a wide range of clients, and later as a developer in larger teams in multiple corporate settings.
          \n
          The knowledge and experience that I've gathered over the years across these various avenues have equipped me with a proficiency in delivering effective solutions.
          \n
          Below are technologies I work with consistently:"
          module={<Technologies />}
        />
        <br />
        <Section
          id="experience"
          title="Where I've Worked"
          body=""
          module={<Experience />}
        />
        <br />
        <Section
          id="projects"
          title="What I've Built"
          body=""
          module={<Projects />}
        />
        <br />
        <Section id="contact" title="Contact" body="" module={<Contact />} />
      </div>
    </main>
  );
}
