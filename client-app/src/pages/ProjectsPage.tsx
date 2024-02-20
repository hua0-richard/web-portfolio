import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import LoadingScreen from "../components/LoadingScreen";
import Card from "../components/Card"
export default function ProjectsPage() {
  const [load, setLoad] = useState(false);
  const [projects, setProjects] = useState([])
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER}user/projects`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data)
        setProjects(data.projects);
        setLoad(true); 
      });
  }, []);
  
  return (
    <>
    {load ? (
      <div className="page">
        <Menu />
        <div className="w-[720px] flex flex-col justify-start items-start">
          <div className="dark:text-white text-4xl font-semibold">Projects</div>
          <div className="w-full">
            {projects.map((p, i) => (<Card year={p.year} title={p.title} description={p.description} size="w-1/2" />))}
          </div>
        </div>
    </div>
    ) : (<LoadingScreen/>) }
    </>
  );
}
