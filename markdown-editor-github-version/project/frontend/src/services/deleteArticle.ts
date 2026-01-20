import toast from "react-hot-toast";
const API_URL = `${process.env.VITE_API_BASEURL}/${process.env.VITE_API_VERSION}/${process.env.VITE_API_ENDPOINT}`;

export default async function deleteArticle(id: number) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    toast.error("Failed to delete article");
    return null;
  }
  toast.success("Article deleted successfully");
  return response.json();
}
