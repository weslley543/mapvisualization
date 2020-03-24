import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard/pages/Inicio';
import Mapa from './pages/Dashboard/pages/Mapa';
import Caminhao from './pages/Dashboard/pages/Truck/index';
export default function Routes(){
    return(
       <BrowserRouter>
          <Switch>
            <Route path='/' exact={true} component={Login}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/mapa' component={Mapa}/>
            <Route path='/caminhoes' component={Caminhao}/>
          </Switch>
       </BrowserRouter>
    )
}