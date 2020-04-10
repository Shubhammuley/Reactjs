import React, { Component } from 'react'
import {Consumer} from './Context'

class ClassD extends Component {
    shouldComponentUpdate(){
        console.log("updated D")
        return true
    }
    render() {
        return (
            <div>
                <Consumer>
                    {
                        (value)=>{
                            const {count, increment} = value      
                            
                            return  <button onClick={increment} className="btn">button D clicked {count}</button>
                        }
                    }
                </Consumer>
               
            </div>
        )
    }
}

export default ClassD
