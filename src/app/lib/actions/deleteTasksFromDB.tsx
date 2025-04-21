import { sql } from "../db";

export const deleteTasksFromDB = async (id: number) => {
  await sql`DELETE FROM tasks WHERE id = ${id} `;
};
