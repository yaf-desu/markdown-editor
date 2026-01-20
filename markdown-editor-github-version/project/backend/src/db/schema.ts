import { pgTable, bigint, text } from "drizzle-orm/pg-core";

export default pgTable("articles", {
  id: bigint({ mode: "number" }).primaryKey(),
  body: text().notNull(),
});
