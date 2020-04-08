import React from 'react'
import Person from "./Person"
function List() {

    const names= [' Shubham', "muley" ,"abc"]
    const nameList = names.map((name, index)=><h2 key={index}>{index} {name}</h2>)

    // const persons=[
    //     {
    //         id:1,
    //         name:"Shubham",
    //         age:18
    //     },
    //     {
    //         id:2,
    //         name:"muley",
    //         age:22

    //     },
    //     {
    //         id:3,
    //         name:"abc",
    //         age:20

    //     }
    // ];
    // const personList =persons.map(person=> (<Person key={person.id} person={person}/> ))
    console.log("this is  list" );
    // console.log(personList);
    
    
    
    return (
        <div>
            {nameList}
        </div>
    )
}

export default List
