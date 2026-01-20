import {
  getAllArticles,
  deleteArticle as deleteArticleApi,
  getArticleById as getArticleByIdApi,
  updateArticle as updateArticleApi,
  addArticle as addArticleApi,
} from "../services/articleService.ts";
import type { Request, Response } from "express";

export async function getArticles(_req: Request, res: Response) {
  const articles = await getAllArticles();
  return res.status(200).json(articles);
}
// This controller(getArticleById) is actually not used in the frontend but provided for completeness
export async function getArticleById(
  req: Request<{ articleId: string }>,
  res: Response
) {
  const id = Number(req.params.articleId);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "Invalid article id" });
  }

  const specifiedArticle = await getArticleByIdApi(id);
  if (
    !specifiedArticle ||
    (Array.isArray(specifiedArticle) && specifiedArticle.length === 0)
  ) {
    return res.status(404).json({ error: "Article not found" });
  }

  // If the service returns an array, return the first item; otherwise return the object itself
  const payload = Array.isArray(specifiedArticle)
    ? specifiedArticle[0]
    : specifiedArticle;
  return res.status(200).json(payload);
}

export async function deleteArticle(
  req: Request<{ articleId: string }>,
  res: Response
) {
  const id = Number(req.params.articleId);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "Invalid article id" });
  }
  await deleteArticleApi(id);
  return res.status(200).json({ message: "Article deleted successfully" });
}
export async function updateArticle(
  req: Request<{ articleId: string }, any, { body: string }>,
  res: Response
) {
  const id = Number(req.params.articleId);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "Invalid article id" });
  }
  const { body } = req.body;
  if (/^\s*$/.test(body)) {
    return res.status(400).json({ error: "Empty input save is not allowed" });
  }
  const updatedArticle = await updateArticleApi(id, body);
  return res.status(200).json(updatedArticle);
}
export async function addArticle(
  req: Request<any, any, { body: string }>,
  res: Response
) {
  // Regular expression same as trim()
  if (/^\s*$/.test(req.body.body)) {
    return res.status(400).json({ error: "Empty input save is not allowed" });
  }
  const addedArticle = await addArticleApi(req.body.body);
  return res.status(201).json(addedArticle);
}
