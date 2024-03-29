export default function ButtonRectangle({
  icon,
  label,
}: {
  icon: any;
  label: string;
}) {
  return (
    <div className="select-none	group p-[2px] rounded-lg cursor-pointer bg-light-secondary dark:bg-dark-secondary hover:bg-gradient-to-r  hover:from-violet-700  hover:to-blue-900 dark:hover:bg-gradient-to-r  dark:hover:from-yellow-400  dark:hover:to-orange-500">
      <div className="h-[36px] p-[12px] rounded-md flex justify-center items-center font-bold text-md bg-light-tertiary dark:bg-dark-tertiary">
        {icon ? <div className="mr-[8px] text-lg">{icon}</div> : <></>}
        <div className="dark:bg-off-white dark:text-off-white group-hover:bg-gradient-to-r bg-clip-text group-hover:from-violet-700 group-hover:to-blue-900 group-hover:text-transparent group-hover:dark:bg-gradient-to-r group-hover:dark:from-yellow-400 group-hover:dark:to-orange-500 group-hover:dark:text-transparent">
          <div>{label}</div>
        </div>
      </div>
    </div>
  );
}
