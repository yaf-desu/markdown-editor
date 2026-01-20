import Sidebar from "./Sidebar.tsx";
export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Sidebar />
      {children}
    </main>
  );
}
