import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
class ClickCounter extends Component {

  

    
    render() {
        console.log("nmae " + this.props.name);
        
        return (
        <button className='btn' onClick={this.props.increment}>Clicked  {this.props.count} times</button>
        )
    }
}



export default UpdatedComponent(ClickCounter,5)
