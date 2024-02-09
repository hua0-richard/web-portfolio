import { useContext } from "react";
import { UserContext } from "../UserContext";
export default function About() {
  const context = useContext(UserContext);
  return (
    <div className="w-[720px] flex flex-col justify-between items-start">
      <h1 className="text-6xl font-bold dark:text-white">
        // @ts-ignore 
        {context.about[0].title}
      </h1>
      <div className="my-8 dark:text-off-white text-left">
        // @ts-ignore
        {context.about[0].description}
      </div>
    </div>
  );
}
