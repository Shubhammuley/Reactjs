import React , {Component } from 'react';


// class Welcome extends Component {
//     render(){
//     return<h1>Welcome {this.props.name}  age-> {this.props.age}</h1>
//     }
// }

//--------destructuring props-------------

class Welcome extends Component {
    render(){
        this.props.name = "Dsadd"
        const {name ,age} = this.props
    return<h1>Welcome {name}  age-> {age}</h1>
    }
}


export default Welcome;


