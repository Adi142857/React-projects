//For creating class component first extend from React.Component and then 
// use render() method and retuen jsx 
// use constructor for props and this.state for state var
//never update state variables directly using =

import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"asd",
                location:"asdf",
                avatar_url:"htpps:..."
            }
        }
        // console.log("Child constructor")
        //creating state variable
    }

    async componentDidMount(){
        // console.log("Child ComponentDidMount");
        const data=await fetch("https://api.github.com/users/Adi142857");
        const json=await data.json();
        console.log(json);
        this.setState({
            userInfo:{
                name:json.name,
                location:json.location,
                avatar_url:json.avatar_url
            }
        })
    }
    render(){
        const {name,location,avatar_url}=this.state.userInfo;
        // console.log("Child component render")
        return(
            <div>
               <p>{name}</p>
               <p>{location}</p>
               <img src={avatar_url} alt="avatar"/>
            </div>
        )
    }
}

export default UserClass;


// Mounting 
// Constructor(dummy)
// render(dummy)
//     HTML Dummy 

// Component Did Mount 
//     API call 
//     this.setState -> state var updated 

// Update
//     render(API data)
//     HTML api data 
//     componentDidUpdate