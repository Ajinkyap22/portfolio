import { ModeContext } from "../Contexts/ModeContext";
import { useContext } from "react";

function Navbar() {
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
    <nav className="fixed hidden md:flex dark:bg-primary bg-white top-0 z-10 w-full py-3.5 2xl:py-5 shadow-md justify-between items-center md:px-10 lg:px-20">
      {/* logo */}
      <a
        href="#hero"
        className="text-primary dark:text-white logo text-2xl lg:text-3xl md:ml-4 lg:ml-16"
      >
        &lt;ap/&gt;
      </a>

      {/* menu */}
      <div className="flex items-center">
        <a
          className="mx-6 md:text-sm lg:text-base 2xl:text-lg font-bold text-zinc-800 dark:text-white"
          href="#about"
        >
          About Me
        </a>

        <a
          className="mx-6 md:text-sm lg:text-base 2xl:text-lg font-bold text-zinc-800 dark:text-white"
          href="#techstack"
        >
          Tech Stack
        </a>

        <a
          className="mx-6 md:text-sm lg:text-base 2xl:text-lg font-bold text-zinc-800 dark:text-white"
          href="#projects"
        >
          Projects
        </a>

        <a
          className="mx-6 md:text-sm lg:text-base 2xl:text-lg font-bold text-zinc-800 dark:text-white"
          href="#education"
        >
          Education
        </a>

        <a
          className="mx-6 md:text-sm lg:text-base 2xl:text-lg font-bold text-zinc-800 dark:text-white"
          href="#contact"
        >
          Contact Me
        </a>

        <button
          onClick={toggleMode}
          title={`${
            mode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"
          }`}
          className="outline-none"
        >
          {mode === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 mb-1.5 ml-2"
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
      </div>
    </nav>
  );
}

export default Navbar;
