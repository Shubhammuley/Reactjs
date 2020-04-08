import React from 'react'
// import './myStyle.css'

//-------------Stylesheet---------------
// function StyleSheet(props) {
//     let className= props.primary ? 'primary':""
//     return (
//         <div>
//             <h1 className={`${className} fontxl`}>StyleSheet</h1>
//         </div>
//     )
// }

//--------------inline styling

const heading= {
    fontSize:'70px',
    color:"greenyellow"
}
function StyleSheet(props) {
   
    return (
        <div>
            <h1 style={heading}>StyleSheet</h1>
        <h1 className='error'>StyleSheet</h1>

        </div>
    )
}


export default StyleSheet
