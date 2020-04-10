import React, { Component } from 'react'

class RegCom extends Component {
    render() {

        console.log("regular")
        return (
            <div>
                regular Component {this.props.name}
            </div>
        )
    }
}

export default RegCom
