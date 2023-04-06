
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './login.css'
import app, {auth, provider} from 'src/config';
import { useState } from 'react';

function Login()  {

    const auth = getAuth(app);
    const SignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            alert("Successfull")
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode)
        })
    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

 
    return (
    <div className='main'>
        <div className='App'>
            <input type={"email"}  placeholder= "please enter your email" onChange={(e) => setEmail(e.target.value)}/>
            <input type={"password"} placeholder= "please enter your password" onChange={(e) => setPassword(e.target.value)}/>

            <button onClick={SignIn}>Create Account</button><br></br>
            <button>Sing In</button>
        </div>
    </div>
    )
  };
export default Login;