import React, { Component } from 'react'
import ClassB from "./ClassB"
import {Provider} from "./Context"

class ClassA extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    shouldComponentUpdate(){
        console.log("updated A")
        return true
    }

    increment=()=>{
       this.setState(ps=>{
           return{count:ps.count+1}
       })
    }
    render() {
        return (
            <div>
                <Provider value={{name:"shuham",
                                 count:this.state.count,
                                  increment:this.increment } }  count={this.state.count} >
                    <ClassB/>
                </Provider>
            </div>
        )
    }
}

export default ClassA
