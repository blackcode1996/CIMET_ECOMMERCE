import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../utils/firebase'

const auth = getAuth(app)

const SignUp = () => {
 
    const [input, setInput] = useState({
        name:'', email:'', password: ''
    })

    const handleSubmit=(e)=>{
           e.preventDefault()
           console.log("INPT", input)
      createUserWithEmailAndPassword(auth, input.email, input.password).then((value)=> alert("LogIn SuccesssFully", value))
    }


  return (
    <form action="" onSubmit={handleSubmit} >
        <label>Name</label>
        <input value={input.name} type='text' onChange={(e)=>setInput((prev)=>({...prev,name: e.target.value})) } />
         <label>Email</label>
          <input value={input.email} type='text' onChange={(e)=> setInput((prev)=>({...prev, email:e.target.value }))} />
          <label>Password</label>
          <input value={input.password} type='password' onChange={(e)=> setInput((prev)=>({...prev, password:e.target.value }))} />
          <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default SignUp