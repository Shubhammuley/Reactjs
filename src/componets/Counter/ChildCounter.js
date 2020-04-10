import React, { Component } from 'react'

 class ChildCounter extends Component {
     constructor(props) {
         super(props)
         let count=0
         this.state = {
              count:count
         }
         
     }
  


     increment(){
        this.setState({
            count: this.state.count+1
        },()=>{this.props.parentCb(this.state.count)})
        
        // console.log(this.state.count);
        return this.state.count
     }
     
    render() {
        return (
            <div>
               
            </div>
        )
    }
}

export default ChildCounter
