import { useContext } from "react";
import { UserContext } from "../UserContext";
import CardLarge from "./CardLarge";
export default function Education() {
  const context = useContext(UserContext);

  return (
    <div className="w-[720px] flex flex-col justify-start items-start">
      <div className="w-full flex justify-between items-center mb-[12px]">
        <div className="dark:text-white text-4xl font-semibold">Education</div>
      </div>
      {context.education.map((ed) =>       
      <div className="w-full flex">
        <CardLarge position={ed.position} org={ed.organisation} date={ed.date} description={ed.description}/>
      </div>
      )}
    </div>
  );
}
