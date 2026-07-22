import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "QNM",
    address: "123",
    age: 19,
  };

  handleClick(event) {
    console.log("click me my button");
    console.log("my name is");
  }

  handleOnMouseOver(event) {
    console.log(event.pageX);
  }

  render() {
    return (
      <div>
        my name is {this.state.name} and i'm from {this.state.address}
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;
