import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "QNM",
    address: "123",
    age: 19,
  };

  handleClick(event) {
    console.log("click me my button");
    // console.log("random", Math.floor(Math.random() * 100) + 1);

    this.setState({
      name: "NMQ",
      age: Math.floor(Math.random() * 100) + 1,
    });
  }

  handleOnMouseOver(event) {
    console.log(event.pageX);
  }

  render() {
    return (
      <div>
        my name is {this.state.name} and i'm {this.state.age}
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default MyComponent;
