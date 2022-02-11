export interface ITempData {
  data: {
    name: string;
    color: string;
    todos: ITodosData[];
  };
}

export interface ITodosData {
  title: string;
  completed: boolean;
}
