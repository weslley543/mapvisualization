import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard/pages/Inicio'
export default function Routes(){
    return(
       <BrowserRouter>
          <Switch>
            <Route path='/' exact={true} component={Login}/>
            <Route path='/dashboard' component={Dashboard}/>
          </Switch>
       </BrowserRouter>
    )
}