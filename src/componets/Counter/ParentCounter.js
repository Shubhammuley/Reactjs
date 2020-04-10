import React, { Component } from 'react'
import Child from './ChildCounter'

class ParentCounter extends Component {

    constructor(props) {
        super(props)
        this.state={
            count:0
        }
        this.componentRef = React.createRef()
    }

    callBack = (input)=>{
        this.setState({
            count:input
        })
    }

    
    handle=()=>{
    //  let count=
     this.componentRef.current.increment();
    //  console.log(this.componentRef.current);
    //  console.log(this.componentRef.current.state.count);

     
    //  this.setState({
    //      count:this.componentRef.current.state.count
    //  })
    }

    

    render() {
        
        
        return (
            <div>
                <Child ref={this.componentRef} parentCb={this.callBack} />
                <h1>{this.state.count}</h1>
                <button className="btn" onClick={this.handle}>Increment</button>
            </div>
        )
    }
}

export default ParentCounter
