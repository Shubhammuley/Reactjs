import React, { Component } from 'react'

class RenderProps extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    

    increment=()=>{
        this.setState(ps=>{
            return {count:ps.count+1}
        })
    }
    render() {
        return (
            <div>
                {/* {this.props.render(this.state.count, this.increment)} */}
                {this.props.children(this.state.count, this.increment)}

            </div>
        )
    }
}

export default RenderProps
