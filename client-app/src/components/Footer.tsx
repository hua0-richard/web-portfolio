export default function Footer() {
  return (
    <div className="w-[720px] flex justify-center items-center">
        <div className="h-[144px] flex flex-col justify-around">
        <div className="text-3xl">💻</div>
        <div className="dark:text-off-white text-sm">Updated 2024</div>
            <div className="flex flex-between space-x-4">
                <div className="dark: text-off-white text-sm cursor-pointer hover:underline">Build ⚙️</div>
                <div className="dark: text-off-white text-sm cursor-pointer hover:underline">Source 📄</div>
                <div className="dark: text-off-white text-sm cursor-pointer hover:underline" >Contact 📫</div>
            </div>
        </div>
    </div>
  );
}
