import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import correct from '../src/img/correct.svg';
import classNames from 'classnames';
import "./App.css";


let filterItem = [];

class App extends Component {
  constructor() {
    super();
    this.state = {
      valueInput: '',
      leftItem: 'left item',
      currentFilter: 'all',
      isComoleteAll: false,
      todoItems: [
        { title: "đi đú", isComplete: false, isDisplay: false }
      ]
    }

    this.onItemClick = this.onItemClick.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onClickAll = this.onClickAll.bind(this)
    this.onClickActive = this.onClickActive.bind(this)
    this.onClickComplete = this.onClickComplete.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  onItemClick(item) {
    return (event) => {
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

  onKeyUp(event) {

    let keyCode = event.keyCode
    let value = event.target.value;
    let { todoItems } = this.state

    if (keyCode === 13) {
      if (!value) {
        return;
      }

      value = value.trim() // xóa dấu cách ở đầu và cuối

      if (!value) {
        return;
      }

      this.setState({
        valueInput: '',
        todoItems: [
          {
            title: value, isComplete: false, isDisplay: false
          },
          ...todoItems
        ]
      })
    }
  }

  onChange(event) {
    this.setState({
      valueInput: event.target.value
    })
  }

  onClickAll() {
    console.log(this.state.currentFilter)
    this.setState({
      currentFilter: 'all',
      isDisplay: false
    })
  }

  onClickActive() {
    let { todoItems } = this.state
    todoItems.map(function (item, index) {
      if (item.isComplete === true) {
        this.setState({
          currentFilter: 'active',
          todoItems: [
            ...todoItems.slice(0, index),
            {
              ...item, isDisplay: true
            },
            ...todoItems.slice(index + 1)
          ]
        })
      }
    })
    console.log(todoItems)
  }

  onClickComplete() {
    let { todoItems } = this.state
    let filterItem = [];
    todoItems.filter((item, index) => {
      if (item.isComplete === false) {
        return filterItem.push(item)
      }
    })

    for (let i = 0; i < filterItem.length; i++) {
      let index = todoItems.indexOf(filterItem[i])
      // this.setState({
      //   isComoleteAll: 'complete',
      //   todoItems: [
      //     ...todoItems.slice(0, index),
      //     {
      //       ...filterItem[index],
      //       isDisplay: true,
      //     },
      //     ...todoItems.slice(index)
      //   ]
      // })
    }



    console.log(filterItem)
  }

  onClick() {
    let { isComoleteAll, todoItems, isComplete } = this.state
    let newTodoItem = []
    todoItems.map((item, index) => {
      // this.setState({
      //   isComoleteAll: !isComoleteAll,
      //   todoItems: [
      //     ...todoItems.slice(0, index),
      //     {
      //       ...item, isComplete: true
      //     },
      //     ...todoItems.slice(index + 1)
      //   ]
      // })
    })

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
    const { todoItems, valueInput, isComoleteAll, currentFilter, isDisplay } = this.state

    let numbers = todoItems.filter(function (item) {
      if (item.isComplete === false) {
        return item
      }
    })

    return (
      < div className="App" >
        <div className="Hearder" >
          <img onClick={this.onClick} className={classNames("Check-all-complete", { 'all-click': isComoleteAll })} src={correct} width={20} />
          <input
            type="text"
            placeholder=" item"
            onKeyUp={this.onKeyUp}
            value={valueInput}
            onChange={this.onChange}
          />
        </div>
        {
          todoItems.length > 0 && todoItems.map((item, index) =>
            <TodoItem
              onClick={this.onItemClick(item)}
              key={index}
              item={item}
            />)
        }
        <div className={classNames('currentFilter', { filerHidden: todoItems.length === 0 })} >
          <span>{numbers.length} left item</span>
          <div className="filterButton">
            <button onClick={this.onClickAll}>All</button>
            <button onClick={() => this.onClickActive}>Active</button>
            <button onClick={this.onClickComplete}>Complete</button>
          </div>
        </div>
      </div >
    )
  }
}

export default App;
