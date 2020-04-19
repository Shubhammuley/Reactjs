import React, { Component } from 'react'
import {
    EuiButtonIcon
  } from '@elastic/eui';
  


class Buttons extends Component {    
  

    render() {
        return (
            <div>
                
                <EuiButtonIcon
                className="btn"
                onClick={()=>this.props.cbFunc()}
                iconType="trash"
                aria-label="Next"
                size="s"
                
                />
                 <EuiButtonIcon
                className="btn"
                onClick={this.update}
                iconType="pencil"
                aria-label="Next"
                
                />
              

            </div>
        )
    }
}

export default Buttons
