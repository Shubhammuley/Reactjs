import { EuiPopover, EuiButtonIcon, EuiButtonEmpty } from "@elastic/eui";

import React, { Component } from "react";

class DynamicPopOver extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopoverOpen: false,
      button: (
        <EuiButtonIcon
          className="btn"
          onClick={this.onButtonClick}
          iconType="gear"
          aria-label="Next"
        />
      ),
    };
  }

  onButtonClick = () => {
    this.setState({
      isPopoverOpen: !this.state.isPopoverOpen,
    });
  };

  closePopover = () => {
    this.setState({
      isPopoverOpen: false,
    });
  };

  columnHide = (index) => {
    const { popOverCb } = this.props;
    popOverCb(index);
  };

  render() {
    const { columnDefs } = this.props;

    const { button, isPopoverOpen } = this.state;

    return (
      <div>
        <EuiPopover
          button={button}
          isOpen={isPopoverOpen}
          closePopover={this.closePopover}
          style={{
            float: "right",
          }}
        >
          {columnDefs.map((column, index) => {
            if (column.visible) {
              return (
                <div key={index}>
                  <EuiButtonEmpty
                    key={index}
                    iconType={column.hide ? "eyeClosed" : "eye"}
                    iconSide="left"
                    className="btn"
                    onClick={() => {
                      this.columnHide(index);
                    }}
                  >
                    {column.headerName}
                  </EuiButtonEmpty>
                </div>
              );
            }
          })}
        </EuiPopover>
      </div>
    );
  }
}

export default DynamicPopOver;

// <PopContent key={index}
//                                     button_hide={column.visibilty}
//                                     column_name={column.column_name}
//                                      field={column.field}refer={refer}
//                                      cbFunc={this.callBack}/>

// columnHide=(columnDef,index)=>{

//  const Callback = this.props
//   const {field ,hide}=columnDef[index]
//   columnDef[index].hide=!hide
//   console.log(hide)

//   Callback(columnDef , field,hide)

// }

// Callback=(columnDef , field,hide)=>{

//   this.setState({
//     columnDefs:columnDef
//   })
//   this.gridColumnApi.setColumnVisible(field, hide)
// }
