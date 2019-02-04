import React, { Component } from 'react';
import './App.css';
import { Route, Link, HashRouter as Router } from 'react-router-dom';
import Users from './Users.js';
import Search from './Search.js';


class App extends Component {

  render() {
    
    return (
      <div className="App">
      <header>
        <img src="https://www.gotinder.com/images/tinderNewLogo.svg"/>
        </header>
        <Router>
          <div>    
            <Route exact path="/"       component={Search} />
            <Route path="/users" component={Users}/>
           </div>
        </Router>
      </div>
    );
  }
}


export default App;



