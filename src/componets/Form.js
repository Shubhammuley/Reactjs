import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comment:'',
             topic:'react'
        }
    }
    
    handle =(event)=>{
        this.setState({
            username: event.target.value
        })
    }
    commentHandler =(event)=>{
        this.setState({
            comment: event.target.value
        })
    }
    topicHandler=(event)=>{
        this.setState({
            topic: event.target.value
        })
    }

    submitHandler= event =>{
        alert(` ${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                <label>Username</label>
                <input
                 type='text'  
                 value={this.state.username}  
                 onChange={this.handle}
                 />
            </div>
            <div>
                <label>Comment</label>
                <textarea 
                value={this.state.comment}
             onChange={this.commentHandler}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.topicHandler}>
                    <option value="react" >React</option>
                    <option value="angular" >Angular</option>
                    <option value="vue" >Vue</option>

                </select>
            </div>
            <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
