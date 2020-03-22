import React from 'react';
import { Route ,Switch } from 'react-router';
import Home from './Pages/Home';
import About from './Pages/About';


function Main(){
    return (
        <div>   
            <Switch>
                <Route component={Home} strict="/"/>
                <Route component={About} strict="/about"/>
            </Switch>
        </div>
    )  
}


export default Main;