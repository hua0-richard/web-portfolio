import { useContext } from "react";
import Section from "./Section";
import { UserContext } from "../UserContext";

export default function Experience() {
  const context = useContext(UserContext);

  return (
    <div className="w-[720px] flex flex-col justify-start items-start">
      <div className="w-full flex justify-between items-center mb-[12px]">
        <div className="dark:text-white text-4xl font-semibold">Experience</div>
      </div>
      {context.experience.map((exp) => (
        <div className="w-full flex">
          <Section
            position={exp.position}
            org={exp.organisation}
            date={exp.date}
            description={exp.description}
          />
        </div>
      ))}
    </div>
  );
}
