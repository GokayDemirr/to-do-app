import { Task } from "@/types";
import { TaskItem } from "./TaskItem";

interface TaskListProps {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TaskList = ({ taskList, setTaskList }: TaskListProps) => {
  return taskList.map((task: Task) => (
    <TaskItem task={task} key={task.id} setTaskList={setTaskList} />
  ));
};
