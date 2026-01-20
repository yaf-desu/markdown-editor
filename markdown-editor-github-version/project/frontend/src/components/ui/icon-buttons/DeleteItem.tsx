import DeleteIcon from "@mui/icons-material/Delete";
import deleteArticle from "../../../services/deleteArticle";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useAtom } from "jotai";
import { changeAtom } from "@/atoms/atom.ts";
import { sideBarIsHiddenAtom } from "@/atoms/atom.ts";
export default function DeleteItem() {
  const [change, setChange] = useAtom(changeAtom);
  const [, setSideBarIsHidden] = useAtom(sideBarIsHiddenAtom);
  const articleId = Number(useParams().articleId);
  const navigate = useNavigate();
  async function deleteItem(itemId: number) {
    try {
      const res = await deleteArticle(itemId);
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
      // deleteArticle already shows a toast on error; swallow here
    }
  }
  return (
    <div
      className="wrapper inline-block mr-4"
      onClick={() => deleteItem(articleId)}
    >
      <DeleteIcon className="icon" />
    </div>
  );
}
