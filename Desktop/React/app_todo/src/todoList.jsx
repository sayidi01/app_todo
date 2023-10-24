import { useState } from "react";
import React from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "Workout",
    },
    { id: 2, content: "Drink water" },
    {
      id: 3,
      content: "Read Novels",
    },
  ]);
  const [todoName, setTodoName] = useState(""); // To keep track of input changes

  const handleClick = () => {
    // Push the new todo to the Todos state
    setTodos((prev) => {
      // Return
      return [...prev, { id: prev.length + 1, content: todoName }];
    });
    setTodoName(""); // Reset my input value
  }; // To handle button click and to push a new Todo to the Todos state

  const handleDltBtn = (todoId) => {
    //
    // console.log(todoId)
    setTodos((prev) => {
        return prev.filter((todo) => {
            return todo.id !== todoId;
        });
    });
  };

  // Render todos in the component as JSX
  console.log("I am re-rendering");

  return (
    <>
      <ul className="d-flex flex-column gap-2">
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <span>{todo.content}</span>
              <button
                onClick={() => handleDltBtn(todo.id)}
                className="btn btn-danger btn-small"
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>

      <input
        value={todoName}
        onChange={(e) => {
          // Capture the new input entered
          setTodoName(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleClick();
        }}
      />
      <button className="btn btn-primary" onClick={handleClick}>
        Add
      </button>
    </>
  );
}
