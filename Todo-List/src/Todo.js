import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({todos,deleteHandler}) => {
    return (
        <div >
           {
           todos.map((todo,index) =>
           <div key={index}>
                <h5 className='todo-row'>{todo} &nbsp; <div className='icons'>
        <RiCloseCircleLine 
          onClick={() =>deleteHandler(index)}
          className='delete-icon'
        /></div>
    
        </h5>
                
            </div>
            )
            }
        </div>
    )
}
export default Todo
