import ButtonRectangleSmall from "./ButtonRectangleSmall";
export default function Card() {
  return (
    <div className="w-[228px] h-[196px] p-[24px] flex flex-col justify-start items-start bg-dark-tertiary border-2 border-dark-tertiary rounded-lg">
      <div className="text-yellow-400 font-mono text-sm">2024</div>
      <div className="text-white text-lg font-bold">Title</div>
      <p className="w-full break-all flex text-off-white text-sm break-words text-left">
        descdescdescdescdescdescdescdesc
      </p>
      <div className="flex justify-start items-center space-x-2 py-[8px]">
        <ButtonRectangleSmall label="Source" />
        <ButtonRectangleSmall label="Demo" />
      </div>
    </div>
  );
}
