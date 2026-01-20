import { addArticle } from "@/services/addArticle";
import { useAtom } from "jotai";
import { currentBodyAtom } from "@/atoms/atom.ts";
import { changeAtom } from "@/atoms/atom.ts";
import { useNavigate } from "react-router";
import { sideBarIsHiddenAtom } from "@/atoms/atom.ts";
export default function Add() {
  const navigate = useNavigate();
  const [change, setChange] = useAtom(changeAtom);
  const [, setSideBarIsHidden] = useAtom(sideBarIsHiddenAtom);
  const container =
    "bg-blue-900 text-white text-xl ml-4 w-[6em] py-auto rounded hover:bg-blue-800/30 active:bg-blue-400/30 mt-8";
  const [currentBody] = useAtom(currentBodyAtom);
  async function clickHandler() {
    try {
      const res = await addArticle(currentBody);
      if (res) {
        setChange((c) => !c);
        navigate("/home");
        if (
          typeof window !== "undefined" &&
          window.matchMedia("(max-width: 768px)").matches
        ) {
          setSideBarIsHidden(false);
        }
      }
    } catch (err) {
      // addArticle already shows a toast on error; swallow here
    }
  }
  return (
    <button className={container} onClick={clickHandler}>
      Add
    </button>
  );
}
