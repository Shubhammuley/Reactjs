import React, { Component } from 'react'
import ChildCounter from "./ChildCounter"

import UpdatedComponent from './withCounter'


class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             time:"12/20/10"
        }

        console.log("Constructor Parent")
    }
   
    static getDerivedStateFromProps(props,state){
        console.log("lifecycle A static");
        console.log(state)

        // this.setState({time: new Date()})
        state.time=new Date()
    
        return null
    }

    componentDidMount(){

        setInterval(()=>{
            this.setState({time: new Date()})
        },1000)
       console.log("mounted")

      
    }
  
    
    increment(){
        // ++ this.state.count 
        //  console.log(this.state.count);

        this.setState({
            count: ++this.state.count
        },()=>{console.log("callback value  "+this.state.count)})
        

    //     this.setState(prevState=>({
    //         count: prevState.count + 1
    //     }),()=>{console.log("callback value  "+this.state.count)})

        console.log(this.state.count);
         
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    
    }

    render() {
    //    console.log(this.state.time)
        console.log("render parent")
        
        return (
            // <div>
            //     <div>Parent Count -> {this.state.count}</div>
            //     <button onClick={()=>this.increment()}>Parent Increment</button>
            //     <ChildCounter time={this.state.time.toLocaleTimeString()}/>
            // </div>
            <div>
                <button onClick={this.props.increment}>Click count= {this.props.count}</button>
            </div>
        )
    }
    
}

export default UpdatedComponent(Counter)
