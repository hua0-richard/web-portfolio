export default function CardLarge() {
  return (
    <div className="grow flex justify-start items-center">
      <div className="w-full h-[112px] border-r-0 border-l-0 border-b-2 dark:border-dark-tertiary flex flex-col justify-start items-start">
        <div className="w-full flex justify-between">
          <div className="flex">
            <div className="dark:text-off-white font-bold text-lg">
              Position,
            </div>
            <div className="dark:text-off-white text-lg">Org</div>
          </div>
          <div className="text-violet-700 dark:text-yellow-400 font-mono text-sm">Date</div>
        </div>
        <div className="dark:text-off-white text-sm">Desc.</div>
      </div>
    </div>
  );
}
