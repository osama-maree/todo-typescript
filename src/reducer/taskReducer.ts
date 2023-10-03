import { TaskAction, todo, TaskActionType } from "../feature/Types";

export default function tasksReducer(
  tasks: todo[],
  action: TaskAction
): todo[] {
  switch (action.type) {
    case TaskActionType.ADD: {
      return [
        ...tasks,
        {
          completed: action.payload.completed,
          content: action.payload.content,
        },
      ];
    }
    case TaskActionType.DELETE: {
      return tasks.filter((task: todo, i: number) => action.index !== i);
    }
    case TaskActionType.COMPLETED: {
      return tasks.map((task: todo, i: number) =>
        i === action.index ? { ...task, completed: !task.completed } : task
      );
    }
    default: {
      throw Error("Unknown action: ");
    }
  }
}
