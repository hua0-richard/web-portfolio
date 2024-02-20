import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import LoadingScreen from "../components/LoadingScreen";
import Card from "../components/Card"
import ButtonRectangle from "../components/ButtonRectangle";
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
        <div className="w-full flex justify-between items-center">
        <div className="dark:text-white text-4xl font-semibold">Projects</div>
        <div className="flex space-x-2">
          <ButtonRectangle icon="🪄" label="Filter" />
          <ButtonRectangle icon="🔼" label="Date" />
        </div>
      </div>        <div className="w-[720px] flex justify-between items-end flex-wrap space-y-4">
            {projects.map((p, i) => (<Card year={p.year} title={p.title} description={p.description} size="w-[352px]"/>))}
        </div>
    </div>
    ) : (<LoadingScreen/>) }
    </>
  );
}
