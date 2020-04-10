import React, { Component } from 'react'
import ClassD from "./ClassD"
// import Context from './Context'


class ClassC extends Component {
    // static contextType = Context;
    shouldComponentUpdate(){
        console.log("updated C")
        return true
    }
    render() {

        // const {count, increment} = this.context
        
        return (
            <div>
                {/* <button onClick={increment} className="btn">button C clicked {count}</button> */}
                <ClassD />
            </div>
        )
    }
}

export default ClassC
