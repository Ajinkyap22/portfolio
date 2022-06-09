import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import projectsData from "./Data/projectsData";
import Project from "./Components/Project";
import ScrollToTop from "./Hooks/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          {/* main */}
          <Route path="/" element={<App />} />

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
  </React.StrictMode>,
  document.getElementById("root")
);
