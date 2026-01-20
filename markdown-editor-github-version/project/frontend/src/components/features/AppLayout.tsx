import NavBar from "./NavBar.tsx";
import Main from "./Main.tsx";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Main>
        <Outlet />
      </Main>
      <Toaster />
    </div>
  );
}
