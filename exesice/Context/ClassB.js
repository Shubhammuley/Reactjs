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
                <ClassC>{this.props.count}</ClassC>
            </div>
        )
    }
}

export default ClassB
