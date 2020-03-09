import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from './pages/Inicio';
import Mapa from './pages/Mapa'
export default function Routes(){
    return(
       <BrowserRouter>
          <Switch>
            <Route path='/dashboard' exact={true} component={Dashboard}/>
            <Route path='/mapa' component={Mapa}/>
          </Switch>
       </BrowserRouter>
    )
}