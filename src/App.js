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
        { title: "đi đú", isComplete: false }
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
            title: value, isComplete: false
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
      currentFilter: 'all'
    })
  }

  onClickActive() {
    console.log(this.state.currentFilter)
    this.setState({
      currentFilter: 'active'
    })
  }

  onClickComplete() {
    console.log(this.state.currentFilter)
    this.setState({
      currentFilter: 'complete'
    })
  }

  onClick() {
    let { isComoleteAll, todoItems, isComplete } = this.state
    let newTodoItem = []
    todoItems.filter((item) => {
      if (todoItems.isComplete === false) {
        return {
          item
        }
      }
    })

    this.setState({
      isComoleteAll: !isComoleteAll,
      todoItems: [
        //  
      ]
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
    const { todoItems, valueInput, isComoleteAll, currentFilter } = this.state
    if (currentFilter === 'all') {
      filterItem = todoItems
    }

    if (currentFilter === 'active') {
      todoItems.filter(function (item) {
        if (item.isComplete === false) {
          return filterItem.push(item)
        }
      })
    }

    if (currentFilter === 'complete') {
      todoItems.filter(function (item) {
        if (item.isComplete === true) {
          return filterItem.push(item)
        }
      })
    }

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
          filterItem.length > 0 && filterItem.map((item, index) =>
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
            <button onClick={this.onClickActive}>Active</button>
            <button onClick={this.onClickComplete}>Complete</button>
          </div>
        </div>
      </div >
    )
  }
}

export default App;
