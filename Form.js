import React,{Component} from 'react';
class Form extends Component{
     constructor(props){
        super(props);
        this.state = {
            name : '',
            comment : '',
            topic:'React'
        }
     }
     handleNameChange = event => {
        this.setState({
            name : event.target.value
        })
     }
     handleCommentChange = event => {
        this.setState({
            comment : event.target.value
        })
     }
     handleTopicChange = event => {
        this.setState({
            topic : event.target.value
        })
     }
     handleOnSubmit = event => {
        alert(` ${this.state.name} , ${this.state.comment} , ${this.state.topic}`)
     }
     render(){
        return(
            <form onSubmit={this.handleOnSubmit}>
                <div>
                    <lable>User Name</lable>
                    <input type="text"  onChange={this.handleNameChange}/>
                </div>
                <div>
                    <label>Comment</label>
                    <textarea value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                </div>
                <div>
                    <lable>Topic</lable>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
     }
}
export default Form; 
