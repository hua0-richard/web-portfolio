import "./App.css";
import { useEffect, useState } from "react";
import { UserContext } from "./UserContext.tsx";
import Menu from "./components/Menu";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER}user`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
        setLoad(true);
      });
  }, []);

  return (
    <>
      {load ? (
        <div className="bg-white dark:bg-dark-base absolute top-0 start-0 w-screen h-screen flex flex-col justify-start items-center overflow-auto">
          <UserContext.Provider value={user}>
            <Menu />
            <About />
            <Projects />
            <Experience />
            <Education />
            <Footer />
          </UserContext.Provider>
        </div>
      ) : (
        <div className="bg-white dark:bg-dark-base absolute top-0 start-0 w-screen h-screen flex flex-col justify-start items-center overflow-auto"></div>
      )}
    </>
  );
}

export default App;
