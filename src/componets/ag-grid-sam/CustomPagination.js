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
    
        this.state = {
                isPopoverOpen:false,
            
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
         const {pageSize, PAGE_COUNT,activePage}=this.props
         const items = [
            <EuiContextMenuItem
              key="4 rows"
              icon="empty"
              onClick={() => {
                this.closePopover("4");
                
              }}>
              4 rows
            </EuiContextMenuItem>,
            <EuiContextMenuItem
              key="5 rows"
              icon="empty"
              onClick={() => {
                this.closePopover("5");
                
              }}>
              5 rows
            </EuiContextMenuItem>,
            <EuiContextMenuItem
              key="6 rows"
              icon="check"
              onClick={() => {
                this.closePopover("6");
                
              }}>
              6 rows
            </EuiContextMenuItem>,
            <EuiContextMenuItem
              key="7 rows"
              icon="empty"
              onClick={() => {
                this.closePopover("7");
            
              }}>
              7 rows
            </EuiContextMenuItem>,
            <EuiContextMenuItem
            key="8"
            icon="empty"
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
              Rows per page: {pageSize}
            </EuiButtonEmpty>
          );
        
          let {isPopoverOpen}=this.state
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
