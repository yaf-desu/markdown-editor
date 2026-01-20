import { List } from "./List.tsx";
import { useAtom } from "jotai";
import { sideBarIsHiddenAtom } from "@/atoms/atom.ts";
export default function Sidebar() {
  const [sideBarIsHidden] = useAtom(sideBarIsHiddenAtom);
  const container = `flex flex-col bg-gray-800 fixed bottom-0 top-[10vh] inset-x-0 z-50 overflow-y-auto py-0 ${
    sideBarIsHidden ? "hidden" : "flex"
  } sm:w-[20vw] sm:right-auto sm:left-0`;
  return (
    <aside className={container}>
      <List />
    </aside>
  );
}
