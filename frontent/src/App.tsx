import React, { useContext } from 'react';

import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import AdminPage from './Pages/AdminPage';
import 'C:\\Users\\Mysterious\\ReactNodejs_ts\\frontent\\src\\main.css'
import { myContext } from './Pages/Context';
import Register from './Pages/Register';
import Footer from './Components/Footer';



function App() {
  const ctx = useContext(myContext)
  return (
    <div className ="Wrapper">
   
   <BrowserRouter>
    <div className = "Header" ><Navbar /></div>
    <div className = "Context">  
     <Switch>
       <Route path="/" exact component={HomePage}></Route>
        {
          ctx ? (
            <div className="app">
            {ctx.isAdmin ? <Route path='/admin' exact component ={AdminPage}></Route> : null}
            </div>
          ) : (
        <div className="app">
       <Route path="/login" exact component={Login}></Route>
       <Route path="/register" exact component={Register}></Route>
       </div>
        ) 
      }
     </Switch>
     </div>
     <div className ="Footer"><Footer/></div>
   </BrowserRouter>
    
   </div>
    
    
  
   
  );
}

export default App;
