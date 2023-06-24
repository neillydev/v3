import Module from "@/components/Module/Module";
import Section from "@/components/Section/Section";
import Technologies from "@/components/Technologies/Technologies";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";

import styles from "./page.module.css";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className={`${styles.main} font-mono`}>
      <Module />
      <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-16 overflow-hidden p-8 leading-relaxed text-blue-100 max-md:mt-16 md:p-16">
        <Section 
          id="section_about" 
          title="Who Am I?" 
          body="I'm Vernon Neilly, and I simply love programming. Since I were young, I've been captivated by the internet and computers, always eager to dig deeper into how it all works behind the scenes.
          \n
          Starting from scratch, I taught myself how to build websites using HTML, Javascript, and CSS. This led me down a path where I started building plugins and web applications, first as a freelancer for a wide range of clients, and later as a part of larger teams in multiple corporate settings.
          \n
          The knowledge and experience that I've gathered over the years across these various avenues have equipped me with a proficiency in delivering effective solutions.
          \n
          Below are technologies I work with consistently:" 
          module={<Technologies />}
        />
        <br />
        <Section 
          id="section_exp" 
          title="Where I've Been" 
          body="" 
          module={<Experience />}
        />
        <br />
        <Section 
          id="section_exp" 
          title="What I've Built" 
          body="" 
          module={<Projects />}
        />
        <br />
        <Section 
          id="section_exp" 
          title="Contact" 
          body="" 
          module={<Contact />}
        />
      </div>
    </main>
  );
}
