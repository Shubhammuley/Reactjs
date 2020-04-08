import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.handler("Child function")}>Greet parent</button>
        </div>
    )
}

export default ChildComponent
