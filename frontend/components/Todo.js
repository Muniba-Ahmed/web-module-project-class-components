// import React from "react";

// export default class Todo extends React.Component {
//   handleClick = () => {
//     // console.log("toggle todo", this.props.todo.id);
//     this.props.handleToggle(this.props.todo.id);
//   };

//   render() {
//     return (
//       <div>
//         <li onClick={this.handleClick}>
//           {this.props.todo.name}{" "}
//           {this.props.todo.completed ? <span>-completed </span> : <span></span>}
//         </li>
//       </div>
//     );
//   }
// }

// {
//   /* <li onClick={this.handleClick}>
//           {this.props.todo.name} {this.props.todo.completed ? "✔️" : ""}
//         </li> */
// }

import React from "react";

export default class Todo extends React.Component {
  handleClick = () => {
    // console.log("handle click", this.props.todo.id);
    this.props.toggleToDo(this.props.todo.id);
  };

  render() {
    return (
      <li onClick={this.handleClick}>
        {this.props.todo.name}{" "}
        {this.props.todo.completed ? <span>-completed </span> : <span></span>}
      </li>
    );
  }
}
