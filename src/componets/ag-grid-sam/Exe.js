
import React, { Component } from 'react'
import {AgGridReact} from 'ag-grid-react';
import ButtonRender from './Buttons'
import PopOver from './PopOver'
import Combobox from './Combobox'
import Pagination from './Pagination'
import CustomPagination from './CustomPagination'
import 'ag-grid-community/dist/styles/ag-grid.css';
import '@elastic/eui/dist/eui_theme_light.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import FilterBox from './FilterBox'





export class Exe extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          columnDefs: [
                        {headerName:"Id",field:"studentID", minWidth: 10, maxWidth:100},   
                        {headerName:"FirstName",field:"firstName", maxWidth:200},
                        {headerName:"LastName",field:"lastName", maxWidth:200},
                        {headerName:"Rollno",field:"rollNo", maxWidth:150},
                        {headerName:"Branch",field:"branch", maxWidth:150}, 
                        { headerName:"tag",field:'tag',
                          cellRenderer:"comboBoxRender"},                      

                        {
                            headerName: 'edit/delete',
                            cellRendererFramework: ButtonRender ,
                            cellRendererParams:{
                                refer:this,
                                cbFunc:this.callBack
                            } ,maxWidth:300 },
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
            comboBoxRender:Combobox
          },
          defaultColDef: {
                 
            sortable: true,
            flex: 1,
            minWidth: 100,
            filter: true,
            resizable: true,
          },
                   
            paginationPageSize:5,
            isFirstnameHidden:null,
            isLastnameHidden:null,
            isBranchHidden:null,
            isRollNoHidden:null,
            isTagHidden:null,
            PAGE_COUNT:null,
            currentPage:0

     
        };
      }


    

    onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;   
    this.setState({
            isFirstnameHidden:this.gridColumnApi.getColumn('firstName').visible,
            isLastnameHidden:this.gridColumnApi.getColumn('lastName').visible,
            isBranchHidden:this.gridColumnApi.getColumn('branch').visible,
            isRollNoHidden:this.gridColumnApi.getColumn('rollNo').visible,
            isTagHidden:this.gridColumnApi.getColumn('tag').visible,
            PAGE_COUNT:this.gridApi.paginationProxy.totalPages

    })
    console.log("--->"+this.gridApi.paginationGetRowCount())
  
    
    };
    updated=()=>{
        this.setState({
            isFirstnameHidden:this.gridColumnApi.getColumn('firstName').visible,
            isLastnameHidden:this.gridColumnApi.getColumn('lastName').visible,
            isBranchHidden:this.gridColumnApi.getColumn('branch').visible,
            isRollNoHidden:this.gridColumnApi.getColumn('rollNo').visible,
            isTagHidden:this.gridColumnApi.getColumn('tag').visible,

    })
    }


//    callBack=(updatedArray)=>{
//         this.setState({
//             rowData:updatedArray
//         })
//         this.gridApi.setRowData(updatedArray)     
//    }
     
    


    
    callBack=(pageSize)=>{
        this.setState(prevs=>{
            return {
                PAGE_COUNT:this.gridApi.paginationProxy.totalPages,
                paginationPageSize:pageSize || prevs.paginationPageSize,
                currentPage:this.gridApi.paginationGetCurrentPage()
            }
        })
    }    
     
    changed=()=>{
        console.log("pagination")
        // this.setState(prevs=>{
        //       return  {currentPage:this.gridApi.paginationGetCurrentPage() || prevs.currentPage}
        // })
    }
   
     
    render() {
        
        const { rowData
                ,columnDefs,
                context,
                defaultColDef,frameworkComponents,paginationPageSize,PAGE_COUNT,currentPage}=this.state;

        // console.log("render")
        // console.log(this.state.rowData)
        return (
            <div >
               <FilterBox gridApi={this.gridApi} cbFunc={this.callBack} />
              {/* <Pagination gridApi={this.gridApi} cbFunc={this.callBack}/> */}
              <div>
                
                <PopOver columns={[
                         {column_name:'firstName',visibilty:this.state.isFirstnameHidden,field:"isFirstnameHidden"},
                         {column_name:'lastName',visibilty:this.state.isLastnameHidden,field:'isLastnameHidden'},
                         {column_name:'branch',visibilty:this.state.isBranchHidden , field:'isBranchHidden'},
                         {column_name:'rollNo',visibilty:this.state.isRollNoHidden , field:'isRollNoHidden'},
                         {column_name:'tag',visibilty:this.state.isTagHidden , field:'isTagHidden'},]} 
                         refer={this}
                         />
              </div>
             <div  
             className="ag-theme-alpine"
				style={{
					height: '60vh',
                    width: '100%',
                   
                }}>

           
            <React.StrictMode>
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
              onDragStopped={this.updated}
              onPaginationChanged={this.changed}
             
            />
            <CustomPagination pageSize={paginationPageSize} gridApi={this.gridApi} PAGE_COUNT={PAGE_COUNT} activePage={currentPage}cbFunc={this.callBack}/>
           </React.StrictMode> 
            
         
             </div>
            </div>
        )
    }
}

export default Exe



