import { Button } from "@nextui-org/react";
import { Reveal } from "./Reveal";
import Image from "next/image";

interface IProject {
  title: string;
  date: string;
  technologies: string[];
  description: string;
  github: string;
  url: string;
  image: string;
}

function ProjectCard({ project }: { project: IProject }) {
  const { date, description, title, github, image, url, technologies } =
    project;

  const imageUrl = image === "" ? "/fallback.webp" : image;

  return (
    <Reveal containerClasses="w-full md:w-4/5 xl:w-3/5 flex min-h-72 flex-col lg:flex-row  items-center lg:items-stretch mt-4 font-medium dark:border border-zinc-600 shadow-lg py-4 px-6 rounded-lg h-auto gap-4 transition-all durantion-150 ease-in-out">
      <div className="hidden lg:flex relative flex-none w-80 rounded-md">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="border-primary flex h-full object-cover rounded-md object-center border-3 p-0.5 pointer-events-none"
        />
      </div>
      <div className="flex flex-col justify-between grow gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-xs tracking-wide text-foreground/60">
            {date}
          </span>
          <h3 className="text-primary text-xl leading-3">{title}</h3>
          <div className="w-full gap-1.5 mt-1 flex flex-wrap">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-background border border-primary text-primary text-xs font-medium px-3 py-0.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="font-normal text-justify text-base leading-tight">
            {description}
          </p>
        </div>
        <div className="flex gap-2 xl:mt-2">
          {github && (
            <Button variant="bordered" color="primary">
              <a href={github} target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
            </Button>
          )}
          {url && (
            <Button variant="solid" color="primary">
              <a href={url} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </Button>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export { ProjectCard };
