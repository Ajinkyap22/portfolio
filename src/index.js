import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ModeProvider } from "./Contexts/ModeContext";

ReactDOM.render(
  <React.StrictMode>
    <ModeProvider>
      <App />
    </ModeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
