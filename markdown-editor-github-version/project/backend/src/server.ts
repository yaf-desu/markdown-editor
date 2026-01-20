import app from "./app.ts";

const port = Number(process.env.PORT || 4000);
const host = process.env.DB_HOST || "localhost";
app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
