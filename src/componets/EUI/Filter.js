import React, { Component } from "react";
import { EuiButtonIcon,EuiFlexGroup } from "@elastic/eui";
import { ColumnGroup } from "ag-grid-community";
 class Filter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            rows : this.props.rowData
    
    }
    console.log(this.state)
    }
    filter = (e) => {
        console.log('hfvbs')
        let filterDt = this.props.rowData.filter((element) => {
            if(element.name.search(e.target.value) !== -1) {
                return element;
            }
        });
        console.log(filterDt)
        this.setState({
            rows: filterDt,
        },
        () => {
            this.props.filterData(filterDt);
        }     
        )       
    
    
       

        
      };
    render() 
    {
        console.log("rowwww",this.props.rowData)

        return (
            <input
            type="text"
            name="filterField"
            onChange={this.filter}
            className = "search"
          />
        );

    }
}
export default Filter;
