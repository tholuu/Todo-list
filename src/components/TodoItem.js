import React, { Component } from "react";
import classNames from 'classnames/';
import check from '../img/check.svg';
import checkDone from '../img/check-done.svg'
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

    let checkImg = check;

    if (item.isComplete) {
      checkImg = checkDone
    }

    return (
      //dynamic class use npm package classnames
      <div className={classNames('TodoItem', { 'TodoItem-complete': item.isComplete }, { display: item.isDisplay })}>
        <img onClick={onClick} src={checkImg} width={32} height={32} />
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}
export default TodoItem;
