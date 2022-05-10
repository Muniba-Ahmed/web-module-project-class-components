import React from "react";

export default class Todo extends React.Component {
  handleClick = () => {
    // console.log("toggle todo", this.props.todo.id);
    this.props.handleToggle(this.props.todo.id);
  };

  render() {
    return (
      <div>
        <li onClick={this.handleClick}>
          {this.props.todo.name} {this.props.todo.completed ? "✔️" : ""}
        </li>
      </div>
    );
  }
}
