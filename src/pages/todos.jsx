import React from "react";
import { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([
    {
      value: "jawad",
      disabled: true,
    },
    {
      value: "asasd",
      disabled: true,
    },
  ]);
  const [value, setValue] = useState("");

  const addTodo = () => {
    setTodos([...todos, { value, disabled: true }]);
    setValue("");
  };

  const deleteTodo = (v, i) => {
    const oldTodos = [...todos];
    oldTodos.splice(i, 1);
    setTodos(oldTodos);
  };

  const editTodo = (v, i) => {
    todos.splice(i, 1, { ...v, disabled: false });
    setTodos([...todos]);
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addTodo}>Add Todos</button>

      <button onClick={() => setTodos([])}>Delete all</button>

      <br />
      <ul>
        {todos.map((v, i) => (
          <li key={i}>
            <input
              disabled={v.disabled}
              type="text"
              defaultValue={v.value}
              onCanPlay={(e) => (v.value = e.target.value)}
            />

            {v.disabled ? (
              <button onClick={() => editTodo(v, i)}>Edit</button>
            ) : (
              <button
                onClick={() => {
                  v.disabled = true;
                  setTodos([...todos]);
                }}
              >
                Update
              </button>
            )}
            <button onClick={() => deleteTodo(v, i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
