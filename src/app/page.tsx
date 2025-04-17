"use client";
import { AddItem } from "@/components/Todo/AddItem";
import { TaskList } from "@/components/Todo/TaskList";
import { Task } from "@/types";
import { useState } from "react";

export default function Home() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  return (
    <div className="flex-col flex items-center gap-8">
      <AddItem taskList={taskList} setTaskList={setTaskList} />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}
