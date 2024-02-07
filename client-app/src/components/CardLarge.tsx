export default function CardLarge() {
  return (
    <div className="grow flex justify-start items-center">
      <div className="w-full h-[112px] border-r-0 border-l-0 border-b-2 dark:border-dark-tertiary flex flex-col justify-start items-start">
        <div className="w-full flex justify-between">
          <div className="flex">
            <div>Position</div>
            <div>Org</div>
          </div>
            <div className="dark:text-yellow-400 font-mono text-sm">Date</div>
        </div>
        <div>Desc.</div>
      </div>
    </div>
  );
}
