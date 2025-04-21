import { deleteTasksFromDB } from "@/app/lib/actions/deleteTasksFromDB";
import { getTasksFromDB } from "@/app/lib/actions/getTasksFromDB";
import { statusUpdateTask } from "@/app/lib/actions/statusUpdateTask";
import { Task } from "@/types";
import { Check, Trash2 } from "lucide-react";

interface TaskItemProps {
  task: Task;
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TaskItem = ({ task, setTaskList }: TaskItemProps) => {
  const fetchTasks = async () => {
    const tasks = await getTasksFromDB();
    setTaskList(tasks);
  };

  const toggleTaskStatus = (id: number) => {
    statusUpdateTask(id);
    fetchTasks();
  };

  const handleDeleteTask = (id: number) => {
    deleteTasksFromDB(id);
    fetchTasks();
  };

  return (
    <li className="flex justify-between items-start max-w-3xl w-full px-4 py-2 border-b">
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
          className={`w-full break-words max-w-xl ${
            task.completed && "line-through"
          }`}
        >
          {task.title}
        </span>
      </div>

      <button
        onClick={() => handleDeleteTask(task.id)}
        className="ml-4 mt-1 cursor-pointer hover:scale-110 transition-all duration-150"
      >
        <Trash2 width={24} />
      </button>
    </li>
  );
};
