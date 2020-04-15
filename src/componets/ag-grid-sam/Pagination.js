import React, { Component } from 'react'

class Pagination extends Component {

    pageSize = (e) => {
        const {gridApi,cbFunc} = this.props
        gridApi.paginationSetPageSize(Number(e.target.value));
        
        cbFunc(Number(e.target.value));
      };


    render() {
        return (
            <div>
                 <div>
            Page Size : 
            <select  onChange={this.pageSize}>
              <option defaultValue="5" >5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>

              
            </select>
            </div>
            </div>
        )
    }
}

export default Pagination
