import React, { Component } from 'react'

 class Refs extends Component {

    constructor(props) {
        super(props)
        this.inputRef=React.createRef();
        this.inputRef1=React.createRef();

        this.cbRef=null;
        this.setCbRef=element=>{
            this.cbRef=element
        }
        
    }
    componentDidMount(){
          this.inputRef.current.focus()
          this.inputRef1.current.focus()


        // console.log(this.inputRef)

        // if(this.cbRef){
        //     this.cbRef.focus()
        // }
    }
    
    handler=()=>{
        // alert(this.inputRef.current.value)
        alert(this.cbRef.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                {/* <input type="text" ref={this.setCbRef}/> */}
                <input  ref={this.inputRef1}/>

                <button onClick={this.handler}></button>
            </div>
        )
    }
}

export default Refs
