import toast from "react-hot-toast";
const API_URL = `${process.env.VITE_API_BASEURL}/${process.env.VITE_API_VERSION}/${process.env.VITE_API_ENDPOINT}`;

export default async function updateArticle(id: number, v: string) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ body: v }),
  });
  if (!response.ok) {
    toast.error("Failed to update article");
    return null;
  }
  toast.success("Article updated successfully");
  const data = await response.json();
  return data;
}
