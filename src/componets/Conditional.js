import React, { Component } from 'react'

class Conditional extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
        
 //------------------------ternary operators--------------------------
 
 
    //    return this.state.isLoggedIn ?(
    //     <div>Welcome User</div>
    //    ):(
    //        <div>Welcome Guest</div>
    //    )

    return this.state.isLoggedIn && <div> Welcome User</div>


 //-------------------------if Else-----------------------
        // let message;
        // if(this.state.isLoggedIn){
        //     // message= <div> Welcome User</div>
        //     message="User"
        // }
        // else{
        //     // message= <div> Welcome Guest</div>
        //     message="Guest"

        // }
        // return(
        //     // <div>{message}</div>
        //     <div> Welcome {message}</div>
        // )


        
        
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             Hello User
        //         </div>
        //     )
        // }
        // else{
        //     return (
        //         <div>
        //             Hello Guest
        //         </div>
        //     )
        // }
    }
}

export default Conditional
