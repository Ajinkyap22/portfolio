import { frontEnd, backEnd, general } from "../Data/icons";
import parse from "html-react-parser";

function TechStack() {
  return (
    <section
      id="techstack"
      className="p-4 text-center md:py-10 lg:py-16 dark:text-white 2xl:justify-items-center md:mx-auto"
    >
      <h1 className="text-4xl md:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl tracking-wide font-bold my-4">
        My Tech Stack
      </h1>

      <div className="my-4 mt-20">
        <h2 className="text-2xl 2xl:text-3xl 3xl:text-4xl">Front-End</h2>

        <div className="lg:flex lg:items-center lg:justify-center grid grid-cols-2 md:grid-cols-4 justify-items-center my-16">
          {frontEnd.map((tech, i) => (
            <div
              key={tech.name}
              className="bg-[#e5e5e51a] w-28 lg:mx-4 xl:mx-6 2xl:mx-8 3xl:mx-10 h-28 rounded-lg my-4 lg:my-0 text-center flex flex-col justify-evenly items-center"
            >
              {parse(tech.svg)}
              <p className="text-sm tracking-wide">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-4">
        <h2 className="text-2xl 2xl:text-3xl 3xl:text-4xl">Back-End</h2>

        <div className="lg:flex lg:items-center lg:justify-center grid grid-cols-2 md:grid-cols-4 justify-items-center my-16">
          {backEnd.map((tech, i) => (
            <div
              key={tech.name}
              className="bg-[#e5e5e51a] w-28 lg:mx-6 2xl:mx-8 3xl:mx-10 h-28 rounded-lg my-4 text-center flex flex-col justify-evenly items-center"
            >
              {parse(tech.svg)}
              <p className="text-sm tracking-wide">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-4">
        <h2 className="text-2xl 2xl:text-3xl 3xl:text-4xl">General</h2>

        <div className="lg:flex lg:items-center lg:justify-center grid grid-cols-2 md:grid-cols-4 justify-items-center my-16">
          {general.map((tech, i) => (
            <div
              key={tech.name}
              className="bg-[#e5e5e51a] w-28 lg:mx-6 2xl:mx-8 3xl:mx-10 h-28 rounded-lg my-4 text-center flex flex-col justify-evenly items-center"
            >
              {parse(tech.svg)}
              <p className="text-sm tracking-wide">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
