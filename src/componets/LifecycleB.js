import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:"Shubham"
        }
    console.log("lifecycle B");
    
    }

    static getDerivedStateFromProps(props,state){
        console.log("lifecycle B static");
        return null
    }
    componentDidMount(){
        console.log("lifecycle B componentdid")
    }
    
    shouldComponentUpdate(){
        console.log("lifecycle B shouldComponentUpdate")
        return true
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("lifecycle B getSnapshotBeforeUpdate")
        return null

        }

    componentDidUpdate(){
        console.log("lifecycle B componentDidUpdate")

        }

    render() {
        console.log("lifecycle B render");

        return (
            <div>
                LifecycleB {this.state.name}
            </div>
        )
    }
}

export default LifecycleB
