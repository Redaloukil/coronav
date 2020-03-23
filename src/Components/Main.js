import React from 'react';
import { Route ,Switch} from 'react-router';
import { BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './Common/Navbar';

function Main(props){
    return (
        <div>
            <Navbar/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </BrowserRouter>
        </div>
    )  
}

export default Main;