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
                            const {name ,count, increment} = value      
                            
                            return  <button onClick={increment} className="btn">button D clicked {count} {name} </button>
                        }
                    }
                </Consumer>
               
            </div>
        )
    }
}

export default ClassD
