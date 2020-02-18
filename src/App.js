import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: "đi chợ", isComplete: true },
      { title: "đi học" },
      { title: "đi chơi" }
    ];
  }
  render() {
    return (
      <div className="App">
        {
          this.todoItems.map((item, index) =>
            <TodoItem key={index} item={item} />)
        }
      </div>
    );
  }
}

export default App;
