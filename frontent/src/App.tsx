import React, { useContext } from 'react';

import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import AdminPage from './Pages/AdminPage';
import 'C:\\Users\\Mysterious\\ReactNodejs_ts\\frontent\\src\\main.css'
import { myContext } from './Pages/Context';
import Register from './Pages/Register';
function App() {
  const ctx = useContext(myContext)
  return (
    
  
   <BrowserRouter>
     <Navbar />
     <Switch>
       <Route path="/" exact component={HomePage}></Route>
        {
          ctx ? (
            <>
            {ctx.isAdmin ? <Route path='/admin' exact component ={AdminPage}></Route> : null}
            </>
          ) : (
        <>
       <Route path="/login" exact component={Login}></Route>
       <Route path="/register" exact component={Register}></Route>
       </>
        ) 
      }
     </Switch>
   </BrowserRouter>
   
  );
}

export default App;
