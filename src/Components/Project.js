import { pictures, screenshots } from "../Data/projectPictures";

function Project({ project, index }) {
  return (
    <main className="w-full h-full App 2xl:p-4">
      {/* image, name, description & links */}
      <section className="project-title grid grid-rows-2 md:grid-rows-1 items-center md:grid-cols-2 md:gap-16 px-6 pb-3 md:p-12 2xl:p-16">
        {/* image */}
        <img
          src={pictures[index]}
          alt={project.name}
          className="row-span-1 md:col-span-1 rounded-lg"
        />

        <div className="row-span-1 md:col-span-1 flex flex-col justify-center pl-1 md:pl-0">
          {/* name */}
          <h1 className="text-white text-2xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold pb-4">
            {project.name}
          </h1>

          {/* description */}
          <p className="text-white text-sm lg:text-base 2xl:text-xl 3xl:text-2xl py-4">
            {project.description}
          </p>

          {/* links */}
          <div className="py-5 flex items-center">
            {/* source code */}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 px-2.5 lg:px-3 inline-flex items-center text-sm lg:text-base 2xl:text-xl 3xl:text-2xl mr-2 lg:mr-3 2xl:mr-4 bg-white text-[#273853] rounded-lg font-bold hover:scale-105 transition-transform cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 lg:w-6 mr-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              Source Code
            </a>

            {/* live demo */}
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 px-2.5 lg:px-3 inline-flex items-center text-sm lg:text-base 2xl:text-xl 3xl:text-2xl ml-2 lg:ml-3 2xl:ml-4 bg-white text-[#273853] rounded-lg font-bold hover:scale-105 transition-transform cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 lg:w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                />
                <path
                  fillRule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                />
              </svg>
              Live Demo
            </a>
          </div>
        </div>
      </section>

      <section className="grid grid-rows-3 md:grid-rows-1 items-center md:grid-cols-2 md:gap-14 px-6 py-3 md:p-12 2xl:p-16">
        {/* why this project */}
        <div className="row-span-2 md:row-span-1 p-1 order-2 md:-order-none">
          <div className="pb-5">
            <h2 className="text-white text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl font-bold py-4 2xl:py-6 3xl:py-8">
              Why this project
            </h2>

            <p className="text-white text-sm lg:text-base 2xl:text-xl 3xl:text-2xl">
              {project.why}
            </p>
          </div>

          {/* tech stack */}
          <div className="pt-5">
            <h2 className="text-white text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl font-bold pb-4 2xl:pb-6 3xl:pb-8">
              Tech Stack
            </h2>

            <ul className="text-white text-sm lg:text-base 2xl:text-xl 3xl:text-2xl list-disc px-2.5 lg:px-5 lg:pr-16 columns-3">
              {project.techStack.map((tech, index) => (
                <li key={index} className="py-2">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <img
          src={screenshots[project.path][0]}
          alt={project.name}
          className="col-span-1 rounded-lg shadow-md"
        />
      </section>

      {/* features */}
      <section className="grid grid-rows-3 md:grid-rows-1 items-center md:grid-cols-2 md:gap-16 px-6 py-3 md:p-12 2xl:p-16">
        <img
          src={screenshots[project.path][1]}
          alt={project.name}
          className="col-span-1 rounded-lg shadow-md"
        />

        <div className="p-1 row-span-2 md:row-span-1">
          <h2 className="text-white text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl md:px-2.5 font 2xl:py-6 3xl:py-8-bold pb-4">
            Features
          </h2>

          <ul className="text-white text-sm lg:text-base 2xl:text-xl 3xl:text-2xl px-5 lg:px-8 list-disc">
            {project.features.map((feature, index) => (
              <li key={index} className="py-2">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* what i learned */}
      <section className="grid grid-rows-3 md:grid-rows-1 items-center md:grid-cols-2 md:gap-16 px-6 py-3 md:p-12 2xl:p-16">
        <div className="p-1 row-span-2 md:row-span-1 order-2 md:order-none">
          <h2 className="text-white text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl font-bold pb-4 2xl:py-6 3xl:py-8">
            What I Learned
          </h2>

          <ul className="text-white text-sm lg:text-base 2xl:text-xl 3xl:text-2xl list-disc pl-5">
            {project.learnings.map((learning, index) => (
              <li key={index} className="py-2">
                {learning}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={screenshots[project.path][2]}
          alt={project.name}
          className="col-span-1 rounded-lg shadow-md"
        />
      </section>
    </main>
  );
}

export default Project;
