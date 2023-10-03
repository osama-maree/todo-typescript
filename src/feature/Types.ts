export interface todo {
  completed: Boolean;
  content: String;
}

export enum TaskActionType {
  ADD = "ADD",
  DELETE = "DELETE",
  COMPLETED = "COMPLETED",
}

// TaskAction without index
export interface TaskActionWithoutIndex {
  type: TaskActionType.ADD;
  payload: todo;
}

// TaskAction with index
export interface TaskActionWithIndex {
  type: TaskActionType.DELETE | TaskActionType.COMPLETED;
  index: number;
}

// Create a union type that represents both types of TaskAction
export type TaskAction = TaskActionWithoutIndex | TaskActionWithIndex;
export interface props {
  todo: {
    content: String;
    completed: Boolean;
  };
  index: number;
  handleCompleted: (id: number) => void;
  handleDelete: (id: number) => void;
}
