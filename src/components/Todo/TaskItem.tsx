import { Task } from "@/types";
import { Check, Trash2 } from "lucide-react";

interface TaskItemProps {
  task: Task;
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TaskItem = ({ task, taskList, setTaskList }: TaskItemProps) => {
  const handleDeleteTask = (id: number) => {
    const updatedList = taskList.filter((t) => t.id !== id);
    setTaskList(updatedList);
  };

  const toggleTaskStatus = (id: number) => {
    const updatedList = taskList.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );

    setTaskList(updatedList);
  };

  return (
    <li className="flex justify-between items-start max-w-2xl w-full px-4 py-2 border-b">
      <div className="flex gap-4 items-start w-full">
        <button
          onClick={() => toggleTaskStatus(task.id)}
          className={`border-2 rounded-md p-0.5 cursor-pointer hover:bg-green-400 transition-all duration-150 ${
            task.completed ? "bg-green-600" : ""
          }`}
        >
          <Check width={16} height={16} />
        </button>

        <span
          className={`w-full break-words max-w-md ${
            task.completed && "line-through"
          }`}
        >
          {task.title}
        </span>
      </div>

      <button
        className="ml-4 mt-1 cursor-pointer hover:scale-110 transition-all duration-150"
        onClick={() => handleDeleteTask(task.id)}
      >
        <Trash2 width={24} />
      </button>
    </li>
  );
};
