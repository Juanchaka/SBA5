import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const db = new Low(new JSONFile("db.json"), {});

async function initializeDb() {
  try {
    await db.read();

    if (!db.data) {
      db.data = { posts: [], users: [], comments: [] };
      await db.write();
    }
  } catch (err) {
    console.error("Error initializing database:", err);
    throw new Error("lowdb: missing default data");
  }
}

initializeDb();

export default db;
