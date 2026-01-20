import { useAtom } from "jotai";
import { sideBarIsHiddenAtom } from "@/atoms/atom.ts";
import DeleteItem from "../ui/icon-buttons/DeleteItem.tsx";
import getAllArticles from "@/services/allArticles.ts";
import Editor from "./Editor.tsx";
import Save from "../ui/Save.tsx";
import { useParams } from "react-router";
export default function Article() {
  const [sideBarIsHidden] = useAtom(sideBarIsHiddenAtom);
  const articleId = Number(useParams().articleId);
  const { data } = getAllArticles();
  const container = `bg-[#0D1117] absolute top-[10vh] bottom-0 right-0 ${
    sideBarIsHidden ? "left-0" : "left-[20vw]"
  } overflow-y-auto transition-all duration-200`;
  const currentPage = data.filter((item) => item.id === articleId)[0];
  const message =
    "flex items-center justify-center h-full text-white text-2xl flex-col";
  return (
    <div id="article-container" className={container}>
      {!articleId ? (
        <div className={message}>
          <p>Please select an article to edit</p>
          <p>Or create a new one</p>
        </div> // Render nothing if no ID is in URL
      ) : currentPage ? (
        // Case: Article ID exists AND article is found
        <>
          <div className="block">
            <Editor v={currentPage.body || ""} />
          </div>
          <div className="flex place-content-between mt-6">
            <Save />
            <DeleteItem />
          </div>
        </>
      ) : (
        // Case: Article ID exists BUT currentPage is undefined
        <div className={message}>
          <p>This page does not exist</p>
          <p>Please check your path</p>
        </div>
      )}
    </div>
  );
}
