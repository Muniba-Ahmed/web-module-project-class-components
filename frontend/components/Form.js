// import React from "react";

// export default class Form extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       input: "",
//     };
//   }
//   handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log("click add");
//     console.log(this.props);
//     this.props.handleAdd(this.state.input);
//     this.setState({
//       input: "",
//     });
//   };

//   handleChange = (e) => {
//     this.setState({
//       ...this.state,
//       input: e.target.value,
//     });
//   };
//   render() {
//     console.log(this.state.input);
//     return (
//       <div>
//         <form>
//           <input
//             onChange={this.handleChange}
//             type="text"
//             name="name"
//             value={this.state.input}
//           />
//           <button onClick={this.handleSubmit}> Add </button>
//         </form>
//       </div>
//     );
//   }
// }

import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      itemText: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      itemText: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props);
    this.props.addToDo(this.state.itemText);
    this.setState({
      itemText: "",
    });
    // this.props.addToDo(e, this.state.itemText);
    // this.setState({
    //   itemText: ''
    // })
  };

  render() {
    // console.log(this.state.itemText)
    return (
      <form>
        <input
          type="text"
          name="name"
          value={this.state.itemText}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}> Add </button>
      </form>
    );
  }
}
