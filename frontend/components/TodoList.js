import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => {
            return;
            <Todo todo={todo} handleToggle={this.props.handleToggle} />;
          })}
        </ul>
      </div>
    );
  }
}
