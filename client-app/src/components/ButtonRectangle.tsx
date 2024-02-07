export default function ButtonRectangle({icon, label}, {icon: any, label: string}) {
  return (
    <div className="group p-[2px] rounded-lg bg-dark-secondary cursor-pointer hover:bg-gradient-to-r from-yellow-400 to-orange-500">
      <div className="h-[36px] p-[12px] bg-dark-tertiary rounded-md flex justify-center items-center text-md">
        <div className="mr-[8px] text-lg">
          {icon}
        </div>
        <div className="bg-off-white text-off-white group-hover:bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          <div>{label}</div>
        </div>
      </div>
    </div>
  );
}
