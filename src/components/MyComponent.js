import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  render() {
    const myInfor = ["ab", "b", "c"];
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor name="QNM" age="19" />
        <hr></hr>
        <DisplayInfor name={"Bin"} age={26} myInfor={myInfor} />
      </div>
    );
  }
}

export default MyComponent;
