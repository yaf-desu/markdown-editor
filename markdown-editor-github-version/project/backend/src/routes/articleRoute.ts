import express from "express";
import {
  deleteArticle,
  getArticleById,
  getArticles,
  updateArticle,
  addArticle,
} from "../controllers/articleControllers.ts";

const articleRouter = express.Router();
articleRouter.route("/articles").get(getArticles).post(addArticle);
articleRouter
  .route("/articles/:articleId")
  .get(getArticleById)
  .delete(deleteArticle)
  .patch(updateArticle);

export default articleRouter;
