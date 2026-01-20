import articleTable from "../db/schema.ts";
import { db } from "../index.ts";
import { desc, eq } from "drizzle-orm";
export async function getAllArticles() {
  try {
    const allArticles = await db
      .select()
      .from(articleTable)
      .orderBy(desc(articleTable.id));
    console.log("Successfully fetched articles");
    return allArticles;
  } catch (error) {
    console.error("Error fetching articles: ", error);
  }
}
export async function getArticleById(id: number) {
  try {
    const specifiedArticle = await db
      .select()
      .from(articleTable)
      .where(eq(articleTable.id, id));
    console.log("Successfully fetched article with id: ", id);
    return specifiedArticle;
  } catch (error) {
    console.error("Error fetching article: ", error);
  }
}
export async function deleteArticle(id: number) {
  try {
    const deletedItem = await db
      .delete(articleTable)
      .where(eq(articleTable.id, id));
    console.log("Successfully deleted");
    return deletedItem;
  } catch (error) {
    console.error("Deletion failed: ", error);
  }
}
export async function updateArticle(id: number, body: string) {
  try {
    const updatedItem = await db
      .update(articleTable)
      .set({ body, id: Date.now() })
      .where(eq(articleTable.id, id))
      .returning();
    console.log("Successfully updated");
    return updatedItem;
  } catch (error) {
    console.error("Update failed: ", error);
  }
}
export async function addArticle(body: string) {
  try {
    const addedItem = await db
      .insert(articleTable)
      .values({ id: Date.now(), body });
    console.log("Successfully added");
    return addedItem;
  } catch (error) {
    console.error("Add failed: ", error);
  }
}
