import { ITodo } from "@/types/Todo.interface";
import axios from "axios";

export const getAllTodos = async () => {
  const response = await axios.get<ITodo[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return response.data;
};

export const getTodosWithLimit = async (limit: number, page: number) => {
  const response = await axios.get<ITodo[]>(
    `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
  );

  return response.data;
};
