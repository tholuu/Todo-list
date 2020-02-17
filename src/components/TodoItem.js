import React, { Component } from "react";
class TodoItem extends Component {
  render() {
    return (
      <div className="todoitem">
        <p>
          {this.props.title}
          {this.props.data}
        </p>
      </div>
    );
  }
}
export default TodoItem;
