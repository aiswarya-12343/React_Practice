import React, {Component } from 'react';
import ChildComp from './ChildComp';
class ParentComp extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            parentName : 'Hello parent'
        }
        this.greetparent = this.greetparent.bind(this)
    }
    greetparent(child){
        alert(`Hello ${this.state.parentName} from ${child}`)
    }
    render() {
        return (
        <div>
            <ChildComp greetHandler = {this.greetparent} />
        </div>
        )
    }
}
export default ParentComp;