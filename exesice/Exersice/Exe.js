import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import ButtonRender from "./Buttons";
// import PopOver from './PopOver'
import DynamicPopOver from "./DynamicPopOver";
import Combobox from "./Combobox";
// import Pagination from './Pagination'
import CustomPagination from "./CustomPagination";
import "ag-grid-community/dist/styles/ag-grid.css";
import "@elastic/eui/dist/eui_theme_light.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import FilterBox from "./FilterBox";
import FlyOut from "./FlyOut";
import ModalBox from './ModalBox'
// import Form from '../EUI/Form'
import {  EuiModal,
  EuiButtonEmpty,
  EuiModalBody,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiOverlayMask} from  "@elastic/eui";

 class Exe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        { headerName: "Id", field: "studentID", minWidth: 10, maxWidth: 100 ,lockPosition:true},
        {
          headerName: "FirstName",
          field: "firstName",
          maxWidth: 200,
          visible: true,
          hide: false,
          
          cellRendererFramework:(params)=>{
          return <EuiButtonEmpty onClick={this.rowClicked}>{params.value}</EuiButtonEmpty>
          },
          cellRendererParams:{
            onClick:this.rowClicked
          }
        },
        {
          headerName: "LastName",
          field: "lastName",
          maxWidth: 200,
          visible: true,
          hide: false,
        },
        {
          headerName: "Rollno",
          field: "rollNo",
          maxWidth: 150,
          visible: true,
          hide: false,
        },
        {
          headerName: "Branch",
          field: "branch",
          maxWidth: 150,
          visible: true,
          hide: false,
        },
        
        { headerName: "tag",
          field: "tag",
          cellRendererFramework: ModalBox,
          cellRendererParams:{
            callBack:this.dispaly,
            closeModal:this.closeModal,
            comboboxCb:this.comboBoxCb,
            SelectedOption:null
          },
          suppressMovable: true,
          suppressNavigable: true,
          editable: false,}
          ,

        {
          headerName: "edit/delete",
          cellRendererFramework: ButtonRender,
          cellRendererParams: {
            refer: this,
            cbFunc: this.deleteCallBack,
          },
          maxWidth: 300,          
          suppressMovable: true,
          suppressNavigable: true,
          editable: false,
        },
      ],

      rowData: [
        {
          studentID: 1,
          firstName: "Hardik",
          lastName: "Motwani",
          rollNo: 5200,
          branch: "IT",
          semester: 8,
          dateOfBirth: "20-02-1998",
          contact: 8488866756,
          email: "hardik.motwani@rapidops.com",
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
          email: "meet.shah@rapidops.com",
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
          email: "darshan.raval@gmail.com",
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
          email: "shahdhairya@gmail.com",
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
          email: "jeenalpatel@gmail.com",
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
          email: "alia.bhatt@rapidops.com",
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
          email: "kabira.vaibhav@gmail.com",
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
          email: "ananya.pandey@gmail.com",
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
          email: "joe.dawson@gmail.com",
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
          email: "kanewilliamson@gmail.com",
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
          email: "hardik.motwani@rapidops.com",
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
          email: "meet.shah@rapidops.com",
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
          email: "darshan.raval@gmail.com",
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
          email: "shahdhairya@gmail.com",
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
          email: "jeenalpatel@gmail.com",
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
          email: "alia.bhatt@rapidops.com",
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
          email: "kabira.vaibhav@gmail.com",
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
          email: "ananya.pandey@gmail.com",
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
          email: "joe.dawson@gmail.com",
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
          email: "kanewilliamson@gmail.com",
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
          email: "hardik.motwani@rapidops.com",
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
          email: "meet.shah@rapidops.com",
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
          email: "darshan.raval@gmail.com",
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
          email: "shahdhairya@gmail.com",
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
          email: "jeenalpatel@gmail.com",
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
          email: "alia.bhatt@rapidops.com",
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
          email: "kabira.vaibhav@gmail.com",
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
          email: "ananya.pandey@gmail.com",
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
          email: "joe.dawson@gmail.com",
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
          email: "kanewilliamson@gmail.com",
        },
      ],
      context: { componentParent: this },
      frameworkComponents: {
        buttonRender: ButtonRender,
        comboBoxRender: Combobox,
      },
      defaultColDef: {
        sortable: true,
        flex: 1,
        minWidth: 100,
        filter: true,
        resizable: true,
      },

      paginationPageSize: 5,
      isFirstnameHidden: null,
      isLastnameHidden: null,
      isBranchHidden: null,
      isRollNoHidden: null,
      isTagHidden: null,
      PAGE_COUNT: null,
      currentPage: 0,
      flyOut:false,
      tags:{},
      selectedIndex:null,
      isModalVisible:false,
      modal:null
    };
  }

   
//-----------------------------------------------------------------------------------------------------------------------

    static getDerivedStateFromProps(props, state) {
      state.columnDefs[5].cellRendererParams.SelectedOption=state.tags
      return null
    }

  
  //-----------------------------------------ON GRID READY-----------------------------------------

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    console.log(this.gridColumnApi);

    this.setState({
        PAGE_COUNT:this.gridApi.paginationProxy.totalPages
    })
    
    // this.setState({
    //         isFirstnameHidden:this.gridColumnApi.getColumn('firstName').visible,
    //         isLastnameHidden:this.gridColumnApi.getColumn('lastName').visible,
    //         isBranchHidden:this.gridColumnApi.getColumn('branch').visible,
    //         isRollNoHidden:this.gridColumnApi.getColumn('rollNo').visible,
    //         isTagHidden:this.gridColumnApi.getColumn('tag').visible,
    //         PAGE_COUNT:this.gridApi.paginationProxy.totalPages,
    //         currentPage:this.gridApi.paginationGetCurrentPage()

    // })
    // console.log("--->"+this.gridApi.paginationGetRowCount())
    // console.log(this.gridApi.paginationProxy.totalPages)
  };


  //-----------------------ON DRAG STOP ------------------------------------------
  
  updated = () => {
    const newDef = this.state.columnDefs.map((column) => {
      if (column.visible) {
        column.hide = !this.gridColumnApi.getColumn(column.field).visible;
      }
      return column;
    });

    this.setState({
      columnDefs: newDef,
    });
    //     this.setState({
    //         isFirstnameHidden:this.gridColumnApi.getColumn('firstName').visible,
    //         isLastnameHidden:this.gridColumnApi.getColumn('lastName').visible,
    //         isBranchHidden:this.gridColumnApi.getColumn('branch').visible,
    //         isRollNoHidden:this.gridColumnApi.getColumn('rollNo').visible,
    //         isTagHidden:this.gridColumnApi.getColumn('tag').visible,

    // })
  };

 
//------------------------------DELETE CALLBACK-----------------------------

  deleteCallBack = () => {
    const selectedNode = this.gridApi.getSelectedNodes();
    const index = selectedNode[0].id;
    const updatedArray = this.state.rowData;

    updatedArray.splice(index, 1);

    this.setState({
      rowData: updatedArray,
    });
    this.gridApi.setRowData(updatedArray);
  };

// ------------------------------------------PAGE SIZE CALLBACK-------------------------------

  callBack = (pageSize) => {
      this.gridApi.paginationSetPageSize(pageSize)
      this.setState((prevs) => {
      return {
         PAGE_COUNT: this.gridApi.paginationProxy.totalPages,
         paginationPageSize: pageSize || prevs.paginationPageSize,
         currentPage: this.gridApi.paginationGetCurrentPage(),
      };
     });
  };

  //-----------------------ON PAGINATION CHANGE OR UPDATED------------------------------------------
  
  changed = () => {
    if (this.gridApi === undefined) {
    } else {
      this.setState((prevs) => {
        return {
          currentPage: this.gridApi.paginationGetCurrentPage(),
          PAGE_COUNT: this.gridApi.paginationProxy.totalPages,
        };
      });
    }
  };

  //----------------------------DYNAMIC POP OVER ----------------------------------------

  dynamicPopoverCb=(index)=>{
      const {columnDefs} = this.state;
      const {field,hide}= columnDefs[index]
      columnDefs[index].hide=!hide;
      this.setState({
          columnDefs:columnDefs
      },()=>{
          this.gridColumnApi.setColumnVisible(field, hide);
          this.gridApi.sizeColumnsToFit();
        })
            
  }

//---------------------------FILTER CALLBACK--------------------------------------------

  filterCallback=(value)=>{
    this.gridApi.setQuickFilter(value)
  }

//-------------------------------GO TO PAGE CALLBACK-----------------------------------

  goToPageCb=(pageNumber)=>{
    this.gridApi.paginationGoToPage(pageNumber)

  }
//---------------------------------------ROW Clicked----------------------------------

 rowClicked=()=>{
   
  this.selectedRow = this.gridApi.getSelectedRows();
  const selectedNode = this.gridApi.getSelectedNodes();
  const index = selectedNode[0].id;
  console.log(this.gridApi.getSelectedNodes())
  console.log(this.gridColumnApi)
  
   
  this.setState({
    selectedIndex:index,
    flyOut:true
  })
   
 }

 //-----------------------------------FlyOut------------------------------------------------

  flyOut=()=>{
     
    let {tags,selectedIndex}=this.state
    if(selectedIndex===null){
      tags=[]
    }
    else{
      tags=tags[selectedIndex]||[]
    }
    if(this.state.flyOut){
      return (<FlyOut  selectedRow={this.selectedRow} index={this.selectedIndex} tags={tags} callBack={this.flyOutCb}/>)
    }
  }
  
//----------------------------------FlyOut callback--------------------------------
 
 flyOutCb=()=>{
  this.setState({
    flyOut:false
  })
 }
 //--------------------------------combobox callback-------------------------------------

  comboBoxCb=(selectedData)=>{
    const selectedNode = this.gridApi.getSelectedNodes();
    const index = selectedNode[0].id;

    const {tags}=this.state
    tags[index]=selectedData    

  //  const {rowData}=this.state

  //  rowData[index].tags=selectedData
  //  console.log(rowData[index])
  //  this.setState({
  //    rowData:rowData
  //  })
   console.log(tags)
    
  }
  //---------------------------------DisplayModal------------------------------------------

//   displayModal=()=>{
//     const {isModalVisible}=this.state
//     if(isModalVisible){
//      return(
         
       
//       <div style={{paddingLeft:"20%" }}>
//           <EuiModal onClose={this.closeModal} style={{ width: '800px' }}>
//           <EuiModalHeader>
//           <EuiModalHeaderTitle>Combo box in a modal</EuiModalHeaderTitle>
//           </EuiModalHeader>
//           <div style={{paddingLeft:"20%" }}><Combobox callBack={this.comboBoxCb} /></div>
//           <EuiModalBody>
          
//           </EuiModalBody>
//           </EuiModal>
          
//        </div>
        
//      )
//     }
//   }

//   //-----------------------------------------ShowModal----------------------------------------
//     showModal=()=>{
//       this.setState({
//         isModalVisible:true
//       })
//     }
// //--------------------------------------------CloseModal--------------------------------------
   
  closeModal=()=>{
    this.setState({
      isModalVisible:false
    })
    
  
  }

  // ----------------------------------modal-----------------------------------------------

  dispaly=(modal)=>{
   
    this.setState({
      isModalVisible:true,
      modal:modal
    })
  }

  show=()=>{

    const {isModalVisible,modal}=this.state
    if(isModalVisible){
      return modal
    }
  }
  // -------------------------------- RENDER--------------------------------------------------

  render() {
    const {
      rowData,
      columnDefs,
      context,
      defaultColDef,
      frameworkComponents,
      paginationPageSize,
      PAGE_COUNT,
      currentPage,
    } = this.state;

    return (
      <div>
        {this.flyOut()}
        <FilterBox  cbFunc={this.filterCallback} />
        {/* <Pagination gridApi={this.gridApi} cbFunc={this.callBack}/> */}
        <div>
          {/* <PopOver columns={[
                         {column_name:'firstName',visibilty:this.state.isFirstnameHidden,field:"isFirstnameHidden"},
                         {column_name:'lastName',visibilty:this.state.isLastnameHidden,field:'isLastnameHidden'},
                         {column_name:'branch',visibilty:this.state.isBranchHidden , field:'isBranchHidden'},
                         {column_name:'rollNo',visibilty:this.state.isRollNoHidden , field:'isRollNoHidden'},
                         {column_name:'tag',visibilty:this.state.isTagHidden , field:'isTagHidden'},]} 
                         refer={this}
                         /> */}

          <DynamicPopOver columnDefs={this.state.columnDefs} popOverCb={this.dynamicPopoverCb} />

        </div>
        <div
          className="ag-theme-alpine"
          style={{
            height: "60vh",
            width: "100%",
          }}
        >
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
              // suppressDragLeaveHidesColumns={true}
              // onRowClicked={this.rowClicked}
              // onRowDoubleClicked={this.rowClicked}
            />

            <CustomPagination
              pageSize={paginationPageSize}
              PAGE_COUNT={PAGE_COUNT}
              activePage={currentPage}
              goToPageCb={this.goToPageCb}
              cbFunc={this.callBack}
            />

        {/* {this.displayModal()} */}
            {this.show()}
          </React.StrictMode>
          {/* <Form /> */}
        </div>
      </div>
    );
  }
}

export default Exe;