
import { EuiPopover, EuiButtonIcon ,EuiButton} from '@elastic/eui';

import React, { Component } from 'react'
// import PopContent from './PopoverContent'

class PopOver extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isPopoverOpen: false,
          button:(    
            <EuiButtonIcon
            className="btn"
            onClick={this.onButtonClick}
            iconType="gear"
            aria-label="Next"
            
            />
            )
        };
      }
    
      onButtonClick=()=> {
        this.setState({
          isPopoverOpen: !this.state.isPopoverOpen,
        });
      }
    
      closePopover=()=> {
        this.setState({
          isPopoverOpen: false,
        });
      }

      
      columnHide=(refer,column_name,field)=>{  
        refer.setState(prevs=>{
          return {[field]:!prevs[field]}
        },()=>{refer.gridColumnApi.setColumnVisible(column_name, refer.state[field])})
       
    }
    
   

    
    
    render() {
      const {columns ,refer}=this.props
      const {button , isPopoverOpen} = this.state
        return (
            <div>
            <EuiPopover
            button={button}
            isOpen={isPopoverOpen}
            closePopover={this.closePopover}>
            {
              columns.map((column,index)=>{
                
                return (  <div  key={index}>
                  
                          <EuiButton key={index}
                                      iconType={column.visibilty ?  'eye':'eyeClosed'}
                                     iconSide="left"  
                                     className="btn"
                                     onClick={()=>{this.columnHide(refer,column.column_name,column.field)}}
                                     >
                             {column.column_name}
                          </EuiButton>
                </div>
                )
              })

            }

            
        </EuiPopover>
            </div>
        )
    }
}

export default PopOver


// <PopContent key={index} 
//                                     button_hide={column.visibilty} 
//                                     column_name={column.column_name}
//                                      field={column.field}refer={refer} 
//                                      cbFunc={this.callBack}/>