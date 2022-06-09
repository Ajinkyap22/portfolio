import { Link } from "react-router-dom";
import React from "react";
import parse from "html-react-parser";

function ProjectCard({ img, name, description, icons, link, path }) {
  return (
    <div className="bg-[#273853] px-4 lg:px-8 p-6 2xl:px-10 2xl:p-8 rounded-md shadow-[0px_0px_4px_rgba(0,0,0,0.25)]">
      {/* picture */}
      <img src={img} alt={name} className="w-full h-auto rounded-lg" />

      {/* name */}
      <p className="font-bold text-lg tracking-wide py-2 2xl:py-3 3xl:pt-4 2xl:text-xl 3xl:text-2xl">
        {name}
      </p>

      {/* description */}
      <p className="py-2 2xl:py-3 text-sm font-light 2xl:text-base 3xl:text-lg">
        {description}
      </p>

      {/* tech stack */}
      <div className="flex items-center justify-center py-4 2xl:py-5">
        {icons.map((icon, index) => (
          <React.Fragment key={index}>{parse(icon)}</React.Fragment>
        ))}
      </div>

      {/* buttons */}
      <div className="py-3 pt-4 2xl:py-4 2xl:pt-5">
        <Link
          to={`/${path}`}
          className="p-2 px-2.5 lg:px-3 text-sm md:text-base 2xl:text-lg 3xl:text-xl mx-2 lg:mx-3 2xl:mx-4 bg-white text-[#273853] rounded-lg font-bold hover:scale-105 transition-transform cursor-pointer"
        >
          More Details
        </Link>
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="p-2 px-2.5 lg:px-3 text-sm md:text-base 2xl:text-lg 3xl:text-xl mx-2 lg:mx-3 2xl:mx-4 inline-block bg-white text-[#273853] rounded-lg font-bold hover:scale-105 transition-transform cursor-pointer"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
