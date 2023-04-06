import React, {useState} from 'react'
import './register.css'
import app, {auth, provider} from '../../../config'
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"

const Register = () => {
  const auth = getAuth(app);

  const SignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("Succesfull")
    })
   
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    
    <div className='main'>
      <div className='App'>
      <input type={email} placeholder="email" onChange={(e) => setEmail(e.target.value)}></input>
      <input type={[password]} placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
      <button onClick={SignUp}>SignUp</button>
      </div>
    </div>
  )
}

export default Register
