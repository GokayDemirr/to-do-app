"use client";
import { AddItem } from "@/components/Todo/AddItem";
import { TaskList } from "@/components/Todo/TaskList";
import { useEffect, useState } from "react";
import { getTasksFromDB } from "./lib/actions/getTasksFromDB";
import { Task } from "@/types";

export default function Home() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasksFromDB();
      setTaskList(tasks);
    };

    fetchTasks();
  }, []);

  return (
    <div className="flex-col flex items-center gap-8">
      <AddItem taskList={taskList} setTaskList={setTaskList} />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}
