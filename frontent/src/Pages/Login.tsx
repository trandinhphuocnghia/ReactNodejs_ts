import React, { useState } from 'react'
import axios, { AxiosResponse } from 'axios';
export default function Login() {
    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
      axios.post('http://localhost:4000/login', {
          username,
          password
      } , { 
          withCredentials: true
      }).then((res : AxiosResponse ) => {
        if (res.data === "Login success") {
            window.location.href = "/"
        }
      }, () => {
          console.log("Failure")
      })  
    }

    return (
        <div className="styledform">
        <form>
        <h1>Login</h1>  

        <div className ="form-group"> 
        <input className="input" type="text" placeholder='username' onChange={e =>setUsername( e.target.value)} />
        </div>

        <div className="form-group">
        <input className="input" type="password" placeholder='password' onChange={e => setPassword( e.target.value)} />
        </div>

        <button onClick={login}>Login</button>
        </form>
        </div>
        
    )
}
