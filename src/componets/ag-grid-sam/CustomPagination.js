import React, { Component } from 'react'
import {
    EuiButtonEmpty,
    EuiContextMenuItem,
    EuiContextMenuPanel,
    EuiFlexGroup,
    EuiFlexItem,
    EuiPagination,
    EuiPopover,
  } from '@elastic/eui';
  
class CustomPagination extends Component {
    
    constructor(props) {
       
        super(props)
        let {activePage}=props
        this.state = {
                isPopoverOpen:false,
                activePage:activePage
        }
    }
    
   
    goToPage = pageNumber =>{
       const {gridApi}=this.props
        
        this.setState({
            activePage:pageNumber
        })
     gridApi.paginationGoToPage(pageNumber)
        console.log(pageNumber)
    } 
   onButtonClick = () => {
       this.setState(prevs=>{
           return {isPopoverOpen:!prevs.isPopoverOpen}
       })
       

   }
   closePopover = (value) => {
       const {gridApi,cbFunc}=this.props
       gridApi.paginationSetPageSize(Number(value));
       cbFunc(Number(value));
       this.setState({isPopoverOpen:false})
   }

    
    render() {
         const {pageSize, PAGE_COUNT}=this.props
         let {isPopoverOpen,activePage}=this.state
            console.log(" pagesize---->"+pageSize)
         const items = [
           <EuiContextMenuItem
              key="all"
              icon="empty"
              onClick={() => {
                this.closePopover();
                
              }}>
              all rows
            </EuiContextMenuItem>,
            <EuiContextMenuItem
              key="4 rows"
              icon={pageSize==4? "check" : "empty" }
              onClick={() => {
                this.closePopover("4");
                
              }}>
              4 rows
            </EuiContextMenuItem>,
            <EuiContextMenuItem
              key="5 rows"
              icon={pageSize==5? "check" : "empty" }
              onClick={() => {
                this.closePopover("5");
                
              }}>
              5 rows
            </EuiContextMenuItem>,
            <EuiContextMenuItem
              key="6 rows"
              icon={pageSize==6? "check" : "empty" }
              onClick={() => {
                this.closePopover("6");
                
              }}>
              6 rows
            </EuiContextMenuItem>,
            <EuiContextMenuItem
              key="7 rows"
              icon={pageSize==7? "check" : "empty" }
              onClick={() => {
                this.closePopover("7");
            
              }}>
              7 rows
            </EuiContextMenuItem>,
            <EuiContextMenuItem
            key="8"
            icon={pageSize==8? "check" : "empty" }
            onClick={() => {
              this.closePopover("8");
            }}>
            8 rows
          </EuiContextMenuItem>,
          ];
        
          const button = (
            <EuiButtonEmpty
              size="s"
              color="text"
              iconType="arrowDown"
              iconSide="right"
              onClick={this.onButtonClick}>
              Rows per page: {pageSize || "All"}
            </EuiButtonEmpty>
          );
        
        return (
            <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
            <EuiFlexItem grow={false}>
            <EuiPopover
            button={button}
            isOpen={isPopoverOpen}
            closePopover={this.closePopover}>
           {items.map((item,index)=>{
             return (
               <div key={index}>
                 {item}
               </div>
             )
           })}

            
        </EuiPopover>
            
            </EuiFlexItem>
      
            <EuiFlexItem grow={false}>
              <EuiPagination
                pageCount={PAGE_COUNT}
                activePage={activePage}
                onPageClick={this.goToPage}
              />
            </EuiFlexItem> 
          </EuiFlexGroup>
        
        )
    }
}

export default CustomPagination
