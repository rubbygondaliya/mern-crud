import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Navbar from './components/Navbar';
import Project from './components/Project';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <>
    <BrowserRouter>
        <Navbar />
        <Switch>
        <Route exact path="/" component={RegisterForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/add-project" component={Project} />
        <Route exact path="/project-list" component={List} />
        </Switch>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
