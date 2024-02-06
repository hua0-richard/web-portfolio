export default function ButtonRectangle({icon, label}, {icon: any, label: string}) {
  return (
    <div className="h-[36px] p-[16px] border-2 border-solid border-dark-secondary bg-dark-tertiary text-off-white rounded-md flex justify-center items-center text-sm	cursor-pointer hover:border-off-white">
      <div>{icon}</div>
      <div>{label}</div>
    </div>
  );
}
