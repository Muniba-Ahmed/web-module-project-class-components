import React from 'react';
import Todo from './Todo';
import TodoList from './TodoList';

export default class App extends React.Component {
    constructor() {
      super();
      this.state={
        todos: [
          {
            name: 'Walk the dog',
            id: 1528817077286, 
            completed: false
          },
          {
            name: 'Take out the trash',
            id: 1528817084358,
            completed: false
          },
          {
            name: 'Workout',
            id: 1528817084359,
            completed: false
          }
        ]
      }
    }




  render() {
    const { todos } = this.state
    console.log(todos)
    return (
      <div>
        <h1>Muniba's Todo's</h1>
          <TodoList todos={todos}/>
        <form>
          <input/>
          <button> Add </button>
        </form>
         <button> Clear </button>
      </div>
    
    )
  }
}
