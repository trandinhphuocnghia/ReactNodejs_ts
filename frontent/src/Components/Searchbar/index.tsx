import React, { useState } from 'react'
import searchicon from 'C:\\Users\\Mysterious\\ReactNodejs_ts\\frontent\\src\\public\\search.svg'
import deleteicon from 'C:\\Users\\Mysterious\\ReactNodejs_ts\\frontent\\src\\public\\delete.svg'
import { Wrapper } from './searchbar.style'
 const  Searchbar = () => {
     const [search,setSearch] = useState('');

    //delete search text
    const Delete = () => {
        setSearch("");
    }

    //input value
    const Userinput = (e:any) =>{
        setSearch(e.target.value)
    }
   return(

   <Wrapper>
          <img className= "search-icon" src={searchicon} />
          <input className= "search" placeholder="Search" type="text" value={search} onChange={Userinput}/>
          <img className= "clear-icon" src={deleteicon} onClick={Delete}/>
      </Wrapper>
   )  
 }
export default Searchbar
