import React, { Component } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Friends from './Pages/Friends';
import News from './Pages/News';
import Notifications from './Pages/Notifications';

import {
     BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
export default class Content extends Component {
 
    render() {
        return (
            <Router>
            <main className="flex-shrink-0 main-container pb-0">
                    <Switch>
                        <Route exact path="/">
                           <Home></Home>
                        </Route>
                        <Route exact path="/about">
                           <About></About>
                        </Route>
                        <Route exact path="/friends">
                           <Friends></Friends>
                        </Route>
                        <Route exact path="/news">
                           <News></News>
                        </Route>
                        <Route exact path="/notifications">
                           <Notifications></Notifications>
                        </Route>
                    </Switch>
            </main>
          </Router>
            // <main className="flex-shrink-0 main-container pb-0">
            //   <Home></Home>
            // </main>
        )
    }
}