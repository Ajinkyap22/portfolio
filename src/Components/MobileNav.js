import { useState } from "react";

function MobileNav() {
  const [showNav, setShowNav] = useState(false);

  function showNavigation() {
    setShowNav(true);
  }

  function hideNavigation() {
    setShowNav(false);
  }

  return (
    <div>
      {/* navbar */}
      <nav className="md:hidden w-full fixed top-0 flex justify-between items-center dark:bg-primary py-3 z-10 shadow-md">
        <a href="#hero" className="text-white logo text-2xl ml-5">
          &lt;ap/&gt;
        </a>

        <button onClick={showNavigation}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 mr-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* menu */}
      <div
        className={`fixed h-full right-0 p-6 shadow-lg z-20 w-3/4 bg-primary transition-all duration-500 ease-in ${
          showNav ? "" : "menuClose"
        }`}
      >
        <div className="flex flex-col items-center p-6">
          {/* about */}
          <a
            className="my-6 g font-bold text-white border-b border-white"
            href="#about"
            onClick={hideNavigation}
          >
            About Me
          </a>

          {/* tech stack */}
          <a
            className="my-6 g font-bold text-white border-b border-white"
            href="#techstack"
            onClick={hideNavigation}
          >
            Tech Stack
          </a>

          {/* projects */}

          <a
            className="my-6 g font-bold text-white border-b border-white"
            href="#projects"
            onClick={hideNavigation}
          >
            Projects
          </a>

          {/* education */}

          <a
            className="my-6 g font-bold text-white border-b border-white"
            href="#education"
            onClick={hideNavigation}
          >
            Education
          </a>

          {/* contact */}

          <a
            className="my-6 g font-bold text-white border-b border-white"
            href="#contact"
            onClick={hideNavigation}
          >
            Contact Me
          </a>
        </div>

        {/* close button */}
        <button className="absolute top-3 right-4" onClick={hideNavigation}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* overlay */}
      <div
        className={`fixed h-full right-0 shadow-lg z-10 w-full bg-[rgba(0,0,0,0.3)] transition-all duration-500 ease-in ${
          showNav ? "opacity-100" : "menuClose opacity-0"
        }`}
      ></div>
    </div>
  );
}

export default MobileNav;
