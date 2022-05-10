import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("click add");
    console.log(this.props);
    this.props.handleAdd("cooook");
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  };
  render() {
    console.log(this.state.input);
    return (
      <div>
        <form>
          <input onChange={this.handleChange} />
          <button onClick={this.handleSubmit}> Add </button>
        </form>
      </div>
    );
  }
}
