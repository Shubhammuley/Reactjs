import React, { Component } from 'react'
import Frinput from "./Frinput"

class Parinput extends Component {

    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }
    handle=()=>{
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                 <Frinput ref={this.inputRef}/>
                 <button onClick={this.handle}>Click</button>
            </div> 
        )
    }
}

export default Parinput
