import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./Components/Landingpage/Landingpage";
import TodoList from "./Components/TodoList/TodoList";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/todolist" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
