export default function ButtonRound({
  icon,
  handleClick,
}: {
  icon: string;
  handleClick: any;
}) {
  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className="group select-none rounded-full w-[50px] h-[50px] flex justify-center items-center bg-light-secondary hover:bg-gradient-to-r hover:from-violet-700 hover:to-blue-900 dark:bg-dark-secondary cursor-pointer dark:hover:bg-gradient-to-r dark:hover:from-yellow-400 dark:hover:to-orange-500"
    >
      <div className="rounded-full w-[46px] h-[46px] bg-light-tertiary dark:bg-dark-tertiary flex justify-center items-center text-2xl">
        {icon}
      </div>
    </div>
  );
}
