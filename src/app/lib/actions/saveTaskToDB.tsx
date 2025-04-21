import { Task } from "@/types";
import { sql } from "../db";

export const saveTaskToDB = async (title: string) => {
  const result = await sql`
    INSERT INTO tasks (title)
    VALUES (${title})
    RETURNING *;
  `;

  // result[0] döndürülüyor çünkü "RETURNING *" ile bir satır döndüreceğiz
  return result[0] as Task; // Burada dönülen değeri Task olarak türlendiriyoruz.
};
