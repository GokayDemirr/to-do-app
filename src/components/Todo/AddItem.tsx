"use client";
import { saveTaskToDB } from "@/app/lib/actions/saveTaskToDB";
import { Task } from "@/types";
import { Plus } from "lucide-react";
import { useState } from "react";

interface AddItemProps {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const AddItem = ({ taskList, setTaskList }: AddItemProps) => {
  const [task, setTask] = useState<string>("");

  const handleAddTask = async (title: string) => {
    // Task'ı veritabanına kaydediyoruz
    const savedTask = await saveTaskToDB(title); // Burada ID'yi alıyoruz

    // Yeni task'ı listeye ekliyoruz
    setTaskList([...taskList, savedTask]);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTask(task);
      }}
    >
      <div className="flex border-1 border-gray-500 rounded-md">
        <input
          type="text"
          placeholder="Enter a new task..."
          required
          className="px-2 py-1 w-full"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        ></input>
        <button
          type="submit"
          className="bg-gray-300 rounded-r-md p-1 hover:bg-gray-400  cursor-pointer"
        >
          <Plus />
        </button>
      </div>
    </form>
  );
};
