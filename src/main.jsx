import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CourseContext from "./contexts/CourseContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CourseContext>
        <App />
      </CourseContext>
    </BrowserRouter>
  </React.StrictMode>,
);
