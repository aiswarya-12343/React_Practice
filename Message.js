import React,{Component} from 'react';
class Message extends Component{   
    constructor(){
        super();
        this.state = {
             message:'Hello please Subscribe'
        }
        
    } 
    changestate(){
           this.setState({
            message:'Thanks for Subscribing'
           })
    }        
    render(){
        const {message} = this.state
        return(
        <div>
            <h1>{message}</h1>
            <button onClick = {() => this.changestate()}>Subscribe</button>
        </div>
        );
    }
}
export default Message;