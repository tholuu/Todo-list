import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.todoItems = ["đi chợ", "đi học", "đi chơi"];
  }
  render() {
    return (
      <div className="App">
        {this.todoItems.map((item, index) => (
          <TodoItem key={index} title={item} />
        ))}
      </div>
    );
  }
}

export default App;
