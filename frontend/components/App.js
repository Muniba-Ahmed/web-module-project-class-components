import React from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";
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
          name: "Dance break",
          id: 1528817084353,
          completed: true,
        },
      ],
    };
  }

  handleAdd = (name) => {
    //1.setState
    //2. change todos
    //3. make a copy of todos
    //4. Add a newTodo to the end of our todo list(push method?)

    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo],
    });
  };

  handleClear = () => {
    //1. setState
    //2. loop thru all todos, using filter
    //3.remove all todos that have checkmark === true
    //4.save filtered todos to state.

    this.setState = {
      ...this.state,
      todos: this.state.todos.filter((todo) => {
        return !todo.completed;
      }),
    };
  };

  render() {
    const { todos } = this.state;
    // console.log(todos);
    return (
      <div>
        <h1>Munibas Todo's</h1>
        <TodoList todos={todos} key={todos.id} />
        <Form handleAdd={this.handleAdd} />
        <button onClick={this.handleClear}> Clear </button>
      </div>
    );
  }
}
