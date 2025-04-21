import { sql } from "../db";

export const statusUpdateTask = async (id: number) => {
  const task = await sql`SELECT completed FROM tasks WHERE id = ${id}`;

  const newStatus = !task[0].completed;

  await sql`UPDATE tasks SET completed = ${newStatus} WHERE id = ${id}`;
};
