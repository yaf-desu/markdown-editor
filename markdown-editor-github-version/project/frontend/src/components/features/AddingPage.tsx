import Editor from "./Editor.tsx";
import Add from "../ui/Add.tsx";
import { useAtom } from "jotai";
import { sideBarIsHiddenAtom } from "@/atoms/atom.ts";
export default function AddingPage() {
  const [sideBarIsHidden] = useAtom(sideBarIsHiddenAtom);
  const container = `bg-[#0D1117] absolute top-[10vh] bottom-0 right-0 ${
    sideBarIsHidden ? "left-0" : "left-[20vw]"
  } overflow-y-auto transition-all duration-200`;
  return (
    <div className={container}>
      <Editor v="" />
      <Add />
    </div>
  );
}
