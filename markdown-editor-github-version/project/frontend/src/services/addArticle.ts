import toast from "react-hot-toast";
const API_URL = `${process.env.VITE_API_BASEURL}/${process.env.VITE_API_VERSION}/${process.env.VITE_API_ENDPOINT}`;
// const API_URL = "http://localhost:4000/v1/articles";
export async function addArticle(body: string) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ body }),
  });
  if (!response.ok) {
    toast.error("Failed to add article");
    return null;
  }
  toast.success("Article added successfully");
  return response.json();
}
