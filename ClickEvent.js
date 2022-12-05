import React,{Component} from 'react';
class ClickEvent extends Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return{
                      count : prevState.count +1
            } 
        }
        )}
        decrementCount = () => {
            this.setState(prevState => {
                return{
                          count : prevState.count -1
                }
            }
            )}
        render(){
            const {count} = this.state
            return(
                <div>
                <button onClick={this.incrementCount}>+</button>
                <input type="text" value={count} ></input>
                <button onClick={this.decrementCount}>-</button>
                </div>

            )
        }
    
}
export default ClickEvent;
