import React from "react";
import logo from "./logo.svg";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <TodoItem title="đi chợ" />
          <TodoItem title="đi học" />
          <TodoItem title="đi chơi" />
          <TodoItem title="CoderX" />
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
