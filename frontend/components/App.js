import React from "react";

import TodoList from "./TodoList";
import Form from "./Form";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: "Walk the dog",
          id: 1528817077286,
          completed: false,
        },
        {
          name: "Take out the trash",
          id: 1528817084358,
          completed: false,
        },
        {
          name: "Workout",
          id: 1528817084359,
          completed: false,
        },
        {
          name: "Workoutz",
          id: 1528817084353,
          completed: false,
        },
      ],
    };
  }

  render() {
    const { todos } = this.state;
    console.log(todos);
    return (
      <div>
        <h1>Muniba's Todo's</h1>
        <TodoList todos={todos} />
        <Form />
        <button> Clear </button>
      </div>
    );
  }
}
