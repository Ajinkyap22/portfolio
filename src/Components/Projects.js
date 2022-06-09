import { useState } from "react";

import projectsData from "../Data/projectsData";
import ProjectCard from "./ProjectCard";
import { pictures } from "../Data/projectPictures";

function Projets() {
  const [showAll, setShowAll] = useState(false);

  function toggleShowAll() {
    setShowAll(!showAll);
  }

  return (
    <section
      id="projects"
      className="p-4 py-8 text-center md:py-10 lg:py-14 dark:text-white 2xl:justify-items-center md:mx-auto"
    >
      <h1 className="text-4xl md:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl tracking-wide font-bold my-4">
        Projects
      </h1>

      {/* grid layout with 2 columns */}
      <div className="grid grid-cols-1 mx-4 md:w-11/12 lg:w-4/5 xl:w-2/3 2xl:w-7/12 3xl:w-1/2 md:mx-auto gap-16 lg:gap-32 justify-items-center md:grid-cols-2 pt-20">
        {projectsData.map((project, index) =>
          showAll || index < 2 ? (
            <ProjectCard
              key={index}
              img={pictures[index] || ""}
              name={project.name}
              description={project.description}
              icons={project.icons}
              link={project.link}
              path={project.path}
            />
          ) : null
        )}
      </div>

      <button
        onClick={toggleShowAll}
        className="p-3 px-4 lg:px-6 text-sm md:text-base 2xl:text-xl 3xl:text-2xl mt-16 2xl:mt-24 bg-button rounded-lg font-bold tracking-wide hover:scale-105 transition-all"
      >
        {!showAll ? "Show Me More !" : "Show Me Less"}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className={`inline w-4 2xl:w-5 3xl:w-6 2xl:align-text-top mx-1 rotate- ${
            showAll ? "rotate-180 2xl:mt-1" : ""
          }`}
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
          <path
            fillRule="evenodd"
            d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </section>
  );
}

export default Projets;
