import React, { useState } from "react";

const PracticeTodoapp = () => {
  const [todos, setTodos] = useState([
    {
      value: "jawad",
      disabled: true,
    },
    {
      value: "zain",
      disabled: true,
    },
  ]);

  const [value, setValue] = useState("");

  const addTodos = () => {
    setTodos([...todos, { value, disabled: true }]);
    setValue("");
  };

  const editTodo = (v, i) => {
    todos.splice(i, 1, { ...v, disabled: false });
    setTodos([...todos]);
  };

  const updateTodo = (v, i) => {
    v.disabled = true;
    setTodos([...todos]);
  };


  const deleteTodo = (v, i) => {
    const oldTodos = [...todos];
    oldTodos.splice(i, 1);
    console.log(i,"<<< i")
    setTodos([...oldTodos]);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => addTodos()}>Add Todos</button>
      <button onClick={() => setTodos([])}>Delete all</button>
      <br />

      <ul>
        {todos.map((v, i) => (
          <li key={i}>
            <input
              type="text"
              defaultValue={v.value}
              disabled={v.disabled}
              onChange={(e) => (v.value = e.target.value)}
            />
            {v.disabled ? (
              <button onClick={() => editTodo(v, i)}>Edit</button>
            ) : (
              <button onClick={() => updateTodo(v, i)}>Update</button>
            )}
            <button onClick={() => deleteTodo(v, i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PracticeTodoapp;
