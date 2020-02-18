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
    //conditional rendering use if else
    // if (this.todoItems.length > 0) {
    //   return (
    //     <div className="App">
    //       {
    //         this.todoItems.map((item, index) =>
    //           <TodoItem key={index} item={item} />)
    //       }
    //     </div>
    //   );
    // }
    // else {
    //   return (
    //     <div className="App">'nothing here'</div>
    //   )
    // }

    //conditional redering use &&
    return (
      <div className="App">
        {
          this.todoItems.length > 0 && this.todoItems.map((item, index) =>
            <TodoItem key={index} item={item} />)
        }

        {
          this.todoItems.length === 0 && 'nothing here'
        }
      </div>
    )

  }
}


export default App;
