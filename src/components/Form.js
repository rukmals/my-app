import React , {Component} from 'react'

import './style.css'
class Form extends Component{

    constructor(props){
        super(props)
        this.state = {
            confirmpassword:"",
            password : "",
            username : "",
            comments : '',
            topic:'react'
        }

        //this.changeMessage = this.changeMessage.bind(this)
    }
    handleUserNameChange = (event)=>{
        this.setState({
            username:event.target.value
        })
    }

    handleEmailChange = (event)=>{
        this.setState({
            comments:event.target.value
        })
    }

    handlePasswordChange = (event)=>{
        this.setState({
            password:event.target.value
        })
    }
    handleConfirmPasswordChange = (event)=>{
        this.setState({
            confirmpassword:event.target.value
        })
    }
    handleTopicChange = (event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit = (event) =>{
        alert(`${this.state.comments} ${this.state.topic} ${this.state.username}`)
    }
   
    render(){
        return (
            <div>
                <h1>Sign Up</h1>
               <form onSubmit={this.handleSubmit}>
                   <div>
                        <label className='label'>User Name</label>
                        <input className = "input"  type = 'text' value = {this.state.username} onChange ={this.handleUserNameChange}></input>
                   </div>
                   <div>
                       <label className = "label1">Email</label>
                           <input className = "input" value = {this.state.comments} onChange={this.handleEmailChange}></input> 
                   </div>
                   <div>
                       <label className='label2'>Password</label>
                       <input className = "input2" type = 'password' value = {this.state.password} onChange = {this.handlePasswordChange}></input>
                       <label className='label'>Confirm Password</label>
                       <input className = "input1"  type = 'password' value = {this.state.confirmpassword} onChange = {this.handleConfirmPasswordChange}></input>                 
                   </div>
                   <div>
                    </div>
                   

                    <button className = "Button" type="submit">Submit</button>
                  
               </form>
            </div>
            

        )
    }
}

export default Form