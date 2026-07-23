import React from "react";

class DisplayInfor extends React.Component {
  render() {
    const { listUsers } = this.props;
    console.log(listUsers);

    return (
      <div>
        {listUsers.map((user, index) => {
          return (
            <div key={user.id}>
              <div>My name is {user.name}</div>
              <div>My age is {user.age}</div>
              <hr></hr>
            </div>
          );
        })}

        {/* <div>My name is {name}</div>
        <div>My age is {age}</div>
        <hr></hr> */}
      </div>
    );
  }
}

export default DisplayInfor;
