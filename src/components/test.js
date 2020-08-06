import React, { Component } from 'react'



import './stylesheet.css'


class test extends Component {

    constructor(props){
        super(props)
        this.state = {

            //for login data 
            email : "",
            password : "",


            // for signup data 
            username:"",
            emailsignup:"",
            phonenumber:"",
            passwordsignup:"",
            confirmpasswordsignup:"",
            

        }
    }
    handleEmailChange = (event)=>{
        this.setState({
            email:event.target.value
        })
    }
    handleEmailChangeSignUp = (event)=>{
        this.setState({
            emailsignup:event.target.value
        })
    }

    handlePasswordChange = (event)=>{
        this.setState({
            password:event.target.value
        })
    }
    handlePasswordChangeSignUp = (event)=>{
        this.setState({
            passwordsignup:event.target.value
        })
    }
    handleSubmit = (event) =>{
        
        if(this.state.password==="123" && this.state.email==="rukmal@gmail.com"){
            //alert("Succesfully Loggin")
            


        }
    }

    handleSubmitSignUp = (event) =>{
        alert(`${this.state.emailsignup} ${this.state.passwordsignup}`)
    }

    handleChangePage = (event) =>{
        const signUpButton = document.getElementById("signUp")
        const container = document.getElementById("container")
        const signInButton = document.getElementById("signIn")

        signUpButton.addEventListener('click', ()=>{
            container.classList.add("right-panel-active")
        })

        signInButton.addEventListener('click', ()=>{
            container.classList.remove("right-panel-active")
        })
    }
    render() {
        return (
            <div>
                <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                </head>
                    <body>
                        <div class="container" id = 'container'>
                            <div class="form-container sign-up-container">
                                <form onSubmit={this.handleSubmitSignUp}>
                                    <h1>Create Account</h1>
                                    <input type="text" name="fname" placeholder="User Name" value = {this.state.emailsignup} onChange={this.handleEmailChangeSignUp}></input>
                                    <input type="text" name="fname" placeholder="Email"></input>
                                    <input type="text" name="phone" placeholder="Phone Number"></input>
                                    <input type="password" name="password" placeholder="Password" value = {this.state.passwordsignup} onChange = {this.handlePasswordChangeSignUp}></input>
                                    <input type="password" name="confirmpassword" placeholder="ConfirmPassword"></input>
                                    <button> Create Account</button>
                                    <h5>Already have an account! <a class="ghost" id="signIn"><u>Sign In</u></a></h5>
                                </form>
                            </div>
                            <div class="form-container sign-in-container">
                                <form onSubmit={this.handleSubmit}>
                                    <h1 > Login Now</h1>
                                    <input type="email" name="email" placeholder="Email" value = {this.state.email} onChange={this.handleEmailChange}></input>
                                    <input type="password" name="password" placeholder="Password" value = {this.state.password} onChange = {this.handlePasswordChange}></input>
                                    <a href="#" > Forgot Your Password?</a>
                                    <button> Let Me In...</button>
                                    <h5>New to here! <a class="ghost" id="signUp" onClick ={this.handleChangePage} ><u>Sign Up</u></a></h5>
                                </form>
                            </div>
                            <div class="overlay-container">
                                <div class="overlay">
                                    <div class="overlay-panel overlay-left">
                                        <img src="https://www.nacionrex.com/__export/1570213049857/sites/debate/img/2019/10/04/joker_estreno_fbi_vigilancia_redes_sociales_espionaje_2019_crop1570212801819.jpg_423682103.jpg" alt="movie-1" height="480" width="500"/>
                                        
                                    </div>
                                    <div class="overlay-panel overlay-right">
                                        <img src="https://i.pinimg.com/originals/b8/e1/b6/b8e1b67a3f203dac4bc4602339e534a3.jpg" alt="movie-2" height="480" width="500"/>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                        

                    </body>

            </div>
            
                


           
                
        )
    }
}
export default  test