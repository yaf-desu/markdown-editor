import updateArticle from "@/services/updateArticle";
import { useAtom } from "jotai";
import { currentBodyAtom } from "@/atoms/atom.ts";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { changeAtom } from "@/atoms/atom.ts";
import { sideBarIsHiddenAtom } from "@/atoms/atom.ts";
const container =
  "bg-blue-900 text-white text-xl ml-4 w-[6em] py-auto rounded hover:bg-blue-800/30 active:bg-blue-400/30";
export default function Save() {
  const navigate = useNavigate();
  const [, setSideBarIsHidden] = useAtom(sideBarIsHiddenAtom);
  const [currentBody, setCurrentBody] = useAtom(currentBodyAtom);
  const [change, setChange] = useAtom(changeAtom);
  const articleId = Number(useParams().articleId);
  async function clickHandler(id: number, content: string) {
    const data = await updateArticle(id, content);
    if (!data) return;
    const newId = await data[0].id;
    const body = await data[0].body;
    navigate(`/home/${newId}`);
    setCurrentBody(body);
    setChange(() => !change);
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 768px)").matches
    ) {
      setSideBarIsHidden(false);
    }
  }
  return (
    <button
      className={container}
      onClick={() => clickHandler(articleId, currentBody)}
    >
      Save
    </button>
  );
}
