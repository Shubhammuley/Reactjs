import React, { Component } from 'react'
import { UserConsumer} from "./userContext"

 class ComponentC extends Component {
    render() {
        return (
            <div>
              <UserConsumer>
                  {
                      (value)=>{
                        return <h1> hello {value} </h1>
                      }
                  }
              </UserConsumer>
            </div>
        )
    }
}

export default ComponentC
