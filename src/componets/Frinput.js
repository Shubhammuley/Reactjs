import React from 'react'

// function Frinput() {
    // return (
    //     <div>
    //         <input></input>
    //     </div>
    // )
// }


const Frinput =React.forwardRef((props ,ref)=>{
    return (
        <div>
            <input ref={ref} />
        </div>
    )
}) 

export default Frinput
