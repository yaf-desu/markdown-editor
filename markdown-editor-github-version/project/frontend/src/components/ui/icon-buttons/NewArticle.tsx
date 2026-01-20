import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router";
import { useAtom } from "jotai";
import { currentBodyAtom } from "@/atoms/atom.ts";
import { sideBarIsHiddenAtom } from "@/atoms/atom.ts";
export default function NewArticle() {
  const navigate = useNavigate();
  const [_currentBody, setCurrentBody] = useAtom(currentBodyAtom);
  const [, setSideBarIsHidden] = useAtom(sideBarIsHiddenAtom);
  function newArticle() {
    setCurrentBody("");
    navigate("/adding");
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 768px)").matches
    ) {
      setSideBarIsHidden(true);
    }
  }
  const btn = `wrapper`;
  return (
    <div className={btn} onClick={newArticle}>
      <AddCircleIcon className="icon" />
    </div>
  );
}
