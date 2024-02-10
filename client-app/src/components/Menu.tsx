import { useEffect, useState } from "react";
import ButtonRectangle from "./ButtonRectangle";
import ButtonRound from "./ButtonRound";
import { Link } from "react-router-dom";

export default function Menu() {
  const [darkMode, setDarkMode] = useState(localStorage.theme);

  useEffect(() => {
    setDarkMode(localStorage.theme);
  }, []);

  function handleDarkMode() {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDarkMode(localStorage.theme);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDarkMode(localStorage.theme);
    }
  }
  return (
    <div className="w-[720px] py-[24px] flex justify-between items-center">
      <div className="flex justify-around space-x-2">
        <Link to="/">
          <ButtonRectangle icon="😀" label="About" />
        </Link>
        <Link to="/projects">
          <ButtonRectangle icon="🔨" label="Projects" />
        </Link>
        <ButtonRectangle icon="🧑‍💻" label="Github" />
      </div>

      <div>
        {darkMode !== "dark" ? (
          <ButtonRound icon="☀️" handleClick={handleDarkMode} />
        ) : (
          <ButtonRound icon="🌙" handleClick={handleDarkMode} />
        )}
      </div>
    </div>
  );
}
