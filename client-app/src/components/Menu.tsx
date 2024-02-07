import ButtonRectangle from "./ButtonRectangle";
import ButtonRound from "./ButtonRound";

export default function Menu() {
  return (
    <div className="w-[720px] py-[24px] flex justify-between items-center">
      <div className="flex justify-around space-x-2">
        <ButtonRectangle icon="😀" label="About" />
        <ButtonRectangle icon="🔨" label="Projects" />
        <ButtonRectangle icon="🧑‍💻" label="Github" />
      </div>

      <div>
        <ButtonRound icon="☀️" />
      </div>
    </div>
  );
}
