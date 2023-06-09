"use client";
import { ITodo } from "@/types/Todo.interface";
import React, { useState } from "react";

type Props = {
  todos: ITodo[];
  setTodos: (param: ITodo[]) => void;
};

const FormTodo: React.FC<Props> = ({ todos, setTodos }) => {
  const [value, setValue] = useState("");

  const addTodo: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setTodos([...todos, { title: value, completed: false, id: Date.now() }]);
  };

  return (
    <form action="#">
      <input
        type="text"
        placeholder="todo"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>
    </form>
  );
};

export default FormTodo;
