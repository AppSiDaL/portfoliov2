import { useScramble } from "use-scramble";

export default function DescriptionCard() {
  const { ref, replay } = useScramble({
    text: "Hello There, this is Gilberto, i'm a WEB & IA developer. Welcome to my portfolio!!",
    speed: 0.4,
  });

  return (
    <div className="border border-gray-300 bg-slate-50 rounded-lg p-5 m-2 shadow-md relative mx-auto max-h-[10vh] min-h-[5vh] max-w-[30vw] min-w-[30vw] transform -translate-y-1/3">
      <a ref={ref} onMouseEnter={replay} className="" />
    </div>
  );
}