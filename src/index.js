import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, HashRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import "./index.css";

import User from "./User";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Register from "./Register";
import Login from "./Login";

const router = (
  <Router>
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              React Routing
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user">Users</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/register">
                <span className="glyphicon glyphicon-user" />
                Register
              </Link>
            </li>
            <li>
              <Link to="/login">
                <span className="glyphicon glyphicon-log-in" />
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/user" component={User} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(router, document.getElementById("root"));
