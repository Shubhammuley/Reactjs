
import { EuiButtonEmpty, EuiBadge } from "@elastic/eui";
import React, { Component } from "react";

export class EuiBtn extends Component {
  render() {
    const {selectedOptions}=this.props
    console.log("selceete" ,selectedOptions)
    return (
      <div>
        <EuiButtonEmpty
          onClick={this.props.onClick}
          iconType="plusInCircle"
          iconSide="right"
        >
          {/* {display()} */}
        </EuiButtonEmpty>
      </div>
    );
  }
}

export default EuiBtn;


  // const display = () => {
    // const {selectedOptions}=props
    // console.log(selectedOptions)
    //   if(selectedOptions.length <=2 ){
    //     return selectedOptions.map((option,index)=>{
    //       return (<EuiBadge key={index} iconType="cross" iconSide="right">{option.label}</EuiBadge>)
    //     })
    //   }
    //  else{
    //    return (
    //            <Fragment>
    //              <p>
    //              <EuiBadge iconType="cross" iconSide="right">{selectedOptions[0].label}</EuiBadge>
    //              <EuiBadge iconType="cross" iconSide="right">{selectedOptions[1].label}</EuiBadge>
    //               + {selectedOptions.length - 2}
    //             </p>
    //            </Fragment>
    //           )
    //  }