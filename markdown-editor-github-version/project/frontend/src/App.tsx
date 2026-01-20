import "./index.css";
import AppLayout from "./components/features/AppLayout.tsx";
import Article from "./components/features/Article.tsx";
import AddingPage from "./components/features/AddingPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

const queryClient = new QueryClient();
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="" element={<Navigate to="/home" />} />
            <Route path="home" element={<Article />} />
            <Route path="/home/:articleId" element={<Article />} />
            <Route path="adding" element={<AddingPage />} />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
export default App;
