import React from 'react'
import { useContext } from 'react'
import { myContext } from './Context'

export default function Register() {
   // this context have the props (myContext is reference for the req.user)
    const ctx = useContext(myContext)

    return (
        <div>
            
        </div>
    )
}
