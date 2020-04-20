import React, { Component,Fragment } from "react";
import Combobox from "./Combobox";
import {
  EuiComboBox,
  EuiButtonEmpty,
  EuiPopover,
  EuiBadge,
  EuiModal,
  EuiModalBody,
  EuiModalHeader,
  EuiModalHeaderTitle,
} from "@elastic/eui";

class ModalBox extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       selectedOptions:[]
    }
  }
  

  selectedOptions=(options)=>{
    const {comboboxCb}=this.props
     this.setState({
       selectedOptions:options
     },()=>{comboboxCb(this.state.selectedOptions)})
  }


  display = () => {
    const { selectedOptions } = this.state;
    if (selectedOptions.length <= 2) {
      return selectedOptions.map((option, index) => {
        return (
          <EuiBadge key={index} iconType="cross" iconSide="right">
            {option.label}
          </EuiBadge>
        );
      });
    } else {
      return (
        <Fragment>
          <p>
            <EuiBadge iconType="cross" iconSide="right">
              {selectedOptions[0].label}
            </EuiBadge>
            <EuiBadge iconType="cross" iconSide="right">
              {selectedOptions[1].label}
            </EuiBadge>
            + {selectedOptions.length - 2}
          </p>
        </Fragment>
      );
    }
  };

  showModal = () => {
    const { callBack, closeModal, comboboxCb } = this.props;
    const modal = (
      <div style={{paddingLeft:'20%'}}>
        <EuiModal onClose={closeModal} style={{ width: "800px" }}>
        <EuiModalHeader>
          <EuiModalHeaderTitle>Combo box in a modal</EuiModalHeaderTitle>
        </EuiModalHeader>
        <Combobox callBack={comboboxCb} optionCb={this.selectedOptions} selectedOptions={this.state.selectedOptions}/>
        <EuiModalBody></EuiModalBody>
      </EuiModal>
      </div>
    );
    callBack(modal);
  };
  render() {

   
    return (
      <div>
        <EuiButtonEmpty
          onClick={this.showModal}
          iconType="plusInCircle"
          iconSide="right"
        >
          {this.display()}
        </EuiButtonEmpty>
      </div>
    );
  }
}

export default ModalBox;
