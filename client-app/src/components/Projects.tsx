import { useContext } from "react";
import { UserContext } from "../UserContext";
import ButtonRectangle from "./ButtonRectangle";
import Card from "./Card";
export default function Projects() {
  const context = useContext(UserContext);

  return (
    <div className="w-[720px] flex flex-col justify-start items-start">
      <div className="w-full flex justify-between items-center">
        <div className="dark:text-white text-4xl font-semibold">Projects</div>
        <ButtonRectangle icon="" label="View All" />
      </div>

      <div className="my-[24px] w-full space-y-4">
        {context.projects.slice(0,6).map((_a, i) =>
          i % 3 === 0 ? (
            <div className="flex justify-around w-full space-x-4">
              {context.projects.slice(0, 6).map((b, j) =>
                j >= i && i + 3 > j ? (
                  <Card
                    year={b.year}
                    title={b.title}
                    description={b.description}
                  />
                ) : (
                  <></>
                ),
              )}
            </div>
          ) : (
            <></>
          ),
        )}
      </div>
    </div>
  );
}
