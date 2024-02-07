import ButtonRectangle from "./ButtonRectangle";
import Card from "./Card";
export default function Projects() {
  return (
    <div className="w-[720px] flex flex-col justify-start items-start">
      <div className="w-full flex justify-between items-center">
        <div className="text-white text-4xl font-semibold">Projects</div>
        <ButtonRectangle icon="" label="View All" />
      </div>

      <div className="my-[24px] w-full space-y-4">
        <div className="flex justify-around w-full">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex justify-around w-full">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
