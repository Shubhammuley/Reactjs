import React, { Component } from 'react'
// import UpdatedComponent from './withCounter'


 class HoverCounter1 extends Component {
   

    render() {
        return (
            <div>
                <h2 onMouseOver={this.props.increment}>Hovered  {this.props.count} times</h2>
            </div>
        )
    }
}

export default HoverCounter1
