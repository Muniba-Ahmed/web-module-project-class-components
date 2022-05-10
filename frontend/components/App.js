// import React from "react";
// import ReactDOM from "react-dom";
// import Todo from "./Todo";
// import TodoList from "./TodoList";
// import Form from "./Form";

// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: [
//         {
//           name: "Walk the dog",
//           id: 1528817077286,
//           completed: false,
//         },
//         {
//           name: "Take out the trash",
//           id: 1528817084358,
//           completed: false,
//         },
//         {
//           name: "Workout",
//           id: 1528817084359,
//           completed: false,
//         },
//         {
//           name: "Dance break",
//           id: 1528817084353,
//           completed: true,
//         },
//       ],
//     };
//   }

//   handleToggle = (clickedId) => {
//     //1. setState
//     //2.change todos
//     //3.find the todo that we clicked on
//     //4. flip the value of completed for that todo
//     //5. keep all other todos the same

//     this.setState({
//       ...this.state,
//       todos: this.state.todos.map((todo) => {
//         if (clickedId === todo.id) {
//           return {
//             ...todo,
//             completed: !todo.completed,
//           };
//         }
//         return todo;
//       }),
//     });
//   };

//   handleAdd = (name) => {
//     //1.setState
//     //2. change todos
//     //3. make a copy of todos
//     //4. Add a newTodo to the end of our todo list(push method?)

//     const newTodo = {
//       name: name,
//       id: Date.now(),
//       completed: false,
//     };

//     this.setState({
//       ...this.state,
//       todos: [...this.state.todos, newTodo],
//     });
//   };

//   handleClear = (e) => {
//     //1. setState
//     //2. loop thru all todos, using filter
//     //3.remove all todos that have checkmark === true
//     //4.save filtered todos to state.

//     this.setState({
//       ...this.state,
//       todos: this.state.todos.filter((todo) => {
//         return !todo.completed;
//       }),
//     });
//   };

//   render() {
//     const { todos } = this.state;
//     // console.log(todos);
//     return (
//       <div>
//         <h1>Munibas Todo's</h1>
//         <TodoList
//           todos={todos}
//           key={todos.id}
//           handleToggle={this.handleToggle}
//         />
//         <Form handleAdd={this.handleAdd} />
//         <button onClick={this.handleClear}> Clear </button>
//       </div>
//     );
//   }
// }

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
          name: "Morning Walk",
          id: 1528817077286,
          completed: false,
        },
        {
          name: "Daily Project",
          id: 1528817084357,
          completed: false,
        },
        {
          name: "Evening Walk",
          id: 1528817077288,
          completed: false,
        },
        {
          name: "In Bed by 10pm",
          id: 1528817084359,
          completed: false,
        },
      ],
    };
  }
  //Add button functionality
  //1. setState
  //2. change todos
  //3. make a copy todos
  //4. Add a new todo to the end of our todoList
  addToDo = (name) => {
    const newToDo = {
      name: name,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newToDo],
    });
  };

  //Clear button functionality
  //1. setState
  //2. loop through all todos
  //3. remove all todos that have completed === false /!todo.completed
  //4. save filtered todos to state.
  //5. keep all other todos the same.
  handleClear = (e) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => {
        return !todo.completed;
      }),
    });
  };

  //toggle functionality
  //1. setState
  //2. change todos
  //3. find the todo that we clicked on
  //4. flip the value of completed for that todo
  //5. keep all other todos the same
  toggleToDo = (todoId) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  render() {
    const { todos } = this.state;
    console.log(todos);
    return (
      <div>
        <h1> To Do List </h1>

        <TodoList key={todos.id} todos={todos} toggleToDo={this.toggleToDo} />
        <Form addToDo={this.addToDo} />

        <button onClick={this.handleClear}> Clear Tasks </button>
      </div>
    );
  }
}
