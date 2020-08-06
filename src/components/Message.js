import React , {Component} from 'react'

class Message extends Component{

    constructor(props){
        super(props)
        this.state = {
            message : "Welcome Rukmal"
        }

        //this.changeMessage = this.changeMessage.bind(this)
    }

    changeMessage = () =>{
        this.setState({
            message:'Thanks For Subscribe'
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick = {()=> this.changeMessage()}>SUBSCRIBE</button> */}
                <button onClick = {()=>this.changeMessage()}>SUBSCRIBE</button>
            </div>
            

        )
    }
}

export default Message