import React, { Component } from "react";
import classNames from 'classnames/'
import './TodoItem.css';
class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { item, onClick } = this.props;
    //dynamic class names use js
    // let className = 'TodoItem';
    // if (item.isComplete) {
    //   className += " TodoItem-complete";
    // }

    return (
      //dynamic class use npm package classnames
      <div onClick={onClick} className={classNames('TodoItem', { 'TodoItem-complete': item.isComplete === true })}>
        <p>
          {this.props.item.title}
        </p>
      </div>
    );
  }
}
export default TodoItem;
