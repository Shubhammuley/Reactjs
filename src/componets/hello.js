import React from 'react';

const Hello =()=>{
    // With jsx
    // return (
    //     <div className="cls">            
    //     <h1>Hello Shubham</h1>
    //     </div>
    // )
   
    // without jsx
    return React.createElement(
        'div',
        {id:"Hello",className:"cls"},
        React.createElement('h1',null,'Hello Shubahm'))
}
 
export default Hello;