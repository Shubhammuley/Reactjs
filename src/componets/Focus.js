import React, { Component } from 'react'
import Input from './Input'

 class Focus extends Component {

    constructor(props) {
        super(props)
    
        this.componentRef = React.createRef()
    }
    
    handler=()=>{
        this.componentRef.current.focusInput();
    }
    render() {
        return (
            <div>
              <Input ref={this.componentRef}/>  
              <button onClick={this.handler}>Click</button>
            </div>
        )
    }
}

export default Focus
