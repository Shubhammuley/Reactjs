import React, { Component } from 'react'

import {AgGridReact} from 'ag-grid-react';
import ButtonRender from './Buttons'
import 'ag-grid-community/dist/styles/ag-grid.css';

import 'ag-grid-community/dist/styles/ag-theme-alpine.css';





export class Exe extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          columnDefs: [
                        {headerName:"Id",field:"studentID"},    
                        {headerName:"FirstName",field:"firstName"},
                        {headerName:"LastName",field:"lastName"},
                        {headerName:"Rollno",field:"rollNo"},
                        {headerName:"Branch",field:"branch"},                      
                        {
                            headerName: 'edit/delete',
                            cellRenderer: 'buttonRender',
                            cellRendererParams:{
                                refer:this,
                                cbFunc:this.callBack
                            } },
          ],
          
          rowData:[ {
            studentID: 1,
            firstName: "Hardik",
            lastName: "Motwani",
            rollNo: 5200,
            branch: "IT",
            semester: 8,
            dateOfBirth: "20-02-1998",
            contact: 8488866756,
            email: "hardik.motwani@rapidops.com"
        },
        {
            studentID: 2,
            firstName: "Meet",
            lastName: "Shah",
            rollNo: 5201,
            branch: "CS",
            semester: 8,
            dateOfBirth: "15-05-1999",
            contact: 7982124770,
            email: "meet.shah@rapidops.com"
        },
        {
            studentID: 3,
            firstName: "Darshan",
            lastName: "Raval",
            rollNo: 5202,
            branch: "IT",
            semester: 6,
            dateOfBirth: "12-11-1997",
            contact: 9870912667,
            email: "darshan.raval@gmail.com"
        },
        {
            studentID: 4,
            firstName: "Dhairya",
            lastName: "Shah",
            rollNo: 5203,
            branch: "CS",
            semester: 5,
            dateOfBirth: "10-12-1996",
            contact: 8460556732,
            email: "shahdhairya@gmail.com"
        },
        {
            studentID: 5,
            firstName: "Jeenal",
            lastName: "Patel",
            rollNo: 5204,
            branch: "CS",
            semester: 3,
            dateOfBirth: "18-01-1999",
            contact: 8901265437,
            email: "jeenalpatel@gmail.com"
        },
        {
            studentID: 6,
            firstName: "Alia",
            lastName: "Bhatt",
            rollNo: 5205,
            branch: "IT",
            semester: 8,
            dateOfBirth: "22-06-1998",
            contact: 8460123456,
            email: "alia.bhatt@rapidops.com"
        },
        {
            studentID: 7,
            firstName: "Vaibhav",
            lastName: "Kabira",
            rollNo: 5206,
            branch: "IT",
            semester: 2,
            dateOfBirth: "13-05-1999",
            contact: 9876512344,
            email: "kabira.vaibhav@gmail.com"
        },
        {
            studentID: 8,
            firstName: "Ananya",
            lastName: "Pandey",
            rollNo: 5207,
            branch: "CS",
            semester: 6,
            dateOfBirth: "29-09-1999",
            contact: 8488898765,
            email: "ananya.pandey@gmail.com"
        },
        {
            studentID: 9,
            firstName: "Joe",
            lastName: "Dawson",
            rollNo: 5208,
            branch: "CS",
            semester: 7,
            dateOfBirth: "17-07-1997",
            contact: 9988666756,
            email: "joe.dawson@gmail.com"
        },
        {
            studentID: 10,
            firstName: "Kane",
            lastName: "Williamson",
            rollNo: 5209,
            branch: "IT",
            semester: 4,
            dateOfBirth: "30-03-1997",
            contact: 9867542310,
            email: "kanewilliamson@gmail.com"
        },
        {
            studentID: 1,
            firstName: "Hardik",
            lastName: "Motwani",
            rollNo: 5200,
            branch: "IT",
            semester: 8,
            dateOfBirth: "20-02-1998",
            contact: 8488866756,
            email: "hardik.motwani@rapidops.com"
        },
        {
            studentID: 2,
            firstName: "Meet",
            lastName: "Shah",
            rollNo: 5201,
            branch: "CS",
            semester: 8,
            dateOfBirth: "15-05-1999",
            contact: 7982124770,
            email: "meet.shah@rapidops.com"
        },
        {
            studentID: 3,
            firstName: "Darshan",
            lastName: "Raval",
            rollNo: 5202,
            branch: "IT",
            semester: 6,
            dateOfBirth: "12-11-1997",
            contact: 9870912667,
            email: "darshan.raval@gmail.com"
        },
        {
            studentID: 4,
            firstName: "Dhairya",
            lastName: "Shah",
            rollNo: 5203,
            branch: "CS",
            semester: 5,
            dateOfBirth: "10-12-1996",
            contact: 8460556732,
            email: "shahdhairya@gmail.com"
        },
        {
            studentID: 5,
            firstName: "Jeenal",
            lastName: "Patel",
            rollNo: 5204,
            branch: "CS",
            semester: 3,
            dateOfBirth: "18-01-1999",
            contact: 8901265437,
            email: "jeenalpatel@gmail.com"
        },
        {
            studentID: 6,
            firstName: "Alia",
            lastName: "Bhatt",
            rollNo: 5205,
            branch: "IT",
            semester: 8,
            dateOfBirth: "22-06-1998",
            contact: 8460123456,
            email: "alia.bhatt@rapidops.com"
        },
        {
            studentID: 7,
            firstName: "Vaibhav",
            lastName: "Kabira",
            rollNo: 5206,
            branch: "IT",
            semester: 2,
            dateOfBirth: "13-05-1999",
            contact: 9876512344,
            email: "kabira.vaibhav@gmail.com"
        },
        {
            studentID: 8,
            firstName: "Ananya",
            lastName: "Pandey",
            rollNo: 5207,
            branch: "CS",
            semester: 6,
            dateOfBirth: "29-09-1999",
            contact: 8488898765,
            email: "ananya.pandey@gmail.com"
        },
        {
            studentID: 9,
            firstName: "Joe",
            lastName: "Dawson",
            rollNo: 5208,
            branch: "CS",
            semester: 7,
            dateOfBirth: "17-07-1997",
            contact: 9988666756,
            email: "joe.dawson@gmail.com"
        },
        {
            studentID: 10,
            firstName: "Kane",
            lastName: "Williamson",
            rollNo: 5209,
            branch: "IT",
            semester: 4,
            dateOfBirth: "30-03-1997",
            contact: 9867542310,
            email: "kanewilliamson@gmail.com"
        },{
            studentID: 1,
            firstName: "Hardik",
            lastName: "Motwani",
            rollNo: 5200,
            branch: "IT",
            semester: 8,
            dateOfBirth: "20-02-1998",
            contact: 8488866756,
            email: "hardik.motwani@rapidops.com"
        },
        {
            studentID: 2,
            firstName: "Meet",
            lastName: "Shah",
            rollNo: 5201,
            branch: "CS",
            semester: 8,
            dateOfBirth: "15-05-1999",
            contact: 7982124770,
            email: "meet.shah@rapidops.com"
        },
        {
            studentID: 3,
            firstName: "Darshan",
            lastName: "Raval",
            rollNo: 5202,
            branch: "IT",
            semester: 6,
            dateOfBirth: "12-11-1997",
            contact: 9870912667,
            email: "darshan.raval@gmail.com"
        },
        {
            studentID: 4,
            firstName: "Dhairya",
            lastName: "Shah",
            rollNo: 5203,
            branch: "CS",
            semester: 5,
            dateOfBirth: "10-12-1996",
            contact: 8460556732,
            email: "shahdhairya@gmail.com"
        },
        {
            studentID: 5,
            firstName: "Jeenal",
            lastName: "Patel",
            rollNo: 5204,
            branch: "CS",
            semester: 3,
            dateOfBirth: "18-01-1999",
            contact: 8901265437,
            email: "jeenalpatel@gmail.com"
        },
        {
            studentID: 6,
            firstName: "Alia",
            lastName: "Bhatt",
            rollNo: 5205,
            branch: "IT",
            semester: 8,
            dateOfBirth: "22-06-1998",
            contact: 8460123456,
            email: "alia.bhatt@rapidops.com"
        },
        {
            studentID: 7,
            firstName: "Vaibhav",
            lastName: "Kabira",
            rollNo: 5206,
            branch: "IT",
            semester: 2,
            dateOfBirth: "13-05-1999",
            contact: 9876512344,
            email: "kabira.vaibhav@gmail.com"
        },
        {
            studentID: 8,
            firstName: "Ananya",
            lastName: "Pandey",
            rollNo: 5207,
            branch: "CS",
            semester: 6,
            dateOfBirth: "29-09-1999",
            contact: 8488898765,
            email: "ananya.pandey@gmail.com"
        },
        {
            studentID: 9,
            firstName: "Joe",
            lastName: "Dawson",
            rollNo: 5208,
            branch: "CS",
            semester: 7,
            dateOfBirth: "17-07-1997",
            contact: 9988666756,
            email: "joe.dawson@gmail.com"
        },
        {
            studentID: 10,
            firstName: "Kane",
            lastName: "Williamson",
            rollNo: 5209,
            branch: "IT",
            semester: 4,
            dateOfBirth: "30-03-1997",
            contact: 9867542310,
            email: "kanewilliamson@gmail.com"
        }]
        ,
          context: { componentParent: this },
          frameworkComponents: {
            buttonRender: ButtonRender,
          },
          defaultColDef: {
            sortable: true,
            flex: 1,
            minWidth: 100,
            filter: true,
            resizable: true,
          },
                   
            paginationPageSize:5,
     
        };
      }




    onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // params.api.paginationGoToPage(0);
    };




   callBack=(updatedArray)=>{
        this.setState({
            rowData:updatedArray
        })
        this.gridApi.setRowData(updatedArray)     
   }
   

    textChange=(e)=> {
        // console.log(object)
        console.log(e.target.value)
        this.gridApi.setQuickFilter(e.target.value)
    }
   
      
    render() {

        const {rowData,columnDefs,context,defaultColDef,frameworkComponents,paginationPageSize}=this.state;

        console.log("render")
        console.log(this.state.rowData)
        return (
            <div >
              <div><input type="text" id="filter-text-box" placeholder="Filter..." onInput={this.textChange}/></div>
                
             <div  
             className="ag-theme-alpine"
				style={{
					height: '60vh',
					width: '100%'
                }}>

           
              
               <AgGridReact
              columnDefs={columnDefs}
              rowData={rowData}
              context={context}
              defaultColDef={defaultColDef}
              rowSelection="single"
              frameworkComponents={frameworkComponents}
              pagination={true}
              paginationPageSize={paginationPageSize}
              onGridReady={this.onGridReady}
              enableCellChangeFlash={true}
             
            />
             </div>
            </div>
        )
    }
}

export default Exe



