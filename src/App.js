import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './Components/Home';
import Contact from './Components/Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
         <Route path='/home' component={()=><Home/>}/>
         <Route exact path='/contact' component={()=><Contact/>}/>
         <Redirect to="/home" />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
