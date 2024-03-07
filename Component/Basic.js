import React from 'react';
import ReactDOM from 'react-dom';


export default class Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:{
        name:"dummy",
        followers:0,
        avatar_url:"https://plus.unsplash.com/premium_photo-1709311449587-bd808717181c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
      }
    };
    console.log("constructor")
  }
async componentDidMount(){
  console.log("didMount")
  const data= await fetch("https://api.github.com/users/warisamir");
  const json =await data.json();
  console.log(json);
  this.setState({
    userInfo:json
  })
}
  render() {
    const {name,followers,avatar_url}= this.state.userInfo;
    debugger;
       return (
      
      <div>
        <h1>Count:</h1>
      <h4>name:{name}</h4>
      <h4>followers:{followers}</h4>
      <img src={avatar_url}/>
      </div>
    );
  }
}