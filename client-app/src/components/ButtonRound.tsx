export default function ButtonRound({ icon }: { icon: string }) {
  return (
    <div className="group rounded-full w-[50px] h-[50px] flex justify-center items-center bg-dark-secondary cursor-pointer hover:bg-gradient-to-r from-yellow-400 to-orange-500">
      <div className="rounded-full w-[46px] h-[46px] bg-dark-tertiary flex justify-center items-center text-2xl">
        {icon}
      </div>
    </div>
  );
}
