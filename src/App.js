import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greet from './componets/Greet'
// import Welcome from './componets/Welcome'
// import Hello from './componets/hello'
// import Message from "./componets/message"
// import Counter from './componets/Counter'
// import Lifecycle from "./componets/LifecycleA"
// import Clock from "./componets/Clock"
// import FunctionClick from './componets/FunctionClick'
// import ClassClick from './componets/ClassClick'
// import Event from './componets/EventBind'
// import Parent from  './componets/ParentComponent'
// import Condition from './componets/Conditional'
// import List from "./componets/List"
// import StyleSheet from './componets/StyleSheet'
// import Form from './componets/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./appStyle.css"
// import style from './appStyle.module.css'
// import Exe from './componets/Exe'
import Todo from './componets/ToDo';
// import Fragment from './componets/Fragment'
// import Table from "./componets/Tables"
// import Pcomp from "./componets/Pcomp"
// import Refs from './componets/Refs'
// import Focus from "./componets/Focus"
// import Focus from "./componets/Parinput"
// import Portal from './componets/PortalDemo'
// import Heros from './componets/Heros'
// import ErrorHandler from './componets/ErrorHandler'
// import Counter from './componets/Counter/ParentCounter'

function App() {
  return (
    <div className="App">
        
        {/* <h1 className='error'>Error</h1>
        <h1 className={style.success}>Success</h1> */}


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

    {/* <Counter /> */}
    {/* <Lifecycle /> */}

    {/* <Clock /> */}

    {/* <FunctionClick /> */}
    {/* <ClassClick /> */}
    {/* <Event /> */}
    {/* <Parent /> */}
    {/* <Condition /> */}
    {/* <List /> */}

     {/* <StyleSheet primary={true}/> */}

     {/* <Form /> */}
     
     {/* <Exe /> */}
     
     {/* <Fragment /> */}
     {/* <Table /> */}
    <Todo />
    {/* <Pcomp /> */}
    {/* <Refs   ></Refs> */}
    {/* <Focus /> */}
    {/* <Portal /> */}

  {/* <ErrorHandler>
    <Heros name="Shubham" />
    </ErrorHandler>
    <ErrorHandler>
    <Heros name="Muley" />
    </ErrorHandler>
    <ErrorHandler>
    <Heros name="Joker" />
    </ErrorHandler> */}
  
   {/* <Counter /> */}

    </div>
  );
}

export default App;
