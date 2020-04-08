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
                //  onChange={()=>props.add(props.index)}
                 />
             <input
                 type='text'  
                 name='lastname'
                   value={props.lastName}  
                //  onChange={props.add} item.id, item.title
                 />

            {/* <input type="submit" value="edit" /> */}
            <div>
            <button type="submit" name="btn" className="btn " value={props.index}>Edit</button>
            </div>
            </form>
            </div>
            <button className="btn " onClick={()=>props.delete(props.index)} >Delete</button>

            
        </div>
    )
}

export default ExeChild

