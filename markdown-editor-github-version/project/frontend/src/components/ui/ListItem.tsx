import { useNavigate } from "react-router";
import { useAtom } from "jotai";
import { sideBarIsHiddenAtom } from "@/atoms/atom.ts";
type Item = { body: string; id: number };

export default function ListItem({ item }: { item: Item }) {
  const navigate = useNavigate();
  const [, setIsHidden] = useAtom(sideBarIsHiddenAtom);
  const container =
    "w-full h-[12vh] border-solid border-2 border-black hover:bg-black/30 active:bg-white/10";
  const body = "text-gray-200 overflow-hidden text-clip text-lg line-clamp-3";
  function clickHandler() {
    navigate(`/home/${item.id}`);
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 768px)").matches
    ) {
      setIsHidden(true);
    }
  }
  return (
    <article className={container} onClick={clickHandler}>
      <div className={body}>{item.body}</div>
    </article>
  );
}
