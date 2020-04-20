import React, { Component } from 'react'
import {
  EuiFlyout,
  EuiFlyoutHeader,
  EuiFlyoutBody,
  EuiButton,
  EuiText,
  EuiTitle,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFlyoutFooter,
  EuiButtonEmpty,
  EuiBadge
} from '@elastic/eui';


class FlyOut extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      isFlyoutVisible:null,
      
    }
  }
  
  static getDerivedStateFromProps(props, state) {
      state.isFlyoutVisible=true
    return null
  }

  showFlyout=()=>{
    this.setState(
       {isFlyoutVisible:true}
    )
  }

  closeFlyout=()=>{
    this.setState({
      isFlyoutVisible:false
    })

    this.props.callBack();
  }
  // badge=(e)=>{
  //  console.log(e.key)
  // }

  flyout=(flag)=>{
    if (flag) {
      const {selectedRow,tags}=this.props
      const keys=Object.keys(selectedRow[0])
      
      return (
       <EuiFlyout
         onClose={this.closeFlyout}
         size="s"
         aria-labelledby="flyoutSmallTitle">
         <EuiFlyoutHeader hasBorder>
           <EuiTitle size="s">
             <h2 id="flyoutSmallTitle">Description</h2>
           </EuiTitle>
         </EuiFlyoutHeader>
         <EuiFlyoutBody>
           <EuiText>
             { keys.map((key,index)=>{
                 return(
                     <p key={index}><strong>{key}:</strong> {selectedRow[0][key]}</p>
                 )
             })}

             <strong>tags :</strong>
             { tags.map((tag,index)=>{
                return (<EuiBadge key={index}   iconType="cross" iconSide="right">{tag.label}</EuiBadge>) 
             })}
           </EuiText>
           
         </EuiFlyoutBody>
         <EuiFlyoutFooter>
          <EuiFlexGroup justifyContent="spaceBetween">
            <EuiFlexItem grow={false}>
              <EuiButtonEmpty
                iconType="cross"
                onClick={this.closeFlyout}
                flush="left">
                Close
              </EuiButtonEmpty>
            </EuiFlexItem>
            
          </EuiFlexGroup>
        </EuiFlyoutFooter>
       </EuiFlyout>
     );
   }
  }

  render() {
    const {isFlyoutVisible}=this.state
    console.log("Flyout")
    console.log(this.props.tags)
    return (
      <div>
        
          {/* {this .showFlyout()} */}
          {this.flyout(isFlyoutVisible)}
          
        
      </div>
    )
  }
}

export default FlyOut
