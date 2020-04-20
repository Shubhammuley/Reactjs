import React, { Component } from 'react'
import { EuiFieldText } from '@elastic/eui';

 class FilterBox extends Component {

    textChange=(e)=> {
        let {cbFunc}=this.props       
        cbFunc(e.target.value);
      }

    render() {
        return (
            
            <div>
                <div style={{paddingLeft:'38%'}}>

                    <EuiFieldText
                    icon="search"
                    placeholder="Enter search value....."
                    // value={value}
                    onChange={e => this.textChange(e)}
                    aria-label="Use aria labels when no actual label is in use"
                
            /></div>
            </div>
        )
    }
}

export default FilterBox
