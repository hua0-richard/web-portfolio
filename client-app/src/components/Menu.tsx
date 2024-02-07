import ButtonRectangle from "./ButtonRectangle";

export default function Menu() {
  return (
    <div className="w-[540px] flex justify-between items-center">
      <div className="flex">
        <ButtonRectangle icon="😀" label="About"/>
        <ButtonRectangle icon="🔨" label="Projects"/>
        <ButtonRectangle icon="🧑‍💻" label="Github"/>
      </div>

      <div>
        <ButtonRectangle icon="☀️" label=""/>
      </div>

    </div>
  );
}
