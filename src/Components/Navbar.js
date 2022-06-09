function Navbar() {
  return (
    <nav className="fixed hidden md:flex dark:bg-primary top-0 z-10 w-full py-3.5 2xl:py-5 shadow-md justify-between items-center md:px-10 lg:px-20">
      {/* logo */}
      <a
        href="#hero"
        className="text-white logo text-2xl lg:text-3xl md:ml-4 lg:ml-16"
      >
        &lt;ap/&gt;
      </a>

      {/* menu */}
      <div>
        <a
          className="mx-6 md:text-sm lg:text-base 2xl:text-lg font-bold dark:text-white"
          href="#about"
        >
          About Me
        </a>

        <a
          className="mx-6 md:text-sm lg:text-base 2xl:text-lg font-bold dark:text-white"
          href="#techstack"
        >
          Tech Stack
        </a>

        <a
          className="mx-6 md:text-sm lg:text-base 2xl:text-lg font-bold dark:text-white"
          href="#projects"
        >
          Projects
        </a>

        <a
          className="mx-6 md:text-sm lg:text-base 2xl:text-lg font-bold dark:text-white"
          href="#education"
        >
          Education
        </a>

        <a
          className="mx-6 md:text-sm lg:text-base 2xl:text-lg font-bold dark:text-white"
          href="#contact"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
