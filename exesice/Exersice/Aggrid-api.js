import React, { Component } from 'react'
import axios from 'axios'

import {AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import 'ag-grid-community/dist/styles/ag-theme-bootstrap.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';


// [
//     {headerName:'userId',field:'userId',rowGroup:true},
//     {headerName:'id',field:'id'},
//     {headerName:'title',field:'title'},
//     {headerName:'Body',field:'body'}
        
//         ]


class Agrid extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            columnDefs:[
                  {
                    field: 'id',
                    rowDrag: function(params) {
                      return !params.node.group;
                    }
                  },
                  {
                      field:'userId',
                      rowGroup:true
                  },
                  {field:'title'},
                  {field:'body'}
                    
                    ],
                
             rowData:null,
            //  autoGroupColumnDef: {
            //     headerName: "userId",
            //     field: "userId",
            //     cellRenderer:'agGroupCellRenderer',
            //     cellRendererParams: {
            //       checkbox: true
            //     }
            //   },
            defaultColDef: {
                width: 170,
                sortable: true,
                filter: true,
                enableRowGroup: true,
                enablePivot: true,
                enableValue: true,
              },
              paginationPageSize: 10,
              
            
        }
    }

	
    componentDidMount(){       
     axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(res=>{      
                
    //    const keys=  Object.keys(res.data[0]).map(key=>{
    //                 return {headerName:key,field:key}
    //             })

         this.setState({
            //  columnDefs:keys,
             rowData:res.data})
     })
     .catch(err=>{
         console.log(err.message)
         
    })

     
    }
    
    onGridReady=(params)=>{
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    
    }  
    onRowDragMove=(event)=>{
        var movingNode = event.node;
        console.log(movingNode.data)
        var overNode = event.overNode;
        var userId;
        
        if (overNode.group) {
            console.log(overNode.key)
          userId = overNode.key;
        } else {
          userId = overNode.data.userId;
        //   console.log(groupCountry)
        }
        var needToChangeParent = movingNode.userId !== userId;
        if (needToChangeParent) {
          var movingData = movingNode.data;
          movingData.userId = userId;
          this.gridApi.updateRowData({ update: [movingData] });
          this.gridApi.clearFocusedCell();
        }
    }  
    render() {
        return (
            <div 
            className="ag-theme-alpine-dark"
				style={{
					height: '100vh',
					width: '100%'
                }}       
                         >
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                    defaultColDef={this.state.defaultColDef}
                    animateRows={true}
                    // groupDefaultExpanded={this.state.groupDefaultExpanded}
                    onGridReady={this.onGridReady}
                    onRowDragMove={this.onRowDragMove}
                    pagination={true}
                    rowGroupPanelShow={this.state.rowGroupPanelShow}
            pivotPanelShow={this.state.pivotPanelShow}
            enableRangeSelection={true}
            

                    // groupSelectsChildren={true}
                    // autoGroupColumnDef={this.state.autoGroupColumnDef}
                    // // enableColResize="true"
                    // // resizable="true"
                    // rowSelection="multiple"
                />
            </div>
        )
    }
}

export default Agrid
