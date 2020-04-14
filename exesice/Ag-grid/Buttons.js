import React, { Component } from 'react'


class Buttons extends Component {
   
    
        
    delete=()=>{
         let {refer,cbFunc}=this.props      
         const selectedNode=refer.gridApi.getSelectedNodes();
         const index=selectedNode[0].rowIndex
         const selectedData = selectedNode.map(node=>node.data)
         const updatedArray=refer.state.rowData
         arr.splice(index,1)
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
                <button className='btn fa fa-trash' onClick={this.delete}></button>
                <button className='btn fa fa-pencil' onClick={this.update}></button>

            </div>
        )
    }
}

export default Buttons
