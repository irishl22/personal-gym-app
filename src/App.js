import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login/Login'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
