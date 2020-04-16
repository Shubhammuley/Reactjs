import React, { Component } from 'react'

export class FilterBox extends Component {

    textChange=(e)=> {
        let {gridApi,cbFunc}=this.props
        gridApi.setQuickFilter(e.target.value)
        cbFunc();
    }

    render() {
        return (
            <div>
                <div><label>Search : </label><input type="text" id="filter-text-box" placeholder="Filter..." onInput={this.textChange}/></div>
            </div>
        )
    }
}

export default FilterBox
