import CardLarge from "./CardLarge";

export default function Experience() {
  return (
    <div className="w-[720px] flex flex-col justify-start items-start">
      <div className="w-full flex justify-between items-center mb-[12px]">
        <div className="dark:text-white text-4xl font-semibold">Experience</div>
      </div>
      <div className="w-full flex">
        <CardLarge />
      </div>
    </div>
  );
}
