import { useState, useContext } from "react";
import { ModeContext } from "../Contexts/ModeContext";

function MobileNav() {
  const [showNav, setShowNav] = useState(false);

  function showNavigation() {
    setShowNav(true);
  }

  function hideNavigation() {
    setShowNav(false);
  }

  const [mode, setMode] = useContext(ModeContext);

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  }

  return (
    <div>
      {/* navbar */}
      <nav className="md:hidden w-full fixed top-0 flex justify-between items-center bg-white dark:bg-primary py-3 z-10 shadow-md">
        <a
          href="#hero"
          className="text-primary dark:text-white logo text-2xl ml-5"
        >
          &lt;ap/&gt;
        </a>

        <div className="inline-flex items-center">
          <button
            onClick={toggleMode}
            title={`${
              mode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"
            }`}
            className="outline-none mr-3"
          >
            {mode === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#212F45"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#f3f3f3"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>

          <button onClick={showNavigation}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 mr-6 stroke-primary dark:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* menu */}
      <div
        className={`fixed h-full right-0 p-6 shadow-lg z-20 w-3/4 bg-white dark:bg-primary transition-all duration-500 ease-in ${
          showNav ? "" : "menuClose"
        }`}
      >
        <div className="flex flex-col items-center p-6">
          {/* about */}
          <a
            className="my-6 g font-bold text-zinc-800 dark:text-white border-b border-black dark:border-white"
            href="#about"
            onClick={hideNavigation}
          >
            About Me
          </a>

          {/* tech stack */}
          <a
            className="my-6 g font-bold text-zinc-800 dark:text-white border-b border-black dark:border-white"
            href="#techstack"
            onClick={hideNavigation}
          >
            Tech Stack
          </a>

          {/* projects */}

          <a
            className="my-6 g font-bold text-zinc-800 dark:text-white border-b border-black dark:border-white"
            href="#projects"
            onClick={hideNavigation}
          >
            Projects
          </a>

          {/* education */}

          <a
            className="my-6 g font-bold text-zinc-800 dark:text-white border-b border-black dark:border-white"
            href="#education"
            onClick={hideNavigation}
          >
            Education
          </a>

          {/* contact */}

          <a
            className="my-6 g font-bold text-zinc-800 dark:text-white border-b border-white"
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
            className="h-5 w-5 stroke-black dark:stroke-white"
            fill="none"
            viewBox="0 0 24 24"
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
