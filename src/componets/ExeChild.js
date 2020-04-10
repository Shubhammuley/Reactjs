import React from 'react'

function ExeChild(props) {
    return (
        <React.Fragment>
            <tr>
            <td>
            <form onSubmit={props.edit}>
            <input
                 type='text' 
                 name="firstname"
                   value={props.firstName}  
                 readOnly={true} 
                                  
                 />
             <input
                 type='text'  
                 name='lastname'
                 value={props.lastName} 
                 readOnly={true} 
               />
               

           
            <button type="submit" name="btn" className="btn " value={props.index}>Edit</button>
            <a herf="#" className="btn " onClick={()=>props.delete(props.index)}>Delete</a>
            </form>
            
            </td>
            </tr>
            
        </React.Fragment>
    )
}

export default ExeChild

