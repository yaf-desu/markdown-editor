import "dotenv/config";
import { db } from "../index.ts";
import { faker } from "@faker-js/faker";
import articleTable from "../db/schema.ts";
// inserting 10 random articles into the database, command: bun run seed
async function insertArticles(rowNumber: number = 10) {
  for (let i = 0; i < rowNumber; i++) {
    await db.insert(articleTable).values({
      id: Date.now() + i,
      body: faker.lorem.text(),
    });
  }
}
await insertArticles();
const articles = db.select().from(articleTable);
console.log("Getting all articles from database: ", articles);
