import { ITodo } from "@/types/Todo.interface";
import React from "react";

type Props = {
  todo: ITodo;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

const TodoItem: React.FC<Props> = ({ todo, removeTodo, toggleTodo }) => {
  return (
    <div className="item">
      <input type="checkbox" onClick={() => toggleTodo(todo.id)} />
      <h2 className={todo.completed ? "active" : ""}>{todo.title}</h2>
      <button
        onClick={(e) => {
          e.preventDefault();
          removeTodo(todo.id);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;
