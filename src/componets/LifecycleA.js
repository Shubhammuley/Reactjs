import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:"Shubham"
        }
    console.log("lifecycle A");
    
    }

    static getDerivedStateFromProps(props,state){
        console.log("lifecycle A static");
        return null
    }
    componentDidMount(){
        console.log("lifecycle A componentdid")
    }

    shouldComponentUpdate(){
        console.log("lifecycle A shouldComponentUpdate")
        return true
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("lifecycle A getSnapshotBeforeUpdate")
        return null;
        }

    componentDidUpdate(){
        console.log("lifecycle A componentDidUpdate")

        }
    
    changeState(){
     
        this.setState({
            name:"CHANGED"
        })
    }

    render() {
        console.log("lifecycle A render");

        return (
            <div>
                <div>LifecycleA {this.state.name}</div>
                <button onClick={()=>this.changeState()}>Change state</button>
                <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
