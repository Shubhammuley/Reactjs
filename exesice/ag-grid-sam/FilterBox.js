import React, { Component } from 'react'
import { EuiFieldText } from '@elastic/eui';

 class FilterBox extends Component {

    textChange=(e)=> {
        let {gridApi,cbFunc}=this.props
        gridApi.setQuickFilter(e.target.value)
        console.log(gridApi)
        cbFunc();
      }

    render() {
        return (
            
            <div>
                <div style={{paddingLeft:'38%'}}>

                    <EuiFieldText
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
