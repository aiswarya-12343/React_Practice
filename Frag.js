import React from 'react'
function Frag(){
    const items = [
        {
            id : 101,
            name:'Aiswarya'
        },
        {
            id:102,
            name:'Yamini'
        }
    ]
    return (
        <div>
            <h1>Hello</h1>
            {
        items.map( item => (
            <React.Fragment key = {item.id}>
                <h1>{item.id}</h1>
                <h2>{item.name}</h2>
            </React.Fragment>
        ))
          }   
        </div>
    )
}
export default Frag