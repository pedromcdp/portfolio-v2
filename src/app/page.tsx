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
            <h2 className="text-primary text-4xl font-bold">About Me</h2>
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
          <h2 className="text-4xl font-bold text-primary">Experience</h2>
        </Reveal>
        <div className="flex flex-col gap-5 mt-6 mb-4 md:w-3/4">
          <Reveal>
            <div className="divide-y dark:border-b/60">
              {data.experiences.map((experience) => (
                <div
                  key={experience.type}
                  className="grid grid-flow-col py-4 grid-cols-6 w-full"
                >
                  <div className="flex flex-col justify-between col-span-2 gap-y-10">
                    <div className="flex flex-col gap-2 sm:gap-1 leading-5">
                      <span className="font-semibold text-wrap">
                        {experience.type}
                      </span>
                      <span className="text-primary">{experience.title}</span>
                    </div>
                    <div className="flex flex-col leading-4 text-sm gap-2 sm:gap-0.5">
                      <span className="text-black/60 dark:text-white/60 text-pretty">
                        {experience.identity}
                      </span>
                      <span className="text-primary">
                        {experience.timeline}
                      </span>
                    </div>
                  </div>
                  <div className="grid-cols-subgrid col-span-1 sm:hidden" />
                  <div className="flex flex-col items-start sm:items-end col-span-4">
                    {experience.activities.map((activity: string) => (
                      <span
                        key={activity}
                        className={
                          "list-item text-justify hyphens-auto md:w-3/5 py-1 "
                        }
                      >
                        {activity}
                      </span>
                    ))}
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
          <h2 className="text-4xl font-bold text-primary">Skills</h2>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-4 grid-rows-4 sm:grid-rows-3 grid-flow-col gap-6 py-6 justify-items-center">
            {data.skills.map((skill) => (
              <span key={skill} className="col-span-1 font-medium">
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
        <Reveal containerClasses="mb-6">
          <h2 className="text-4xl font-bold text-primary">Projects</h2>
        </Reveal>
        <Reveal containerClasses="w-full lg:w-4/5 grid grid-cols-4 gap-4 transition-all durantion-150 ease-in-out">
          {data.projects.map((item, index) => (
            <ProjectCard key={index} project={item} />
          ))}
        </Reveal>
      </section>
    </motion.main>
  );
}
