import React, { Component } from 'react'
// import  RegComp from "./RegCom"
// import  PureComp from "./PureComp"
import Memo from "./MemoComp"

class Pcomp extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Shubham"
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Shubham'
            })
        },2000)
    }
    
    render() {
        console.log("==================Parent==================")
        return (
            <div>
               Parent Component 
               <Memo name={this.state.name} />
               {/* <RegComp name={this.state.name} />
               <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default Pcomp
