"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { NavBar, Hero, Reveal, ProjectCard } from "@/components";
import data from "@/data/data.json";

export default function Home(): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col w-full max-w-screen-2xl mx-auto"
    >
      <NavBar />
      <Hero />
      <section id="about" className="mx-6">
        <Reveal>
          <div className="my-6 flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-justify md:w-3/4 mt-4 leading-7 text-balance break-words font-medium">
              I am 25 years old and live in Aveiro. I earned a Master&apos;s
              degree in Communication and Web Technologies from the University
              of Aveiro. From a young age, my curiosity about technology has
              driven me to explore application development, particularly web
              development. I am a motivated and committed professional who
              thrives on collaboration, idea exchange, and always giving my best
              in every project. I am fluent in both Portuguese and English. At
              heart, I am a frontend developer passionate about building
              high-quality web applications.
            </p>
          </div>
        </Reveal>
      </section>
      <section
        id="experience"
        className="m-6 flex flex-col items-center justify-center"
      >
        <Reveal>
          <h2 className="text-4xl font-bold">
            Experien<span className="text-primary">ce</span>
          </h2>
        </Reveal>
        <div className="flex flex-col gap-5 mt-6 mb-4 md:w-3/4">
          <Reveal>
            <div className="divide-y">
              {data.experiences.map((experience) => (
                <div
                  key={experience.type}
                  className="grid grid-flow-col py-2 grid-cols-6 w-full"
                >
                  <div className="flex flex-col justify-between col-span-2 gap-y-10">
                    <div className="flex flex-col">
                      <span className="font-semibold leading-4 text-wrap">
                        {experience.type}
                      </span>
                      <span className="text-primary">{experience.title}</span>
                    </div>
                    <div className="flex flex-col leading-4 text-sm">
                      <span className="text-black/60 dark:text-white/60 text-pretty">
                        {experience.identity}
                      </span>
                      <span className="text-primary">
                        {experience.timeline}
                      </span>
                    </div>
                  </div>
                  <div className="grid-cols-subgrid col-span-1 sm:hidden" />
                  <div className="flex flex-col items-end col-span-4">
                    {experience.activities.map(
                      (activity: string, index: number) => (
                        <span
                          key={activity}
                          className={
                            "list-item text-justify font-medium hyphens-auto md:w-3/5 py-1 " +
                            (index % 2 === 0 && "text-primary")
                          }
                        >
                          {activity}
                        </span>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section
        id="skills"
        className="flex flex-col items-center justify-center"
      >
        <Reveal>
          <h2 className="text-4xl font-bold">
            Skil<span className="text-primary">ls</span>
          </h2>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-4 grid-rows-3 sm:grid-rows-3 grid-flow-col gap-6 py-6">
            {data.skills.map((skill) => (
              <span
                key={skill}
                className="col-span-1 font-medium even:text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </section>
      <section
        id="projects"
        className="m-6 flex flex-col items-center justify-center"
      >
        <Reveal>
          <h2 className="text-4xl font-bold">
            Pro<span className="text-primary">jects</span>
          </h2>
        </Reveal>
        <Reveal containerClasses="w-full md:w-4/5 xl:w-3/5">
          {data.projects.map((item, index) => (
            <ProjectCard key={index} project={item} />
          ))}
        </Reveal>
      </section>
    </motion.main>
  );
}

// {
//   "title": "iHelp",
//   "description": "iOS application that allows users to request help from other users.",
//   "technologies": ["Objective-C"]
// }
