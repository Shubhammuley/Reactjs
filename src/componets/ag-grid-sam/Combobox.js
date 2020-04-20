import React, { Component, Fragment } from "react";

import { EuiComboBox ,EuiButtonEmpty,EuiPopover,EuiBadge} from "@elastic/eui";

class Combobox extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      options: [
        {
          label: "A",
        },
        {
          label: "B",
        },
        {
          label: "C",
        },
        {
          label: "D",
        },
        {
          label: "E",
        },
        {
          label: "F",
        },
        {
          label: "G",
        },
        {
          label: "H",
        },
      ],
      selectedOptions: [],
      isPopoverOpen:false,
      display:null
    };
  }
  // componentDidMount=()=>{
  //   const {callBack}=this.props
  //   this.setState({
  //     selectedOptions:[this.state.options[0], this.state.options[1]]
  //   })
  // }
  onChange = (selectedOptions) => {
    const {callBack}=this.props
    this.setState({
      selectedOptions: selectedOptions,
    },()=>{callBack(this.state.selectedOptions)});

  };

  onCreateOption = (searchValue, flattenedOptions = []) => {
    const {callBack}=this.props

    if (!searchValue) {
      return;
    }

    const normalizedSearchValue = searchValue.trim().toLowerCase();

    if (!normalizedSearchValue) {
      return;
    }

    const newOption = {
      label: searchValue,
    };

    if (
      flattenedOptions.findIndex(
        (option) => option.label.trim().toLowerCase() === normalizedSearchValue
      ) === -1
    ) {
      const newOptions=[...this.state.options, newOption]
      console.log(newOptions)
      this.setState({
        options:newOptions
      })
      
    }

    this.setState(prevs=>{
     return {selectedOptions: [...prevs.selectedOptions, newOption],}
    },()=>{callBack(this.state.selectedOptions)});
  };
  
  onButtonClick=()=>{
    this.setState(prevs=>{
       return {isPopoverOpen:!prevs.isPopoverOpen}
    })
  }
  closePopover=()=>{
    this.setState({
      isPopoverOpen:false
    })
  }

  check=()=>{
    const {selectedOptions}=this.state
    if(selectedOptions.length>2){
      return selectedOptions.map(option=>{
         return option
      })
         

    }

  }

  display=()=>{
    const {selectedOptions}=this.state
    if(selectedOptions.length <=2 ){
      return selectedOptions.map((option,index)=>{
        return (<EuiBadge key={index} iconType="cross" iconSide="right">{option.label}</EuiBadge>)
      })
    }
   else{
     return (
             <Fragment> 
               <p>                 
               <EuiBadge iconType="cross" iconSide="right">{selectedOptions[0].label}</EuiBadge>
               <EuiBadge iconType="cross" iconSide="right">{selectedOptions[1].label}</EuiBadge>
                + {selectedOptions.length - 2}
              </p>
                     
             </Fragment>
            )
   }
    
  
  }

 
  render() {
    const {options ,isPopoverOpen, selectedOptions}=this.state
    
   

    return (
           
       <EuiPopover
            ownFocus
            button={
              <EuiButtonEmpty
                iconType="plusInCircle"
                iconSide="right"
                onClick={this.onButtonClick}>
                 {this.display()}
              </EuiButtonEmpty>
            }
            isOpen={isPopoverOpen}
            closePopover={this.closePopover}
            anchorPosition="leftCenter">
                  <EuiComboBox
                placeholder="Select or create options"
                options={options}
                selectedOptions={selectedOptions}
                onChange={this.onChange}
                onCreateOption={this.onCreateOption}
                style={{ width: "700px" }}
                 />
        </EuiPopover>
         
        
      
    );
  }
}

export default Combobox;






