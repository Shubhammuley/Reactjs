import React, { Component } from 'react'
import ClassC from "./ClassC"


class ClassB extends Component {

    shouldComponentUpdate(){
        console.log("updated B")
        return true
    }
    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <ClassC></ClassC>
            </div>
        )
    }
}

export default ClassB
