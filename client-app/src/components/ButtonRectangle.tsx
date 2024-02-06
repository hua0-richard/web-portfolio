export default function ButtonRectangle({icon, label}, {icon: any, label: string}) {
  return (
    <div className="h-[36px] border border-solid border-dark-secondary text-off-white rounded-md flex justify-center items-center">
      <div>{icon}</div>
      <div>{label}</div>
    </div>
  );
}
