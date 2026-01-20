import express from "express";
import cors from "cors";
import articleRouter from "./routes/articleRoute.ts";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/v1", articleRouter);
export default app;
