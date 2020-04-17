import React, { Component } from 'react';
import { EuiPopover, EuiButtonIcon } from '@elastic/eui';
import { EuiFlexItem } from '@elastic/eui';

  class Action extends Component {
    constructor(props) {
      super(props)
      this.state = {
        setIsPopoverOpen: false
       // button: <EuiButton iconType="gear" iconSide="right" onClick={this.onButtonClick} ></EuiButton>
      }
    }

onButtonClick = () => {
  console.log(this.state.setIsPopoverOpen)
 this.setState({
   setIsPopoverOpen: !this.state.setIsPopoverOpen
})
console.log(this.state.setIsPopoverOpen)
  }

  closePopover = () => {
    this.setState({
      setIsPopoverOpen: false    })
  }
    //  button = (
    //   <EuiButton iconType="arrowDown" iconSide="right" onClick={onButtonClick}>
    //     Show popover
    //   </EuiButton>
    // );


    render() {
      return(
        <EuiFlexItem grow={false}>
        <EuiPopover
        button = {<EuiButtonIcon iconType="gear" className="btn" iconSide="right" onClick={this.onButtonClick} ></EuiButtonIcon>}
        isOpen=  {this.state.setIsPopoverOpen}
        className="btn"

        closePopover={this.closePopover}
        anchorPosition="upLeft">

          Popover content 


        </EuiPopover>
        </EuiFlexItem>
      )
    }
  }
  export default Action