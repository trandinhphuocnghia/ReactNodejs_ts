import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../Pages/Context'
import { Logo } from './Logo'
import logoimg from '../public/icon.svg'
import Axios, { AxiosResponse } from 'axios'
import Searchbar from './Searchbar'
export default function Navbar() {
   // this context have the props (myContext is reference for the req.user)
   const ctx =  useContext(myContext)

   const logout = () =>{
    Axios.get("http://localhost:4000/logout", {
        withCredentials : true
    }).then( (res: AxiosResponse) => {
        if(res.data === 'Logout success') {
            window.location.href = '/'
        }

    })
   }

    return (
        <div className="NavContainer">
          <div className="Logo"><Logo src={logoimg}/></div>
          <div className="Searchbar"><Searchbar /></div>
         
          <div className="Link">
           
            { ctx ?
            (
            <>
            
            <Link onClick ={logout} to='/logout' className ="navButton">Logout</Link>
            { ctx.isAdmin ?( <Link to="/adin" className ="navButton">Admin</Link>) : null}
            </>
            ):(
            <>
            <Link to='/login' className ="navButton">Login</Link>
            <Link to='/register' className ="navButton">Register</Link>
            </>
            )}
            <Link to ='/' className ="navButton">Home</Link>
            </div>
        </div>
    )
}
