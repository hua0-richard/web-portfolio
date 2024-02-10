import "../App.css"
import { useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import Menu from "../components/Menu";
import About from "../components/About";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";

export default function AboutPage() {
  const [user, setUser] = useState();
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
        <UserContext.Provider value={user}>
          <div className="page">
              <Menu />
              <About />
              <Projects />
              <Experience />
              <Education />
              <Footer />
            </div>
          </UserContext.Provider>
      ) : (
        <><LoadingScreen/></>
      )}
    </>
  );
}
