// app/actions.ts
"use server";
import { Task } from "@/types";
import { neon } from "@neondatabase/serverless";

export async function getTasksFromDB() {
  if (!process.env.NEXT_PUBLIC_DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL);
  const tasks = await sql`SELECT * FROM tasks `;

  return tasks as Task[];
}
