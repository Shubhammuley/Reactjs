import React, { Component } from 'react'


class ChildCounter extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
        console.log("Constructor Child")

    }
    
    increment(){
        this.setState({
            count: ++this.state.count
        },()=>{console.log("callback value  "+this.state.count)})
        

         
    }

  
    render() {
        console.log("render child")
        // console.log()
        return (
            <div>
                <div>Child Count -> {this.state.count}</div>
                <button onClick={()=>this.increment()}>Child Increment</button>
                <h1>Time -> {this.props.time}</h1>
            
            </div>
        )
    }
    
}

export default ChildCounter
