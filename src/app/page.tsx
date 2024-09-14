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
          body="Hi.
          \n
          I’m Vernon, a Software Engineer with 8+ years of experience in full-stack development using JavaScript (React, Next.js), Python, Golang, and Node.js. I specialize in building scalable SaaS applications, designing APIs and microservices, and integrating Machine Learning models. My work focuses on leveraging cloud-based services (AWS and Google Cloud) to build high-performance systems that deliver real-world impact!"
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
