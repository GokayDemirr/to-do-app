"use client";
import { AddItem } from "@/components/Todo/AddItem";
import { TaskList } from "@/components/Todo/TaskList";
import { Task } from "@/types";
import { useState } from "react";

export default function Home() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  const remainingTasks = taskList.filter((t) => !t.completed).length;

  return (
    <div className="flex-col flex items-center gap-8">
      <AddItem taskList={taskList} setTaskList={setTaskList} />
      {remainingTasks
        ? `You have ${remainingTasks} tasks to do`
        : "You have nothing to do 😊"}
      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}
