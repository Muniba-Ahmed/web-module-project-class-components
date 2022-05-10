// import React from "react";
// import Todo from "./Todo";

// export default class TodoList extends React.Component {
//   render() {
//     return (
//       <div>
//         <ul>
//           {
//           this.props.todos.map((todo) => {
//             return( <Todo todo={todo} handleToggle={this.props.handleToggle} />)
//           })
//           }
//         </ul>
//       </div>
//     );
//   }
// }

import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              toggleToDo={this.props.toggleToDo}
            />
          );
        })}
      </ul>
    );
  }
}
