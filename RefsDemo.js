import React , {Component} from 'react'
class RefsDemo extends Component {
    constructor(props){
        super(props)
        this.inputRe = React.createRef()
    }
    componentDidMount(){
        this.inputRe.current.focus()
    }
    clickHandler = () => {
        alert(this.inputRe.current.value)
    }
    render(){
        return(
             <div>
                <input type="text" ref={this.inputRe}></input>
                <button onClick = {this.clickHandler}>Click</button>

             </div>
        )
            

        
    }
}
export default RefsDemo;
