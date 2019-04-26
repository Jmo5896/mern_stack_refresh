import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// import our components
import CreateTodo from "./components/create-todo.component";
import EditTodo from './components/edit-todo.component';
import TodosList from './components/todos-list.component';

import logo from './firebird-logo-300.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://github.com/Jmo5896" target="_blank">
              <img src={logo} width="30" height="30" alt = "seet logo" />
            </a>
            <Link to="/" className="navbar-brand"> MERN-Stack Todo App</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todo</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
       
          {/* this is our routing paths */}
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
  
}

export default App;
