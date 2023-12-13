import React from "react";
import UserClass from "./UserClass";

class User extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount(){
    // console.log("Parent ComponentDidMount");
  }

  render() {
    // console.log("Parent component render")
    return (
      <div className="user-card">
        <h2>Name: Aditya</h2>
        <h3>Location Mumbai</h3>
        <h3>Age: 21</h3>
        <UserClass/>
      </div>
    );
  }
}

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ 

// React lifecycle for Mounting it has 
// Render Phase 
//   -constuctor call 
//   -render()
// Commit Phase
//   Ui Update

//Parent constructor
//Parent ComponentRender
//   -Child1 constructor
//   -Child1 ComponentRender

//   -Child22 constructor
//   -Child2 ComponentRender

//   DOM is updated  in a single Batch 
//   -Child1 ComponentDidMount 
//   -Child2 ComponentDidMount 

// Parent ComponentDidMount

export default User;
