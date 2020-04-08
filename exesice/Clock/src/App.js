import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './componets/Greet'
import Welcome from './componets/Welcome'
import Hello from './componets/hello'
import Message from "./componets/message"
import Counter from './componets/Counter'
import Lifecycle from "./componets/LifecycleA"
import Clock from "./componets/Clock"


function App() {
  return (
    <div className="App">


      {/* --------------props component-------------- */}

     {/* <Greet name="Shubham" age="20"><p>this is child</p></Greet>
     <Greet name="Muley" age="21"><button className="btn btn-primary">Action</button></Greet>
     <Greet name="ABC" age="15"/> */}
     

     {/* <Welcome name="Shubham" age="20"/>
     <Welcome name="Muley" age="21"/>
     <Welcome name="ABC" age="15"/> */}

     {/* <Welcome /> */}
     {/* <Hello/> */}
     


    {/* ------------ State component -----------------*/}
     {/* <Message name="shubahm"/> */}

    <Counter />
    {/* <Lifecycle /> */}

    {/* <Clock /> */}

    </div>
  );
}

export default App;
