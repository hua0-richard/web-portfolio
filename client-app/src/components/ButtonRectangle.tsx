export default function ButtonRectangle({
  icon,
  label,
}: {
  icon: any;
  label: string;
}) {
  return (
    <div className="group p-[2px] rounded-lg bg-dark-secondary cursor-pointer hover:bg-gradient-to-r  hover:from-violet-700  hover:to-blue-900 dark:hover:bg-gradient-to-r  dark:hover:from-yellow-400  dark:hover:to-orange-500">
      <div className="h-[36px] p-[12px] bg-dark-tertiary rounded-md flex justify-center items-center font-bold text-md">
        {icon ? <div className="mr-[8px] text-lg">{icon}</div> : <></>}
        <div className="bg-off-white text-off-white group-hover:bg-gradient-to-r bg-clip-text group-hover:from-violet-700 group-hover:to-blue-900 group-hover:text-transparent group-hover:dark:bg-gradient-to-r group-hover:dark:from-yellow-400 to-orange-500 group-hover:dark:text-transparent">
          <div>{label}</div>
        </div>
      </div>
    </div>
  );
}
