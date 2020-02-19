import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title: "đi chợ" },
        { title: "đi học" },
        { title: "đi chơi" },
        { title: "đi đú", }
      ]
    }

    this.onItemClick = this.onItemClick.bind(this)
  }

  onItemClick(item) {
    return (event) => {
      console.log('item')
      const isComplete = item.isComplete
      const { todoItems } = this.state

      const index = todoItems.indexOf(item)
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    };
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
    const { todoItems } = this.state
    // console.log(this.state.item)

    return (
      < div className="App" >
        {
          todoItems.length > 0 && todoItems.map((item, index) =>
            <TodoItem
              onClick={this.onItemClick(item)}
              key={index}
              item={item}
            />)
        }

        {
          todoItems.length === 0 && 'nothing here'
        }
      </div >
    )
  }
}

export default App;
