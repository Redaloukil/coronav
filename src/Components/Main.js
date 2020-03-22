import React from 'react';
import { Route ,Switch } from 'react-router';
import Home from './Pages/Home';
import About from './Pages/About';


function Main(){
    return (
        <div>   
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </Switch>
        </div>
    )  
}


export default Main;