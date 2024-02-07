import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="absolute top-0 start-0 w-screen h-screen bg-dark-base flex flex-col justify-start	items-center">
      <Menu />
      <About />
      <Projects />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
