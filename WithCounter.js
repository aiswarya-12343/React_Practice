import React from 'react'
const WithCounter = OriginalComponent => {
    class WithCounters extends React.Component{
        constructor(props){
            super(props)
            this.state = {  
                count: 0
            }
        }
        incrementCount = () => {
            this.setState(prevState => {
                return {count: prevState.count + 1}
            })
        }
        render() {
            return(
               
            <OriginalComponent name = 'vishwas' count = {this.state.count} incrementCount = {this.incrementCount} />
            
            )

        }
    }
         return WithCounters
}
export default WithCounter