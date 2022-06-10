import "./App.css";

import { useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModeContext } from "./Contexts/ModeContext";

import Main from "./Components/Main";
import projectsData from "./Data/projectsData";
import Project from "./Components/Project";
import ScrollToTop from "./Hooks/ScrollToTop";

function App() {
  const [mode] = useContext(ModeContext);

  useEffect(() => {
    // add dark class to html element
    if (mode === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [mode]);

  return (
    <div className="App dark:bg-primary">
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            {/* main */}
            <Route path="/" element={<Main />} />

            {/* project routes */}
            {projectsData.map((project, index) => (
              <Route
                key={index}
                path={`/${project.path}`}
                element={<Project project={project} index={index} />}
              />
            ))}
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
