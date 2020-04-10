import React from 'react'
import Columns from "./Columns"

function Tables() {
    const items=[1,2,3,4,5,6,7,8,9]
    return (
        <table className='table '>
            <tbody>
               
               {items.map(item=>(
                   <tr key={item}><Columns key={item} item={item}/></tr>
                ))}
               

               
                                  
            </tbody>
        </table>
    )
}

export default Tables
{/* <React.Fragment key={item}>
                       <td>number</td>
                       <td>{item}</td>
                   </React.Fragment> */}