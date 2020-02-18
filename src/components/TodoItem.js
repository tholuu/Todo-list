import React, { Component } from "react";
import classNames from 'classnames/'
import './TodoItem.css';
class TodoItem extends Component {
  render() {
    const { item } = this.props;
    //dynamic class names use js
    // let className = 'TodoItem';
    // if (item.isComplete) {
    //   className += " TodoItem-complete";
    // }
    return (
      //dynamic class use npm package classnames
      <div className={classNames('TodoItem', { 'TodoItem-complete': this.props.item.isComplete })}>
        <p>
          {this.props.item.title}
        </p>
      </div>
    );
  }
}
export default TodoItem;
