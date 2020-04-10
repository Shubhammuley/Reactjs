import React, { Component } from 'react'
import Child from './ExeChild'




class Exe extends Component {

    constructor() {
        super();
       
        this.state = {
          edit:false,
          index:null,
          firstName:[ 'Shubham' ,'muley' ,"abc"],
          lastName:["a","b","bb"]
        };
      }
      

      add=(event)=>{
        let first= [...this.state.firstName , event.target.firstname.value]
        
        let last= [...this.state.lastName,event.target.lastname.value]
        
        
        console.log(first)
        console.log(event.target.firstname.value)
        console.log(event.target.lastname.value)
        event.preventDefault();
        this.setState({
            firstName: first,
            lastName: last
        })

        event.target.firstname.value = '';
        event.target.lastname.value = '';


      }

      edit=(event)=>{
        this.setState({
            edit: true ,
            index: event.target.btn.value      
          });
          event.preventDefault();
    }


    delete=(index)=>{
      let first= this.state.firstName;
      let last = this.state.lastName;

      first.splice(index,1);
      last.splice(index,1)

      this.setState({
        
        firstName: first,
        lastName: last
    })
    }
    update=(event)=>{
        let first= this.state.firstName;
        let last= this.state.lastName
        first[event.target.btn.value]=event.target.updatedFirst.value
        last[event.target.btn.value]=event.target.updatedLast.value

        this.setState({
            edit:false,
            firstName: first,
            lastName: last
        })
        console.log(event.target)
      

        event.preventDefault();
        
        

     
    }

    renderEditForm() {
        if (this.state.edit) {

           let index=this.state.index;
          return <form onSubmit={this.update}>
            <input type="text" name="updatedFirst" className="item" defaultValue={this.state.firstName[index]} />
            <input type="text" name="updatedLast" className="item" defaultValue={this.state.lastName[index]} />

            <button name="btn" value={index} className="update-add-item btn ">Update</button>
          </form>
        }
      }

          


     renderAddForm(){
      if (!this.state.edit){
         return <form onSubmit={this.add}>
          <input type="text" name="firstname"></input>
          <input type="text" name="lastname"></input>
    
          <button className="btn-add-item btn" >add</button>


          </form>
      }
      
     }
    
    render() {
        return (
            <div>
                 {this.renderEditForm()}
                {this.renderAddForm()}
                
                <table align="center" className="table  table-striped ">
                <tbody>
                  
                  {this.state.firstName.map((name, index) => (
                <Child edit={this.edit} firstName={name} key={index} index={index} lastName={this.state.lastName[index]}  delete={this.delete}></Child>
               
                   ))}
                  
                </tbody>
                </table>            
                       
              

              
            </div>
        )
    }
}

export default Exe











