import { useScramble } from "use-scramble";

export default function DescriptionCard() {
  const { ref, replay } = useScramble({
    text: "Hello There, this is Gilberto, i'm a WEB & IA developer. Welcome to my portfolio!!",
    speed: 0.4,
  });

  return (
    <div className="border border-gray-300 bg-slate-50 dark:bg-zinc-800 rounded-lg p-5 m-2 shadow-md  sm:max-h-[10vh] sm:min-h-[5vh] sm:max-w-[30vw] sm:min-w-[30vw] text-center sm:text-left">
      <a ref={ref} onMouseEnter={replay} className="" />
    </div>
  );
}