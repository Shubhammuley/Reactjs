import React, { Component } from 'react'


class Clock extends Component {

    constructor(props) {
        super(props)
    
        this.state = { 
            time: new Date() 
         }
  }
  componentDidMount(){
    setInterval(()=>{
        this.setState({time: new Date()})
    },1000)
    
}
    // clock(){
    //     setInterval(()=>{
    //         this.setState({time: new Date()})
    //     },1000)
    // onLoad={()=>this.clock()}}
    render() {
        return (
            <div >
                <h1>Time</h1>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock
