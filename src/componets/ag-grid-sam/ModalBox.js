import React, { Component } from 'react'
import Combobox from './Combobox'
import { EuiComboBox ,
    EuiButtonEmpty,
    EuiPopover,
    EuiBadge,
    EuiModal,
    EuiModalBody,
    EuiModalHeader,
    EuiModalHeaderTitle,} from "@elastic/eui";
class ModalBox extends Component {

    showModal=()=>{
      const {callBack} = this.state
      const modal= (
        <EuiModal onClose={this.closeModal} style={{ width: '800px' }}>
        <EuiModalHeader>
          <EuiModalHeaderTitle>Combo box in a modal</EuiModalHeaderTitle>
        </EuiModalHeader>
        <Combobox />
        <EuiModalBody>
        
        </EuiModalBody>
      </EuiModal>
      );
      callBack(modal)
      
    }
    render() {
        return (
            <div style={{paddingLeft:'25%'}}>
  
            <EuiButton onClick={this.showModal}>Show modal</EuiButton>
          
            </div>
        )
    }
}

export default ModalBox
