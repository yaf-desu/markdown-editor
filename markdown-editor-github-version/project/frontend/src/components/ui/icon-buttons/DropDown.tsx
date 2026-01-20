import MenuIcon from "@mui/icons-material/Menu";
import { sideBarIsHiddenAtom } from "@/atoms/atom.ts";
import { useAtom } from "jotai";
export default function DropDown() {
  const [sideBarIsHidden, setsideBarIsHidden] = useAtom(sideBarIsHiddenAtom);
  return (
    <div className="wrapper">
      <MenuIcon
        className="icon"
        fontSize="large"
        onClick={() => setsideBarIsHidden(() => !sideBarIsHidden)}
      />
    </div>
  );
}
