import React from 'react'

function ExeChild(props) {
    return (
        <div>
            
            <div>
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

           
            <button type="submit" name="btn" className="btn     " value={props.index}>Edit</button>
            <a herf="#" className="btn " onClick={()=>props.delete(props.index)}>Delete</a>
            </form>
            </div>
            

            
        </div>
    )
}

export default ExeChild

import React from 'react'

function ExeChild(props) {
    return (
        <div>
            
            <div>
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

           
            <button type="submit" name="btn" className="btn     " value={props.index}>Edit</button>
            <a herf="#" className="btn " onClick={()=>props.delete(props.index)}>Delete</a>
            </form>
            </div>
            

            
        </div>
    )
}

export default ExeChild

