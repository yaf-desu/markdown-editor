import SearchBar from "../ui/SearchBar.tsx";
import DropDown from "../ui/icon-buttons/DropDown.tsx";
import Home from "../ui/icon-buttons/Home.tsx";
import NewArticle from "../ui/icon-buttons/NewArticle.tsx";
export default function NavBar() {
  const container =
    "w-full h-[10vh] bg-gray-800 flex items-center absolute top-0 flex gap-[2rem] px-4 border-b border-solid";
  return (
    <header className={container} id="top">
      {/* <nav> */}
      <DropDown />
      <Home />
      <div>
        <SearchBar />
      </div>
      <NewArticle />
      {/* </nav> */}
    </header>
  );
}
// TODO: i dont know why if i put this semantic nav element, my navbar wrapped so strangely
