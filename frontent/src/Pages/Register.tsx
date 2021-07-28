import axios, { AxiosResponse } from 'axios'
import React, { useState } from 'react'
import { useContext } from 'react'
import { myContext } from './Context'

export default function Register() {
    const [username,setUsername] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [repeatpasswrd,setRepeatpasswrd] = useState<string>("")

    // onClick function
    const Register = () => {
        if ( repeatpasswrd === password ) {
            axios.post("http://localhost:4000/register", {
                username,
                password
            }, {
                withCredentials : true
            }).then( (res : AxiosResponse) => {
                if(res.data === "success") {
                    window.location.href="/login"
                }
            },() =>{
                console.log("Failure")
            })  
        }
        else console.log("Please type your pass again!")
    }

    return (
        <div className="styledform" >
         <form>
            <h1>Register</h1>
            <div className = "form-group">
            <input className = "input" type = "text" placeholder = "username" onChange = {e => setUsername (e.target.value)} />
            </div>
            
            <div className = "form-group">
            <input className = "input" type = "password" placeholder = "password" onChange = { e => setPassword (e.target.value)} /> 
            </div>

            <div className = "form-group">
            <input className = "input" type = "password" placeholder = "password again" onChange = { e => setRepeatpasswrd (e.target.value)} /> 
            </div>

            <button onClick = {Register}>Register</button>
        </form>
        </div>
    )
}
