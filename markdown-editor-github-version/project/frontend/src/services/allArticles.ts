import type { article } from "@/types/article.ts";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { changeAtom } from "@/atoms/atom.ts";
const API_URL = `${process.env.VITE_API_BASEURL}/${process.env.VITE_API_VERSION}/${process.env.VITE_API_ENDPOINT}`;

async function fetchArticles(): Promise<article[]> {
  const response = await fetch(`${API_URL}`, {
    method: "GET",
  });
  return await response.json();
}

export default function getAllArticles() {
  const [change] = useAtom(changeAtom);
  const { data = [] } = useQuery<article[]>({
    queryKey: ["articles", change],
    queryFn: fetchArticles,
  });
  return { data };
}
