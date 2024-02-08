export default function CardLarge({position, org, date, description} : {position: string, org: string, date: string, description: string}) {
  return (
    <div className="grow flex justify-start items-center">
      <div className="w-full h-[112px] border-r-0 border-l-0 border-b-2 dark:border-dark-tertiary flex flex-col justify-start items-start">
        <div className="w-full flex justify-between">
          <div className="flex flex-col text-left">
            <div className="dark:text-off-white font-bold text-lg">
              {position}
            </div>
            <div className="dark:text-off-white text-md">{org}</div>
          </div>
          <div className="flex items-start justify-end text-violet-700 dark:text-yellow-400 font-mono text-sm">
            {date}
          </div>
        </div>
        <div className="dark:text-off-white text-sm">{description}</div>
      </div>
    </div>
  );
}
