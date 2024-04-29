import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([
        ...todos,
        { id: todos.length + 1, isCompleted: false, inputValue },
      ]);
      setInputValue("");
    }
  };

  const completeTodo = (todo) => {
    setTodos(todos.filter((t) => t.isCompleted == false));
    setCompletedTodos([
      ...completedTodos,
      { id: completedTodos.length + 1, name: todo.todo.inputValue },
    ]);
  };

  const todoElement = (todo) => {
    return (
      <li key={todo.id}>
        {todo.inputValue}
        <input
          className="checkbox"
          type="checkbox"
          onClick={() => (todo.isCompleted = true)}
          onChange={() => completeTodo({ todo })}
        />
        <button
          className="check-button"
          key={todo.id}
          onClick={() => {
            setTodos(todos.filter((t) => t.id !== todo.id));
          }}
        >
          Delete
        </button>
      </li>
    );
  };

  return (
    <>
      <div className="todoList">
        <h1 className="h1-todo">TodoList</h1>
        <input
          type="text"
          placeholder="Please write a task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button className="add-button" onClick={addTodo}>
          Add to list
        </button>
        <ul className="ul-todo">{todos.map((todo) => todoElement(todo))}</ul>
      </div>
      <div className="completedTodos">
        <h1>Completed Todos</h1>
        <ul className="ul-todo">
          {completedTodos.map((todo) => (
            <li key={todo.id}>{todo.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
