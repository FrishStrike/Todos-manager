"use client";
import React, { useEffect } from "react";
import FormTodo from "./FormTodo";
import TodoList from "./TodoList";
import { useState } from "react";
import { ITodo } from "@/types/Todo.interface";
import { getAllTodos, getTodosWithLimit } from "@/services/Todos.service";
import Pagination from "./Pagination";
import { useFetching } from "@/hooks/useFetching";
import SidebarLoader from "./SideBarLoader";

const Todos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [page, setPage] = useState(1);

  const [todosFetchind, todosLoading, todosError] = useFetching(() =>
    fetchTodosWithLimit(10, page)
  );

  const removeTodo = (id: number) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return { ...todo, completed: !todo.completed };
      })
    );
  };

  const fetchTodos = async () => {
    const data = await getAllTodos();
    setTodos([...todos, ...data]);
  };

  const fetchTodosWithLimit = async (limit: number, page: number) => {
    const data = await getTodosWithLimit(limit, page);
    setTodos([...data]);
  };

  useEffect(() => {
    todosFetchind();
  }, [page]);

  return (
    <div className="block">
      <FormTodo todos={todos} setTodos={setTodos} />
      {todosError}
      {todosLoading ? <SidebarLoader /> : ""}
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Todos;
