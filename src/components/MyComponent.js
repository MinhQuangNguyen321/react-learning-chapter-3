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

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        my name is {this.state.name} and i'm {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
