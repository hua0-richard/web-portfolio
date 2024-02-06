import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="absolute top-0 start-0 w-screen h-screen bg-dark-base flex flex-col justify-start	items-center">
      <Menu />
      <About />
      <Projects />
    </div>
  );
}

export default App;
