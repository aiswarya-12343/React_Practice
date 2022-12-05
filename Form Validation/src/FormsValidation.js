import React,{useState} from 'react'
import './FormValidation.css';
const FormValidation = () => {
    const [user,setState] = useState({
        uname:"", email:"", phone:"", password:"",cpassword:""
    })
    const [errors, setError] = useState(false)
    
    let name,value;
    const changeHandler = (e) =>{
       name=e.target.name;
       value=e.target.value;
       setState({...user,[name]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(user.uname.length==0 || user.email.length==0 || user.phone.length<10 || user.password.length<8){ 
           setError(true)
        }
        console.log(user)
    }
        return(
            <>
        <form className='form' onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="formInput">
            <div>
               <label className='lab'>UserName:</label>
               <input type ="text" name="uname" value={user.uname} onChange ={changeHandler} placeholder='username' className='input'/><br/>
               {errors && user.uname.length<=0?
                <label className='req'>username is required</label>:"" }
            </div>
            <div>
            <label className='lab'>E-Mail   :</label>
                 <input type ="text" name="email" value={user.email} onChange ={changeHandler} placeholder='email' className='input'/><br/>
                 {errors && user.email.length<=0?
                   <label className='req'>email is required</label>:"" }
            </div>
           <div>
                <label className='lab'>Phone Number:</label>
                <input type ="number" name="phone" value={user.phone} onChange ={changeHandler} placeholder='phone number'className='input'/><br/>
                {errors && user.phone.length<10?
                   <label className='req'>phone number should consist of 10 digits</label>:""}
            </div>
            <div>
                <label className='lab'>Password:</label>
                <input type ="password" name="password" value={user.password} onChange ={changeHandler} placeholder='password' className='input'/><br/>
                {errors && user.password.length<8 ? <label className='req'>password should consist of atlest 8 characters </label> : ""}
            </div>
            <div>
                <label className='lab'>Confirm Password:</label>
                <input type ="password" name="cpassword" value={user.cpassword} onChange ={changeHandler} placeholder='confirm password' className='input'/><br/>
                {user.password !== user.cpassword ?
                    <label className='req'>password does no match</label>:""}
            </div>
            <button>Submit</button>   
            
            </div>
        </form>
        </>
    )
}
export default FormValidation