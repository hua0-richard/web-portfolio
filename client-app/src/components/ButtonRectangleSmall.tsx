export default function ButtonRectangleSmall({ label }: { label: string }) {
  return (
    <div className="group p-[1px] rounded-lg bg-dark-secondary cursor-pointer hover:bg-gradient-to-r from-yellow-400 to-orange-500">
      <div className="h-[28px] p-[8px] bg-dark-tertiary rounded-md flex justify-center items-center text-sm font-bold">
        <div className="bg-off-white text-off-white group-hover:bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          <div>{label}</div>
        </div>
      </div>
    </div>
  );
}
