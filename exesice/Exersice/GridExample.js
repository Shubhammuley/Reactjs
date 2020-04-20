
import React, { Component } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class GridExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {   field: 'id',
            
            
          },
          {
              field:'userId',
             
          },
          {field:'title'},
          {field:'body'}
      
      ],
     
      defaultColDef: {
       
        enablePivot: true,
        enableValue: true,
        sortable: true,
        resizable: true,
        filter: true,
        flex: 1,
        minWidth: 100,
      },
      rowSelection: 'multiple',
      pivotPanelShow: 'always',
      paginationPageSize: 10,
     
      rowData: [],
    };
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const httpRequest = new XMLHttpRequest();
    const updateData = data => {
      this.setState({ rowData: data });
      params.api.paginationGoToPage(0);
    };

    httpRequest.open(
      'GET',
      'https://jsonplaceholder.typicode.com/posts'
    );
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        updateData(JSON.parse(httpRequest.responseText));
      }
    };
  };

  onPageSizeChanged = newPageSize => {
    var value = document.getElementById('page-size').value;
    this.gridApi.paginationSetPageSize(Number(value));
  };

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div className="test-container">
          <div className="test-header">
            Page Size:
            <select onChange={() => this.onPageSizeChanged()} id="page-size">
              <option value="10" selected="">
                10
              </option>
              <option value="100">100</option>
              <option value="500">500</option>
              <option value="1000">1000</option>
            </select>
          </div>
          <div
            id="myGrid"
            style={{
              height: '80vh',
              width: '100%',
            }}
            className="ag-theme-alpine"
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              
              defaultColDef={this.state.defaultColDef}
              rowSelection={this.state.rowSelection}
            
              pagination={true}
              paginationPageSize={this.state.paginationPageSize}
             onGridReady={this.onGridReady}
              rowData={this.state.rowData}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GridExample