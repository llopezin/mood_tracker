import dotenv from "dotenv";
import mysql from "mysql2/promise";

// Load environment variables from .env file
dotenv.config();

// create the connection to database
export const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

// Reusable queries
// TODO - implement ORM
export const queries = {
  getUser: "SELECT * FROM User WHERE user_id = ?",
  getUserByEmail: "SELECT * FROM User WHERE email = ?",
  getMoods: "SELECT * FROM mood_entry WHERE user_id = ?",
  insertUser:
    "INSERT INTO User (user_id, email, password) VALUES (UUID(), ?, ?)",
  insertMood: `INSERT INTO mood_entry (entry_id, user_id, mood) VALUES (UUID(), ?, ?)`,
};

// Reusable executer
export const executeQuery = async (query: string, params: any[]) => {
  const db = await connection;
  const res = await db.execute(query, params);

  return res;
};
