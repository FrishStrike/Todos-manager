import { ITodo } from "@/types/Todo.interface";
import React from "react";
import TodoItem from "./TodoItem";

type Props = {
  todos: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

const TodoList: React.FC<Props> = ({ todos, removeTodo, toggleTodo }) => {
  return (
    <div className="item-box">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
