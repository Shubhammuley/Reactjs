import React, { Component } from 'react'

class ClickCounter1 extends Component {

   
    render() {
        return (
            <div>
                <button onClick={this.props.increment}>Clicked {this.props.count} times</button>            </div>
        )
    }
}

export default ClickCounter1
