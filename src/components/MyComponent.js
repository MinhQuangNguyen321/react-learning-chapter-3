import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "QNM",
    address: "123",
    age: 19,
  };

  render() {
    return (
      <div>
        my name is {this.state.name} and i'm from {this.state.address}
      </div>
    );
  }
}

export default MyComponent;
