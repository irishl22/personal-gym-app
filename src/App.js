import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import AddMove from './components/AddMove/AddMove'
import CreateWorkout from './components/CreateWorkout/CreateWorkout'
import SelectMovement from './components/SelectMovement/SelectMovement'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route path='/dashboard' component={Dashboard}></Route>
          <Route path='/addmove' component={AddMove}></Route>
          <Route path='/createworkout' component={CreateWorkout}></Route>
          <Route path='/selectmovement' component={SelectMovement}></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
