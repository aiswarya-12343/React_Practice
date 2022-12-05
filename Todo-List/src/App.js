import React,{useState} from 'react'
import Todo from './Todo'
import './App.css';
const App= () => {
  const [task, setState] = useState("");
  const [todo , setTodo] = useState([])

  const changeHandler= e =>{
    setState(e.target.value)
  }
  const submitHandler = (e) =>{
    e.preventDefault();
    const newList = [...todo,task]
    setTodo(newList);
    setState("")
  }
  const deleteHandler = (indexVal) =>{
    const newList = todo.filter((todos,index) => index!== indexVal);
    setTodo(newList);
  }
  return (
    <div align= "center">
      <div className="card">
        <div className="card-body">
          <h3>Events Todo List</h3><br/>
          <form onSubmit={submitHandler}>
            <input className='input'type="text" placeholder="update your item"value={task} onChange = {changeHandler}></input> 
            <button >Add</button>
          </form>
        </div>
      </div><br/>
      <Todo todos={todo} deleteHandler={deleteHandler}/>
    </div>
  );
}

export default App;
