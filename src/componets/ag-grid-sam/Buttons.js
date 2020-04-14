import React, { Component } from 'react'
import {
    EuiButtonIcon
  } from '@elastic/eui';
  


class Buttons extends Component {
   
    
        
    delete=()=>{
         let {refer}=this.props      
         const selectedNode=refer.gridApi.getSelectedNodes();
         const index=selectedNode[0].rowIndex
        //  const selectedData = selectedNode.map(node=>node.data)
         const updatedArray=refer.state.rowData
         updatedArray.splice(index,1)
        //  cbFunc(updatedArray)
         
        refer.setState({
            rowData:updatedArray
        })
        refer.gridApi.setRowData(updatedArray)
                
         
        }
    update=()=>{

    }  
    


    render() {
        return (
            <div>
                {/* <EuiButton>click</EuiButton> */}
                <EuiButtonIcon
                className="btn"
                onClick={this.delete}
                iconType="trash"
                aria-label="Next"
                
                />
                 <EuiButtonIcon
                className="btn"
                onClick={this.update}
                iconType="pencil"
                aria-label="Next"
                
                />
                {/* <button className='btn fa fa-trash' onClick={this.delete}></button> */}
                {/* <button className='btn fa fa-pencil' onClick={this.update}></button> */}

            </div>
        )
    }
}

export default Buttons
