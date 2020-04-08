import React , {Component } from 'react';


class Message extends Component {
    
    constructor(){
        super();
        this.state={
            message:"Welome visitor",
            name:"Shubahm",
            age:10
        }

    } 

    changeMessage(){
        this.setState({
            message:"Thank you"
        })
    }
    

    render(){
        //------destructuring states
        const {name , age }= this.state
    return(
        <div>
        <h1>{name}  {age}</h1>  
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMessage()}>Subscribe</button>
        </div>
        )
    }
}

export default Message;


