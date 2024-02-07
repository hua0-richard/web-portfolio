import { useEffect, useState } from "react";
import ButtonRectangle from "./ButtonRectangle";
import ButtonRound from "./ButtonRound";

export default function Menu() {
  const [darkMode, setDarkMode] = useState(localStorage.theme);

  useEffect(() => {
    handleDarkMode();
  }, []);

  function handleDarkMode() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      setDarkMode(localStorage.theme);
    } else {
      localStorage.theme = "dark";
      setDarkMode(localStorage.theme);
    }
  }
  return (
    <div className="w-[720px] py-[24px] flex justify-between items-center">
      <div className="flex justify-around space-x-2">
        <ButtonRectangle icon="😀" label="About" />
        <ButtonRectangle icon="🔨" label="Projects" />
        <ButtonRectangle icon="🧑‍💻" label="Github" />
      </div>

      <div>
        {darkMode === "dark" ? (
          <ButtonRound icon="☀️" handleClick={handleDarkMode} />
        ) : (
          <ButtonRound icon="🌙" handleClick={handleDarkMode} />
        )}
      </div>
    </div>
  );
}
