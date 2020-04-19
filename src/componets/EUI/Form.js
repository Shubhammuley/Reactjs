import React, { Component } from 'react'
import makeId from '@elastic/eui';


import {
  EuiButton,
  EuiButtonEmpty,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiOverlayMask
} from '@elastic/eui';


class Form extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      isModalVisible:false
        }
        this.componentRef = React.createRef()

  }
  
  
  closeModal=()=>{
    this.componentRef.current.focus();

    console.log("modal closed")
    this.setState({
      isModalVisible:false
    },()=>{console.log(this.state.isModalVisible)})

    // console.log(this.componentRef)
  }
  showModal=()=>{
    console.log("modal opened")

    this.setState({
      isModalVisible:true
    },()=>{console.log(this.state.isModalVisible)})
  }

  render() {
    let modal;
  if (this.state.isModalVisible) {
    modal = (
      <EuiOverlayMask>
        <EuiModal onClose={this.closeModal} initialFocus="[name=popswitch]">
          <EuiModalHeader>
            <EuiModalHeaderTitle>Modal title</EuiModalHeaderTitle>
          </EuiModalHeader>

          <EuiModalBody>
            </EuiModalBody>

          <EuiModalFooter>
            <EuiButtonEmpty onClick={this.closeModal}>Cancel</EuiButtonEmpty>

            <EuiButton onClick={this.closeModal} fill>
              Save
            </EuiButton>
          </EuiModalFooter>
        </EuiModal>
      </EuiOverlayMask>
    );
  }
    return (
      <div  ref={this.componentRef}>
        <EuiButton onClick={this.showModal}>Show modal</EuiButton>

        {modal}
        
      </div>
    )
  }
}

export default Form
