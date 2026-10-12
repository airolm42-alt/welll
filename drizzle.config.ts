import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ quiet: true });
if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL must be set before running database commands");

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dbCredentials: { url: process.env.DATABASE_URL },
});
