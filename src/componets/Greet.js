import React from "react"


// function Greet(){
//     return<h1> hello muley</h1>
// }

// const Greet = (props) => {
     
//     console.log(props);      
// return (
//         <div>
//         <h1>Hello {props.name} age-->{props.age}</h1>
//         {props.children}
//         </div>
//         )
//     }

// ----------destructuring prop--------------

    // const Greet = ({name, age}) => {
        
    //     console.log(name + age);      
    // return (
    //         <div>
    //         <h1>Hello {name} age-->{age}</h1>
           
    //         </div>
    //         )
    //     }


    const Greet = (props) => {
        
        const {name, age} = props;
        console.log(name + age);      
    return (
            <div>
            <h1>Hello {name} age-->{age}</h1>
           
            </div>
            )
        }


export default Greet;