export default function Card() {
  return (
    <div className="w-[228px] h-[196px] p-[24px] flex flex-col justify-start items-start bg-dark border-2 border-dark-tertiary rounded-lg">
      <div className="text-yellow-400 font-mono text-sm">2024</div>
      <div className="text-white text-lg font-bold">Title</div>
      <div className="text-off-white text-sm">Desc</div>
      <div className="flex justify-start items-center">
        <div>Test</div>
        <div>Test</div>
      </div>
    </div>
  );
}
