import DeskCoder from "../images/DeskCoder.svg";

function About() {
  return (
    <section
      id="about"
      className="p-4 py-8 text-center md:py-10 lg:py-14 dark:text-white 2xl:justify-items-center md:mx-auto"
    >
      <h1 className="text-4xl md:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl tracking-wide font-bold my-4">
        About Me
      </h1>

      <div className="max-w-fit mx-auto my-12 2xl:my-16 pr-6">
        <img
          src={DeskCoder}
          alt="illustration"
          className="w-2/3 mx-auto h-auto"
        />
      </div>

      <p className="my-4 text-sm 2xl:text-lg 3xl:text-xl px-2 lg:my-6 font-[400] md:w-1/2 xl:w-1/3 mx-auto leading-6">
        I was fascinated by computers when I was a kid & I knew that I'd do
        something related to it when I grow up (Didn't really know anything
        about programming back then😅). I learned basics of some programming
        languages in college but didn't really learn how to actually program
        things.
      </p>

      <p className="my-4 text-sm 2xl:text-base 3xl:text-lg lg:my-6 font-[400] md:w-1/2 xl:w-1/3 mx-auto leading-6">
        Then the pandemic hit and that's when I became a 'real programmer'. I
        learned some languages from scratch, started to learn how to code and
        found JavaScript as my favourite language. I built a lot of projects
        during this time & after a few months of self-teaching I knew this is
        what I wanted to do for my career.
      </p>

      <p className="my-4 text-sm 2xl:text-base 3xl:text-lg lg:my-6 font-[400] md:w-1/2 xl:w-1/3 mx-auto leading-6">
        Also, I LOVE Football, I can never get tired of the beautiful game!
      </p>

      <a
        href="#techstack"
        className="p-3 px-4 lg:px-6 text-sm md:text-base 2xl:text-base 3xl:text-lg my-5 inline-block bg-button rounded-lg font-bold tracking-wide hover:scale-105 transition-all"
      >
        My Tech Stack{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="inline w-4 2xl:w-5 3xl:w-6 2xl:align-text-top mx-1"
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
      </a>
    </section>
  );
}

export default About;
