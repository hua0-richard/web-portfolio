export default function ButtonRectangleSmall({ label }: { label: string }) {
  return (
    <div className="select-none	group p-[2px] rounded-lg bg-light-secondary dark:bg-dark-secondary cursor-pointer hover:bg-gradient-to-r hover:from-violet-700  hover:to-blue-900 dark:hover:bg-gradient-to-r dark:hover:bg-gradient-to-r dark:hover:from-yellow-400 dark:hover:to-orange-500">
      <div className="h-[28px] p-[8px] bg-light-tertiary dark:bg-dark-tertiary rounded-md flex justify-center items-center text-sm font-bold">
        <div className="dark:bg-off-white dark:text-off-white bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-700  group-hover:to-blue-900 dark:group-hover:bg-gradient-to-r dark:group-hover:bg-gradient-to-r dark:group-hover:from-yellow-400 dark:group-hover:to-orange-500 group-hover:text-transparent">
          <div>{label}</div>
        </div>
      </div>
    </div>
  );
}
