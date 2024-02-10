import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import { useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  useEffect(() => {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-full bg-white dark:bg-dark-base absolute top-0 start-0 w-screen h-screen flex flex-col justify-start items-center overflow-auto">
      <SpeedInsights/>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;
