import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import About from "./components/About";

function App() {
  return (
    <div className="absolute top-0 start-0 w-screen h-screen bg-dark-base flex flex-col justify-start	items-center">
      <Menu />
      <About />
    </div>
  );
}

export default App;
