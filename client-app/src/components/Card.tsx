import ButtonRectangleSmall from "./ButtonRectangleSmall";
export default function Card() {
  return (
    <div className="grow-1 h-[196px] p-[24px] flex flex-col justify-start items-start rounded-lg border-2 bg-light-tertiary dark:bg-dark-tertiary dark:border-dark-secondary">
      <div className="text-violet-700 dark:text-yellow-400 font-mono text-sm">
        2024
      </div>
      <div className="dark:text-white text-lg font-bold">Title</div>
      <p className="w-full break-all flex dark:text-off-white text-sm break-words text-left">
        descdescdescdescdescdescdescdesc
      </p>
      <div className="flex justify-start items-center space-x-2 py-[8px]">
        <ButtonRectangleSmall label="Source" />
        <ButtonRectangleSmall label="Demo" />
      </div>
    </div>
  );
}
