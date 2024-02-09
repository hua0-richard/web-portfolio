import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import { useEffect, useState } from "react";
import Menu from "./components/Menu";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="min-h-full bg-white dark:bg-dark-base absolute top-0 start-0 w-screen h-screen flex flex-col justify-start items-center overflow-auto">
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;
